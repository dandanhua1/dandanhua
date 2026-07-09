const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors')
const app = express()
app.use(cors())

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school',
  port: 3306
})

app.get('/api/score', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM student_score')
    res.json(rows)
  } catch (err) {
    res.status(500).json({ msg: '数据库读取失败', err })
  }
})

const port = 4000
app.listen(port, () => {
  console.log(`后端服务运行：http://localhost:${port}`)
})