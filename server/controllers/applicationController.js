const {User} = require('../models/user')
const {Application} = require('../models/application')

module.exports = {
    addApplication: async (req, res) =>{
        try{
            const {
                applicationId,
                jobTitle,
                applicationDate,
                hiringManager,
                interviewStatus,
                jobPostingLink,
                userId
            } = req.body;
        await Application.create({
            applicationId,
            jobTitle,
            applicationDate,
            hiringManager,
            interviewStatus,
            jobPostingLink,
            userId
        })
        res.sendStatus(200)
        } catch(err){
            console.log(err)
            console.log('Cannot add application')
            res.sendStatus(400)
        }
    },
    deleteApplication: async(req, res) =>{
        try{
            const {id} = req.params
            await Application.destroy({
                where: {id: +id},
            })
            res.sendStatus(200)
        }catch(err){
            console.log(err)
            res.sendStatus(400)
            console.log('error in deleteApplication')
        }
    },

    editApplication: async( req, res) => {
        try{
            const {id} = req.params
            console.log(id)
            const {
                applicationId,
                jobTitle,
                applicationDate,
                hiringManager,
                interviewStatus,
                jobPostingLink,
                userId
            } = req.body;
            await Application.update({
                applicationId,
                jobTitle,
                applicationDate,
                hiringManager,
                interviewStatus,
                jobPostingLink,
                userId
            },
           { where: {id: +id}})
        } catch (err) {
            console.log(err)
            console.log('err status in editApplication')
            res.sendStatus(400)
        }
    },

    getApplication: async(req, res) => {
        try{
            const { userId } = req.params
            const applications = await Application.findAll({
                where: {userId: userId},
            })
            console.log(applications)
            res.status(200).send(applications)
            console.log('Sent all user applications')
        }catch (err) {
            console.log(err)
            console.log('err status in editApplication')
        }
    }
}