import Repo from '../models/repo'

export const getAllReports = async (req, res) => {
    const repo = await Repo.find()
    res.json(repo);
}

export const postRepo = async (req, res) => {
    try {
        const newRepo = new Repo({ id: req.body.id, name: req.body.name, html_url: req.body.html_url, full_name: req.body.full_name })
        const repoSave = await newRepo.save();
        res.json(repoSave)
    } catch (error) {
        console.error(error);
        res.status(500).send('Repo Error');
    }
}

export const deletRepoFav = async (req, res) => {
    try {
        await Repo.findByIdAndDelete(req.params.id)
        res.json({
            message: `${req.params.id} repo were deleted succesfully`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Repo not found');
    }
}

