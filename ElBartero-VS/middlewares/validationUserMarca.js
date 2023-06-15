
const expressValidator = require('express-validator');

validationUserMarca={

    validateCreateUserMarca:[

    expressValidator.body('title')
        .notEmpty().withMessage('El nombre no deberia estar vacio'),
    
        expressValidator.body('email')
        .notEmpty().withMessage('El email no deberia estar vacio')
        .isEmail().withMessage('Deberia ser un email')
    ]


}

module.exports=validationUserMarca;