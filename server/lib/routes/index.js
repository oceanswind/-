var express = require('express');
var router = express.Router();
var app = express();
const connection = require('../db/db.js');

var multer = require('multer')

var bodyp = require('body-parser');

var avaUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/userAvatar')
    },
    filename: function (req, file, cb) {
      let last = file.originalname.split('.')
      cb(null, file.fieldname + '-' + Date.now() + '.' + last[last.length - 1])
    }
  })
})

router.post('/modifyUserAvatar', avaUpload.array('userAvatar', 1),async function (req, res, next) {
        const id = req.body.id
        let files = req.files;
        let file = files[0];
        console.log(file);
        // 重命名文件
        let last = file.originalname.split('.')
        let newPath = 'public/images/userAvatar/' + file.filename
        let temp = newPath.split('/')
        temp.shift()
        temp.join('/', temp)
        let sqlPath = 'http://127.0.0.1:3001/' + temp.join('/', temp)
        let uploadRes = await connection.query("update user set avatar = ? where id = ? ", [sqlPath,id])
        console.log(uploadRes);
        if (uploadRes.affectedRows != 1) {
            res.json({
                message: '上传失败',
                status: 400
            })
            return
        }
        res.json({
            message: '上传成功',
            status: 200,
            // avatarUrl: sqlPath
        })
});

router.post('/addbookpic', avaUpload.array('userAvatar', 1),async function (req, res, next) {
  const id = req.body.id
  let files = req.files;
  let file = files[0];
  console.log(file);
  // 重命名文件
  let last = file.originalname.split('.')
  let newPath = 'public/images/userAvatar/' + file.filename

  let temp = newPath.split('/')
  temp.shift()
  temp.join('/', temp)
  let sqlPath = 'http://127.0.0.1:3001/' + temp.join('/', temp)
  let uploadRes = await connection.query("update book_info set pic = ? where id = ? ", [sqlPath,id])
  console.log(uploadRes);
  if (uploadRes.affectedRows != 1) {
      res.json({
          message: '上传失败',
          status: 400
      })
      return
  }
  res.json({
      message: '上传成功',
      status: 200,
      // avatarUrl: sqlPath
  })
});

router.get('/', function (req, res, next) {
  res.json('ww');
});


router.get('/api/user', function (req, res) {
    let Sql = 'SELECT * from user'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),
  router.get('/api/guide', function (req, res) {
    let Sql = 'SELECT * from question'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),
  router.post('/api/guideMore', function (req, res) {
    const id = req.body.id
    // console.log(req.body.id)
    let Sql = 'SELECT * from question where id = ?'
    connection.query(Sql, id, (error, results) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),
  router.get('/api/books', function (req, res) {
    let Sql = 'SELECT * from book_info'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/bookInfo', function (req, res) {
    const id = req.body.id
    // console.log(req.body.id)
    let Sql = 'SELECT * from book_info where id = ?'
    connection.query(Sql, id, (error, results) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/authorInfo', function (req, res) {
    const id = req.body.id
    // console.log(req.body.id)
    let Sql = 'SELECT * from author where id = ?'
    connection.query(Sql, id, (error, results) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.get('/api/set', function (req, res) {
    let Sql = 'SELECT * FROM `sets`'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/profile', function (req, res) {
    const id = req.body.id
    // console.log(req.body.id)
    let Sql = 'SELECT * from user where id = ?'
    connection.query(Sql, id, (error, results) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/updateUser', function (req, res) {
    const id = req.body.id
    // console.log(req.body.id)
    const address = req.body.address
    const sex = req.body.sex
    const email = req.body.email
    const phone = req.body.phone
    let Sql = 'UPDATE user SET address=? ,sex=? ,email=? ,phone=? WHERE id = ?'
    console
    connection.query(Sql, [address, sex, email, phone, id], (error, results) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "修改失败"
        })
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/reserve', function (req, res) {
    const id = req.body.id
    console.log(req.body.id)
    const newNow = req.body.now
    const newUsed = req.body.used
    let Sql = 'UPDATE `sets` SET now = ? ,used = ?  WHERE id = ? '
    console
    connection.query(Sql, [newNow, newUsed, id], (error, results) => {
      if (error) {
        res.json(error)
        // res.json({
        //   err_code: 0,
        //   message: "修改失败"
        // })
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/search', function (req, res) {
    // const key = req.body.key
    const key = '%' + req.body.key + '%'

    const key1 = '%' + req.body.key1 + '%'
    console.log(req.body.key)
    // console.log(req.body.id)
    // let Sql = "SELECT * FROM `book_info` WHERE author LIKE % + ? + % or name LIKE ? + % "
    let Sql = "SELECT * FROM `book_info` WHERE author LIKE ? OR name LIKE ? "
    // or name LIKE % ? %
    console.log(req.body)
    connection.query(Sql, [key, key1], (error, results) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/borrow', function (req, res) {
    const id = req.body.id
    console.log(req.body.id)
    let Sql = 'SELECT * FROM borrow_list where user_id = ? '
    connection.query(Sql, id, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.get('/api/join', function (req, res) {
    let Sql = 'SELECT * FROM `huodong`'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/enroll', function (req, res) {
    const id = req.body.id
    const phone = req.body.phone
    const sex = req.body.sex
    const name = req.body.name
    const h_name = req.body.h_name
    let Sql = 'INSERT INTO `huodonginfo`(`user_id`, `phone`, `h_name`, `name`, `sex`) VALUES (?,?,?,?,?)'
    // let Sql = 'SELECT * FROM `huodong`'
    connection.query(Sql, [id, phone, h_name, name, sex], (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/joined', function (req, res) {
    const id=req.body.id
    let Sql = 'SELECT * from huodonginfo  where user_id=? '
    connection.query(Sql, id,(error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),


  router.post('/api/register', function (req, res) {
    const phone = req.body.phone
    const pwd = req.body.pwd
    const email = req.body.email

    let Sql = 'INSERT INTO `register`( `pwd`, `email`, `phone`) VALUES (?,?,?)'
    connection.query(Sql, [pwd, email, phone], (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.get('/api/adminBook', function (req, res) {
    let Sql = 'SELECT * from book_info'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/editBook', function (req, res) {
    const id = req.body.id
    const name = req.body.name
    const author = req.body.author
    const press = req.body.press
    const pressTime = req.body.pressTime
    const ISBN = req.body.ISBN
    console.log(req.body)
    let Sql = 'UPDATE `book_info` SET name = ? ,author = ? ,press=? , press_time=?,ISBN= ?  WHERE id = ? '
    connection.query(Sql, [name, author, press, pressTime, ISBN, id], (error, results) => {
      if (error) {
        // res.json({
        //   err_code: 0,
        //   message: "请求数据失败"
        // })
        res.json(error)
      } else {
        console.log(results)
        // results=JSON.parse(JSON.stringify(results))
        // console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),


  router.post('/api/addBooks', function (req, res) {
    const name = req.body.name
    const author = req.body.author
    const press = req.body.press
    const pressTime = req.body.pressTime
    const ISBN = req.body.ISBN

    let Sql = 'INSERT INTO `book_info`( `name`, `author`, `press`,`press_time`,`ISBN`) VALUES (?,?,?,?,?)'
    connection.query(Sql, [name, author, press, pressTime,ISBN], (error, results, fields) => {
      if (error) {
        // res.json({
        //   err_code: 0,
        //   message: "请求数据失败"
        // })
        res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/delete', function (req, res) {
    const id = req.body.id
    let Sql = 'DELETE FROM `book_info` WHERE id = ?'
    connection.query(Sql,id, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/borrows', function (req, res) {
    const name = req.body.name
    const bookid = req.body.bookid
    const userid = req.body.userid
    const account = req.body.account
    const borrowdate = req.body.borrowdate
    const backdate=req.body.backdate
 
    let Sql = 'INSERT  IGNORE INTO `borrow_list`(`user_id`, `book_id`, `account`, `borrow_date`, `back_date`, `book_name`) VALUES (?,?,?,?,?,?)'
    connection.query(Sql, [userid,bookid,account,borrowdate,backdate,name], (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/keep', function (req, res) {
    const  user_id= req.body.user_id
    const  book_id= req.body.book_id
    const  newdate=req.body.newdate

    let Sql = 'UPDATE `borrow_list` SET back_date=? where user_id =? and book_id=?'
    connection.query(Sql,[newdate,user_id,book_id], (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

    router.post('/api/suggestion', function (req, res) {
      const title=req.body.title
      const name=req.body.name
      const textarea=req.body.textarea
    let Sql = 'INSERT INTO `suggestion`( `title`, `more`,`name`) VALUES (?,?,?)'
    connection.query(Sql, [title,textarea,name], (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
        // res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.get('/api/reply', function (req, res) {
    let Sql = 'SELECT * from suggestion'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.get('/api/activate', function (req, res) {
    let Sql = 'SELECT * from register'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/addUser', function (req, res) {
    const id = req.body.id
    const pwd = req.body.pwd
    const phone = req.body.phone
    const account = req.body.account
    let Sql = 'INSERT INTO `user`( `id`, `pwd`, `phone`,`account`) VALUES (?,?,?,?)'
    connection.query(Sql, [id, pwd, phone, account], (error, results, fields) => {
      if (error) {
        // res.json({
        //   err_code: 0,
        //   message: "请求数据失败"
        // })
        res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),


  router.get('/api/lost', function (req, res) {
    let Sql = 'SELECT * from lost'
    connection.query(Sql, (error, results, fields) => {
      if (error) {
        res.json({
          err_code: 0,
          message: "请求数据失败"
        })
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),

  router.post('/api/addLost', function (req, res) {
    const name = req.body.name
    const des = req.body.des
    const location = req.body.location
    const time = req.body.time
    const qq=req.body.qq
    let Sql = 'INSERT INTO `lost`( `name`, `des`, `location`,`time`,`qq`) VALUES (?,?,?,?,?)'
    connection.query(Sql, [name, des, location, time, qq], (error, results, fields) => {
      if (error) {
        // res.json({
        //   err_code: 0,
        //   message: "请求数据失败"
        // })
        res.json(error)
      } else {
        results = JSON.parse(JSON.stringify(results))
        console.log(results);
        res.json({
          success_code: 200,
          message: results
        })
      }
    })
  }),


  module.exports = router;