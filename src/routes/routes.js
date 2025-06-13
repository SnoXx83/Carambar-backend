import { Router } from "express";
import { JokeController } from '../controllers/joke.controller.js';


const router= Router();

router.post('/', JokeController.create);
router.get('/', JokeController.getAllJokes);

export default router;
