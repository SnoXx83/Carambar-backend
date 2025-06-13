import Joke from "../../models/joke.js";

export const JokeController = {
    create: async (req, res) => {
        try {
            const { question, response } = req.body;
            if (!question || !response) {
                return res.status(400).json({ message: "Question and response are required" });
            }
            const joke = await Joke.create({ question, response });
            res.status(201).json(joke);
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).json({ message: "Error adding joke", error: error.message });
        }
    },
    getAllJokes: async(req, res)=>{
        try {
            const jokes= await Joke.findAll();
            res.status(200).json(jokes);
        } catch (error) {
            console.error("Error getting all jokes: ", error);
            res.status(500).json({ message: "Error searching all jokes", error: error.message});
        }
    },
};