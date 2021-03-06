import {Schema, model} from 'mongoose'

const repoSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    html_url:{
        type: String,
        required: true
    },
    full_name:{
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true 
});

export default model('Repo', repoSchema)