import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider} from "react-apollo";
import { ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import InfoIcon from './icons/InfoIcon'
import SuccessIcon from './icons/SuccessIcon'
import ErrorIcon from './icons/ErrorIcon'

const dev_uri = 'http://164.90.131.102:7474/graphql/'
// const local_uri = 'http://localhost:7474/graphql/'

const client = new ApolloClient({
    uri: dev_uri,
    fetchOptions: {
        credentials: 'include'
    },
    request: async (operation) => {
        operation.setContext({
            headers: {
                authorization: `Basic bmVvNGo6b21uaQ==`
            }
        });
    },
});

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 10000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}
const alertStyle = {
    backgroundColor: '#17a2b8',
    color: 'white',
    padding: '10px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 2px 2px rgba(0, 0, 0, 0.03)',
    fontFamily: 'Arial',
    width: '500px',
    height: '300px',
    boxSizing: 'border-box'
}

// const buttonStyle = {
//     marginLeft: '20px',
//     border: 'none',
//     backgroundColor: 'blue',
//     cursor: 'pointer',
//     color: '#FFFFFF'
// }
// @ts-ignore
const AlertTemplate = ({ style, options, message, close }) => (
    <div style={{ ...alertStyle, ...style }}>
        {options.type === 'info' && <InfoIcon />}
        {options.type === 'success' && <SuccessIcon />}
        {options.type === 'error' && <ErrorIcon />}
        {message}
        <button onClick={close}>X</button>
    </div>
)

ReactDOM.render(

    <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
            <AlertProvider template={AlertTemplate} {...options}>
            <App />
            </AlertProvider>
        </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById('root'),
);

export default client;