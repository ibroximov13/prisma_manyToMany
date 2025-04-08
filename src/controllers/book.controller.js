
class BookController {
    async getData(req, res) {
        try {
            const data = await b.getData()
            if(data.status && data.status !== 200) {
                return res.status(data.status).send({message: data.message});
            };
            return res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error.message)
            console.log(error);   
        }
    }
}