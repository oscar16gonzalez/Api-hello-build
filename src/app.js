import express from "express";
import morgan from 'morgan';
import cors from 'cors'
import userRoutes from './routes/user.routes';
import repoRoutes from './routes/repo.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.get('/', (req,res) => {
    res.json({message: 'Welcome'})
})

app.use('/api',userRoutes)
app.use('/api/repo',repoRoutes)

export default app;