import axios from 'axios';

export const registerHandler = async (values) => 
     await axios.post(process.env.REACT_APP_API+'/register', values)




export const loginHandler = async (values) => 
     await axios.post(process.env.REACT_APP_API+'/login', values)

export const currentUser = async (authtoken) => 
     await axios.post(process.env.REACT_APP_API+ '/current-user', {},
          {
               headers: {
                    authtoken,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
               },
               header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
               }

          })

export const currentAdmin = async (authtoken) => 
     await axios.post(process.env.REACT_APP_API+ '/current-admin', {},
          {
               headers: {
                    authtoken,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
               },
               header: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
               }
          })

        