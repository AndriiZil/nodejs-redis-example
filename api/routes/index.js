const { Router } = require('express');
const { hgetAsync, hsetAsync } = require('../../redis');

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        let result
        const { namespace, key, data } = req.body;

        try {
            result = await hsetAsync(namespace, key, JSON.stringify(data));
        } catch (err) {
            console.log(err);
        }

        return res.json({
            success: true,
            data: result
        })
    } catch (err) {
        next(err);
    }
});

router.get('/', async(req, res, next) => {
    let result;
    const { namespace, key } = req.body;

    try {
        result = await hgetAsync(namespace, key);
    } catch (err) {
        next(err);
    }

    res.send({
        success: true,
        data: JSON.parse(result)
    });
});

module.exports = router;
