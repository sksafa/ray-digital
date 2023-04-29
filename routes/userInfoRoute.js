const express = require('express');
const { userInfoPostController,
    getUserInfoController,
    singleUserInfoController,
    updateUserInfoController,
    deleteUserInfoController
} = require('../controllers/userInfoController');
const {requireSignIn} = require('../middlewares/authMiddleware')

const router = express.Router();
router.post('/userInfos',requireSignIn, userInfoPostController)
router.get('/userInfos',requireSignIn, getUserInfoController)
router.get('/userInfos/:id',requireSignIn, singleUserInfoController)
router.put('/updateUserInfos/:id',requireSignIn, updateUserInfoController)
router.delete('/deleteUserInfos/:id',requireSignIn, deleteUserInfoController)
//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

module.exports = router