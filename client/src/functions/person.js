import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createPerson = async (formData, authtoken) => 
     await axios.post(process.env.REACT_APP_API+'/person', formData
     , {
        headers: {
            authtoken
        }
     });
    
export const getPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/person'
     , {
        headers: {
            authtoken
        }
     });


export const removePerson = async (id, authtoken) => 
     await axios.delete(`${process.env.REACT_APP_API}/person/${id}`
     , {
        headers: {
            authtoken
        }
     });

export const downloadPerson = async (id, authtoken) => 
     await axios.get(`http://localhost:5000/upload${id}`
     , {
        headers: {
            authtoken
        }
     });
export const fetchPostsBySearch = (searchQuery) => API.get(`/person/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
        try {
          dispatch({ type: START_LOADING });
          const { data: { data } } = await fetchPostsBySearch(searchQuery);
      
          dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
          dispatch({ type: END_LOADING });
        } catch (error) {
          console.log(error);
        }
      };





