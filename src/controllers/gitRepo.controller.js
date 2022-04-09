import Repo from '../models/repo'


export const postRepo = async (req, res) => {
    try {
        const newRepo = new Repo ({ name: req.body.name, html_url: req.body.html_url, full_name: req.body.full_name})
        const repoSave = await newRepo.save();
        res.json(repoSave)
    } catch (error) {
        console.error(error);
        res.status(500).send('User Error');
    }
}