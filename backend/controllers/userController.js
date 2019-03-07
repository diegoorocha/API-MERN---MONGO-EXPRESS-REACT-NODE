const User = require('../models/User')

//ADICIONAR USUÁRIO!
exports.createNewUser = async (req, res) => {
    const user = await new User(req.body)
    user.save()
        .then(user => {
            return res.status(200).json({ 'User': 'Usuário adicionado!' })
        })
        .catch(err => {
            return res.status(400).send('Erro ao adicionar usuário! ')
        })
}

//LISTAR USUÁRIOS (TODOS)!
exports.listUser = async (req, res) => {
    const users = await User.find((err, users) => {
        if (err) {
            console.log(err)
        } else {
            res.json(users)
        }
    })
}

// LISTAR USUÁRIO (UNICO) PELO ID!
exports.listUserId = async (req, res) => {
    const id = req.params.id

    const user = await User.findById(id, (err, user) => {
        res.json(user)
    })
}

// UPDATE (ATUALIZAR) USUÁRIO PELO ID!
exports.updateUserId = async (req, res) => {
    const id = req.params.id

    const user = await User.findById(id, (err, user) => {
        if (!user)
            return res.status(400).send('ID não localizado!')

        else
            user.name = req.body.name
        user.email = req.body.email
        user.office = req.body.office
        user.branch = req.body.branch
        user.telephone = req.body.telephone

        user.save()
            .then(user => {
                res.json('Usuário atualizado!')
            })
            .catch(err => {
                return res.status(400).send('Não foi possivel atualizar usuário!')
            })
    })
}

//DELETAR USUARIO (ID)!
exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.userId, (err, user) => {
        if (err) {
            res.json(err)
        } else {
            res.json('Usuário deletado!')
        }
    })
}