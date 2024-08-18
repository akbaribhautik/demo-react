import {FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR} from './ActionType'

export const fetchDataRequest=()=>({
  type:FETCH_DATA_REQUEST
})

export const fetchDataSuccess=(data)=>({
   type: FETCH_DATA_SUCCESS,
   payload:data
})

export const fetchDataError=(error)=>({
type:FETCH_DATA_ERROR,
payload:error     
})

export const fetchDataAPi=()=>{
  return async(dispatch)=>{
    dispatch(fetchDataRequest())
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      dispatch(fetchDataSuccess(data))
    }
    catch(error){
     dispatch(fetchDataError(error))
    }
  }
}