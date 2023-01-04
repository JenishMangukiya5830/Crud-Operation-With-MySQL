const mysql = require('../Config/SQL');

const alert = require('alert');

module.exports.get = (req,res) => {
    return res.render('register');
}

module.exports.insert = (req,res) => {

    let {name,email,password} = req.body;

    if(name != '')
    {
        if(email != '')
        {
            if(password != '')
            {
                if(password.length >= 6)
                {
                    let insert = 'INSERT INTO crud (name,email,password) values(?,?,?)';

                    mysql.query(insert,[name,email,password],(err,data) => {
                        if(err)
                        {
                            alert('Data not Inserted');
                            return res.redirect('back');
                        }
                        alert('data Inserted');
                        return res.redirect('back');
                    });
                }
                else
                {
                    alert('Enter Password Length in Miniman 6 Letter');
                    return res.redirect('back');
                }
            }
            else
            {
                alert('Enter Your Password');
                return res.redirect('back');
            }
        }
        else
        {
            alert('Enter Your Email');
            return res.redirect('back');
        }
    }
    else
    {
        alert('Enter Your Name');
        return res.redirect('back');
    }
}

module.exports.view = (req,res) => {

    let view = 'SELECT * FROM crud';

    mysql.query(view,(err,data) => {
        if(err)
        {
            alert('data not Found');
        }
        if(data.length == 0)
        {
            alert('No Record Found');
            return res.redirect('back');
        }
        else
        {
            return res.render('view',{
                data : data
            })
        }
    });

}

module.exports.delete = (req,res) => {

    let id = req.params.id;

    let delet = `delete from crud where id = ${id}`;

    mysql.query(delet,(err,data) => {
        if(err)
        {
            alert('Data not Delete');
            return res.redirect('back');
        }
        alert('Data Successfully Deleted');
        return res.redirect('back');
    });

}

module.exports.edit = (req,res) => {

    let id = req.params.id;

    let edit = `select * from crud where id = ${id}`;

    mysql.query(edit,(err,data) => {
        if(err)
        {
            alert('No Data Found');
            return res.redirect('back');
        }
        return res.render('edit',{
            data : data[0]
        });
    });

}

module.exports.update = (req,res) => {
    
    let {edit_id,name,email,password} = req.body;

    if(name != '')
    {
        if(email != '')
        {
            if(password != '')
            {
                if(password.length >= 6)
                {   
                    let update = `update crud set name = '${name}', email = '${email}', password = '${password}' where id = ${edit_id}`;

                    mysql.query(update,(err,data) => {
                        if(err)
                        {
                            alert('data not Updated');
                            return res.redirect('back');
                        }

                        alert('data Updated');
                        return res.redirect('/view');

                    });
                    
                }
                else
                {
                    alert('Enter Password Length in Miniman 6 Letter');
                    return res.redirect('back');
                }
            }
            else
            {
                alert('Enter Your Password');
                return res.redirect('back');
            }
        }
        else
        {
            alert('Enter Your Email');
            return res.redirect('back');
        }
    }
    else
    {
        alert('Enter Your Name');
        return res.redirect('back');
    }

}