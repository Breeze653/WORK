<?php

// 1.获取前端传递来的一级分类内容
$one = $_GET['cat_one'];

// 组装 sql 语句
$sql = "SELECT `cat_two_id` FROM `goods` WHERE `cat_one_id`='$one' GROUP BY `cat_two_id`";
// 操作数据库
$link = mysqli_connect('localhost', 'root', 'root', 'case');
$res = mysqli_query($link, $sql);
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
mysqli_close($link);

// 返回结果给前端
$arr = array(
    "message" => "获取二级列表成功",
    "code" => 1,
    "list" => $data
);

echo json_encode($arr);

?>