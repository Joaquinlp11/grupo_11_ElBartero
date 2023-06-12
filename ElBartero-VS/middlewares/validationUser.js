
const expressValidator = require('express-validator');


validationsUser={

    validateCreateUser:[

        expressValidator.body('title')
        .notEmpty().withMessage('El nombre no deberia estar vacio'),
    
        expressValidator.body('email')
        .notEmpty().withMessage('El email no deberia estar vacio')
        .isEmail().withMessage('Deberia ser un email')

    ]

}


module.exports=validationsUser;