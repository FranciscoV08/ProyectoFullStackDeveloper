import mongoose from 'mongoose'

// Es mi funcion que conecta a la base de datos. Como estamos modularizando necesitamos mandarla al index.
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/pymerndb')
        console.log('>>> DB is conect')
    } catch (error) {
        console.log(error)
    }
};