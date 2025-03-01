const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    console.log(startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    }))
}


//Funcion agnostica autoconvocada
// agnostica por que no tiene nombre
// autoconvocada porque la ejecutamos con los parentesis del final
( async() => {
    main()
})()
