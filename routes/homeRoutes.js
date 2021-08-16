const router = require('express').Router();
const { User, Slots, Service, Timeid } = require('../models');
const withAuth = require('../utils/auth');
// const getAppointmentByUser = require('../controllers/slots');



router.get('/', async (req, res) => {
    if (!req.session.loggedIn) {
    res.redirect('/login');
  } else{
      res.render('landing',{
      loggedIn: req.session.loggedIn
    });
  }
  
});


router.get('/profile', withAuth, async (req, res) => {
  try {
   
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userid,
       {attributes: { exclude: ['password'] },
       include: [{model: Slots, include: [{model: Service}, {model: Timeid}]}]});

       

    const user = userData.get({ plain: true });
    const slots = user.slots;


    console.log(slots);
    console.log(user.slots.length);
    // console.log(userData.slots.length);
    res.render('profile', { ...user, ...slots, loggedIn: true});

  } catch (err) {
    res.status(500).json(err);
  }
});


  router.get('/signup', async (req, res) => {
    res.render('signup');
  });

  router.get('/confirmation', async (req, res) => {
    res.render('confirmation');
  });

  router.get('/login', async (req, res) => {
    res.render('login');
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

