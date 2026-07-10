const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: '119.254.168.121',
  port: 3306,
  user: 'root',
  password: '20050509',
  database: 'school'
});

db.connect((err) => {
  if (err) {
    console.log('数据库连接失败：', err);
    return;
  }
  console.log('本地数据库连接成功');
});


app.get('/api/score', (req, res) => {
  console.log("接受到请求。。。")
  db.query('SELECT * FROM student_score', (err, rows) => {
    if (err) {
      res.status(500).json({ msg: '成绩查询失败' });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/getStudent', (req, res) => {
  // const sql = `
  //   SELECT s.student_id, student_name, course_name, score, exam_time
  //   FROM student st
  //   JOIN student_score s ON st.student_id = s.student_id
  // `;
  // db.query(sql, (err, rows) => {
  //   if (err) {
  //     res.status(500).json({ msg: '联表查询失败' });
  //     return;
  //   }
  //   res.json(rows);
  // });
});

app.listen(3001, () => {
  console.log('服务运行在 localhost:3001');
});