var express = require('express');
var router = express.Router();
require('dotenv').config();
// const VerifyToken = require('../../middlewares/VerifyToken');
// const { 
//     getAll, createNew, deleteAll, 
//     getOne, updateOne, deleteOne 
// } = require('../../../services/franchises/businessunitgroupsService');

const { 
    getAll, createNew, deleteAll, 
    getOne, updateOne, deleteOne 
} = require('../service/businessunitgroupsService');


router.get('/',async (req, res, next) => {
    const payLoadQuery = req.query;
    const { status, error, type, result } = await getAll(payLoadQuery);
    return res.status(status).json({ error, type, result });
});

router.post('/',async (req, res, next) => {
    const data = {
        businessunitgroupname:req.body.businessunitgroupname,
        createdby:req.body.createdby,
        updatedby:req.body.updatedby
    }
    const { status, error, type, result } = await createNew(data);
    return res.status(status).json({ error, type, result });
});

// router.delete('/',VerifyToken,async (req, res, next) => {
//     const { status, error, type, result } = await deleteAll();
//     return res.status(status).json({ error, type, result });
// });

// router.get('/:businessunitgroup_id',VerifyToken, async (req, res, next) => {
//     const businessunitgroup_id = req.params.businessunitgroup_id;
//     const { status, error, type, result } = await getOne(businessunitgroup_id);
//     return res.status(status).json({ error, type, result });
// });

// router.put('/:businessunitgroup_id',VerifyToken,async (req, res, next) => {
//     const businessunitgroup_id = req.params.businessunitgroup_id;
//     const data = {
//         businessunitgroupname:req.body.businessunitgroupname,
//         createdby:req.body.createdby,
//         updatedby:req.body.updatedby
//     }
//     const { status, error, type, result } = await updateOne(businessunitgroup_id,data);
//     return res.status(status).json({ error, type, result });
// });

// router.delete('/:businessunitgroup_id',VerifyToken, async (req, res, next) => {
//     const businessunitgroup_id = req.params.businessunitgroup_id;
//     const { status, error, type, result } = await deleteOne(businessunitgroup_id);
//     return res.status(status).json({ error, type, result });
// });

// router.get('/delete', function(req, res, next) {
//     const index = defaultIndex+'franchises_businessunitgroup';
//     const respInsertDoc = deleteDoc(index, 4, '_doc');
//     res.json({ error: false, type : 'success', result : 'email verified successfully' });
// });

module.exports = router;