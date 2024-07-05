export const validatorSchema = (schema) => (req, res, next) => {
try {
    schema.parse(req.body);
    next()
} catch (error) {
    // console.log(error.errors.message)
    // Queremos los errores 
    return res.status(400).json({ error: error.errors.map(err => err.message)})
}
}