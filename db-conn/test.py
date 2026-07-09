import pymysql

try:
    conn = pymysql.connect(
        host='119.254.168.121',
        port=3306,
        user='root',
        password='20050509',
        database='school',
        charset='utf8mb4'
    )
    cursor = conn.cursor()

    print("="*30)
    print("student 学生表全部数据：")
    cursor.execute("SELECT * FROM student")
    for data in cursor.fetchall():
        print(data)

    print("\n"+"="*30)
    print("student_score 成绩表全部数据：")
    cursor.execute("SELECT * FROM student_score")
    for data in cursor.fetchall():
        print(data)

except Exception as e:
    print("连接出错：",e)
finally:
  
    if 'cursor' in locals():
        cursor.close()
    if 'conn' in locals():
        conn.close()