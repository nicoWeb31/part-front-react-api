

export const read = (userId, token)=>{


    return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
    )
    .then(resp=>{
        return resp.json()
    })
    .catch(err=>{
        console.error(err)
    })
}


export const list = () =>{

    return fetch(`${process.env.REACT_APP_API_URL}/users`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
            
        }
    }
    )
    .then(resp=>{
        return resp.json()
    })
    .catch(err=>{
        console.error(err)
    })

}