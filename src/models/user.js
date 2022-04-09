import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    emal:{
        type: String,
        required: true,
        unique: true
    },
    cellphone:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true 
});

export default model('User', userSchema)