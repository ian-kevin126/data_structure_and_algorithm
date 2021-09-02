// Source : https://leetcode.com/problems/get-highest-answer-rate-question
// Author : Dubchak Valery

/***
Get the highest answer rate question from a table survey_log with these columns: uid, action, question_id, answer_id, q_num, timestamp.
uid means user id; action has these kind of values: "show", "answer", "skip"; answer_id is not null when action column is "answer", while is null for "show" and "skip"; q_num is the numeral order of the question in current session.
Write a sql query to identify the question which has the highest answer rate.
Example:
Input:
+------+-----------+--------------+------------+-----------+------------+
| uid  | action    | question_id  | answer_id  | q_num     | timestamp  |
+------+-----------+--------------+------------+-----------+------------+
| 5    | show      | 285          | null       | 1         | 123        |
| 5    | answer    | 285          | 124124     | 1         | 124        |
| 5    | show      | 369          | null       | 2         | 125        |
| 5    | skip      | 369          | null       | 2         | 126        |
+------+-----------+--------------+------------+-----------+------------+
Output:
+-------------+
| survey_log  |
+-------------+
|    285      |
+-------------+
Explanation: question 285 has answer rate 1/1, while question 369 has 0/1 answer rate, so output 285.
Note: The highest answer rate meaning is: answer number's ratio in show number in the same question.

***/

/* Write your T-SQL query statement below */
/***
SELECT question_id survey_log
FROM (SELECT DISTINCT question_id, 
      SUM(CASE WHEN answer_id IS NOT NULL THEN 1 ELSE 0 END)/SUM(CASE WHEN action='show' THEN 1 ELSE 0 END) rate
      FROM survey_log
      GROUP BY question_id
      ORDER BY rate DESC
      LIMIT 1) temp
*///