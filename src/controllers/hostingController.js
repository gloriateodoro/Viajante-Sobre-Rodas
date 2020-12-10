const hosting = require("../models/hosting") 
const {request, response} = require("express")
const e = require("express")


/* Mostrar todas as hospedagens por estado */
const getByState = async(request, response) => {

    try{
        hosting.find({state: request.params.state})
        .then(hostingFound =>{
            response.status(200).send({message: "Nesse estado, essas são as opções de hospedagens com acessibilidade: "
            , hostingFound})
        }).catch(e =>{
            response.status(400).send({message: "Infelizmente, ainda não foram cadastradas hospedagens nesse estado!"})
        })
    }catch (error){
        response.status(400).send({message: error.message})
    }

    /*try {
        let hostingFromState = await hosting.find({state: request.params.state});
        if(hostingFromState) {
            response.status(200).send(hostingFromState);
        }else {
            response.status(400).send({ message: "State not found!" })
        }

    
    } catch (error) {
        response.status(400).send({ message: error.message})
    }*/
    
}

const getByCity = async(request, response) =>{
    try{
        hosting.find({city: request.params.city})
        .then(hostingFound =>{
            response.status(200).send({message: "Nessa cidade, essas são as opções de hospedagem com acessibilidade: "
        , hostingFound})
        }).catch(e =>{
            response.status(400).send({message: "Infelizmente, ainda não foram cadastradas hospedagens nessa cidade!"})
        })
    }catch (error){
        response.status(400).send({message: error.message})
    }
    
} 

module.exports = {
    getByState,
    getByCity
}