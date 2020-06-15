
import cnchar from 'cnchar';
import poly from 'cnchar-poly';
import order from 'cnchar-order';
import trad from 'cnchar-trad';
import draw from 'cnchar-draw';
import idiom from 'cnchar-idiom';
import xhy from 'cnchar-xhy';

cnchar.use(poly, order, trad, draw, idiom, xhy);
cnchar.draw('你好', {
    
});

// spell 功能
'测试'.spell(); // 返回 'CeShi'
'测试'.spell('up'); // 返回 'CESHI'
'测试'.spell('low'); // 返回 'ceshi'
'测试'.spell('first'); // 返回 'CS'
'测试'.spell('first', 'low'); // 返回 'cs'
'测试'.spell('array'); // 返回 ['Ce','Shi']
'测试'.spell('array', 'first', 'low'); // 返回 ['c','s']
'测试'.spell('tone'); // 返回 'CèShì'
'长大了'.spell('poly'); // 返回 '(Zhang|Chang)(Da|Dai)(Le|Liao)'

// stroke 功能
'测'.stroke(); // 返回 9
'测试'.stroke(); // 返回 17
'测试'.stroke('array'); // 返回 [9,8]

// spellToWord 功能
cnchar.spellToWord('shàng'); // 返回 "上尚绱"
cnchar.spellToWord('lv2'); // 返回 "驴闾榈"

// strokeToWord 功能
cnchar.strokeToWord(2); // 返回 "丁七乃乜九了二人亻儿入八冂几凵刀刁力勹"
'长大了'.spell(); // 返回 'ZhangDaLe'
'长大了'.spell('array'); // 返回 ["Zhang", "Da", "Le"]
'长大了'.spell('poly'); // 返回 '(Zhang|Chang)(Da|Dai)(Le|Liao)'
'一个'.stroke('order'); // 返回 ["j","slf"] 需要显式使用 order 参数 默认返回笔画数字母序列
'一个'.stroke('order', 'detail'); //
/* 返回详细笔画信息：
[
    [{
        "shape": "㇐",
        "type": "平笔",
        "foldCount": "0",
        "name": "横"
    }],[{
        "shape": "㇓",
        "type": "平笔",
        "foldCount": "0",
        "name": "撇"
    },{
        "shape": "㇏",
        "type": "平笔",
        "foldCount": "0",
        "name": "捺"
    },{
        "shape": "㇑",
        "type": "平笔",
        "foldCount": "0",
        "name": "竖"
    }]
]*/
'一个'.stroke('order', 'shape'); // 返回 [["㇐"],["㇓","㇏","㇑"]]
'一个'.stroke('order', 'name'); // 返回 [["横"],["撇", "捺", "竖"]]
'一个'.stroke('order', 'count'); // 返回 [1, 3]
cnchar.orderToWord.orders; // 查看支持的笔画名称
cnchar.orderToWord(['横', '撇', '捺']);
// 返回 "丈大"
cnchar.orderToWord(['横', '撇', '捺'], 'array');
// 返回 ["丈","大"]
cnchar.orderToWord(['横', '撇', '捺'], 'start');
// 返回 "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩奪奮遼"
cnchar.orderToWord(['横', '撇', '捺'], 'start', 'simple');
// 返回 "丈大太犬夯夸夺夼奁奄奈奋奔态奎耷套奢瓠鹩"
cnchar.orderToWord(['横', '撇', '捺'], 'match');
// 返回 "丈大仄兮友天太夫夭尺攵文木犬长丛仗仝叭..." // 省略后面的
cnchar.orderToWord(['横', '撇', '捺'], 'matchorder');
// 返回 "丈大仄友天太夫夭尺攵文木犬仗叭史央夯失..." // 省略后面的
cnchar.orderToWord(['横', '撇', '捺'], 'contain');
'一个人'.convertSimpleToTrad(); // 返回 "壹個人" 等价于 cnchar.convert.simpleToTrad
cnchar.convert.simpleToTrad('一个人');

'一个人'.convertSimpleToSpark(); // 返回 "①个亾" 等价于 cnchar.convert.simpleToSpark
cnchar.convert.simpleToSpark('一个人');

'壹個人'.convertTradToSimple(); // 返回 "一个人" 等价于 cnchar.convert.tradToSimple
cnchar.convert.tradToSimple('壹個人');

'壹個人'.convertTradToSpark(); // 返回 "①个亾" 等价于 cnchar.convert.tradToSpark
cnchar.convert.tradToSpark('壹個人');

'①个亾'.convertSparkToSimple(); // 返回 "一个人" 等价于 cnchar.convert.sparkToSimple
cnchar.convert.sparkToSimple('①个亾');

'①个亾'.convertSparkToTrad(); // 返回 "壹個人" 等价于 cnchar.convert.sparkToTrad
cnchar.convert.sparkToTrad('①个亾');
// spell 功能
'長大'.spell(); // 返回 'ZhangDa'
'長大'.spell('simple'); // 返回 '長Da' // 禁用繁体字拼音功能

// stroke 功能
'長大'.stroke('array'); // 返回 [8, 3]
'長大'.stroke('array', 'simple'); // 返回 [0, 3] // 禁用繁体字笔画功能
'長大'.stroke('order', 'shape'); // 返回 [["㇐","㇑","㇐","㇐","㇐","㇙","㇓","㇏"],["㇐","㇓","㇏"]]
'長大'.stroke('order', 'shape', 'simple'); // 返回 [undefined, ["㇐","㇓","㇏"]]
cnchar.idiom(['五', '', '十', '']); // ['五风十雨', '五光十色']
cnchar.idiom([4, 6, 2, 6], 'stroke'); // ['五光十色']
cnchar.idiom('shang', 'spell'); // ['伤风败化', '伤风败俗', ... ]
cnchar.idiom('shang4', 'spell', 'tone'); // ['伤风败化', '伤风败俗', ... ]
cnchar.xhy('大水冲了龙王庙'); // ['大水冲了龙王庙-自家人不识自家人', '大水冲了龙王庙-一家人不认一家人']
cnchar.xhy('大水', 'fuzzy'); // ['江河里长大水-泥沙俱下', '江河发大水-后浪推前浪', ... ]
cnchar.xhy('大水', 'fuzzy', 'answer'); // ['泥沙俱下', '后浪推前浪', ... ]
cnchar.xhy('上晃下摇', 'fuzzy', 'answer', 'second'); // ['醉汉过铁索桥', '扶着醉汉过破桥']
cnchar.spellInfo('shàng');
cnchar.isCnChar('a'); // false
cnchar.isCnChar('1'); // false
cnchar.isCnChar('？'); // false
cnchar.isCnChar('国'); // true
cnchar.isCnChar('國'); // true
cnchar.transformTone('lv2'); // {spell: 'lü', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true); // {spell: 'lǘ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lv2', true, 'up'); // {spell: 'LǗ', tone: 2, index: 2, isTrans: true}
cnchar.transformTone('lǘ'); // {spell: 'lü', tone: 2, index: 2, isTrans: false}
cnchar.spellInfo.initials;
// ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w']
cnchar.spellInfo.tones;
cnchar.compareSpell('ao', 'ai'); // 'more'
cnchar.compareSpell('ai', 'ai'); // 'even'
cnchar.compareSpell('pín', 'pǐn', true); // 'less'
cnchar.compareSpell('pin2', 'pǐn', true); // 'less'
cnchar.compareSpell('频', 'pǐn', true); // 'less'
cnchar.compareSpell('品', '频', true); // 'more'
cnchar.compareSpell('贫', '频', true); // 'even'
cnchar.compareStroke('你', '好'); // 'more'
cnchar.compareStroke('你', '苏'); // 'even'
cnchar.compareStroke('好', '苏'); // 'less'
cnchar.compareStroke('一个', '好'); // 'less'
cnchar.compareStroke('你', 14); // 'less'
cnchar.sortSpell(['你', '好', '吗']); // ['好', '吗', '你']
cnchar.sortSpell('你好吗'); // '好吗你'
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone'); // ['爱', '拼', '频', '品']
cnchar.sortSpell(['拼', '品', 'pin2', 'ai'], 'tone'); // ['ai', '拼', 'pin2', '品']
cnchar.sortSpell(['拼', '品', '频', '爱'], 'tone', 'desc'); // ['品', '频', '拼', '爱']
cnchar.sortSpell('拼品频爱', 'tone', 'desc'); // '品频拼爱'
cnchar.sortStroke(['一', '三', '二']); // ['一', '二', '三']
cnchar.sortStroke('一三二'); // '一二三'
cnchar.sortStroke(['一', '三', 2]); // ['一', 2, '三']
cnchar.sortStroke(['一', '三', '二'], 'desc'); // ['三', '二', '一']