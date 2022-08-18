const todoModel = require("../internal/todo-db")


 //CREATE TODO

 exports.createTodo = async (req,res) => {
     const todo = await todoModel.create(req.body);
     res.status(201).json({
         success:true,
         todo
     })
 }

 //GET TODO BY ID

 exports.getTodo = async (req,res)=>{

    let todo = await todoModel.findById(req.params.id);

    if(!todo){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(200).json({
        success:true,
        todo
    })
}

//GET ALL TODO
 exports.getAllTodos = async (req,res)=>{
    
    const todos = await todoModel.find();
     res.status(200).json({
        success:true,
        todos
    })
 } 

//DELETE TODO
exports.deleteTodo = async (req,res)=>{

    let todo = await todoModel.findById(req.params.id);

    if(!todo){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

     todo = await todoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success:true,
        todo
    })
}

//UPDATE TODO
exports.updateTodo = async (req,res)=>{
    const todo = await todoModel.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
        success:true,
        todo
    })
}