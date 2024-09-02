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

export function isDatetime(value) {
  // 日期时间格式暂时只支持校验yyyy-MM-dd HH:mm:ss和yyyy-MM-dd HH:mm格式
  // 定义正则表达式来匹配日期时间格式
  const dateTimeRegex =
    /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})(?::(\d{2}))?$/;

  // 使用正则表达式匹配字符串
  const match = value.match(dateTimeRegex);
  if (!match) {
    return false;
  }

  // 提取年、月、日、时、分、秒
  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10) - 1; // 月份从0开始
  const day = parseInt(match[3], 10);
  const hour = parseInt(match[4], 10);
  const minute = parseInt(match[5], 10);
  const second = match[6] ? parseInt(match[6], 10) : 0; // 如果没有秒，默认为0

  // 创建Date对象
  const date = new Date(year, month, day, hour, minute, second);

  // 检查日期是否有效
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day &&
    date.getHours() === hour &&
    date.getMinutes() === minute &&
    date.getSeconds() === second
  );
}

// 身份证校验
export function isIdNumber(value) {
  value = value.toUpperCase();

  // 前2位城市码
  let city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 ",
  };
  // 加权因子
  let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验位
  let parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
  // 身份证简单正则
  let Reg =
    /^\d{6}(18|19|20)?\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  // 身份证号码数组
  let arr_code = value.split("");

  // 校验编码为空，简单正则，城市编码
  if (
    !value ||
    !Reg.test(value) ||
    !city[value.substr(0, 2)] ||
    value.length !== 18
  ) {
    return false;
  }

  // 校验18位身份证需要验证最后一位校验位
  //∑(ai×Wi)(mod 11)
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += arr_code[i] * factor[i];
  }
  if (parity[sum % 11] != arr_code[17]) {
    return false;
  }

  return true;
}

// 验证手机号码
export function isCellphone(value) {
  if (!/^1[3456789]\d{9}$/.test(value)) {
    return false;
  } else {
    return true;
  }
}
