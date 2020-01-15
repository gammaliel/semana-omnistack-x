const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    github_username: String,
    avatar_url: String,
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
    techs: [String],
    name: String,
    bio: String,
})

module.exports = mongoose.model('Dev', DevSchema);