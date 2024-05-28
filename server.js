// const express = require('express')
// const userRoutes = require('./routes/user.js')
// const showRoutes = require('./routes/show.js')

// const app = express()

// app.use('/users', userRoutes)
// app.use('/show', showRoutes)

// const port = 3000;

// app.listen(port, function () {
//     console.log('Listening on port' + port)
// })


// app.get('users/:userID', async function (req, res) {
//     if (user) {
//         res.json(user)
//     } else {
//         res.status(404).json({
//             error: 'Not Found'
//         })
//     }
// })

// app.get('/user/:userId/shows', async function (req, res) {
//     const user = await User.findByPk(req.params.userId)

//     if (user) {
//         const shows = await user.getShows()
//         res.json(shows)
//     } else {
//         res.json([])
//     }
// })


const express = require('express')
const userRoutes = require('./routes/users.js')
const showRoutes = require('./routes/shows.js')

const app = express()

app.use('/users', userRoutes)
app.use('/show', showRoutes)

app.use(express.json())

// app.get('/users/:userId/shows', async function (req, res) {
//   const user = await User.findByPk(req.params.userId) //SELECT * FROM users WHERE user_id = 1

//   if (user) {
//     const shows = await user.getShows()  //SELECT * FROM show WHERE user_id = 1
//     res.json(shows)
//   } else {
//     res.json([])
//   }
// })

// app.put('/users/:userId/shows/:showId', async function (req, res) {
//   const user = await User.findByPk(req.params.userId)
//   const show = await Show.findByPk(req.params.showId)

//   // add this show to the list of shows that the user has watched
//   await user.addShow(show)

//   const shows = await user.getShows()
//   res.json(shows)
// })

const port = 3000

app.listen(port, function () {
  console.log('Listening on port ' + port)
})

// //PUT
// app.put('/user/:userID/shows/:showID', async function () {
//     const user = await User.findByPk(req.params.userId)
//     const show = await User.findByPk(req.params.showId) 
//     //add this show to the list of shows that the user has watched
//     await user.addShow(show)

//     const shows = await user.getShows()
//     res.json(shows)
// })

// const port = 3000

// app.listen(port, function () {
//     console.log('Listening on port ' + port)
// })