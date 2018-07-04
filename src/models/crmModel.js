import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: { 
        type: String,
        required: 'Engter a first name'
    },
    lastName: { 
        type: String,
        required: 'Engter a last name'
    },
    email: { 
        type: String
    },
    company: { 
        type: String
    },
    phone: { 
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

