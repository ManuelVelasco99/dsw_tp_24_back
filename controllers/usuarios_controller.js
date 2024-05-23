exports.listarUsuarios = (req, res) => {
    res.json({data:[
        {
            usuario:"usuario1",
        },
        {
            usuario:"usuario2",
        }
    ]});
    console.log("test");
};