import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataAPi } from "./redux/ActionCreation"

const HomeScreen =()=>{
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.data)
  console.log('dffdf',data)
  useEffect(() => {
   dispatch(fetchDataAPi())
  }, [dispatch])
  
  return(
    <div>
     {
      data.map((item)=>{
        return(
          <h1 key={item.id}>{item.name}</h1>
        )
      })
     }
    </div>
  )
}

export default HomeScreen