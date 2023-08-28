import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import petRoutes from './routes/petRoutes';
import { defaultPet } from './controllers/petController';
import { db } from './models';

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../src/public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../src/views"));
app.set('view options', { layout: 'layout' });

app.use('/pets', petRoutes);
app.use('/', defaultPet)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).render('error', {
        message: "This is not the URL you are looking for!"
    });
})

db.sync()

app.listen(3000);