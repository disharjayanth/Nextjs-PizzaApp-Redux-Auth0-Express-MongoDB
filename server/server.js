const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const dev = process.env.NODE_ENV !== 'production'
//NOTE!!!!!! we are creating an instance of next then pass dev as an object as argument
const app = next({
    dev
})
const handle = app.getRequestHandler()

mongoose.connect(process.env.MONGO_SERV, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to DataBase....')
}).catch((err) => {
    console.log(err)
})

//Middleware
const serverAuth = require('./middleware/serverAuth')

//Models
const Pizza = require('./models/Pizza')
const Site = require('./models/Site')
const Message = require('./models/Message')

const robotsOption = {
    root: path.join(__dirname, '../static'),
    headers: {
        'Content-type': 'text/plain;charset=UTF-8'
    }
}

app.prepare()
.then(() => {

    const server = express()
    server.use(bodyParser.json())

    server.get('/robots.txt', (req, res) => {
        return res.status(200).sendFile('robots.txt', robotsOption)
    })

    server.post('/api/v1/pizza', (req, res) => {
        const pizzaData = req.body
        const pizza = new Pizza(pizzaData)

        pizza.save((err, pizza) => {
            if(err) {
                return res.status(422).send(err)
            }
            return res.json(pizza)
        })
    })

    server.get('/api/v1/pizza', (req, res) => {
        Pizza.find({}, (err, allPizzas) => {
            if(err) { 
                return res.status(422).send(err)
            }
            return res.send(allPizzas)
        })
    })

    server.get('/api/v1/pizza/:name', (req, res) => {
        let pizzaName = req.params.name

        Pizza.find({ idName: pizzaName }, (err, pizza) => {
            if(err) {
                return res.status(422).send(err)
            }
            return res.json(pizza)
        })
    })

    server.get('/api/v1/site', (req, res) => {
        Site.find({}, (err, site) => {
            if(err) {
                return res.status(401).send(err)
            }
            return res.json(site)
        })
    })

    server.patch('/api/v1/site', serverAuth.authJWT, (req, res) => {
        let siteData = req.body
        
        Site.find({}, (err, site) => {
            let newSite = site[0]

            newSite.set(siteData)
            newSite.save((err, sites) => {
                if(err) { return res.status(422).send(err) }
                return res.json({ update: 'DONE' })
            })
        })
    })

    server.get('/api/v1/messages', serverAuth.authJWT, (req, res) => {
        Message.find({}, (err, allMessages) => {
            if(err) { return res.status(422).send(err) }
            return res.json(allMessages)
        })
    })

    server.post('/api/v1/messages', (req, res) => {
        const msgData = req.body
        const messages = new Message(msgData)
        messages.save((err, message) => {
            if(err) {
                return res.status(401).send(err)
            }
            return res.json({status: 'DONE'})
        })
    })

    server.delete('/api/v1/messages',serverAuth.authJWT,(req,res)=>{
        let messageId = req.body.id;

        Message.deleteOne({_id:messageId},(err,msg)=>{
            if(err) { return res.status(422).send(err)}

            Message.find({},(err,allMessages)=>{
                if(err) { return res.status(422).send(err)}
                return res.json(allMessages)
            })
        })
    })  
     
    server.get('/pizzas/:id', (req, res) => {
        const actualPage = '/pizzas'
        const queryParams = {
            pizzaName: req.params.id
        }
        app.render(req, res, actualPage, queryParams) // tell nextjs server to render the page with req, res, actualPage and queryParams as arguments.
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    const PORT = process.env.PORT || 3000

    server.listen(PORT, (err) => {
        if(err) throw err
        console.log(`Ready on PORT ${PORT}`)
    })

}).catch((err) => {
    console.log(err)
    process.exit(1)
})