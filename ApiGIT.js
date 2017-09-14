const axios = require("axios")
const express = require ("express")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/repos/seita-ifce/hello-js-v3/issues/2/comments").then(ret => {

    let listaComentarios = ret.data.filter(comentario => new Date(comentario.created_at) < new Date('2017-09-15') 
    														&& comentario.body.indexOf('hellojs-s03e02') !== -1)

    listaComentarios.forEach(u => {
        console.log(u.user.login + ": " + u.body)
    });

})