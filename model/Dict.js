import {action} from 'easy-peasy'

export default {
    
    username : 'evalia rompas',

    isActive : 'home',
    setActive : action((state, payload)=>{
        state.isActive = payload
    }),

    userdata: [
        {
            id: 1,
            username : "fadliselaz",
            email: "fadliselaz@gmail.com",
            image : "",
            password : "fadliselaz13"
        },
        {
            id: 2,
            username : "evalia",
            email: "evalia@gmail.com",
            image : "",
            password : "evalia13"
        },
        {
            id: 3,
            username : "dedijaya",
            email: "dedijaya@gmail.com",
            image : "",
            password : "dedijaya13"
        }
      
      ]


}