/**
*  Define  User Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var User = schema.define('users', {
         id: { type: schema.Integer, unique : true },
         name: { type: schema.String, limit: 25 },
         email: { type: schema.String, limit: 100, unique : true },
         password: { type: schema.Text }
    },{
        primaryKeys: ["id"]
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/
    return User;
};