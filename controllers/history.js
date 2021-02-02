const handleHistory = (req, res, database) => {
    const {id} = req.body;
    database.select('wpm','time','level','date').from('user_performance')
    .where('user_id', '=', id)
    .then(history => {
        res.json(history)
    })
}

module.exports = {
    handleHistory : handleHistory
}