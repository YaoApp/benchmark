// 生成测试数据
function Test() {
  for (var i = 0; i < 100; i++) {
    let data = makeData(i);
    let manuRes = Process(
      "models.manu.Insert",
      [
        "name",
        "short_name",
        "province",
        "city",
        "contact_name",
        "contact_mobile",
      ],
      data.manus
    );

    let userRes = Process(
      "models.user.Insert",
      ["manu_id", "mobile", "name", "status", "password"],
      data.users
    );

    console.log(
      `生成测试数据 ${i + 1}... ${manuRes ? manuRes.message : "OK"}  ${
        userRes ? userRes.message : "OK"
      }`
    );
  }
}

function makeData(offset) {
  offset = offset || 0;
  manus = [];
  users = [];

  for (var i = 0; i < 100; i++) {
    manus.push([
      "测试公司" + (i + offset), // name
      "公司" + (i + offset), // short_name
      "广东省", // province
      "广州市", // city
      randName(), // contact_name
      randMobile(), // contact_mobile
    ]);

    for (var j = 0; j < 10; j++) {
      users.push([
        i + offset, //manu_id
        randMobile(), //mobile
        randName(), //name
        "enabled", // status
        "Ak123456+", // password
      ]);
    }
  }

  return { manus: manus, users: users };
}

function randName() {
  var first =
    "王,李,张,刘,陈,杨,黄,赵,周,吴,徐,孙,马,胡,朱,郭,何,罗,高,林".split(",");
  var name =
    "澄邈,德泽,海超,海阳,海荣,海逸,海昌,瀚钰,瀚文,涵亮,涵煦,明宇,涵衍,浩皛,浩波,浩博,浩初,浩宕,浩歌,浩广,浩邈,浩气,浩思,浩言,鸿宝,鸿波,鸿博,鸿才,鸿畅,鸿畴,鸿达,鸿德,鸿飞,鸿风,鸿福,鸿光,鸿晖,鸿朗,鸿文,鸿轩,鸿煊,鸿骞,鸿远,鸿云,鸿哲,鸿祯,鸿志,鸿卓,嘉澍,光济,澎湃,彭泽,鹏池,鹏海,浦和,浦泽,瑞渊,越泽,博耘,德运,辰宇,辰皓,辰钊,辰铭,辰锟,辰阳,辰韦,辰良,辰沛,晨轩,晨涛,晨濡,晨潍,鸿振,吉星,铭晨,起运,运凡,运凯,运鹏,运浩,运诚,运良,运鸿,运锋,运盛,运升,运杰,运珧,运骏,运凯,运乾,维运,运晟,运莱,运华,耘豪,星爵,星腾,星睿,星泽,星鹏,星然,震轩,震博,康震,震博,振强,振博,振华,振锐,振凯,振海,振国,振平,昂然,昂雄,昂杰,昂熙,昌勋,昌盛,昌淼,昌茂,昌黎,昌燎,昌翰,晨朗,德明,德昌,德曜,范明,飞昂,高旻,晗日,昊然,昊天,昊苍,昊英,昊宇,昊嘉,昊明,昊伟,昊硕,昊磊,昊东,鸿晖,鸿朗,华晖,金鹏,晋鹏,敬曦,景明,景天,景浩,俊晖,君昊,昆琦,昆鹏,昆纬,昆宇,昆锐,昆卉,昆峰,昆颉,昆谊,昆皓,昆鹏,昆明,昆杰,昆雄,昆纶,鹏涛,鹏煊,曦晨,曦之,新曦,旭彬,旭尧,旭鹏,旭东,旭炎,炫明,宣朗,学智,轩昂,彦昌,曜坤,曜栋,曜文,曜曦,曜灿,曜瑞,智伟,智杰,智刚,智阳,昌勋,昌盛,昌茂,昌黎,昌燎,昌翰,晨朗,昂然,昂雄,昂杰,昂熙,范明,飞昂,高朗,高旻,德明,德昌,德曜,智伟,智杰,智刚,智阳,瀚彭,旭炎,宣朗,学智,昊然,昊天,昊苍,昊英,昊宇,昊嘉,昊明,昊伟,鸿朗,华晖,金鹏,晋鹏,敬曦,景明,景天,景浩,景行,景中,景逸,景彰,昆鹏,昆明,昆杰,昆雄,昆纶,鹏涛,鹏煊,景平,俊晖,君昊,昆琦,昆鹏,昆纬,昆宇,昆锐,昆卉,昆峰,昆颉,昆谊,轩昂,彦昌,曜坤,曜文,曜曦,曜灿,曜瑞,曦晨,曦之,新曦,鑫鹏,旭彬,旭尧,旭鹏,旭东,浩轩,浩瀚,浩慨,浩阔,鸿熙,鸿羲,鸿禧,鸿信,泽洋,泽雨,哲瀚,胤运,佑运,允晨,运恒,运发,云天,耘志,耘涛,振荣,振翱,中震,子辰,晗昱,瀚玥,瀚昂,瀚彭,景行,景中,景逸,景彰,绍晖,文景,曦哲,永昌,子昂,智宇,智晖,晗日,晗昱,瀚昂,昊硕,昊磊,昊东,鸿晖,绍晖,文昂,文景,曦哲,永昌,子昂,智宇,智晖,浩然,鸿运,辰龙,运珹,振宇,高朗,景平,鑫鹏,昌淼,炫明,昆皓,曜栋,文昂,治汇".split(
      ","
    );
  return randArr(first) + randArr(name);
}

function randArr(arrs) {
  var i = Math.floor(Math.random() * arrs.length);
  return arrs[i];
}

function randMobile() {
  var mobile = "13";
  for (var i = 0; i < 9; i++) {
    mobile = mobile + randArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
  return mobile;
}
