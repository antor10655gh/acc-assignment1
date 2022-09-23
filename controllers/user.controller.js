let users = [
    {
        "id": 1,
        "name": "Kalam",
        "gender": "Male",
        "contact": "01795937735",
        "address": "Dhaka",
        "photoUrl": "https://i.ibb.co/4d9pDM2/image-6.png"
    },
    {
        "id": 2,
        "name": "Salam",
        "gender": "Male",
        "contact": "01795937735",
        "address": "Mymensingh",
        "photoUrl": "https://i.ibb.co/4d9pDM2/image-6.png"
    },
    {
        "id": 3,
        "name": "Rafik",
        "gender": "Male",
        "contact": "01795937735",
        "address": "Barishal",
        "photoUrl": "https://i.ibb.co/4d9pDM2/image-6.png"
    }
]

module.exports.allUsers = (req,res) => {
    res.send(users)
}

module.exports.saveUser = (req,res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send(users);
}

module.exports.userDetails = (req,res) =>{
    const {id} = req.params;
    const singleUser = users.find(user=> user.id === Number(id))
    res.send(singleUser);
}

module.exports.userUpdate = (req, res) =>{
    const {id} = req.params;
    const newUser = users.find(user=> user.id === Number(id));
    newUser.name = req.body.name;

    res.send(newUser);
}

module.exports.userDelete = (req,res) =>{
    const {id} = req.params;
    users = users.filter(user => user.id !== Number(id));
    res.send("Delete Successful");
}