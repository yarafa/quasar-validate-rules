export function isDate(value) {
  // 日期格式暂时只支持校验yyyy-MM-dd格式
  // 验证日期格式的正则表达式
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/; // yyyy-MM-dd格式

  // 检查日期格式
  if (dateRegex.test(value)) {
    // 获取年、月、日
    var parts = value.split("-");
    var year = parseInt(parts[0]);
    var month = parseInt(parts[1]) - 1; // 月份需要减去1，因为月份从0开始计数
    var day = parseInt(parts[2]);

    // 创建日期对象
    var date = new Date(year, month, day);
    // 判断日期是否有效
    return (
      date.getFullYear() == year &&
      date.getMonth() == month &&
      date.getDate() == day
    );
  } else {
    return false;
  }
}
