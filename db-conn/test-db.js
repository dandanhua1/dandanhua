const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '119.254.168.121',
  user: 'root',           
  password: '20050509', 
  database: 'school'       
});

const dateStr = '2026-07-06';

console.log(`正在查询 [${dateStr}] 的数据...`);

const sql = `
  SELECT 
    s.student_name AS 学生姓名,
    sc.course_name AS 课程,
    sc.score AS 分数,
    sc.exam_time AS 考试日期
  FROM student_score sc
  LEFT JOIN student s ON sc.student_id = s.student_id
  WHERE DATE(sc.exam_time) = ?
`;

connection.query(sql, [dateStr], (err, scores) => {
  if (err) {
    console.error('查询出错:', err);
  } else {
    console.log(' 查询成功！昨天的数据如下：');
    console.table(scores); 
  }
  connection.end(); 
});