const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const moviesController = {
    create: function (req,res) {
        db.Movies.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then((movie)=> {
            return res.json({
                meta: {
                    status: 200,
                    url: 'api/v1/movies/create'
                },
                data: movie
            })})            
        .catch(error => {
            console.log(error)
            res.status(500).json({mensaje: 'Error de conexion'})
        });
        
    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        db.Movies.destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then((movie)=>{
            return res.json({
                meta: {
                    status: 200,
                    url: 'api/v1/destroy/id'
                },
                data: movie
            })})
        .catch(error => {
            console.log(error)
            res.status(500).json({mensaje: 'Error de conexion'})}) 
    }
}

module.exports = moviesController;