
const Todo=require("../models/Todo");
exports.getTodos=async(req,res)=>{
    try{
        const todos=await Todo.find({
            user:req.user.id
        });
        res.json(todos);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};
exports.createTodo=async(req,res)=>{
    try{
        const newTodo=await Todo.create({
            title:req.body.title,
            status:req.body.status,
            user:req.user.id
        });
    
    res.status(201).json({
        message:"Todo created successfully",
        todo:newTodo
    });
}catch(error){
    if(error.name==="ValidationError"){
        return res.status(400).json({
    message:error.message
});
    }
    res.status(500).json({
        message:error.message
    });
}
};
exports.updateTodo=async(req,res)=>{
    try{
        const updatedTodo=await Todo.findByIdAndUpdate(req.params.id, 
            {
                title:req.body.title,
                status:req.body.status
            },
             {new: true });
    
    if(!updatedTodo){
        return res.status(404).json({
            message:"Todo not found"
        });
    }
    updatedTodo.title=req.body.title;
    updatedTodo.status=req.body.status;
    res.json({
        message:"Todo updated successfully",
        todo:updatedTodo
    });
}catch(error){
    res.status(500).json({
        message:error.message
    });
}
};
exports.deleteTodo=async(req,res)=>{
    try{
        const deletedTodo=await Todo.findByIdAndDelete(req.params.id);
        if(!deletedTodo){
            return res.status(404).json({
               message:"Todo not found"
            });
        }
    
    res.json({
        message:"Todo deleted successfully"
    });
}catch(error){
    return res.status(500).json({
        message:error.message
    });
}
};