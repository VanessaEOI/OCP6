const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if(!passwordSchema.validate(req.body.password)) {
        res
        .status(400)
        .json({ 
            message : "Mot de passe faible" + passwordSchema.validate('req.body.password', {list: true} )
        })
    } else {
        next();
    }
};