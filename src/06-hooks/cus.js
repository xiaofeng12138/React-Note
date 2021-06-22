import {useState,useEffect} from 'react'

const useDataList = (id)=>{
  let [list,setList] = useState()

  useEffect((id)=>{
      setTimeout(() => {
          id === 1 ? setList(['1','2','3']) : setList(['14','24','34'])
      }, 3000);
      return ()=>{

      }
  },[])
  return list
}

export default useDataList