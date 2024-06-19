const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from alumnos',(err,alumnos) =>{
            if(err){
                res.json(err);
            }
            res.json(alumnos);
        });

    });

};

controller.edit = (req, res) => {

    const {idestudiantes}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from alumnos where idestudiantes=?', [idestudiantes], (err,alumnos) => {
            res.json(alumnos[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into alumnos set?', [data], (err,alumnos) => {
        res.json(alumnos);
       });
   })
};

controller.update = (req,res) =>{

    const {idestudiantes}= req.params;
    const nuevo_alumnos = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update alumnos set ? where idempresa =?', [nuevo_alumnos, idestudiantes], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idestudiantes}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from alumnos where idestudiantes =?', [idestudiantes], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;