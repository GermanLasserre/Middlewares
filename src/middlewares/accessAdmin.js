const admins = ['Greta','Ada','Tim','Vim']

module.exports = (req,res,next) => {

    if(admins.includes(req.query.admin)){
        next() 
        return res.redirect('/')    
    } else {
        res.send("No tienes los privilegios para ingresar")
    }
  }



/* const admins = ['Greta','Ada','Tim','Vim']

module.exports = (req,res,next) => {

    if(admins.includes(req.query.admin)){
        next()
    }

    return res.redirect('/')    
    
}  */
