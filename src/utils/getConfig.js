const getConfig=()=>{{
    header:{
        Authorization:`Berer ${localStorage.getItem('token')}` 
    }
}}

export default getConfig