import React from 'react'

export default function(Component) {
    return class AuthRoute extends React.Component {

        static async getInitialProps(ctx) {
            let pageProps

            if(Component.getInitialProps){
                pageProps = await Component.getInitialProps(ctx)
            }

            return {...pageProps}
        }

        renderPage() {
            return (
                this.props.userAuth ?
                <Component {...this.props} />
                :
                'Unauthorized'
            )
        }

        render() {
            return this.renderPage()
        }

    }
}