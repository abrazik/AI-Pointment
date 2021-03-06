const router = require('express').Router();
// const userControllerRoute = require('../controllers/user');
const { User, Slots } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    res.render('message', {
      loggedIn: req.session.loggedIn
    });
  }
});


router.get('/profile', withAuth, async (req, res) => {
  try {

    // Find the logged in user based on the session ID
    //console.log(req.session.userid)
    const userData = await User.findByPk(req.session.userid,
      {
        attributes: { exclude: ['password'] },
        include: Slots
      }
    );

    // console.log(userData.slots.length);
    res.render('profilePage', {
      ...userData.dataValues,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/signup', async (req, res) => {
  res.render('signupPage');
});

router.get('/confirmation', async (req, res) => {
  res.render('confirmation');
});

router.get('/login', async (req, res) => {
  res.render('loginPage');
});







router.get('/message-test', async (req, res) => {
  res.render('messageTest');
});


module.exports = router;




// const router = require('express').Router();
// // const userControllerRoute = require('../controllers/user');
// const { User } = require('../models');


// router.get('/', async (req, res) => {
//   res.render('landing');
// });


//   router.get('/profile', async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(1);

//       const user = userData.get({ plain: true });
//       console.log(user);

//       res.render('profile', {
//         ...user});
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });









//   router.get('/signup', async (req, res) => {
//     res.render('signup');
//   });

//   router.get('/login', async (req, res) => {
//     res.render('login');
//   });







// router.get('/message-test', async (req, res) => {
//   res.render('messageTest');
// });


// module.exports = router;


