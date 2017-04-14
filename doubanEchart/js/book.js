// echarts
const chartStore = {
    pie: null,
}

const optionForPie = function(data) {
    var option = {
        title: {
            text: '豆瓣图书 Top250地区占比',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '地区占比',
                type: 'pie',
                radius: '55%',
                center: ['50%', '45%'],
                data: data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    return option
}

const optionForArea = function(area) {
    const data = _.map(area, (v, k) => {
        const o = {
            name: k,
            value: v.length,
        }
        return o
    })
    const option = optionForPie(data)
    return option
}


const renderChart = function(d) {
    const data = d

    const area = _.groupBy(data, 'area')
    const areaOption = optionForArea(area)
    const pie = chartStore.pie
    pie.setOption(areaOption)

}

const bookJSON = function() {
    var d = [
      {
        "name": "追风筝的人",
        "score": "8.8",
        "quote": "为你，千千万万遍",
        "area": "美",
        "year": "2006",
        "ratings": "262949人评价"
      },
      {
        "name": "小王子",
        "score": "9.0",
        "quote": "献给长成了大人的孩子们",
        "area": "法",
        "year": "2003",
        "ratings": "216440人评价"
      },
      {
        "name": "围城",
        "score": "8.9",
        "quote": "对于“人艰不拆”四个字最彻底的违抗",
        "area": "中",
        "year": "1991",
        "ratings": "183077人评价"
      },
      {
        "name": "活着",
        "score": "9.1",
        "quote": "活着本身就是人生最大的意义",
        "area": "中",
        "year": "1998",
        "ratings": "124402人评价"
      },
      {
        "name": "解忧杂货店",
        "score": "8.6",
        "quote": "一碗精心熬制的东野牌鸡汤，拒绝很难",
        "area": "日",
        "year": "2014",
        "ratings": "195193人评价"
      },
      {
        "name": "白夜行",
        "score": "9.1",
        "quote": "暗夜独行的残破灵魂，爱与恶本就难分难舍",
        "area": "日",
        "year": "2008",
        "ratings": "181029人评价"
      },
      {
        "name": "挪威的森林",
        "score": "8.0",
        "quote": "村上之发轫，多少人的青春启蒙",
        "area": "日",
        "year": "2001",
        "ratings": "181332人评价"
      },
      {
        "name": "不能承受的生命之轻",
        "score": "8.5",
        "quote": "朝向媚俗的一次伟大的进军",
        "area": "捷克",
        "year": "2003",
        "ratings": "131723人评价"
      },
      {
        "name": "三体",
        "score": "8.8",
        "quote": "你我不过都是虫子",
        "area": "中",
        "year": "2008",
        "ratings": "131786人评价"
      },
      {
        "name": "嫌疑人X的献身",
        "score": "8.9",
        "quote": "数学好是一种极致的浪漫",
        "area": "日",
        "year": "2008",
        "ratings": "130939人评价"
      },
      {
        "name": "红楼梦",
        "score": "9.5",
        "quote": "谁解其中味？",
        "area": "中",
        "year": "1996",
        "ratings": "115765人评价"
      },
      {
        "name": "梦里花落知多少",
        "score": "7.2",
        "quote": "只是青春留下的余烬",
        "area": "中",
        "year": "2003",
        "ratings": "144144人评价"
      },
      {
        "name": "达·芬奇密码",
        "score": "8.2",
        "quote": "一切畅销的因素都有了",
        "area": "美",
        "year": "2004",
        "ratings": "124733人评价"
      },
      {
        "name": "看见",
        "score": "8.8",
        "quote": "在这里看见中国",
        "area": "中",
        "year": "2013",
        "ratings": "112571人评价"
      },
      {
        "name": "1988：我想和这个世界谈谈",
        "score": "7.9",
        "quote": "车手韩寒的公路小说",
        "area": "中",
        "year": "2010",
        "ratings": "118178人评价"
      },
      {
        "name": "何以笙箫默",
        "score": "8.0",
        "quote": "倒追有风险，入行需谨慎",
        "area": "中",
        "year": "2007",
        "ratings": "115879人评价"
      },
      {
        "name": "百年孤独",
        "score": "9.2",
        "quote": "尼采所谓的永劫复归，一场无始无终的梦魇",
        "area": "哥伦比亚",
        "year": "2011",
        "ratings": "101370人评价"
      },
      {
        "name": "平凡的世界（全三部）",
        "score": "9.0",
        "quote": "中国当代城乡生活全景",
        "area": "中",
        "year": "2005",
        "ratings": "95976人评价"
      },
      {
        "name": "简爱",
        "score": "8.5",
        "quote": "灰姑娘在十九世纪",
        "area": "英",
        "year": "2003",
        "ratings": "103668人评价"
      },
      {
        "name": "哈利·波特与魔法石",
        "score": "9.0",
        "quote": "羽加迪姆勒维奥萨！",
        "area": "英",
        "year": "2000",
        "ratings": "83933人评价"
      },
      {
        "name": "飘",
        "score": "9.3",
        "quote": "革命时期的爱情，随风而逝",
        "area": "美",
        "year": "2000",
        "ratings": "74865人评价"
      },
      {
        "name": "送你一颗子弹",
        "score": "8.6",
        "quote": "犀利又温柔，穿过胸口隐隐作痛",
        "area": "中",
        "year": "2010",
        "ratings": "84740人评价"
      },
      {
        "name": "三体Ⅱ",
        "score": "9.2",
        "quote": "无边的黑暗森林，比第一部更为恢弘壮丽",
        "area": "中",
        "year": "2008",
        "ratings": "78498人评价"
      },
      {
        "name": "天才在左 疯子在右",
        "score": "8.3",
        "quote": "简称“疯癫与文明”",
        "area": "中",
        "year": "2010",
        "ratings": "87018人评价"
      },
      {
        "name": "傲慢与偏见",
        "score": "8.8",
        "quote": "所有现代言情小说的母体",
        "area": "英",
        "year": "1993",
        "ratings": "81886人评价"
      },
      {
        "name": "倾城之恋",
        "score": "8.5",
        "quote": "一段姻缘，需要一座城的倾覆来成全",
        "area": "中",
        "year": "1997",
        "ratings": "84599人评价"
      },
      {
        "name": "三体Ⅲ",
        "score": "9.2",
        "quote": "终章，何去何从",
        "area": "中",
        "year": "2010",
        "ratings": "77691人评价"
      },
      {
        "name": "三重门",
        "score": "7.4",
        "quote": "“我是金子，我要发光的”",
        "area": "中",
        "year": "2000",
        "ratings": "93821人评价"
      },
      {
        "name": "杜拉拉升职记",
        "score": "7.8",
        "quote": "职场丛林生存手册",
        "area": "中",
        "year": "2007",
        "ratings": "88793人评价"
      },
      {
        "name": "明朝那些事儿（壹）",
        "score": "8.8",
        "quote": "历史本就是一件件“事儿”拼成的",
        "area": "中",
        "year": "2006",
        "ratings": "79043人评价"
      },
      {
        "name": "哈利·波特与阿兹卡班的囚徒",
        "score": "8.9",
        "quote": "小天狼星布莱克",
        "area": "英",
        "year": "2000",
        "ratings": "71243人评价"
      },
      {
        "name": "白夜行",
        "score": "9.2",
        "quote": "封面剧透",
        "area": "中",
        "year": "2013",
        "ratings": "73287人评价"
      },
      {
        "name": "目送",
        "score": "8.7",
        "quote": "不必追",
        "area": "中",
        "year": "2009",
        "ratings": "75965人评价"
      },
      {
        "name": "哈利·波特与密室",
        "score": "8.8",
        "quote": "渐入佳境，魔法世界全貌初现",
        "area": "英",
        "year": "2000",
        "ratings": "68952人评价"
      },
      {
        "name": "情人",
        "score": "8.1",
        "quote": "我已经老了，你呢？",
        "area": "法",
        "year": "2005",
        "ratings": "80952人评价"
      },
      {
        "name": "幻城",
        "score": "7.1",
        "quote": "如今的小四已经无法评价，往事犹可追",
        "area": "中",
        "year": "2003",
        "ratings": "88298人评价"
      },
      {
        "name": "致我们终将逝去的青春",
        "score": "7.9",
        "quote": "青春总是用残忍的方式提醒你它已退场",
        "area": "中",
        "year": "2007",
        "ratings": "79670人评价"
      },
      {
        "name": "万历十五年",
        "score": "8.9",
        "quote": "见微知著，历史观的颠覆",
        "area": "美",
        "year": "1997",
        "ratings": "56215人评价"
      },
      {
        "name": "1Q84 BOOK 1",
        "score": "8.3",
        "quote": "村上的野望，欢迎来到1Q84年",
        "area": "日",
        "year": "2010",
        "ratings": "75181人评价"
      },
      {
        "name": "独唱团（第一辑）",
        "score": "7.8",
        "quote": "独唱的人多了，也便成了团",
        "area": "中",
        "year": "2010",
        "ratings": "79291人评价"
      },
      {
        "name": "莲花",
        "score": "8.0",
        "quote": "三个生命的交逢，灵魅清冷",
        "area": "中",
        "year": "2006",
        "ratings": "76979人评价"
      },
      {
        "name": "狼图腾",
        "score": "8.3",
        "quote": "我们都是 狼的传人？",
        "area": "中",
        "year": "2004",
        "ratings": "74297人评价"
      },
      {
        "name": "微微一笑很倾城",
        "score": "8.1",
        "quote": "一场盛大的意淫",
        "area": "中",
        "year": "2009",
        "ratings": "75478人评价"
      },
      {
        "name": "我们仨",
        "score": "8.6",
        "quote": "平淡，坚忍，温情",
        "area": "中",
        "year": "2003",
        "ratings": "71833人评价"
      },
      {
        "name": "哈利·波特与火焰杯",
        "score": "8.9",
        "quote": "整个系列的分水岭，暗色渐浓",
        "area": "英",
        "year": "2001",
        "ratings": "69082人评价"
      },
      {
        "name": "边城",
        "score": "8.6",
        "quote": "如水一般的忧愁与怅惘",
        "area": "中",
        "year": "2002",
        "ratings": "65898人评价"
      },
      {
        "name": "向左走·向右走",
        "score": "8.4",
        "quote": "两条平行线相遇的可能",
        "area": "中",
        "year": "2002",
        "ratings": "69616人评价"
      },
      {
        "name": "月亮和六便士",
        "score": "8.9",
        "quote": "有多少人会经历顿悟，就有更少的人甘愿自我放逐",
        "area": "英",
        "year": "2006",
        "ratings": "64869人评价"
      },
      {
        "name": "穆斯林的葬礼",
        "score": "8.3",
        "quote": "时代烙印鲜明的民族史诗",
        "area": "中",
        "year": "1988",
        "ratings": "66606人评价"
      },
      {
        "name": "悲伤逆流成河",
        "score": "6.3",
        "quote": "少年不识愁滋味",
        "area": "中",
        "year": "2007",
        "ratings": "82252人评价"
      },
      {
        "name": "长安乱",
        "score": "7.4",
        "quote": "韩少也会借古喻今了",
        "area": "中",
        "year": "2004",
        "ratings": "72366人评价"
      },
      {
        "name": "天龙八部",
        "score": "9.1",
        "quote": "“有情皆孽，无人不冤”",
        "area": "中",
        "year": "1994",
        "ratings": "54403人评价"
      },
      {
        "name": "从你的全世界路过",
        "score": "7.2",
        "quote": "戳中了现代人的某些柔软之处",
        "area": "中",
        "year": "2013",
        "ratings": "73021人评价"
      },
      {
        "name": "Harry Potter and the Deathly Hallows",
        "score": "8.9",
        "quote": "final episode",
        "area": "中",
        "year": "2007",
        "ratings": "6775人评价"
      },
      {
        "name": "哈利·波特与混血王子",
        "score": "8.8",
        "quote": "感情线纷乱的一部。再见邓布利多",
        "area": "英",
        "year": "2005",
        "ratings": "60530人评价"
      },
      {
        "name": "一个人的好天气",
        "score": "7.6",
        "quote": "冬日暖阳的温煦感",
        "area": "日",
        "year": "2007",
        "ratings": "68487人评价"
      },
      {
        "name": "放学后",
        "score": "7.6",
        "quote": "东野圭吾处女作",
        "area": "日",
        "year": "2010",
        "ratings": "68623人评价"
      },
      {
        "name": "恶意",
        "score": "8.4",
        "quote": "无缘由的恨，冰冷彻骨",
        "area": "日",
        "year": "2009",
        "ratings": "62237人评价"
      },
      {
        "name": "活着",
        "score": "9.3",
        "quote": "生的苦难与伟大",
        "area": "中",
        "year": "2012",
        "ratings": "56216人评价"
      },
      {
        "name": "苏菲的世界",
        "score": "8.5",
        "quote": "最平易近人的哲学入门",
        "area": "中",
        "year": "1999",
        "ratings": "60280人评价"
      },
      {
        "name": "1995-2005夏至未至",
        "score": "7.4",
        "quote": "当青春遁入歧途",
        "area": "中",
        "year": "2005",
        "ratings": "67302人评价"
      },
      {
        "name": "许三观卖血记",
        "score": "8.7",
        "quote": "余华的悲凉，都在那一碗炒猪肝里了",
        "area": "中",
        "year": "1998",
        "ratings": "58274人评价"
      },
      {
        "name": "盗墓笔记",
        "score": "8.4",
        "quote": "想象奇诡的大型RPG游戏",
        "area": "中",
        "year": "2007",
        "ratings": "59073人评价"
      },
      {
        "name": "喜宝",
        "score": "8.1",
        "quote": "爱情才是终极的奢侈品",
        "area": "中",
        "year": "2007",
        "ratings": "41832人评价"
      },
      {
        "name": "哈利·波特与凤凰社",
        "score": "8.7",
        "quote": "暴脾气的哈利",
        "area": "英",
        "year": "2003",
        "ratings": "57092人评价"
      },
      {
        "name": "撒哈拉的故事",
        "score": "9.0",
        "quote": "关于漂泊的一切",
        "area": "中",
        "year": " TWD",
        "ratings": "55371人评价"
      },
      {
        "name": "三生三世 十里桃花",
        "score": "8.1",
        "quote": "大风刮过有话要说",
        "area": "中",
        "year": "2009",
        "ratings": "62053人评价"
      },
      {
        "name": "海边的卡夫卡",
        "score": "8.1",
        "quote": "背负诅咒的少年，平行世界中的奥德赛",
        "area": "日",
        "year": "2003",
        "ratings": "59633人评价"
      },
      {
        "name": "文化苦旅",
        "score": "7.8",
        "quote": "“历史文化散文”",
        "area": "中",
        "year": "2001",
        "ratings": "61593人评价"
      },
      {
        "name": "基督山伯爵",
        "score": "8.9",
        "quote": "完美的复仇，金庸用法语写作应该就是这样",
        "area": "中",
        "year": "1991",
        "ratings": "49366人评价"
      },
      {
        "name": "三国演义（全二册）",
        "score": "9.2",
        "quote": "是非成败转头空",
        "area": "中",
        "year": "1998",
        "ratings": "53358人评价"
      },
      {
        "name": "窗边的小豆豆",
        "score": "8.7",
        "quote": "真正懂孩子的教育经",
        "area": "日",
        "year": "2003",
        "ratings": "55693人评价"
      },
      {
        "name": "霍乱时期的爱情",
        "score": "8.9",
        "quote": "义无反顾地直达爱情的核心",
        "area": "哥伦比亚",
        "year": "2012",
        "ratings": "53877人评价"
      },
      {
        "name": "兄弟（上）",
        "score": "8.3",
        "quote": "历史苦难中的个人灾变",
        "area": "中",
        "year": "2005",
        "ratings": "56878人评价"
      },
      {
        "name": "黄金时代",
        "score": "8.8",
        "quote": "能把性爱写得如此坦荡的，大概只有王二了",
        "area": "中",
        "year": "1999",
        "ratings": "54160人评价"
      },
      {
        "name": "悟空传",
        "score": "8.4",
        "quote": "猴子还是那个猴子，世界早已不是原来的世界",
        "area": "中",
        "year": "2001",
        "ratings": "55509人评价"
      },
      {
        "name": "呼啸山庄",
        "score": "8.4",
        "quote": "近乎暴虐的爱与恨，中文译名后无来者",
        "area": "中",
        "year": "1999",
        "ratings": "55417人评价"
      },
      {
        "name": "笑傲江湖（全四册）",
        "score": "8.9",
        "quote": "武侠的壳，政治斗争的核",
        "area": "中",
        "year": "1994",
        "ratings": "48547人评价"
      },
      {
        "name": "民主的细节",
        "score": "8.6",
        "quote": "公民养成手册",
        "area": "中",
        "year": "2009",
        "ratings": "52305人评价"
      },
      {
        "name": "少有人走的路",
        "score": "8.3",
        "quote": "成熟的心智通向更完善的自我",
        "area": "美",
        "year": "2007",
        "ratings": "53105人评价"
      },
      {
        "name": "岛上书店",
        "score": "7.6",
        "quote": "爱书的人从不孤独",
        "area": "美",
        "year": "2015",
        "ratings": "57532人评价"
      },
      {
        "name": "亲爱的安德烈",
        "score": "8.7",
        "quote": "龙应台母子对话，两代人的思想碰撞",
        "area": "中",
        "year": "2008",
        "ratings": "51501人评价"
      },
      {
        "name": "灿烂千阳",
        "score": "8.7",
        "quote": "唯有希望与爱可以驱散阴霾",
        "area": "美",
        "year": "2007",
        "ratings": "49980人评价"
      },
      {
        "name": "遇见未知的自己",
        "score": "8.1",
        "quote": "都市灵修速成",
        "area": "中",
        "year": "2008",
        "ratings": "52951人评价"
      },
      {
        "name": "老人与海",
        "score": "8.3",
        "quote": "正是悲壮赋予生活以意义",
        "area": "中",
        "year": "1999",
        "ratings": "51664人评价"
      },
      {
        "name": "福尔摩斯探案全集（上中下）",
        "score": "9.2",
        "quote": "侦探小说鼻祖",
        "area": "英",
        "year": "1981",
        "ratings": "47469人评价"
      },
      {
        "name": "一九八四·动物农场",
        "score": "9.2",
        "quote": "一个预言和一个寓言，令人窒息的政治恐怖",
        "area": "英",
        "year": "2003",
        "ratings": "24217人评价"
      },
      {
        "name": "小时代1.0折纸时代",
        "score": "6.7",
        "quote": "温习了很多奢侈品品牌名称",
        "area": "中",
        "year": "2008",
        "ratings": "59085人评价"
      },
      {
        "name": "百年孤独",
        "score": "8.9",
        "quote": "拉丁美洲圣经",
        "area": "哥伦比亚",
        "year": "1989",
        "ratings": "46917人评价"
      },
      {
        "name": "牧羊少年奇幻之旅",
        "score": "8.6",
        "quote": "你自己就是最大的宝藏",
        "area": "巴西",
        "year": "2009",
        "ratings": "48083人评价"
      },
      {
        "name": "洛丽塔",
        "score": "7.7",
        "quote": "我的生命之光，我的欲望之火",
        "area": "美",
        "year": "2005",
        "ratings": "52213人评价"
      },
      {
        "name": "素年锦时",
        "score": "7.8",
        "quote": "呢喃自语，清简自持",
        "area": "中",
        "year": "2007",
        "ratings": "51111人评价"
      },
      {
        "name": "1Q84 BOOK 2",
        "score": "8.4",
        "quote": "情节铺展渐次清明，高潮序曲",
        "area": "日",
        "year": "2010",
        "ratings": "48383人评价"
      },
      {
        "name": "第一次的亲密接触",
        "score": "7.4",
        "quote": "那时候，去麦当劳约会还很高端……",
        "area": "中",
        "year": "1999",
        "ratings": "51993人评价"
      },
      {
        "name": "情书",
        "score": "8.6",
        "quote": "一场误会中的两段爱情，东方式的含蓄隐忍",
        "area": "日",
        "year": "2004",
        "ratings": "45971人评价"
      },
      {
        "name": "麦田里的守望者",
        "score": "7.9",
        "quote": "塞林格的麦田里，到处是坠落的青春",
        "area": "美",
        "year": "1997",
        "ratings": "49266人评价"
      },
      {
        "name": "一座城池",
        "score": "7.4",
        "quote": "可能是韩寒最好笑的小说",
        "area": "中",
        "year": "2006",
        "ratings": "50905人评价"
      },
      {
        "name": "神雕侠侣",
        "score": "8.8",
        "quote": "至情至性，情大于武",
        "area": "中",
        "year": "1994",
        "ratings": "44212人评价"
      },
      {
        "name": "彼岸花",
        "score": "7.8",
        "quote": "安妮宝贝第一部长篇，现实与虚构的重合",
        "area": "中",
        "year": "2001",
        "ratings": "48145人评价"
      },
      {
        "name": "他的国",
        "score": "7.5",
        "quote": "总有光芒将你引导到清澈的地方",
        "area": "中",
        "year": "2009",
        "ratings": "49697人评价"
      },
      {
        "name": "茶花女",
        "score": "8.1",
        "quote": "妓女应当拥有爱情吗？",
        "area": "中",
        "year": "1997",
        "ratings": "46429人评价"
      },
      {
        "name": "西决",
        "score": "8.0",
        "quote": "无关风月的非典型青春小说",
        "area": "中",
        "year": "2009",
        "ratings": "46236人评价"
      },
      {
        "name": "这些都是你给我的爱",
        "score": "8.4",
        "quote": "只言片语的温暖",
        "area": "中",
        "year": "2010",
        "ratings": "43339人评价"
      },
      {
        "name": "八月未央",
        "score": "7.5",
        "quote": "八月是一阵季风，生命是一场幻觉",
        "area": "中",
        "year": "2001",
        "ratings": "47619人评价"
      },
      {
        "name": "这些人，那些事",
        "score": "8.8",
        "quote": "平淡叙述下的惊心动魄",
        "area": "中",
        "year": "2011",
        "ratings": "41701人评价"
      },
      {
        "name": "东方快车谋杀案",
        "score": "9.0",
        "quote": "谋杀诡计惊人，波洛的抉择耐人寻味",
        "area": "英",
        "year": "2006",
        "ratings": "33754人评价"
      },
      {
        "name": "清醒纪",
        "score": "7.9",
        "quote": "遗忘就和记得一样是送给彼此的纪念",
        "area": "中",
        "year": "2004",
        "ratings": "44612人评价"
      },
      {
        "name": "明朝那些事儿（贰）",
        "score": "8.9",
        "quote": "万国来朝与北京保卫战，燃",
        "area": "中",
        "year": "2007",
        "ratings": "40042人评价"
      },
      {
        "name": "当我谈跑步时我谈些什么",
        "score": "8.1",
        "quote": "村上同志告诉我们，身体是革命的本钱",
        "area": "日",
        "year": "2009",
        "ratings": "43090人评价"
      },
      {
        "name": "挪威的森林",
        "score": "8.4",
        "quote": "初读是色情，再读是爱情，三读是世情",
        "area": "日",
        "year": "2007",
        "ratings": "41811人评价"
      },
      {
        "name": "蔡康永的说话之道",
        "score": "7.1",
        "quote": "会说话的人运气都不会太差",
        "area": "中",
        "year": "2010",
        "ratings": "47189人评价"
      },
      {
        "name": "陪安东尼度过漫长岁月",
        "score": "8.4",
        "quote": "真正的片段式写作",
        "area": "中",
        "year": "2008",
        "ratings": "41183人评价"
      },
      {
        "name": "芒果街上的小屋",
        "score": "7.8",
        "quote": "那些微尘般漂浮的生活",
        "area": "美",
        "year": "2006",
        "ratings": "43484人评价"
      },
      {
        "name": "一个陌生女人的来信",
        "score": "8.6",
        "quote": "暗恋的极致",
        "area": "奥",
        "year": "2007",
        "ratings": "40240人评价"
      },
      {
        "name": "羊脂球",
        "score": "8.1",
        "quote": "资产阶级的道貌岸然",
        "area": "中",
        "year": "2007",
        "ratings": "41739人评价"
      },
      {
        "name": "灌篮高手31",
        "score": "9.5",
        "quote": "全剧终",
        "area": "日",
        "year": "2005",
        "ratings": "26615人评价"
      },
      {
        "name": "鲁滨逊漂流记",
        "score": "8.0",
        "quote": "最早的荒野求生",
        "area": "英",
        "year": "2002",
        "ratings": "41906人评价"
      },
      {
        "name": "沉默的大多数",
        "score": "9.0",
        "quote": "沉默是沉默者的通行证",
        "area": "中",
        "year": "1997",
        "ratings": "37919人评价"
      },
      {
        "name": "撒哈拉的故事",
        "score": "9.2",
        "quote": "游荡的自由灵魂",
        "area": "中",
        "year": "2003",
        "ratings": "37076人评价"
      },
      {
        "name": "巴黎圣母院",
        "score": "8.3",
        "quote": "潜藏于残缺下的美与崇高",
        "area": "法",
        "year": "1982",
        "ratings": "40046人评价"
      },
      {
        "name": "偷影子的人",
        "score": "7.9",
        "quote": "为偷来的影子找到光芒",
        "area": "中",
        "year": "2012",
        "ratings": "41206人评价"
      },
      {
        "name": "麦田里的守望者",
        "score": "8.0",
        "quote": "反英雄霍尔顿的一生",
        "area": "美",
        "year": "2007",
        "ratings": "40331人评价"
      },
      {
        "name": "山楂树之恋",
        "score": "7.9",
        "quote": "明净单纯",
        "area": "中",
        "year": "2007",
        "ratings": "40534人评价"
      },
      {
        "name": "地下铁",
        "score": "8.3",
        "quote": "黑暗世界中的点滴亮光",
        "area": "中",
        "year": "2002",
        "ratings": "38909人评价"
      },
      {
        "name": "肖申克的救赎",
        "score": "9.1",
        "quote": "希望让人自由，电影实在太有名",
        "area": "美",
        "year": "2006",
        "ratings": "36292人评价"
      },
      {
        "name": "华胥引（全二册）",
        "score": "8.6",
        "quote": "现实不如梦中的圆满",
        "area": "中",
        "year": "2011",
        "ratings": "37740人评价"
      },
      {
        "name": "且听风吟",
        "score": "7.7",
        "quote": "我们通过孤独与世界沟通",
        "area": "日",
        "year": "2001",
        "ratings": "40231人评价"
      },
      {
        "name": "人生若只如初见",
        "score": "7.3",
        "quote": "是“何事秋风悲画扇”，不是西风",
        "area": "中",
        "year": "2006",
        "ratings": "41800人评价"
      },
      {
        "name": "钢铁是怎样炼成的",
        "score": "7.6",
        "quote": "激情燃烧的岁月，特殊年代的经典",
        "area": "苏",
        "year": "1996",
        "ratings": "40470人评价"
      },
      {
        "name": "嫌疑人X的献身",
        "score": "9.0",
        "quote": "东野说，这是最纯粹的爱情",
        "area": "中",
        "year": ".80元",
        "ratings": "35823人评价"
      },
      {
        "name": "白鹿原",
        "score": "8.6",
        "quote": "中国乡村史诗",
        "area": "中",
        "year": ".00元",
        "ratings": "36826人评价"
      },
      {
        "name": "红玫瑰与白玫瑰",
        "score": "8.4",
        "quote": "蚊子血还是饭黏子？",
        "area": "中",
        "year": "1996",
        "ratings": "37331人评价"
      },
      {
        "name": "安徒生童话故事集",
        "score": "9.1",
        "quote": "远不是童话那么简单",
        "area": "中",
        "year": "1997",
        "ratings": "34762人评价"
      },
      {
        "name": "鬼吹灯之精绝古城",
        "score": "8.1",
        "quote": "盗墓祖师名不虚传",
        "area": "中",
        "year": "25.0",
        "ratings": "37753人评价"
      },
      {
        "name": "呐喊",
        "score": "8.8",
        "quote": "新文学的第一声呐喊",
        "area": "中",
        "year": ".36元",
        "ratings": "35344人评价"
      },
      {
        "name": "泡沫之夏",
        "score": "7.0",
        "quote": "霸道总裁爱上我",
        "area": "中",
        "year": "2006",
        "ratings": "41411人评价"
      },
      {
        "name": "会有天使替我爱你",
        "score": "6.8",
        "quote": "理想化",
        "area": "中",
        "year": "2005",
        "ratings": "42437人评价"
      },
      {
        "name": "小团圆",
        "score": "7.6",
        "quote": "自传性作品，团圆只存在幻灭之中",
        "area": "中",
        "year": "2009",
        "ratings": "39377人评价"
      },
      {
        "name": "年华是无效信",
        "score": "7.6",
        "quote": "女生间的微妙友谊",
        "area": "中",
        "year": "2005",
        "ratings": "38829人评价"
      },
      {
        "name": "无声告白",
        "score": "8.2",
        "quote": "莉迪亚死了，可他们还不知道",
        "area": "美",
        "year": "2015",
        "ratings": "36663人评价"
      },
      {
        "name": "在路上",
        "score": "7.8",
        "quote": "我们非去不可，在到达之前，永不停止",
        "area": "美",
        "year": "2006",
        "ratings": "37577人评价"
      },
      {
        "name": "月亮忘記了",
        "score": "8.5",
        "quote": "月明星稀的晚上，看不见的，看见了",
        "area": "中",
        "year": "2000",
        "ratings": "34947人评价"
      },
      {
        "name": "人间失格",
        "score": "8.3",
        "quote": "令人无从怜悯的绝望",
        "area": "中",
        "year": ".00元",
        "ratings": "35936人评价"
      },
      {
        "name": "射雕英雄传（全四册）",
        "score": "8.9",
        "quote": "侠之大者，为国为民",
        "area": "中",
        "year": "1999",
        "ratings": "31718人评价"
      },
      {
        "name": "哭泣的骆驼",
        "score": "8.9",
        "quote": "沙漠中寻常的生与死",
        "area": "中",
        "year": "2003",
        "ratings": "29351人评价"
      },
      {
        "name": "原来你还在这里",
        "score": "7.7",
        "quote": "还在的只有回忆",
        "area": "中",
        "year": "2007",
        "ratings": "37134人评价"
      },
      {
        "name": "明朝那些事儿（叁）",
        "score": "8.9",
        "quote": "圣人般的王守仁，大娱乐家朱厚照",
        "area": "中",
        "year": "2007",
        "ratings": "33315人评价"
      },
      {
        "name": "此间的少年",
        "score": "8.3",
        "quote": "象牙塔里的金庸群侠",
        "area": "中",
        "year": "2004",
        "ratings": "34715人评价"
      },
      {
        "name": "货币战争",
        "score": "7.3",
        "quote": "无所不能的罗斯柴尔德家族",
        "area": "中",
        "year": "2007",
        "ratings": "38495人评价"
      },
      {
        "name": "幻夜",
        "score": "7.6",
        "quote": "《白夜行》续篇，恶的幻夜吞噬一切",
        "area": "中",
        "year": ".00元",
        "ratings": "37250人评价"
      },
      {
        "name": "半生缘",
        "score": "8.6",
        "quote": "世钧，我们回不去了",
        "area": "中",
        "year": "2006",
        "ratings": "33811人评价"
      },
      {
        "name": "佳期如梦",
        "score": "8.0",
        "quote": "玛丽苏成人童话",
        "area": "中",
        "year": "2007",
        "ratings": "35486人评价"
      },
      {
        "name": "一個人住第5年",
        "score": "8.4",
        "quote": "独居生活之乐",
        "area": "中",
        "year": "2004",
        "ratings": "34010人评价"
      },
      {
        "name": "明朝那些事儿（1-9）",
        "score": "9.1",
        "quote": "不拘一格的历史书写",
        "area": "中",
        "year": "2009",
        "ratings": "31937人评价"
      },
      {
        "name": "告别薇安",
        "score": "7.5",
        "quote": "七月与安生",
        "area": "中",
        "year": "2000",
        "ratings": "36898人评价"
      },
      {
        "name": "时间旅行者的妻子",
        "score": "8.1",
        "quote": "在时间的缝隙中穿行，然后相遇",
        "area": "美",
        "year": "2007",
        "ratings": "34784人评价"
      },
      {
        "name": "常识",
        "score": "8.1",
        "quote": "献给这个常识稀缺的时代",
        "area": "中",
        "year": "2009",
        "ratings": "34495人评价"
      },
      {
        "name": "二三事",
        "score": "7.7",
        "quote": "关于遗忘和记得的故事",
        "area": "中",
        "year": "2004",
        "ratings": "35396人评价"
      },
      {
        "name": "步步惊心",
        "score": "8.1",
        "quote": "现世太苦，不如穿越回去从头来过",
        "area": "中",
        "year": "2006",
        "ratings": "34049人评价"
      },
      {
        "name": "了不起的盖茨比",
        "score": "8.3",
        "quote": "梦，就像黛西家的那一缕绿光",
        "area": "中",
        "year": "2004",
        "ratings": "33447人评价"
      },
      {
        "name": "无人生还",
        "score": "8.9",
        "quote": "童谣杀人案",
        "area": "英",
        "year": "2008",
        "ratings": "31748人评价"
      },
      {
        "name": "1984",
        "score": "9.3",
        "quote": "栗树荫下，我出卖你，你出卖我",
        "area": "英",
        "year": "2010",
        "ratings": "30782人评价"
      },
      {
        "name": "兄弟（下）",
        "score": "7.5",
        "quote": "失控边缘的下部，但谁说荒诞就是不真",
        "area": "中",
        "year": "2006",
        "ratings": "35973人评价"
      },
      {
        "name": "孤独六讲",
        "score": "8.1",
        "quote": "作为一种美学的孤独",
        "area": "中",
        "year": "2009",
        "ratings": "33441人评价"
      },
      {
        "name": "失恋33天",
        "score": "8.0",
        "quote": "失恋是一种病，痊愈之后百毒不侵",
        "area": "中",
        "year": "2010",
        "ratings": "33457人评价"
      },
      {
        "name": "盗墓笔记2",
        "score": "8.2",
        "quote": "秦岭神树细思极恐",
        "area": "中",
        "year": "2007",
        "ratings": "32567人评价"
      },
      {
        "name": "爱你就像爱生命",
        "score": "8.8",
        "quote": "王小波与李银河的两地书",
        "area": "中",
        "year": "2008",
        "ratings": "31179人评价"
      },
      {
        "name": "明朝那些事儿（肆）",
        "score": "8.8",
        "quote": "大明朝当真名士如云",
        "area": "中",
        "year": "2007",
        "ratings": "30730人评价"
      },
      {
        "name": "左耳",
        "score": "7.1",
        "quote": "当时只道是寻常",
        "area": "中",
        "year": "2006",
        "ratings": "36109人评价"
      },
      {
        "name": "鹿鼎记（全五册）",
        "score": "8.8",
        "quote": "武侠的解构，流氓的狂欢",
        "area": "中",
        "year": "2008",
        "ratings": "26900人评价"
      },
      {
        "name": "撒哈拉的故事",
        "score": "9.3",
        "quote": "不枉来这世上走一遭",
        "area": "中",
        "year": "2011",
        "ratings": "29446人评价"
      },
      {
        "name": "左手倒影，右手年华。",
        "score": "6.7",
        "quote": "明媚啊明媚",
        "area": "中",
        "year": "2003",
        "ratings": "37341人评价"
      },
      {
        "name": "零下一度",
        "score": "7.2",
        "quote": "青春期习作",
        "area": "中",
        "year": "2000",
        "ratings": "35368人评价"
      },
      {
        "name": "荆棘鸟",
        "score": "8.6",
        "quote": "澳洲乱世情",
        "area": "澳",
        "year": "1998",
        "ratings": "30775人评价"
      },
      {
        "name": "像少年啦飞驰",
        "score": "7.3",
        "quote": "属于少年的日子飞驰而过",
        "area": "中",
        "year": "2002",
        "ratings": "34917人评价"
      },
      {
        "name": "动物农场",
        "score": "9.2",
        "quote": "太阳底下并无新事",
        "area": "英",
        "year": "2007",
        "ratings": "29381人评价"
      },
      {
        "name": "乌合之众",
        "score": "8.3",
        "quote": "群氓心理剖析",
        "area": "中",
        "year": "1998",
        "ratings": "31522人评价"
      },
      {
        "name": "被窝是青春的坟墓",
        "score": "7.8",
        "quote": "“要有最朴素的生活，与最遥远的梦想“",
        "area": "中",
        "year": "2007",
        "ratings": "32780人评价"
      },
      {
        "name": "寻路中国",
        "score": "9.0",
        "quote": "中国在路上，非虚构写作所能达到的高度",
        "area": "美",
        "year": "2011",
        "ratings": "29355人评价"
      },
      {
        "name": "我们台湾这些年",
        "score": "7.4",
        "quote": "平民视角下的台湾大事记",
        "area": "中",
        "year": "2009",
        "ratings": "33824人评价"
      },
      {
        "name": "皮囊",
        "score": "7.8",
        "quote": "皮囊之下，骨肉相连",
        "area": "中",
        "year": "2014",
        "ratings": "32539人评价"
      },
      {
        "name": "关于莉莉周的一切",
        "score": "7.7",
        "quote": "残酷青春的艰难呼吸",
        "area": "日",
        "year": "2006",
        "ratings": "32538人评价"
      },
      {
        "name": "机器猫哆啦A梦23",
        "score": "9.4",
        "quote": "满满的回忆",
        "area": "中",
        "year": "1999",
        "ratings": "27592人评价"
      },
      {
        "name": "1Q84 BOOK 3",
        "score": "7.6",
        "quote": "兜了一大圈，村上还是回归了他的小确幸",
        "area": "日",
        "year": "2011",
        "ratings": "32099人评价"
      },
      {
        "name": "大地之灯",
        "score": "8.2",
        "quote": "两代人的成长与救赎",
        "area": "中",
        "year": "2007",
        "ratings": "30080人评价"
      },
      {
        "name": "阿Q正传",
        "score": "8.6",
        "quote": "哀其不幸，怒其不争",
        "area": "中",
        "year": "2003",
        "ratings": "28771人评价"
      },
      {
        "name": "格林童话全集",
        "score": "8.9",
        "quote": "许多隐晦",
        "area": "中",
        "year": "1994",
        "ratings": "28133人评价"
      },
      {
        "name": "麦琪的礼物",
        "score": "8.6",
        "quote": "日常的奇迹",
        "area": "美",
        "year": "2003",
        "ratings": "28873人评价"
      },
      {
        "name": "盗墓笔记3",
        "score": "8.4",
        "quote": "逼近死亡的云顶天宫之旅",
        "area": "中",
        "year": "2007",
        "ratings": "28978人评价"
      },
      {
        "name": "明朝那些事儿（伍）",
        "score": "8.8",
        "quote": "内忧外患之际，你方唱罢我登场",
        "area": "中",
        "year": "2008",
        "ratings": "27968人评价"
      },
      {
        "name": "水仙已乘鲤鱼去",
        "score": "7.8",
        "quote": "暴食与减肥的桥段印象深刻",
        "area": "中",
        "year": "2005",
        "ratings": "30549人评价"
      },
      {
        "name": "尘埃落定",
        "score": "8.4",
        "quote": "一个傻子的土司家族传奇",
        "area": "中",
        "year": "1998",
        "ratings": "28722人评价"
      },
      {
        "name": "当我们谈论爱情时我们在谈论什么",
        "score": "7.8",
        "quote": "疏离而断裂，生活的冷与干涩",
        "area": "美",
        "year": "2010",
        "ratings": "30353人评价"
      },
      {
        "name": "骆驼祥子",
        "score": "8.2",
        "quote": "如骆驼喘息般深刻的绝望",
        "area": "中",
        "year": "2000",
        "ratings": "29201人评价"
      },
      {
        "name": "黄金时代",
        "score": "8.8",
        "quote": "永远生猛下去",
        "area": "中",
        "year": "2009",
        "ratings": "27701人评价"
      },
      {
        "name": "历史深处的忧虑",
        "score": "9.0",
        "quote": "窥见美国社会的一扇窗",
        "area": "中",
        "year": "1997",
        "ratings": "27216人评价"
      },
      {
        "name": "乖，摸摸头",
        "score": "7.5",
        "quote": "他人的生活总是比你的精彩",
        "area": "中",
        "year": "2014",
        "ratings": "30610人评价"
      },
      {
        "name": "小时代2.0虚铜时代",
        "score": "6.5",
        "quote": "淳朴自贡少年十里洋场欲海翻波为哪般",
        "area": "中",
        "year": "2010",
        "ratings": "33901人评价"
      },
      {
        "name": "如何阅读一本书",
        "score": "8.5",
        "quote": "读书的方法论",
        "area": "美",
        "year": "2004",
        "ratings": "28012人评价"
      },
      {
        "name": "海贼王",
        "score": "9.5",
        "quote": "热血，梦想，希望",
        "area": "中",
        "year": "2007",
        "ratings": "25554人评价"
      },
      {
        "name": "东霓",
        "score": "8.1",
        "quote": "自毁而偏执的东霓",
        "area": "中",
        "year": "2010",
        "ratings": "28487人评价"
      },
      {
        "name": "你好，旧时光（上 下）",
        "score": "8.8",
        "quote": "原作名切题",
        "area": "中",
        "year": "2009",
        "ratings": "26882人评价"
      },
      {
        "name": "金锁记",
        "score": "8.5",
        "quote": "曹七巧就像希克厉，一个扭曲的英雄",
        "area": "中",
        "year": "3.5元",
        "ratings": "27594人评价"
      },
      {
        "name": "巴别塔之犬",
        "score": "7.7",
        "quote": "超越语言与生死的爱",
        "area": "美",
        "year": "2007",
        "ratings": "29244人评价"
      },
      {
        "name": "橙",
        "score": "8.3",
        "quote": "定做一个刻着“不过如此”的章，盖在封面上",
        "area": "中",
        "year": "2010",
        "ratings": "27412人评价"
      },
      {
        "name": "悲惨世界（上中下）",
        "score": "8.9",
        "quote": "现实主义与浪漫主义的至高杰作",
        "area": "法",
        "year": "1992",
        "ratings": "26119人评价"
      },
      {
        "name": "那些回不去的年少时光",
        "score": "8.5",
        "quote": "所有你曾热爱却正在遗忘的人和事",
        "area": "中",
        "year": "2010",
        "ratings": "26652人评价"
      },
      {
        "name": "盗墓笔记4",
        "score": "8.4",
        "quote": "蛇沼鬼城，坑越挖越多了",
        "area": "中",
        "year": "2008",
        "ratings": "26967人评价"
      },
      {
        "name": "香水",
        "score": "8.5",
        "quote": "恋味癖谋杀案",
        "area": "德",
        "year": "2005",
        "ratings": "26747人评价"
      },
      {
        "name": "人类简史",
        "score": "9.2",
        "quote": "",
        "area": "以色列",
        "year": "2014",
        "ratings": "25899人评价"
      },
      {
        "name": "梦里花落知多少",
        "score": "8.8",
        "quote": "哀而不伤",
        "area": "中",
        "year": "2007",
        "ratings": "25813人评价"
      },
      {
        "name": "孩子你慢慢来",
        "score": "8.8",
        "quote": "我们现在怎样做母亲",
        "area": "中",
        "year": "2009",
        "ratings": "25858人评价"
      },
      {
        "name": "看不见的城市",
        "score": "8.8",
        "quote": "每一座城市都只在想象中耸立，又在描述中坍圮",
        "area": "意大利",
        "year": "2006",
        "ratings": "25716人评价"
      },
      {
        "name": "匆匆那年（上下）",
        "score": "8.3",
        "quote": "不悔梦归处 只恨太匆匆",
        "area": "中",
        "year": "2008",
        "ratings": "26603人评价"
      },
      {
        "name": "草样年华",
        "score": "7.2",
        "quote": "大学生活启蒙读物",
        "area": "中",
        "year": "2004",
        "ratings": "29531人评价"
      },
      {
        "name": "史蒂夫·乔布斯传",
        "score": "8.7",
        "quote": "完美主义者的最高形态",
        "area": "美",
        "year": "2011",
        "ratings": "25718人评价"
      },
      {
        "name": "一只特立独行的猪",
        "score": "8.8",
        "quote": "生活就是个缓慢受锤的过程，至少还可以特立独行",
        "area": "中",
        "year": "2006",
        "ratings": "25551人评价"
      },
      {
        "name": "蔷薇岛屿",
        "score": "8.0",
        "quote": "你们不会彼此遗忘。只会彼此消失",
        "area": "中",
        "year": "2002",
        "ratings": "27192人评价"
      },
      {
        "name": "我的路",
        "score": "8.6",
        "quote": "忧郁的温暖",
        "area": "中",
        "year": "2004",
        "ratings": "25704人评价"
      },
      {
        "name": "长恨歌",
        "score": "8.2",
        "quote": "现代上海史诗",
        "area": "中",
        "year": "2003",
        "ratings": "26655人评价"
      },
      {
        "name": "往事并不如烟",
        "score": "8.6",
        "quote": "知识分子的命运浮沉",
        "area": "中",
        "year": "2004",
        "ratings": "25738人评价"
      },
      {
        "name": "倾城之恋",
        "score": "8.7",
        "quote": "棋逢对手，心照不宣",
        "area": "中",
        "year": "2006",
        "ratings": "25267人评价"
      },
      {
        "name": "菊与刀",
        "score": "8.2",
        "quote": "复杂矛盾的日本民族",
        "area": "中",
        "year": "1990",
        "ratings": "25947人评价"
      },
      {
        "name": "飞鸟集",
        "score": "8.8",
        "quote": "淡泊，超脱",
        "area": "印",
        "year": "2004",
        "ratings": "24625人评价"
      },
      {
        "name": "球状闪电",
        "score": "8.7",
        "quote": "量子之外，没有真相",
        "area": "中",
        "year": "2005",
        "ratings": "24798人评价"
      },
      {
        "name": "谁动了我的奶酪？",
        "score": "7.2",
        "quote": "鸡汤文始祖",
        "area": "美",
        "year": "2001",
        "ratings": "28345人评价"
      },
      {
        "name": "七夜雪",
        "score": "8.5",
        "quote": "抵不过时间",
        "area": "中",
        "year": "2006",
        "ratings": "24975人评价"
      },
      {
        "name": "那些年，我们一起追的女孩",
        "score": "8.2",
        "quote": "那些年错过的大雨",
        "area": "中",
        "year": "2007",
        "ratings": "25596人评价"
      },
      {
        "name": "曾有一个人，爱我如生命",
        "score": "7.6",
        "quote": "一见嘉遇误终身",
        "area": "中",
        "year": "2009",
        "ratings": "26860人评价"
      },
      {
        "name": "摆渡人",
        "score": "6.8",
        "quote": "",
        "area": "英",
        "year": "2015",
        "ratings": "29429人评价"
      },
      {
        "name": "最初的爱情 最后的仪式",
        "score": "8.0",
        "quote": "别被封面骗了",
        "area": "英",
        "year": "2010",
        "ratings": "25701人评价"
      },
      {
        "name": "伊豆的舞女",
        "score": "8.1",
        "quote": "静美又残酷，无限柔软的川端",
        "area": "日",
        "year": "2002",
        "ratings": "25416人评价"
      },
      {
        "name": "世界尽头与冷酷仙境",
        "score": "8.5",
        "quote": "交叉平行蒙太奇",
        "area": "日",
        "year": "2002",
        "ratings": "24512人评价"
      },
      {
        "name": "刀锋",
        "score": "9.0",
        "quote": "",
        "area": "英",
        "year": "2007",
        "ratings": "23648人评价"
      },
      {
        "name": "佛祖在一号线",
        "score": "8.2",
        "quote": "嬉笑怒骂的常识分子",
        "area": "中",
        "year": "2010",
        "ratings": "25009人评价"
      },
      {
        "name": "一个人的朝圣",
        "score": "8.1",
        "quote": "",
        "area": "中",
        "year": "2013",
        "ratings": "25395人评价"
      },
      {
        "name": "天使与魔鬼",
        "score": "8.2",
        "quote": "科学与宗教的大乱斗",
        "area": "美",
        "year": "2005",
        "ratings": "25068人评价"
      },
      {
        "name": "杜拉拉2华年似水",
        "score": "7.3",
        "quote": "杜拉拉跳槽记",
        "area": "中",
        "year": "2009",
        "ratings": "27037人评价"
      },
      {
        "name": "阿狸·梦之城堡",
        "score": "9.0",
        "quote": "治愈",
        "area": "中",
        "year": "2009",
        "ratings": "23235人评价"
      },
      {
        "name": "傲慢与偏见",
        "score": "9.0",
        "quote": "百般曲折，终成眷属",
        "area": "英",
        "year": "1996",
        "ratings": "23325人评价"
      },
      {
        "name": "秘密",
        "score": "7.3",
        "quote": "吸引力法则",
        "area": "澳",
        "year": "2008",
        "ratings": "26908人评价"
      },
      {
        "name": "不朽",
        "score": "7.6",
        "quote": "所有须臾，化为不朽",
        "area": "中",
        "year": "2007",
        "ratings": "26116人评价"
      },
      {
        "name": "鬼吹灯之云南虫谷",
        "score": "8.0",
        "quote": "恐虫症慎入",
        "area": "中",
        "year": "2006",
        "ratings": "25210人评价"
      },
      {
        "name": "拆掉思维里的墙",
        "score": "7.9",
        "quote": "解放思想，实事求是",
        "area": "中",
        "year": "2010",
        "ratings": "25309人评价"
      },
      {
        "name": "明朝那些事儿（柒）：大结局",
        "score": "9.0",
        "quote": "大明崇祯万万年",
        "area": "中",
        "year": ".80元",
        "ratings": "23216人评价"
      },
      {
        "name": "把时间当作朋友",
        "score": "8.5",
        "quote": "",
        "area": "中",
        "year": "2009",
        "ratings": "24047人评价"
      },
      {
        "name": "倚天屠龙记(共四册)",
        "score": "8.5",
        "quote": "不识张郎是张郎",
        "area": "中",
        "year": "1999",
        "ratings": "24003人评价"
      },
      {
        "name": "明朝那些事儿（陆）",
        "score": "8.9",
        "quote": "党争不息，西山日薄",
        "area": "中",
        "year": "2008",
        "ratings": "23215人评价"
      },
      {
        "name": "ZOO",
        "score": "8.6",
        "quote": "噩梦中的一丝温度",
        "area": "日",
        "year": "2007",
        "ratings": "23611人评价"
      },
      {
        "name": "尘埃星球",
        "score": "7.3",
        "quote": "原来是耽美吗？",
        "area": "中",
        "year": "2009",
        "ratings": "26517人评价"
      }
    ]
    return d
}

const fetchMovies = function() {
    var d = bookJSON()
    renderChart(d)
}

const initedChart = function() {
    _.each(chartStore, (v, k) => {
        const element = document.getElementById(k)
        const chart = echarts.init(element)
        chartStore[k] = chart
    })
}

const __main = function() {
    initedChart()
    fetchMovies()
}

$(document).ready(function() {
    __main()
})
