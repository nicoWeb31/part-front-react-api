
    // =========================================================================
    // singunp
    // =========================================================================

    export const signup= (user) =>{
        return fetch("http://localhost:8080/singup",{
            method:'POST',
            headers:{
                Accept : "application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(Response=>{
            return Response.json()
        })
        .catch(err=> console.log(err))
    }

        // =========================================================================
    // singnin
    // =========================================================================

    export const Signin = (user) =>{
        return fetch("http://localhost:8080/signin",{
            method:'POST',
            headers:{
                Accept : "application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(Response=>{
            return Response.json()
        })
        .catch(err=> console.log(err))
    }


        // =========================================================================
    // autheticate(data)
    // =========================================================================

    export const  autheticate = (jwt,next) =>{
        if(typeof window !== undefined){
            //sauvgarge dans le local storage
            localStorage.setItem("jwt",JSON.stringify(jwt));
            next();
        }
    }


// =============================================================================
// is authenticate
// =============================================================================

export const isAuthenticate = () =>{
    if (typeof window == undefined) return false;

    if(localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    }else return false;
}




// =============================================================================
// singout
// =============================================================================

export const signout =(next)=>{
    if(typeof window !== undefined) localStorage.removeItem("jwt");
    next()
    return fetch("http://localhost:8080/singout",{
        method : "get"
    })
    .then(response=>{
        console.log('signout',response)
        return response.json()
    })
    .catch(err=> console.log(err))
}

export const isActive = (history,path)=>{
    if(history.location.pathname === path){
        return {color : "#ff9900"}
    }else{
        return {color :"#ffffff"}
    }
}