const { Schema, model } = require('mongoose');

const dataSchema = new Schema({
    name: String,
    value: String,
});

module.exports = model('Data', dataSchema);
