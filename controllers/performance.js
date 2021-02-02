const handlePerformance = (req, res, database) => {
    const {id, wpm, time, level} = req.body;
    database('user_performance').insert({
        user_id: id,
        wpm: wpm,
        time: time,
        level: level,
        date: new Date(),
    }).then(res.json('updated'))
}

module.exports = {
    handlePerformance: handlePerformance
}