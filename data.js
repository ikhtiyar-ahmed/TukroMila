// data.js
const quizData = [


// 1-3: 你 (nǐ - You)
{
    bn: "তুমি কি শিক্ষক?", 
    en: "Are you a teacher?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "是", p: "shì", m: "am/is/are", bm: "হয়/হও"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "এটা তোমার বই?", 
    en: "Is this your book?", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটা"}, 
        {h: "是", p: "shì", m: "am/is/are", bm: "হয়"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "的", p: "de", m: "possessive particle", bm: "(র/এর)"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},
{
    bn: "আমি তোমাকে ভালোবাসি।", 
    en: "I love you.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "爱", p: "ài", m: "love", bm: "ভালোবাসি"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তোমাকে"}
    ]
},

// 4-6: 好 (hǎo - Good)
{
    bn: "আজকের আবহাওয়া খুব ভালো।", 
    en: "Today's weather is very good.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "তোমার নাম কি?", 
    en: "What is your name?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম/ডাকা"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}, 
        {h: "名字", p: "míngzi", m: "name", bm: "নাম"}
    ]
},
{
    bn: "সে খুব ভালো মানুষ।", 
    en: "He is a very good person.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "am/is/are", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "জন(টি)"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},


// 7-9: 我 (wǒ - I/Me)
{
    bn: "আমি একজন ছাত্র।", 
    en: "I am a student.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "是", p: "shì", m: "am/is/are", bm: "হয়"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "আমি চাইনিজ খাবার পছন্দ করি।", 
    en: "I like Chinese food.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "菜", p: "cài", m: "food/dish", bm: "খাবার"}
    ]
},
{
    bn: "আমি এখন বাড়ি যাচ্ছি।", 
    en: "I am going home now.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "回", p: "huí", m: "return", bm: "ফেরা/যাওয়া"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়ি"}
    ]
},

// 10-12: 叫 (jiào - Called/To be named)
{
    bn: "তোমার নাম কি?", 
    en: "What are you called?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম/ডাকা"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}, 
        {h: "名字", p: "míngzi", m: "name", bm: "নাম"}
    ]
},
{
    bn: "আমাকে Li Dake বলে ডাকে।", 
    en: "I am called Li Dake.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম/ডাকা"}, 
        {h: "李大可", p: "Lǐ Dàkě", m: "Li Dake", bm: "লি দাকো"}
    ]
},
{
    bn: "ওকে কি বলে ডাকো?", 
    en: "What do you call him?", 
    words: [
        {h: "他", p: "tā", m: "him", bm: "ওকে"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম/ডাকা"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},

// 13-15: 请问 (qǐngwèn - Excuse me / May I ask)
{
    bn: "মাফ করবেন, এটা কত টাকা?", 
    en: "Excuse me, how much is this?", 
    words: [
        {h: "请问", p: "qǐngwèn", m: "excuse me", bm: "মাফ করবেন/জিজ্ঞাসা করি"}, 
        {h: "这", p: "zhè", m: "this", bm: "এটা"}, 
        {h: "多少", p: "duōshǎo", m: "how much", bm: "কত"}, 
        {h: "钱", p: "qián", m: "money", bm: "টাকা"}
    ]
},
{
    bn: "মাফ করবেন, বাথরুম কোথায়?", 
    en: "Excuse me, where is the bathroom?", 
    words: [
        {h: "请问", p: "qǐngwèn", m: "excuse me", bm: "মাফ করবেন/জিজ্ঞাসা করি"}, 
        {h: "厕所", p: "cèsuǒ", m: "bathroom", bm: "বাথরুম"}, 
        {h: "在", p: "zài", m: "at/in", bm: "আছে"}, 
        {h: "哪里", p: "nǎlǐ", m: "where", bm: "কোথায়"}
    ]
},
{
    bn: "মাফ করবেন, আমি কি এখানে বসতে পারি?", 
    en: "Excuse me, may I sit here?", 
    words: [
        {h: "请问", p: "qǐngwèn", m: "excuse me", bm: "মাফ করবেন/জিজ্ঞাসা করি"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "可以", p: "kěyǐ", m: "can/may", bm: "পারি"}, 
        {h: "坐", p: "zuò", m: "sit", bm: "বসা"}, 
        {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}
    ]
},

// 16-18: 请 (qǐng - Please/To invite)
{
    bn: "দয়া করে বসুন।", 
    en: "Please sit down.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "坐", p: "zuò", m: "sit", bm: "বসা"}
    ]
},
{
    bn: "দয়া করে আমাকে বলুন।", 
    en: "Please tell me.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "告诉", p: "gàosu", m: "tell", bm: "বলা"}, 
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"}
    ]
},
{
    bn: "দয়া করে পানি দিন।", 
    en: "Please give me some water.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করা"}, 
        {h: "水", p: "shuǐ", m: "water", bm: "পানি"}
    ]
},

// 19-21: 问 (wèn - To ask)
{
    bn: "আমি তোমাকে একটা প্রশ্ন করতে চাই।", 
    en: "I want to ask you a question.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "问", p: "wèn", m: "ask", bm: "প্রশ্ন করা"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তোমাকে"}, 
        {h: "一个", p: "yí gè", m: "one", bm: "একটা"}, 
        {h: "问题", p: "wèntí", m: "question", bm: "প্রশ্ন"}
    ]
},
{
    bn: "আপনি শিক্ষককে জিজ্ঞেস করতে পারেন।", 
    en: "You can ask the teacher.", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি/তুমি"}, 
        {h: "可以", p: "kěyǐ", m: "can", bm: "পারি"}, 
        {h: "问", p: "wèn", m: "ask", bm: "জিজ্ঞেস করা"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "সে আমাকে রাস্তা জিজ্ঞেস করল।", 
    en: "He asked me for directions.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "问", p: "wèn", m: "ask", bm: "জিজ্ঞেস করা"}, 
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"}, 
        {h: "路", p: "lù", m: "road/way", bm: "রাস্তা"}
    ]
},

// 22-24: 什么 (shénme - What)
{
    bn: "এটা কি?", 
    en: "What is this?", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},
{
    bn: "আপনি কি খেতে চান?", 
    en: "What do you want to eat?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চান"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খাওয়া"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},
{
    bn: "তুমি কিসের কথা বলছ?", 
    en: "What are you talking about?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "在", p: "zài", m: "particle", bm: "(বর্তমান কাল)"}, 
        {h: "说", p: "shuō", m: "speak", bm: "বলা"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},

// 25-27: 名字 (míngzi - Name)
{
    bn: "তোমার নাম কি?", 
    en: "What is your name?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম/ডাকা"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}, 
        {h: "名字", p: "míngzi", m: "name", bm: "নাম"}
    ]
},
{
    bn: "আমার নাম লি।", 
    en: "My name is Li.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "的", p: "de", m: "possessive particle", bm: "(র/এর)"}, 
        {h: "名字", p: "míngzi", m: "name", bm: "নাম"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "李", p: "Lǐ", m: "Li (surname)", bm: "লি"}
    ]
},
{
    bn: "তার নাম খুব সুন্দর।", 
    en: "His name is very beautiful.", 
    words: [
        {h: "他", p: "tā", m: "his", bm: "তার"}, 
        {h: "的", p: "de", m: "possessive particle", bm: "(র/এর)"}, 
        {h: "名字", p: "míngzi", m: "name", bm: "নাম"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},

// 28-30: 姓 (xìng - Surname)
{
    bn: "আপনার পারিবারিক নাম কি?", 
    en: "What is your surname?", 
    words: [
        {h: "您", p: "nín", m: "you (polite)", bm: "আপনার"}, 
        {h: "贵", p: "guì", m: "noble/expensive", bm: "(সম্মানসূচক)"}, 
        {h: "姓", p: "xìng", m: "surname", bm: "নাম/পারিবারিক নাম"}
    ]
},
{
    bn: "আমার পারিবারিক নাম লি।", 
    en: "My surname is Li.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "姓", p: "xìng", m: "surname is", bm: "পারিবারিক নাম"}, 
        {h: "李", p: "Lǐ", m: "Li", bm: "লি"}
    ]
},
{
    bn: "তার পারিবারিক নাম কি?", 
    en: "What is his surname?", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে/তার"}, 
        {h: "姓", p: "xìng", m: "surname is", bm: "পারিবারিক নাম"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},


// 31-33: 认识 (rènshi - To know/To recognize)
{
    bn: "আমি তোমাকে চিনি না।", 
    en: "I do not know you.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চিনি"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তোমাকে"}
    ]
},
{
    bn: "আপনার সাথে দেখা করে খুশি হলাম।", 
    en: "Nice to meet you.", 
    words: [
        {h: "很高兴", p: "hěn gāoxìng", m: "very happy", bm: "খুব খুশি"}, 
        {h: "认识", p: "rènshi", m: "know/meet", bm: "দেখা/চেনা"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তোমার সাথে"}
    ]
},
{
    bn: "তুমি কি তাকে চেনো?", 
    en: "Do you know him?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চেনো"}, 
        {h: "他", p: "tā", m: "him", bm: "তাকে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},

// 34-36: 很 (hěn - Very)
{
    bn: "আজ খুব গরম।", 
    en: "It is very hot today.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "热", p: "rè", m: "hot", bm: "গরম"}
    ]
},
{
    bn: "সে খুব ব্যস্ত।", 
    en: "He is very busy.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "এই বইটি খুব ভালো।", 
    en: "This book is very good.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "本", p: "běn", m: "measure word", bm: "টি"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},

// 37-39: 高兴 (gāoxìng - Happy)
{
    bn: "আজ আমি খুব খুশি।", 
    en: "I am very happy today.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "高兴", p: "gāoxìng", m: "happy", bm: "খুশি"}
    ]
},
{
    bn: "সে তোমাকে দেখে খুশি হয়েছে।", 
    en: "He is happy to see you.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "见", p: "jiàn", m: "see", bm: "দেখে"}, 
        {h: "到", p: "dào", m: "result", bm: "ফলাফল"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তোমাকে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "高兴", p: "gāoxìng", m: "happy", bm: "খুশি"}
    ]
},
{
    bn: "কেন তুমি খুশি নও?", 
    en: "Why are you not happy?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "为什么", p: "wèishénme", m: "why", bm: "কেন"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "高兴", p: "gāoxìng", m: "happy", bm: "খুশি"}
    ]
},

// 40-42: 也 (yě - Also/Too)
{
    bn: "আমিও চাইনিজ খাবার পছন্দ করি।", 
    en: "I also like Chinese food.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "也", p: "yě", m: "also", bm: "ও(ওজন)"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},
{
    bn: "সেও শিক্ষক।", 
    en: "He is also a teacher.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "也", p: "yě", m: "also", bm: "ও(ওজন)"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "আমিও আগামীকাল যাব।", 
    en: "I will also go tomorrow.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "也", p: "yě", m: "also", bm: "ও(ওজন)"}, 
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "去", p: "qù", m: "go", bm: "যাব"}
    ]
},

// 43-45: 马大为 (Mǎ Dàwéi - A proper name)
{
    bn: "মা দা উয়েই আমেরিকান।", 
    en: "Ma Dawei is American.", 
    words: [
        {h: "马大为", p: "Mǎ Dàwéi", m: "Ma Dawei", bm: "মা দা উয়েই"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "美国人", p: "měiguórén", m: "American", bm: "আমেরিকান"}
    ]
},
{
    bn: "আমি মা দা উয়েই-কে চিনি।", 
    en: "I know Ma Dawei.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চিনি"}, 
        {h: "马大为", p: "Mǎ Dàwéi", m: "Ma Dawei", bm: "মা দা উয়েই"}
    ]
},
{
    bn: "মা দা উয়েই কোথায়?", 
    en: "Where is Ma Dawei?", 
    words: [
        {h: "马大为", p: "Mǎ Dàwéi", m: "Ma Dawei", bm: "মা দা উয়েই"}, 
        {h: "在", p: "zài", m: "at/in", bm: "আছে"}, 
        {h: "哪里", p: "nǎlǐ", m: "where", bm: "কোথায়"}
    ]
},

// 46-48: 宋华 (Sòng Huá - A proper name)
{
    bn: "সোং হুয়া একজন ছাত্র।", 
    en: "Song Hua is a student.", 
    words: [
        {h: "宋华", p: "Sòng Huá", m: "Song Hua", bm: "সোং হুয়া"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "সোং হুয়া খুব বুদ্ধিমান।", 
    en: "Song Hua is very smart.", 
    words: [
        {h: "宋华", p: "Sòng Huá", m: "Song Hua", bm: "সোং হুয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "聪明", p: "cōngming", m: "smart", bm: "বুদ্ধিমান"}
    ]
},
{
    bn: "আমি সোং হুয়া-র সাথে কথা বলছি।", 
    en: "I am talking to Song Hua.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "跟", p: "gēn", m: "with", bm: "সাথে"}, 
        {h: "宋华", p: "Sòng Huá", m: "Song Hua", bm: "সোং হুয়া"}, 
        {h: "说话", p: "shuōhuà", m: "talk", bm: "কথা বলছি"}
    ]
},

// 49-51: 在 (zài - At/In/On/Present)
{
    bn: "মা দা উয়েই ঘরে আছে।", 
    en: "Ma Dawei is in the room.", 
    words: [
        {h: "马大为", p: "Mǎ Dàwéi", m: "Ma Dawei", bm: "মা দা উয়েই"}, 
        {h: "在", p: "zài", m: "in", bm: "আছে/মধ্যে"}, 
        {h: "房间", p: "fángjiān", m: "room", bm: "ঘর"}
    ]
},
{
    bn: "আপনি কি এখন বাড়িতে আছেন?", 
    en: "Are you at home now?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "在", p: "zài", m: "at", bm: "আছে/অবস্থিত"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়ি"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "আমি হাসপাতালে আছি।", 
    en: "I am at the hospital.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "在", p: "zài", m: "at", bm: "আছে/অবস্থিত"}, 
        {h: "医院", p: "yīyuàn", m: "hospital", bm: "হাসপাতাল"}
    ]
},

// 52-54: 吗 (ma - Question particle)
{
    bn: "তুমি কি শিক্ষক?", 
    en: "Are you a teacher?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "是", p: "shì", m: "am/is/are", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "আপনার কি খিদে পেয়েছে?", 
    en: "Are you hungry?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"}, 
        {h: "饿", p: "è", m: "hungry", bm: "খিদে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "আপনি কি চাইনিজ বলতে পারেন?", 
    en: "Can you speak Chinese?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "会", p: "huì", m: "can", bm: "পারা"}, 
        {h: "说", p: "shuō", m: "speak", bm: "বলা"}, 
        {h: "中文", p: "zhōngwén", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},

// 55-57: 进 (jìn - To enter)
{
    bn: "দয়া করে ভেতরে আসুন।", 
    en: "Please come in.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "进", p: "jìn", m: "enter", bm: "ভেতরে আসা/প্রবেশ করা"}
    ]
},
{
    bn: "আমি ঘরে ঢুকছি।", 
    en: "I am entering the room.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "进", p: "jìn", m: "enter", bm: "প্রবেশ করা"}, 
        {h: "房间", p: "fángjiān", m: "room", bm: "ঘর"}
    ]
},
{
    bn: "এখানে ঢোকা নিষেধ।", 
    en: "No entry here.", 
    words: [
        {h: "这", p: "zhè", m: "here", bm: "এখানে"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "能", p: "néng", m: "can", bm: "পারা/যাওয়া"}, 
        {h: "进", p: "jìn", m: "enter", bm: "প্রবেশ করা"}
    ]
},


// 58-60: 坐 (zuò - To sit)
{
    bn: "দয়া করে বসুন।", 
    en: "Please sit down.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "坐", p: "zuò", m: "sit", bm: "বসা"}
    ]
},
{
    bn: "আমি বাসে করে যাচ্ছি।", 
    en: "I am going by bus.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "坐", p: "zuò", m: "sit/take", bm: "চড়ে/বাসে যাওয়া"}, 
        {h: "公车", p: "gōngchē", m: "bus", bm: "বাস"}
    ]
},
{
    bn: "দয়া করে এখানে বসুন।", 
    en: "Please sit here.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "坐", p: "zuò", m: "sit", bm: "বসা"}, 
        {h: "这儿", p: "zhèr", m: "here", bm: "এখানে"}
    ]
},

// 61-63: 谢谢 (xièxie - Thank you)
{
    bn: "আপনাকে অনেক ধন্যবাদ।", 
    en: "Thank you very much.", 
    words: [
        {h: "谢谢", p: "xièxie", m: "thank you", bm: "ধন্যবাদ"}, 
        {h: "你", p: "nǐ", m: "you", bm: "আপনাকে"}, 
        {h: "很", p: "hěn", m: "very", bm: "অনেক"}
    ]
},
{
    bn: "ধন্যবাদ, আমি ভালো আছি।", 
    en: "Thank you, I am fine.", 
    words: [
        {h: "谢谢", p: "xièxie", m: "thank you", bm: "ধন্যবাদ"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很好", p: "hěn hǎo", m: "very good", bm: "ভালো আছি"}
    ]
},
{
    bn: "সাহায্যের জন্য ধন্যবাদ।", 
    en: "Thanks for your help.", 
    words: [
        {h: "谢谢", p: "xièxie", m: "thank you", bm: "ধন্যবাদ"}, 
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "帮助", p: "bāngzhù", m: "help", bm: "সাহায্য"}
    ]
},

// 64-66: 最近 (zuìjìn - Recently)
{
    bn: "আপনি ইদানিং কেমন আছেন?", 
    en: "How are you recently?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "最近", p: "zuìjìn", m: "recently", bm: "ইদানিং/সম্প্রতি"}, 
        {h: "怎么样", p: "zěnmeyàng", m: "how", bm: "কেমন"}
    ]
},
{
    bn: "আমি সম্প্রতি অনেক ব্যস্ত।", 
    en: "I have been very busy recently.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "最近", p: "zuìjìn", m: "recently", bm: "সম্প্রতি"}, 
        {h: "很", p: "hěn", m: "very", bm: "অনেক"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "সম্প্রতি আবহাওয়া খুব ভালো।", 
    en: "The weather has been very good recently.", 
    words: [
        {h: "最近", p: "zuìjìn", m: "recently", bm: "সম্প্রতি"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},

// 67-69: 怎么样 (zěnmeyàng - How is it)
{
    bn: "আপনার শরীর কেমন আছে?", 
    en: "How is your health?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"}, 
        {h: "身体", p: "shēntǐ", m: "health", bm: "শরীর"}, 
        {h: "怎么样", p: "zěnmeyàng", m: "how", bm: "কেমন"}
    ]
},
{
    bn: "এই চাইনিজ খাবারটা কেমন?", 
    en: "How is this Chinese food?", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}, 
        {h: "怎么样", p: "zěnmeyàng", m: "how", bm: "কেমন"}
    ]
},
{
    bn: "কাজটা কেমন চলছে?", 
    en: "How is the work going?", 
    words: [
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}, 
        {h: "怎么样", p: "zěnmeyàng", m: "how", bm: "কেমন"}, 
        {h: "了", p: "le", m: "particle", bm: "(হয়ে গেছে)"}
    ]
},

// 70-72: 呢 (ne - Question particle)
{
    bn: "আমি ভালো আছি, আপনি কেমন আছেন?", 
    en: "I am fine, how about you?", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很好", p: "hěn hǎo", m: "very good", bm: "ভালো আছি"}, 
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "呢", p: "ne", m: "how about", bm: "কেমন আছেন/কি খবর"}
    ]
},
{
    bn: "বইটা কোথায়?", 
    en: "Where is the book?", 
    words: [
        {h: "书", p: "shū", m: "book", bm: "বই"}, 
        {h: "呢", p: "ne", m: "where", bm: "কোথায় (অবস্থান জিজ্ঞাসা)"}
    ]
},
{
    bn: "সে এখন কি করছে?", 
    en: "What is he doing now?", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "在", p: "zài", m: "particle", bm: "(বর্তমান কাল)"}, 
        {h: "做", p: "zuò", m: "do", bm: "করছে"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}, 
        {h: "呢", p: "ne", m: "particle", bm: "(প্রশ্ন)"}
    ]
},

// 73-75: 忙 (máng - Busy)
{
    bn: "আমি সম্প্রতি খুব ব্যস্ত।", 
    en: "I have been very busy recently.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "最近", p: "zuìjìn", m: "recently", bm: "সম্প্রতি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "আপনি কি এখন ব্যস্ত?", 
    en: "Are you busy now?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}, 
        {h: "吗", p: "ma", m: "particle", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "কাজ খুব বেশি, তাই ব্যস্ত।", 
    en: "Too much work, so I am busy.", 
    words: [
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}, 
        {h: "太", p: "tài", m: "too", bm: "খুব বেশি"}, 
        {h: "多", p: "duō", m: "many", bm: "বেশি"}, 
        {h: "了", p: "le", m: "particle", bm: "(হয়ে গেছে)"}, 
        {h: "很", p: "hěn", m: "very", bm: "তাই"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},

// 76-78: 不 (bù - Not/No)
{
    bn: "আমি চাইনিজ খাবার পছন্দ করি না।", 
    en: "I do not like Chinese food.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},
{
    bn: "আমি শিক্ষক নই।", 
    en: "I am not a teacher.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "不", p: "bù", m: "not", bm: "নই"}, 
        {h: "是", p: "shì", m: "am", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "আজ খুব গরম নয়।", 
    en: "It is not very hot today.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "不", p: "bù", m: "not", bm: "নয়"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "热", p: "rè", m: "hot", bm: "গরম"}
    ]
},

// 79-81: 太 (tài - Too/Extremely)
{
    bn: "খাবারটি খুব বেশি গরম।", 
    en: "The food is too hot.", 
    words: [
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}, 
        {h: "太", p: "tài", m: "too", bm: "খুব বেশি"}, 
        {h: "热", p: "rè", m: "hot", bm: "গরম"}
    ]
},
{
    bn: "ওটা খুব দামি।", 
    en: "That is too expensive.", 
    words: [
        {h: "那", p: "nà", m: "that", bm: "ওটা"}, 
        {h: "太", p: "tài", m: "too", bm: "খুব বেশি"}, 
        {h: "贵", p: "guì", m: "expensive", bm: "দামি"}
    ]
},
{
    bn: "এটা খুব ভালো।", 
    en: "This is too good.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটা"}, 
        {h: "太", p: "tài", m: "too", bm: "খুব বেশি"}, 
        {h: "好", p: "hǎo", m: "good", bm:"ভালো"}
    ]
},

// 82-84: 他 (tā - He/Him)
{
    bn: "সে আমার বন্ধু।", 
    en: "He is my friend.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我", p: "wǒ", m: "my", bm: "আমার"}, 
        {h: "的", p: "de", m: "possession", bm: "(র)"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}
    ]
},
{
    bn: "আমি তাকে চিনি।", 
    en: "I know him.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চিনি"}, 
        {h: "他", p: "tā", m: "him", bm: "তাকে"}
    ]
},
{
    bn: "সে কি বাড়িতে আছে?", 
    en: "Is he at home?", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "在", p: "zài", m: "at", bm: "আছে"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়ি"}, 
        {h: "吗", p: "ma", m: "particle", bm: "(প্রশ্নবোধক)"}
    ]
},

// 85-87: 丁力波 (Dīng Lìbō - A proper name)
{
    bn: "ডিং লি বো একজন ছাত্র।", 
    en: "Ding Libo is a student.", 
    words: [
        {h: "丁力波", p: "Dīng Lìbō", m: "Ding Libo", bm: "ডিং লি বো"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "ডিং লি বো কানাডিয়ান।", 
    en: "Ding Libo is Canadian.", 
    words: [
        {h: "丁力波", p: "Dīng Lìbō", m: "Ding Libo", bm: "ডিং লি বো"}, 
        {h: "是", p: "shì",  m: "is", bm: "হয়"}, 
        {h: "加拿大", p: "Jiānádà", m: "Canada", bm: "কানাডা"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "ডিং লি বো কি ব্যস্ত?", 
    en: "Is Ding Libo busy?", 
    words: [
        {h: "丁力波", p: "Dīng Lìbō", m: "Ding Libo", bm: "ডিং লি বো"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}, 
        {h: "吗", p: "ma", m: "particle", bm: "(প্রশ্নবোধক)"}
    ]
},

// 88-90: 林娜 (Lín Nà - A proper name)
{
    bn: "লিন না চাইনিজ।", 
    en: "Lin Na is Chinese.", 
    words: [
        {h: "林娜", p: "Lín Nà", m: "Lin Na", bm: "লিন না"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "中国人", p: "zhōngguórén", m: "Chinese", bm: "চাইনিজ"}
    ]
},
{
    bn: "আমি লিন না-কে খুঁজি।", 
    en: "I am looking for Lin Na.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "找", p: "zhǎo", m: "look for", bm: "খুঁজছি"}, 
        {h: "林娜", p: "Lín Nà", m: "Lin Na", bm: "লিন না"}
    ]
},
{
    bn: "লিন না-র বাবা আমেরিকান।", 
    en: "Lin Na's father is American.", 
    words: [
        {h: "林娜", p: "Lín Nà", m: "Lin Na", bm: "লিন না"}, 
        {h: "的", p: "de", m: "possession", bm: "(র)"}, 
        {h: "爸爸", p: "bàba", m: "father", bm: "বাবা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "美国人", p: "měiguórén", m: "American", bm: "আমেরিকান"}
    ]
},

// 91-93: 困 (kùn - Sleepy)
{
    bn: "আমি খুব ঘুমকাতুরে।", 
    en: "I am very sleepy.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "困", p: "kùn", m: "sleepy", bm: "ঘুমকাতুরে"}
    ]
},
{
    bn: "তুমি কি ক্লান্ত?", 
    en: "Are you sleepy?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "困", p: "kùn", m: "sleepy", bm: "ঘুমকাতুরে"}, 
        {h: "吗", p: "ma", m: "particle", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "দেরি হয়েছে, তাই ঘুম পাচ্ছে।", 
    en: "It is late, so I am sleepy.", 
    words: [
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "晚", p: "wǎn", m: "late", bm: "দেরি"}, 
        {h: "了", p: "le", m: "particle", bm: "(হয়ে গেছে)"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "困", p: "kùn", m: "sleepy", bm: "ঘুমকাতুরে"}
    ]
},

// 94-96: 渴 (kě - Thirsty)
{
    bn: "আমি খুব তৃষ্ণার্ত।", 
    en: "I am very thirsty.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "渴", p: "kě", m: "thirsty", bm: "তৃষ্ণার্ত"}
    ]
},
{
    bn: "তুমি কি তৃষ্ণার্ত?", 
    en: "Are you thirsty?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "渴", p: "kě", m: "thirsty", bm: "তৃষ্ণার্ত"}, 
        {h: "吗", p: "ma", m: "particle", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "আমি পানি পান করতে চাই।", 
    en: "I want to drink water.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "渴", p: "kě", m: "thirsty", bm: "তৃষ্ণার্ত"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করা"}, 
        {h: "水", p: "shuǐ", m: "water", bm: "পানি"}
    ]
},


// 97-99: 饿 (è - Hungry)
{
    bn: "আমি খুব ক্ষুধার্ত।", 
    en: "I am very hungry.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "饿", p: "è", m: "hungry", bm: "ক্ষুধার্ত"}
    ]
},
{
    bn: "তুমি কি ক্ষুধার্ত?", 
    en: "Are you hungry?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "饿", p: "è", m: "hungry", bm: "ক্ষুধার্ত"}, 
        {h: "吗", p: "ma", m: "particle", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "আমি খেতে চাই।", 
    en: "I want to eat.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "饿", p: "è", m: "hungry", bm: "ক্ষুধার্ত"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খাওয়া"}
    ]
},

// 100-102: 累 (lèi - Tired)
{
    bn: "আমি খুব ক্লান্ত।", 
    en: "I am very tired.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "累", p: "lèi", m: "tired", bm: "ক্লান্ত"}
    ]
},
{
    bn: "তুমি কি ক্লান্ত?", 
    en: "Are you tired?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "累", p: "lèi", m: "tired", bm: "ক্লান্ত"}, 
        {h: "吗", p: "ma", m: "particle", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "কাজ খুব বেশি, তাই ক্লান্ত।", 
    en: "Too much work, so I am tired.", 
    words: [
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}, 
        {h: "太多", p: "tài duō", m: "too much", bm: "খুব বেশি"}, 
        {h: "了", p: "le", m: "particle", bm: "(হয়ে গেছে)"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "累", p: "lèi", m: "tired", bm: "ক্লান্ত"}
    ]
},

// 103-105: 还行 (háixíng - Not bad/OK)
{
    bn: "আবহাওয়া মোটামুটি ভালো।", 
    en: "The weather is not bad.", 
    words: [
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "还行", p: "háixíng", m: "not bad", bm: "মোটামুটি ভালো"}
    ]
},
{
    bn: "খাবারটা মোটামুটি ভালো।", 
    en: "The food is OK.", 
    words: [
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}, 
        {h: "还行", p: "háixíng", m: "OK", bm: "মোটামুটি ভালো"}
    ]
},
{
    bn: "আমি মোটামুটি ভালো আছি।", 
    en: "I am OK.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "还行", p: "háixíng", m: "OK", bm: "মোটামুটি ভালো"}
    ]
},

// 106-108: 马马虎虎 (mǎmǎhūhū - So-so/Careless)
{
    bn: "আমার চাইনিজ মোটামুটি।", 
    en: "My Chinese is so-so.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "中文", p: "zhōngwén", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "马马虎虎", p: "mǎmǎhūhū", m: "so-so", bm: "মোটামুটি"}
    ]
},
{
    bn: "সে খুব অসাবধান।", 
    en: "She is very careless.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "马马虎虎", p: "mǎmǎhūhū", m: "careless", bm: "অসাবধান"}
    ]
},
{
    bn: "কাজটা মোটামুটি হয়েছে।", 
    en: "The work is so-so.", 
    words: [
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}, 
        {h: "马马虎虎", p: "mǎmǎhūhū", m: "so-so", bm: "মোটামুটি"}, 
        {h: "了", p: "le", m: "particle", bm: "(হয়ে গেছে)"}
    ]
},

// 109-111: 她 (tā - She/Her)
{
    bn: "সে আমার বন্ধু।", 
    en: "She is my friend.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}
    ]
},
{
    bn: "আমি তাকে চিনি।", 
    en: "I know her.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চিনি"}, 
        {h: "她", p: "tā", m: "her", bm: "তাকে"}
    ]
},
{
    bn: "সে এখন ব্যস্ত।", 
    en: "She is busy now.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},

// 112-114: 老师 (lǎoshī - Teacher)
{
    bn: "তিনি আমার শিক্ষক।", 
    en: "He is my teacher.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "শিক্ষক আজ খুব ব্যস্ত।", 
    en: "The teacher is very busy today.", 
    words: [
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}, 
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "আমি শিক্ষককে চিনি।", 
    en: "I know the teacher.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চিনি"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},

// 115-117: 早上 (zǎoshang - Morning)
{
    bn: "আজ সকালে আমি ব্যস্ত।", 
    en: "I am busy this morning.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "早上", p: "zǎoshang", m: "morning", bm: "সকালে"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "সকালে আবহাওয়া ভালো।", 
    en: "The weather is good in the morning.", 
    words: [
        {h: "早上", p: "zǎoshang", m: "morning", bm: "সকালে"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "আমি সকালে চাইনিজ খাবার খাই।", 
    en: "I eat Chinese food in the morning.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "早上", p: "zǎoshang", m: "morning", bm: "সকালে"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খাই"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},

// 118-120: 早 (zǎo - Early/Morning)
{
    bn: "শুভ সকাল!", 
    en: "Good morning!", 
    words: [
        {h: "早", p: "zǎo", m: "early", bm: "সকাল"}, 
        {h: "啊", p: "a", m: "particle", bm: "(হাঁ/আহা)"}
    ]
},
{
    bn: "আজ খুব সকালে উঠেছি।", 
    en: "I got up very early today.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "起", p: "qǐ", m: "get up", bm: "ওঠা"}, 
        {h: "得", p: "de", m: "particle", bm: "(ফলাফল)"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "早", p: "zǎo", m: "early", bm: "সকালে"}
    ]
},
{
    bn: "সে খুব সকালে যায়।", 
    en: "He goes very early.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "早", p: "zǎo", m: "early", bm: "সকালে"}, 
        {h: "去", p: "qù", m: "go", bm: "যায়"}
    ]
},

// 121-123: 你们 (nǐmen - You plural)
{
    bn: "তোমরা সবাই ভালো আছো?", 
    en: "Are you all good?", 
    words: [
        {h: "你们", p: "nǐmen", m: "you all", bm: "তোমরা"}, 
        {h: "都", p: "dōu", m: "all", bm: "সবাই"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "তোমরা কি চাইনিজ খাবার পছন্দ করো?", 
    en: "Do you all like Chinese food?", 
    words: [
        {h: "你们", p: "nǐmen", m: "you all", bm: "তোমরা"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করো"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "তোমরা কোথায় যাচ্ছো?", 
    en: "Where are you all going?", 
    words: [
        {h: "你们", p: "nǐmen", m: "you all", bm: "তোমরা"}, 
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছো"}, 
        {h: "哪里", p: "nǎlǐ", m: "where", bm: "কোথায়"}
    ]
},

// 124-126: 们 (men - Plural suffix)
{
    bn: "আমরা সবাই বন্ধু।", 
    en: "We are all friends.", 
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমরা সবাই"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}
    ]
},
{
    bn: "তারা সবাই খুব ব্যস্ত।", 
    en: "They are all very busy.", 
    words: [
        {h: "他们", p: "tāmen", m: "they", bm: "তারা সবাই"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "শিক্ষকগণ এখানে নেই।", 
    en: "The teachers are not here.", 
    words: [
        {h: "老师们", p: "lǎoshīmen", m: "teachers", bm: "শিক্ষকগণ"}, 
        {h: "不", p: "bù", m: "not", bm: "নেই"}, 
        {h: "在", p: "zài", m: "at", bm: "অবস্থিত"}, 
        {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}
    ]
},

// 127-129: 这 (zhè - This)
{
    bn: "এটা আমার বই।", 
    en: "This is my book.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},
{
    bn: "এই মানুষটি আমার শিক্ষক।", 
    en: "This person is my teacher.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "এখানে খুব গরম।", 
    en: "It is very hot here.", 
    words: [
        {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "热", p: "rè", m: "hot", bm: "গরম"}
    ]
},

// 130-132: 朋友 (péngyou - Friend)
{
    bn: "সে আমার বন্ধু।", 
    en: "He is my friend.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}
    ]
},
{
    bn: "আমি আমার বন্ধুর সাথে কথা বলছি।", 
    en: "I am talking to my friend.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "跟", p: "gēn", m: "with", bm: "সাথে"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}, 
        {h: "说话", p: "shuōhuà", m: "talk", bm: "কথা বলছি"}
    ]
},
{
    bn: "তোমার বন্ধুর নাম কি?", 
    en: "What is your friend's name?", 
    words: [
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},

// 133-135: 刚 (gāng - Just/Recently)
{
    bn: "আমি এইমাত্র এসেছি।", 
    en: "I just came.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "刚", p: "gāng", m: "just", bm: "এইমাত্র"}, 
        {h: "来", p: "lái", m: "come", bm: "এসেছি"}
    ]
},
{
    bn: "সে এইমাত্র চলে গেছে।", 
    en: "He just left.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "刚", p: "gāng", m: "just", bm: "এইমাত্র"}, 
        {h: "走", p: "zǒu", m: "left", bm: "চলে গেছে"}
    ]
},
{
    bn: "খাবার এইমাত্র তৈরি হয়েছে।", 
    en: "The food was just made.", 
    words: [
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}, 
        {h: "刚", p: "gāng", m: "just", bm: "এইমাত্র"}, 
        {h: "做好", p: "zuòhǎo", m: "made", bm: "তৈরি হয়েছে"}
    ]
},

// 136-138: 到 (dào - To arrive/To go to)
{
    bn: "আমি বিমানবন্দরে পৌঁছেছি।", 
    en: "I have arrived at the airport.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "到", p: "dào", m: "arrive", bm: "পৌঁছেছি"}, 
        {h: "机场", p: "jīchǎng", m: "airport", bm: "বিমানবন্দর"}
    ]
},
{
    bn: "তুমি কখন পৌঁছাবে?", 
    en: "When will you arrive?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কখন"}, 
        {h: "时候", p: "shíhou", m: "time", bm: "(সময়)"}, 
        {h: "到", p: "dào", m: "arrive", bm: "পৌঁছাবে"}
    ]
},
{
    bn: "এই বাসটি কোথায় যাবে?", 
    en: "Where will this bus go?", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "公车", p: "gōngchē", m: "bus", bm: "বাসটি"}, 
        {h: "到", p: "dào", m: "go to", bm: "যাবে"}, 
        {h: "哪里", p: "nǎlǐ", m: "where", bm: "কোথায়"}
    ]
},

// 139-141: 您 (nín - You polite)
{
    bn: "আপনি কেমন আছেন?", 
    en: "How are you? (polite)", 
    words: [
        {h: "您", p: "nín", m: "you", bm: "আপনি"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "দয়া করে এখানে বসুন।", 
    en: "Please sit here. (polite)", 
    words: [
        {h: "您", p: "nín", m: "you", bm: "আপনি"}, 
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "坐", p: "zuò", m: "sit", bm: "বসুন"}
    ]
},
{
    bn: "আপনি কি শিক্ষক?", 
    en: "Are you a teacher? (polite)", 
    words: [
        {h: "您", p: "nín", m: "you", bm: "আপনি"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},

// 142-144: 贵姓 (guìxìng - Surname polite)
{
    bn: "আপনার পারিবারিক নাম কি?", 
    en: "What is your surname? (polite)", 
    words: [
        {h: "您", p: "nín", m: "you", bm: "আপনার"}, 
        {h: "贵姓", p: "guìxìng", m: "surname", bm: "পারিবারিক নাম/পদবী"}
    ]
},
{
    bn: "আপনার পদবী জানতে পারি?", 
    en: "May I ask your surname? (polite)", 
    words: [
        {h: "请问", p: "qǐngwèn", m: "may I ask", bm: "জিজ্ঞাসা করতে পারি"}, 
        {h: "您", p: "nín", m: "you", bm: "আপনার"}, 
        {h: "贵姓", p: "guìxìng", m: "surname", bm: "পদবী"}
    ]
},
{
    bn: "আপনার মূল্যবান নাম কি?", 
    en: "What is your honorable name? (polite)", 
    words: [
        {h: "您", p: "nín", m: "you", bm: "আপনার"}, 
        {h: "尊姓大名", p: "zūnxìngdàmíng", m: "honorable name", bm: "মূল্যবান নাম"}
    ]
},

// 145-147: 哪 (nǎ - Which)
{
    bn: "আপনি কোন দেশের মানুষ?", 
    en: "Which country are you from?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "是", p: "shì", m: "are", bm: "হন"}, 
        {h: "哪", p: "nǎ", m: "which", bm: "কোন"}, 
        {h: "国", p: "guó", m: "country", bm: "দেশ"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "তুমি কোন বইটি পছন্দ করো?", 
    en: "Which book do you like?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করো"}, 
        {h: "哪", p: "nǎ", m: "which", bm: "কোন"}, 
        {h: "本", p: "běn", m: "measure word", bm: "টি"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},
{
    bn: "তুমি কোথায় যাচ্ছো?", 
    en: "Where are you going?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছো"}, 
        {h: "哪里", p: "nǎlǐ", m: "where", bm: "কোথায়"}
    ]
},

// 148-150: 国 (guó - Country/Nation)
{
    bn: "আমি চীনে যাচ্ছি।", 
    en: "I am going to China.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছি"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}
    ]
},
{
    bn: "সে আমেরিকান।", 
    en: "He is American.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "美国人", p: "měiguórén", m: "American", bm: "আমেরিকান"}
    ]
},
{
    bn: "এটি একটি সুন্দর দেশ।", 
    en: "This is a beautiful country.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},

// 151-153: 人 (rén - Person/People)
{
    bn: "আপনি কি শিক্ষক?", 
    en: "Are you a teacher?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "是", p: "shì", m: "are", bm: "হন"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "অনেক মানুষ এখানে আছে।", 
    en: "Many people are here.", 
    words: [
        {h: "很多", p: "hěnduō", m: "many", bm: "অনেক"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}, 
        {h: "在", p: "zài", m: "at", bm: "আছে"}, 
        {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}
    ]
},
{
    bn: "তিনি একজন ভালো মানুষ।", 
    en: "He is a good person.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একজন"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},

// 154-156: 学习 (xuéxí - To study/Learn)
{
    bn: "আমি চাইনিজ শিখছি।", 
    en: "I am studying Chinese.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "学习", p: "xuéxí", m: "study", bm: "শিখছি"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ"}
    ]
},
{
    bn: "তুমি কোথায় পড়াশোনা করো?", 
    en: "Where do you study?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "在", p: "zài", m: "at", bm: "তে"}, 
        {h: "哪里", p: "nǎlǐ", m: "where", bm: "কোথায়"}, 
        {h: "学习", p: "xuéxí", m: "study", bm: "পড়াশোনা করো"}
    ]
},
{
    bn: "সে প্রতিদিন পড়ে।", 
    en: "He studies every day.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "每天", p: "měitiān", m: "every day", bm: "প্রতিদিন"}, 
        {h: "学习", p: "xuéxí", m: "study", bm: "পড়ে"}
    ]
},

// 157-159: 学 (xué - To study/Learn)
{
    bn: "আমি বিশ্ববিদ্যালয় পড়ি।", 
    en: "I study at a university.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "在", p: "zài", m: "at", bm: "তে"}, 
        {h: "大学", p: "dàxué", m: "university", bm: "বিশ্ববিদ্যালয়"}, 
        {h: "学", p: "xué", m: "study", bm: "পড়ি"}
    ]
},
{
    bn: "সে ইংরেজি শিখছে।", 
    en: "He is learning English.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখছে"}, 
        {h: "英语", p: "yīngyǔ", m: "English", bm: "ইংরেজি"}
    ]
},
{
    bn: "আমি চাইনিজ শিখতে চাই।", 
    en: "I want to learn Chinese.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখতে"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ"}
    ]
},

// 160-162: 汉语 (hànyǔ - Chinese Language)
{
    bn: "চাইনিজ ভাষা খুব কঠিন।", 
    en: "Chinese language is very difficult.", 
    words: [
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},
{
    bn: "আমি চাইনিজ বলতে পারি।", 
    en: "I can speak Chinese.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "会", p: "huì", m: "can", bm: "পারি"}, 
        {h: "说", p: "shuō", m: "speak", bm: "বলতে"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ"}
    ]
},
{
    bn: "আমি চাইনিজ শিখছি।", 
    en: "I am learning Chinese.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "在", p: "zài", m: "particle", bm: "তে"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখছি"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ"}
    ]
},

// 163-165: 再见 (zàijiàn - Goodbye)
{
    bn: "বিদায়, শিক্ষক!", 
    en: "Goodbye, teacher!", 
    words: [
        {h: "再见", p: "zàijiàn", m: "goodbye", bm: "বিদায়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "কাল দেখা হবে!", 
    en: "See you tomorrow!", 
    words: [
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "কাল"}, 
        {h: "见", p: "jiàn", m: "see", bm: "দেখা হবে"}
    ]
},
{
    bn: "বিদায়, বন্ধু!", 
    en: "Goodbye, friend!", 
    words: [
        {h: "再见", p: "zàijiàn", m: "goodbye", bm: "বিদায়"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}
    ]
},


// 166-168: 陈 (Chén - A surname)
{
    bn: "তার নাম চেন।", 
    en: "His name is Chen.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তার"}, 
        {h: "叫", p: "jiào", m: "is called", bm: "নাম"}, 
        {h: "陈", p: "Chén", m: "Chen", bm: "চেন"}
    ]
},
{
    bn: "চেন একজন শিক্ষক।", 
    en: "Chen is a teacher.", 
    words: [
        {h: "陈", p: "Chén", m: "Chen", bm: "চেন"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "আপনি কি চেনকে চেনেন?", 
    en: "Do you know Chen?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চেনেন"}, 
        {h: "陈", p: "Chén", m: "Chen", bm: "চেনকে"}
    ]
},

// 169-171: 北京 (Běijīng - Beijing)
{
    bn: "আমি বেইজিং যাচ্ছি।", 
    en: "I am going to Beijing.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "go to", bm: "যাচ্ছি"}, 
        {h: "北京", p: "Běijīng", m: "Beijing", bm: "বেইজিং"}
    ]
},
{
    bn: "বেইজিং চীনের রাজধানী।", 
    en: "Beijing is the capital of China.", 
    words: [
        {h: "北京", p: "Běijīng", m: "Beijing", bm: "বেইজিং"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "中国", p: "Zhōngguó", m: "China", bm: "চীন"}, 
        {h: "的", p: "de", m: "particle", bm: "(এর)"}, 
        {h: "首都", p: "shǒudū", m: "capital", bm: "রাজধানী"}
    ]
},
{
    bn: "বেইজিং-এর আবহাওয়া কেমন?", 
    en: "How is the weather in Beijing?", 
    words: [
        {h: "北京", p: "Běijīng", m: "Beijing", bm: "বেইজিং-এর"}, 
        {h: "的", p: "de", m: "particle", bm: "(এর)"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "怎么样", p: "zěnmeyàng", m: "how", bm: "কেমন"}
    ]
},

// 172-174: 美国 (Měiguó - America/USA)
{
    bn: "আমি আমেরিকা থেকে এসেছি।", 
    en: "I am from America.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "是", p: "shì", m: "am", bm: "হয়"}, 
        {h: "美国", p: "Měiguó", m: "America", bm: "আমেরিকা"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ/দেশের"}
    ]
},
{
    bn: "সে আমেরিকায় থাকে।", 
    en: "He lives in America.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "住", p: "zhù", m: "live", bm: "থাকে"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "美国", p: "Měiguó", m: "America", bm: "আমেরিকা"}
    ]
},
{
    bn: "আমেরিকা একটি বড় দেশ।", 
    en: "America is a big country.", 
    words: [
        {h: "美国", p: "Měiguó", m: "America", bm: "আমেরিকা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},

// 175-177: 点心 (diǎnxin - Snack/Dim sum)
{
    bn: "আমি চাইনিজ টিফিন পছন্দ করি।", 
    en: "I like Chinese dim sum.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "点心", p: "diǎnxin", m: "dim sum", bm: "টিফিন"}
    ]
},
{
    bn: "কিছু নাস্তা খান।", 
    en: "Have some snacks.", 
    words: [
        {h: "吃", p: "chī", m: "eat", bm: "খান"}, 
        {h: "点", p: "diǎn", m: "some", bm: "কিছু"}, 
        {h: "点心", p: "diǎnxin", m: "snacks", bm: "নাস্তা"}
    ]
},
{
    bn: "এই নাস্তাটি সুস্বাদু।", 
    en: "This snack is tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "点心", p: "diǎnxin", m: "snack", bm: "নাস্তাটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},

// 178-180: 好吃 (hǎochī - Tasty/Delicious)
{
    bn: "চাইনিজ খাবার সুস্বাদু।", 
    en: "Chinese food is delicious.", 
    words: [
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}, 
        {h: "很好吃", p: "hěn hǎochī", m: "very delicious", bm: "খুব সুস্বাদু"}
    ]
},
{
    bn: "এই ফলটি খুব সুস্বাদু।", 
    en: "This fruit is very tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "水果", p: "shuǐguǒ", m: "fruit", bm: "ফলটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},
{
    bn: "রান্নাটি সুস্বাদু হয়নি।", 
    en: "The food is not tasty.", 
    words: [
        {h: "菜", p: "cài", m: "food", bm: "রান্নাটি"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},

// 181-183: 爸爸 (bàba - Father)
{
    bn: "আমার বাবা শিক্ষক।", 
    en: "My father is a teacher.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "爸爸", p: "bàba", m: "father", bm: "বাবা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "বাবা বাড়িতে নেই।", 
    en: "Father is not at home.", 
    words: [
        {h: "爸爸", p: "bàba", m: "father", bm: "বাবা"}, 
        {h: "不在", p: "búzài", m: "not at", bm: "নেই"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়িতে"}
    ]
},
{
    bn: "বাবা চাইনিজ খাবার পছন্দ করেন।", 
    en: "Father likes Chinese food.", 
    words: [
        {h: "爸爸", p: "bàba", m: "father", bm: "বাবা"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করেন"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},

// 184-186: 喜欢 (xǐhuan - Like)
{
    bn: "আমি চাইনিজ ভাষা পছন্দ করি।", 
    en: "I like Chinese language.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ ভাষা"}
    ]
},
{
    bn: "তুমি কি খেলা পছন্দ করো?", 
    en: "Do you like sports?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করো"}, 
        {h: "运动", p: "yùndòng", m: "sports", bm: "খেলা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "সে বইটি পছন্দ করে না।", 
    en: "He does not like the book.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করে"}, 
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "本", p: "běn", m: "measure word", bm: "টি"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},

// 187-189: 和 (hé - And)
{
    bn: "আমি এবং সে বন্ধু।", 
    en: "He and I are friends.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "和", p: "hé", m: "and", bm: "এবং"}, 
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "朋友", p: "péngyou", m: "friends", bm: "বন্ধু"}
    ]
},
{
    bn: "আমি চা এবং কফি পছন্দ করি।", 
    en: "I like tea and coffee.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "茶", p: "chá", m: "tea", bm: "চা"}, 
        {h: "和", p: "hé", m: "and", bm: "এবং"}, 
        {h: "咖啡", p: "kāfēi", m: "coffee", bm: "কফি"}
    ]
},
{
    bn: "বাবা এবং মা বাড়িতে আছেন।", 
    en: "Father and mother are at home.", 
    words: [
        {h: "爸爸", p: "bàba", m: "father", bm: "বাবা"}, 
        {h: "和", p: "hé", m: "and", bm: "এবং"}, 
        {h: "妈妈", p: "māma", m: "mother", bm: "মা"}, 
        {h: "在", p: "zài", m: "at", bm: "আছেন"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়িতে"}
    ]
},

// 190-192: 米饭 (mǐfàn - Cooked Rice)
{
    bn: "আমি ভাত খেতে চাই।", 
    en: "I want to eat rice.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "米饭", p: "mǐfàn", m: "rice", bm: "ভাত"}
    ]
},
{
    bn: "এটি কি ভাত?", 
    en: "Is this rice?", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "米饭", p: "mǐfàn", m: "rice", bm: "ভাত"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "চীনে মানুষ ভাত খায়।", 
    en: "People in China eat rice.", 
    words: [
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খায়"}, 
        {h: "米饭", p: "mǐfàn", m: "rice", bm: "ভাত"}
    ]
},

// 193-195: 饭 (fàn - Meal/Rice)
{
    bn: "খেতে চলো।", 
    en: "Let's eat.", 
    words: [
        {h: "去", p: "qù", m: "go", bm: "চলো"}, 
        {h: "吃饭", p: "chīfàn", m: "eat meal", bm: "খেতে/ভাত খেতে"}
    ]
},
{
    bn: "আমি অনেক ভাত খেয়েছি।", 
    en: "I ate a lot of rice.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেয়েছি"}, 
        {h: "了", p: "le", m: "particle", bm: "(হয়ে গেছে)"}, 
        {h: "很多", p: "hěnduō", m: "a lot", bm: "অনেক"}, 
        {h: "饭", p: "fàn", m: "rice", bm: "ভাত"}
    ]
},
{
    bn: "খাবার সুস্বাদু নয়।", 
    en: "The food is not tasty.", 
    words: [
        {h: "饭", p: "fàn", m: "meal", bm: "খাবার"}, 
        {h: "不好吃", p: "bùhǎochī", m: "not tasty", bm: "সুস্বাদু নয়"}
    ]
},

// 196-198: 妈妈 (māma - Mother)
{
    bn: "আমার মা খুব ভালো।", 
    en: "My mother is very good.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "妈妈", p: "māma", m: "mother", bm: "মা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "মা রান্না করছেন।", 
    en: "Mother is cooking.", 
    words: [
        {h: "妈妈", p: "māma", m: "mother", bm: "মা"}, 
        {h: "在", p: "zài", m: "is", bm: "বর্তমানে"}, 
        {h: "做饭", p: "zuòfàn", m: "cook", bm: "রান্না করছেন"}
    ]
},
{
    bn: "আপনি কি আপনার মাকে ভালোবাসেন?", 
    en: "Do you love your mother?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "爱", p: "ài", m: "love", bm: "ভালোবাসেন"}, 
        {h: "你的", p: "nǐde", m: "your", bm: "আপনার"}, 
        {h: "妈妈", p: "māma", m: "mother", bm: "মাকে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 199-201: 她 (tā - She/Her)
{
    bn: "সে আমার বান্ধবী।", 
    en: "She is my friend.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বান্ধবী"}
    ]
},
{
    bn: "আমি তাকে ভালোবাসি।", 
    en: "I love her.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "爱", p: "ài", m: "love", bm: "ভালোবাসি"}, 
        {h: "她", p: "tā", m: "her", bm: "তাকে"}
    ]
},
{
    bn: "সে কি চাইনিজ ভাষা শিখছে?", 
    en: "Is she learning Chinese?", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "在", p: "zài", m: "particle", bm: "(বর্তমান কাল)"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখছে"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ ভাষা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},

// 202-204: 面条 (miàntiáo - Noodles)
{
    bn: "আমি নুডলস পছন্দ করি।", 
    en: "I like noodles.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "面条", p: "miàntiáo", m: "noodles", bm: "নুডলস"}
    ]
},
{
    bn: "এই নুডলস সুস্বাদু।", 
    en: "These noodles are tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "面条", p: "miàntiáo", m: "noodles", bm: "নুডলস"}, 
        {h: "很好吃", p: "hěn hǎochī", m: "very tasty", bm: "সুস্বাদু"}
    ]
},
{
    bn: "আমি নুডলস খেতে চাই।", 
    en: "I want to eat noodles.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "面条", p: "miàntiáo", m: "noodles", bm: "নুডলস"}
    ]
},

// 205-207: 饺子 (jiǎozi - Dumplings)
{
    bn: "আমি ডাম্পলিং পছন্দ করি।", 
    en: "I like dumplings.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "饺子", p: "jiǎozi", m: "dumplings", bm: "ডাম্পলিং"}
    ]
},
{
    bn: "চিনিতে ডাম্পলিং খুব জনপ্রিয়।", 
    en: "Dumplings are very popular in China.", 
    words: [
        {h: "饺子", p: "jiǎozi", m: "dumplings", bm: "ডাম্পলিং"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "受欢迎", p: "shòu huānyíng", m: "popular", bm: "জনপ্রিয়"}
    ]
},
{
    bn: "তুমি কি ডাম্পলিং খেতে চাও?", 
    en: "Do you want to eat dumplings?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাও"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "饺子", p: "jiǎozi", m: "dumplings", bm: "ডাম্পলিং"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},

// 208-210: 包子 (bāozi - Steamed stuffed bun)
{
    bn: "আমি স্টিমড বান খেতে পছন্দ করি।", 
    en: "I like steamed stuffed buns.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "包子", p: "bāozi", m: "steamed stuffed bun", bm: "স্টিভড বান"}
    ]
},
{
    bn: "এই স্টীমের বানটি খুব সুস্বাদু।", 
    en: "This steamed stuffed bun is very tasty.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "包子", p: "bāozi", m: "steamed stuffed bun", bm: "স্টিভড বানটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},
{
    bn: "চীনে মানুষ সকালে স্টীমড বান খায়।", 
    en: "People in China eat steamed stuffed buns in the morning.", 
    words: [
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}, 
        {h: "早上", p: "zǎoshang", m: "morning", bm: "সকালে"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খায়"}, 
        {h: "包子", p: "bāozi", m: "steamed stuffed buns", bm: "স্টিভড বান"}
    ]
},

// 211-213: 大 (dà - Big/Large)
{
    bn: "এটি একটি বড় বাড়ি।", 
    en: "This is a big house.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}, 
        {h: "房子", p: "fángzi", m: "house", bm: "বাড়ি"}
    ]
},
{
    bn: "আমেরিকা একটি বড় দেশ।", 
    en: "America is a big country.", 
    words: [
        {h: "美国", p: "Měiguó", m: "America", bm: "আমেরিকা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},
{
    bn: "এই ডাম্পলিংগুলো খুব বড়।", 
    en: "These dumplings are very big.", 
    words: [
        {h: "这些", p: "zhèxiē", m: "these", bm: "এই"}, 
        {h: "饺子", p: "jiǎozi", m: "dumplings", bm: "ডাম্পলিংগুলো"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}
    ]
},

// 214-216: 小 (xiǎo - Small/Little)
{
    bn: "এটি একটি ছোট বই।", 
    en: "This is a small book.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "本", p: "běn", m: "measure word", bm: "একটি"}, 
        {h: "小", p: "xiǎo", m: "small", bm: "ছোট"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},
{
    bn: "সে খুব ছোট।", 
    en: "He is very small.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "小", p: "xiǎo", m: "small", bm: "ছোট"}
    ]
},
{
    bn: "আমি একটি ছোট ডাম্পলিং চাই।", 
    en: "I want a small dumpling.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "要", p: "yào", m: "want", bm: "চাই"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "小", p: "xiǎo", m: "small", bm: "ছোট"}, 
        {h: "饺子", p: "jiǎozi", m: "dumpling", bm: "ডাম্পলিং"}
    ]
},

// 217-219: 看 (kàn - To look/watch/read)
{
    bn: "বইটি পড়ুন।", 
    en: "Read the book.", 
    words: [
        {h: "看", p: "kàn", m: "read", bm: "পড়ুন"}, 
        {h: "书", p: "shū", m: "book", bm: "বইটি"}
    ]
},
{
    bn: "আমি চলচ্চিত্র দেখছি।", 
    en: "I am watching a movie.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "看", p: "kàn", m: "watch", bm: "দেখছি"}, 
        {h: "电影", p: "diànyǐng", m: "movie", bm: "চলচ্চিত্র"}
    ]
},
{
    bn: "ঐদিকে দেখুন।", 
    en: "Look over there.", 
    words: [
        {h: "看", p: "kàn", m: "look", bm: "দেখুন"}, 
        {h: "那儿", p: "nàr", m: "there", bm: "ঐদিকে"}
    ]
},

// 220-222: 那 (nà - That)
{
    bn: "ঐ বইটি আমার।", 
    en: "That book is mine.", 
    words: [
        {h: "那", p: "nà", m: "that", bm: "ঐ"}, 
        {h: "本", p: "běn", m: "measure word", bm: "টি"}, 
        {h: "书", p: "shū", m: "book", bm: "বইটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "mine", bm: "আমার"}
    ]
},
{
    bn: "ঐ মানুষটি কে?", 
    en: "Who is that person?", 
    words: [
        {h: "那", p: "nà", m: "that", bm: "ঐ"}, 
        {h: "个", p: "gè", m: "measure word", bm: "টি"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "谁", p: "shéi", m: "who", bm: "কে"}
    ]
},
{
    bn: "ঐদিকটা খুব সুন্দর।", 
    en: "That place is very beautiful.", 
    words: [
        {h: "那儿", p: "nàr", m: "there", bm: "ঐদিকটা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},

// 223-225: 都 (dōu - All/Both)
{
    bn: "আমরা সবাই চাইনিজ খাবার পছন্দ করি।", 
    en: "We all like Chinese food.", 
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"}, 
        {h: "都", p: "dōu", m: "all", bm: "সবাই"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},
{
    bn: "তারা সবাই শিক্ষক।", 
    en: "They are all teachers.", 
    words: [
        {h: "他们", p: "tāmen", m: "they", bm: "তারা"}, 
        {h: "都", p: "dōu", m: "all", bm: "সবাই"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teachers", bm: "শিক্ষক"}
    ]
},
{
    bn: "সবগুলো খুব বড়।", 
    en: "All of them are very big.", 
    words: [
        {h: "都", p: "dōu", m: "all", bm: "সবগুলো"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}
    ]
},

// 226-228: 要 (yào - Want/Need/Will)
{
    bn: "আমি চাইনিজ খাবার খেতে চাই।", 
    en: "I want to eat Chinese food.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "要", p: "yào", m: "want", bm: "চাই"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},
{
    bn: "আমি এই বইটি চাই।", 
    en: "I want this book.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "要", p: "yào", m: "want", bm: "চাই"}, 
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "本", p: "běn", m: "measure word", bm: "টি"}, 
        {h: "书", p: "shū", m: "book", bm: "বইটি"}
    ]
},
{
    bn: "সে আগামীকাল সাংহাই যাবে।", 
    en: "He will go to Shanghai tomorrow.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "要", p: "yào", m: "will", bm: "যাবে"}, 
        {h: "去", p: "qù", m: "go", bm: "যাবে"}, 
        {h: "上海", p: "Shànghǎi", m: "Shanghai", bm: "সাংহাই"}
    ]
},

// 229-231: 上海 (Shànghǎi - Shanghai)
{
    bn: "আমি সাংহাই-তে থাকি।", 
    en: "I live in Shanghai.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "住", p: "zhù", m: "live", bm: "থাকি"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "上海", p: "Shànghǎi", m: "Shanghai", bm: "সাংহাই"}
    ]
},
{
    bn: "সাংহাই চীনের একটি বড় শহর।", 
    en: "Shanghai is a big city in China.", 
    words: [
        {h: "上海", p: "Shànghǎi", m: "Shanghai", bm: "সাংহাই"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীনের"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}, 
        {h: "城市", p: "chéngshì", m: "city", bm: "শহর"}
    ]
},
{
    bn: "সাংহাই-এর আবহাওয়া ভালো।", 
    en: "The weather in Shanghai is good.", 
    words: [
        {h: "上海", p: "Shànghǎi", m: "Shanghai", bm: "সাংহাই-এর"}, 
        {h: "的", p: "de", m: "particle", bm: "(এর)"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "很好", p: "hěn hǎo", m: "very good", bm: "ভালো"}
    ]
},

// 232-234: 王小云 (Wáng Xiǎoyún - A proper name)
{
    bn: "ওয়াং শিয়াওইয়ুন একজন ছাত্র।", 
    en: "Wang Xiaoyun is a student.", 
    words: [
        {h: "王小云", p: "Wáng Xiǎoyún", m: "Wang Xiaoyun", bm: "ওয়াং শিয়াওইয়ুন"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "ওয়াং শিয়াওইয়ুন কি ব্যস্ত?", 
    en: "Is Wang Xiaoyun busy?", 
    words: [
        {h: "王小云", p: "Wáng Xiǎoyún", m: "Wang Xiaoyun", bm: "ওয়াং শিয়াওইয়ুন"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "আমি ওয়াং শিয়াওইয়ুনকে খুঁজি।", 
    en: "I am looking for Wang Xiaoyun.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "找", p: "zhǎo", m: "look for", bm: "খুঁজি"}, 
        {h: "王小云", p: "Wáng Xiǎoyún", m: "Wang Xiaoyun", bm: "ওয়াং শিয়াওইয়ুনকে"}
    ]
},

// 235-237: 中国 (Zhōngguó - China)
{
    bn: "আমি চীনে বাস করি।", 
    en: "I live in China.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "住", p: "zhù", m: "live", bm: "বাস করি"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "中国", p: "Zhōngguó", m: "China", bm: "চীনে"}
    ]
},
{
    bn: "চীন একটি বড় দেশ।", 
    en: "China is a big country.", 
    words: [
        {h: "中国", p: "Zhōngguó", m: "China", bm: "চীন"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},
{
    bn: "আপনি কি চীন পছন্দ করেন?", 
    en: "Do you like China?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করেন"}, 
        {h: "中国", p: "Zhōngguó", m: "China", bm: "চীন"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},

// 238-240: 法国 (Fǎguó - France)
{
    bn: "সে ফ্রান্সের মানুষ।", 
    en: "He is from France.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "法国", p: "Fǎguó", m: "France", bm: "ফ্রান্সের"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "আমি ফ্রান্স যেতে চাই।", 
    en: "I want to go to France.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "去", p: "qù", m: "go", bm: "যেতে"}, 
        {h: "法国", p: "Fǎguó", m: "France", bm: "ফ্রান্স"}
    ]
},
{
    bn: "ফ্রান্স খুব সুন্দর।", 
    en: "France is very beautiful.", 
    words: [
        {h: "法国", p: "Fǎguó", m: "France", bm: "ফ্রান্স"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},

// 241-243: 德国 (Déguó - Germany)
{
    bn: "তারা জার্মানির মানুষ।", 
    en: "They are from Germany.", 
    words: [
        {h: "他们", p: "tāmen", m: "they", bm: "তারা"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "德国", p: "Déguó", m: "Germany", bm: "জার্মানির"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "আমার বন্ধু জার্মানি বাস করে।", 
    en: "My friend lives in Germany.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}, 
        {h: "住", p: "zhù", m: "live", bm: "বাস করে"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "德国", p: "Déguó", m: "Germany", bm: "জার্মানি"}
    ]
},
{
    bn: "আমি জার্মানি ভাষা শিখছি।", 
    en: "I am learning German language.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখছি"}, 
        {h: "德国", p: "Déguó", m: "German", bm: "জার্মানি"}, 
        {h: "话", p: "huà", m: "language", bm: "ভাষা"}
    ]
},

// 244-246: 加拿大 (Jiānádà - Canada)
{
    bn: "আমি কানাডা থেকে এসেছি।", 
    en: "I am from Canada.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "是", p: "shì", m: "am", bm: "হয়"}, 
        {h: "加拿大", p: "Jiānádà", m: "Canada", bm: "কানাডা"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "কানাডা একটি ঠান্ডা দেশ।", 
    en: "Canada is a cold country.", 
    words: [
        {h: "加拿大", p: "Jiānádà", m: "Canada", bm: "কানাডা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "冷", p: "lěng", m: "cold", bm: "ঠান্ডা"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},
{
    bn: "সে কানাডায় পড়াশোনা করে।", 
    en: "He studies in Canada.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "在", p: "zài", m: "at", bm: "তে"}, 
        {h: "加拿大", p: "Jiānádà", m: "Canada", bm: "কানাডা"}, 
        {h: "学习", p: "xuéxí", m: "study", bm: "পড়াশোনা করে"}
    ]
},

// 247-249: 英国 (Yīngguó - United Kingdom)
{
    bn: "আমি যুক্তরাজ্যে যাচ্ছি।", 
    en: "I am going to the UK.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "go to", bm: "যাচ্ছি"}, 
        {h: "英国", p: "Yīngguó", m: "UK", bm: "যুক্তরাজ্যে"}
    ]
},
{
    bn: "তিনি ব্রিটিশ নাগরিক।", 
    en: "He is British.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "英国", p: "Yīngguó", m: "British", bm: "ব্রিটিশ"}, 
        {h: "人", p: "rén", m: "person", bm: "নাগরিক"}
    ]
},
{
    bn: "যুক্তরাজ্যের রাজধানী লন্ডন।", 
    en: "London is the capital of the UK.", 
    words: [
        {h: "英国", p: "Yīngguó", m: "UK", bm: "যুক্তরাজ্যের"}, 
        {h: "的", p: "de", m: "particle", bm: "(এর)"}, 
        {h: "首都", p: "shǒudū", m: "capital", bm: "রাজধানী"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "伦敦", p: "Lúndūn", m: "London", bm: "লন্ডন"}
    ]
},

// 250-252: 澳大利亚 (Àodàlìyà - Australia)
{
    bn: "আমার বোন অস্ট্রেলিয়ায় থাকে।", 
    en: "My sister lives in Australia.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "姐姐", p: "jiějie", m: "sister", bm: "বোন"}, 
        {h: "住", p: "zhù", m: "live", bm: "থাকে"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "澳大利亚", p: "Àodàlìyà", m: "Australia", bm: "অস্ট্রেলিয়ায়"}
    ]
},
{
    bn: "অস্ট্রেলিয়া খুব সুন্দর।", 
    en: "Australia is very beautiful.", 
    words: [
        {h: "澳大利亚", p: "Àodàlìyà", m: "Australia", bm: "অস্ট্রেলিয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "তারা অস্ট্রেলিয়ান।", 
    en: "They are Australians.", 
    words: [
        {h: "他们", p: "tāmen", m: "they", bm: "তারা"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "澳大利亚", p: "Àodàlìyà", m: "Australia", bm: "অস্ট্রেলিয়ার"}, 
        {h: "人", p: "rén", m: "person", bm: "নাগরিক"}
    ]
},

// 253-255: 俄罗斯 (Éluósī - Russia)
{
    bn: "সে রাশিয়ার মানুষ।", 
    en: "He is from Russia.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "俄罗斯", p: "Éluósī", m: "Russia", bm: "রাশিয়ার"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "রাশিয়া একটি বড় দেশ।", 
    en: "Russia is a big country.", 
    words: [
        {h: "俄罗斯", p: "Éluósī", m: "Russia", bm: "রাশিয়া"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "大", p: "dà", m: "big", bm: "বড়"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},
{
    bn: "আমি রাশিয়া যেতে চাই।", 
    en: "I want to go to Russia.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "去", p: "qù", m: "go", bm: "যেতে"}, 
        {h: "俄罗斯", p: "Éluósī", m: "Russia", bm: "রাশিয়া"}
    ]
},

// 256-258: 西班牙 (Xībānyá - Spain)
{
    bn: "আমার বন্ধু স্পেনে বাস করে।", 
    en: "My friend lives in Spain.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}, 
        {h: "住", p: "zhù", m: "live", bm: "বাস করে"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "西班牙", p: "Xībānyá", m: "Spain", bm: "স্পেনে"}
    ]
},
{
    bn: "স্পেন খুব সুন্দর।", 
    en: "Spain is very beautiful.", 
    words: [
        {h: "西班牙", p: "Xībānyá", m: "Spain", bm: "স্পেন"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "তারা স্প্যানিশ নাগরিক।", 
    en: "They are Spanish.", 
    words: [
        {h: "他们", p: "tāmen", m: "they", bm: "তারা"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "西班牙", p: "Xībānyá", m: "Spain", bm: "স্প্যানিশ"}, 
        {h: "人", p: "rén", m: "person", bm: "নাগরিক"}
    ]
},

// 259-261: 日本 (Rìběn - Japan)
{
    bn: "আমি জাপান থেকে এসেছি।", 
    en: "I am from Japan.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "是", p: "shì", m: "am", bm: "হয়"}, 
        {h: "日本", p: "Rìběn", m: "Japan", bm: "জাপান"}, 
        {h: "人", p: "rén", m: "person", bm: "থেকে এসেছি"}
    ]
},
{
    bn: "জাপান একটি সুন্দর দেশ।", 
    en: "Japan is a beautiful country.", 
    words: [
        {h: "日本", p: "Rìběn", m: "Japan", bm: "জাপান"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},
{
    bn: "সে জাপানে পড়াশোনা করে।", 
    en: "He studies in Japan.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "在", p: "zài", m: "at", bm: "তে"}, 
        {h: "日本", p: "Rìběn", m: "Japan", bm: "জাপানে"}, 
        {h: "学习", p: "xuéxí", m: "study", bm: "পড়াশোনা করে"}
    ]
},

// 262-264: 韩国 (Hánguó - South Korea)
{
    bn: "আমার মা দক্ষিণ কোরিয়া থেকে এসেছেন।", 
    en: "My mother is from South Korea.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "妈妈", p: "māma", m: "mother", bm: "মা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "韩国", p: "Hánguó", m: "South Korea", bm: "দক্ষিণ কোরিয়া"}, 
        {h: "人", p: "rén", m: "person", bm: "থেকে এসেছেন"}
    ]
},
{
    bn: "দক্ষিণ কোরিয়া খুব উন্নত।", 
    en: "South Korea is very developed.", 
    words: [
        {h: "韩国", p: "Hánguó", m: "South Korea", bm: "দক্ষিণ কোরিয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "发达", p: "fādá", m: "developed", bm: "উন্নত"}
    ]
},
{
    bn: "আমি দক্ষিণ কোরিয়া যেতে চাই।", 
    en: "I want to go to South Korea.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "去", p: "qù", m: "go", bm: "যেতে"}, 
        {h: "韩国", p: "Hánguó", m: "South Korea", bm: "দক্ষিণ কোরিয়া"}
    ]
},

// 265-267: 泰国 (Tàiguó - Thailand)
{
    bn: "সে থাইল্যান্ডের মানুষ।", 
    en: "He is from Thailand.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "泰国", p: "Tàiguó", m: "Thailand", bm: "থাইল্যান্ডের"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "থাইল্যান্ড একটি সুন্দর দেশ।", 
    en: "Thailand is a beautiful country.", 
    words: [
        {h: "泰国", p: "Tàiguó", m: "Thailand", bm: "থাইল্যান্ড"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},
{
    bn: "আমি থাইল্যান্ড যেতে চাই।", 
    en: "I want to go to Thailand.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "去", p: "qù", m: "go", bm: "যেতে"}, 
        {h: "泰国", p: "Tàiguó", m: "Thailand", bm: "থাইল্যান্ড"}
    ]
},

// 268-270: 埃及 (Āijí - Egypt)
{
    bn: "আমার বন্ধু মিশরে বাস করে।", 
    en: "My friend lives in Egypt.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}, 
        {h: "住", p: "zhù", m: "live", bm: "বাস করে"}, 
        {h: "在", p: "zài", m: "in", bm: "তে"}, 
        {h: "埃及", p: "Āijí", m: "Egypt", bm: "মিশরে"}
    ]
},
{
    bn: "মিশর খুব সুন্দর।", 
    en: "Egypt is very beautiful.", 
    words: [
        {h: "埃及", p: "Āijí", m: "Egypt", bm: "মিশর"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "তারা মিশরীয় নাগরিক।", 
    en: "They are Egyptian.", 
    words: [
        {h: "他们", p: "tāmen", m: "they", bm: "তারা"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "埃及", p: "Āijí", m: "Egypt", bm: "মিশরীয়"}, 
        {h: "人", p: "rén", m: "person", bm: "নাগরিক"}
    ]
},

// 271-273: 同学 (tóngxué - Classmate)
{
    bn: "সে আমার সহপাঠী।", 
    en: "She is my classmate.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "同学", p: "tóngxué", m: "classmate", bm: "সহপাঠী"}
    ]
},
{
    bn: "আমার সহপাঠী খুব ভালো।", 
    en: "My classmate is very good.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "同学", p: "tóngxué", m: "classmate", bm: "সহপাঠী"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "তুমি কি তোমার সহপাঠীকে চেনো?", 
    en: "Do you know your classmate?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চেনো"}, 
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "同学", p: "tóngxué", m: "classmate", bm: "সহপাঠীকে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্নবোধক)"}
    ]
},

// 274-276: 面包 (miànbāo - Bread)
{
    bn: "আমি প্রতিদিন সকালে পাউরুটি খাই।", 
    en: "I eat bread every morning.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "每天", p: "měitiān", m: "every day", bm: "প্রতিদিন"}, 
        {h: "早上", p: "zǎoshang", m: "morning", bm: "সকালে"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খাই"}, 
        {h: "面包", p: "miànbāo", m: "bread", bm: "পাউরুটি"}
    ]
},
{
    bn: "এই পাউরুটি খুব সুস্বাদু।", 
    en: "This bread is very tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "面包", p: "miànbāo", m: "bread", bm: "পাউরুটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},
{
    bn: "তুমি কি পাউরুটি কিনতে চাও?", 
    en: "Do you want to buy bread?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাও"}, 
        {h: "买", p: "mǎi", m: "buy", bm: "কিনতে"}, 
        {h: "面包", p: "miànbāo", m: "bread", bm: "পাউরুটি"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 277-279: 汉堡包 (hànbǎobāo - Hamburger)
{
    bn: "আমি বার্গার পছন্দ করি।", 
    en: "I like hamburgers.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "汉堡包", p: "hànbǎobāo", m: "hamburger", bm: "বার্গার"}
    ]
},
{
    bn: "এই বার্গারটি খুব সুস্বাদু।", 
    en: "This hamburger is very tasty.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "汉堡包", p: "hànbǎobāo", m: "hamburger", bm: "বার্গারটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},
{
    bn: "তুমি কি বার্গার খেতে চাও?", 
    en: "Do you want to eat a hamburger?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাও"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "汉堡包", p: "hànbǎobāo", m: "hamburger", bm: "বার্গার"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 280-282: 比萨饼 (bǐsàbǐng - Pizza)
{
    bn: "আমি পিৎজা পছন্দ করি।", 
    en: "I like pizza.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "比萨饼", p: "bǐsàbǐng", m: "pizza", bm: "পিৎজা"}
    ]
},
{
    bn: "এই পিৎজাটি খুব সুস্বাদু।", 
    en: "This pizza is very tasty.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "比萨饼", p: "bǐsàbǐng", m: "pizza", bm: "পিৎজাটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},
{
    bn: "তুমি কি পিৎজা কিনতে চাও?", 
    en: "Do you want to buy pizza?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাও"}, 
        {h: "买", p: "mǎi", m: "buy", bm: "কিনতে"}, 
        {h: "比萨饼", p: "bǐsàbǐng", m: "pizza", bm: "পিৎজা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 283-285: 家 (jiā - Family/Home)
{
    bn: "তোমার বাড়িতে কে কে আছে?", 
    en: "Who is in your family?", 
    words: [
        {h: "你", p: "nǐ", m: "your", bm: "তোমার"}, 
        {h: "家", p: "jiā", m: "family", bm: "বাড়িতে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "কে কে আছেন/আছে"}, 
        {h: "谁", p: "shéi", m: "who", bm: "(প্রশ্নবোধক)"}
    ]
},
{
    bn: "আমার পরিবারে চারজন মানুষ।", 
    en: "There are four people in my family.", 
    words: [
        {h: "我", p: "wǒ", m: "my", bm: "আমার"}, 
        {h: "家", p: "jiā", m: "family", bm: "পরিবারে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "四", p: "sì", m: "four", bm: "চারজন"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}
    ]
},
{
    bn: "আমি বাড়ি যাচ্ছি।", 
    en: "I am going home.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "回", p: "huí", m: "return", bm: "(ফিরে)"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়ি"}, 
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছি"}
    ]
},

// 286-288: 有 (yǒu - Have/There is)
{
    bn: "তোমার কি কোনো বই আছে?", 
    en: "Do you have any books?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে কি"}, 
        {h: "书", p: "shū", m: "book", bm: "কোনো বই"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "এখানে অনেক মানুষ আছে।", 
    en: "There are many people here.", 
    words: [
        {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "很", p: "hěn", m: "very", bm: "অনেক"}, 
        {h: "多", p: "duō", m: "many", bm: "অনেক"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}
    ]
},
{
    bn: "আমার কোনো সময় নেই।", 
    en: "I have no time.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "没有", p: "méiyǒu", m: "do not have", bm: "সময় নেই"}, 
        {h: "时间", p: "shíjiān", m: "time", bm: "(সময়)"}
    ]
},

// 289-291: 几 (jǐ - How many/Few)
{
    bn: "তোমার পরিবারে কয়জন সদস্য?", 
    en: "How many people are in your family?", 
    words: [
        {h: "你", p: "nǐ", m: "your", bm: "তোমার"}, 
        {h: "家", p: "jiā", m: "family", bm: "পরিবারে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "几", p: "jǐ", m: "how many", bm: "কয়জন/কতজন"}, 
        {h: "人", p: "rén", m: "people", bm: "সদস্য"}
    ]
},
{
    bn: "কয়টা বাজে?", 
    en: "What time is it?", 
    words: [
        {h: "几", p: "jǐ", m: "how many", bm: "কয়টা"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "বাজে"}
    ]
},
{
    bn: "আমি কয়েকজন বন্ধুকে চিনি।", 
    en: "I know a few friends.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চিনি"}, 
        {h: "几", p: "jǐ", m: "a few", bm: "কয়েকজন"}, 
        {h: "个", p: "gè", m: "measure word", bm: "জন"}, 
        {h: "朋友", p: "péngyou", m: "friends", bm: "বন্ধু"}
    ]
},

// 292-294: 照片 (zhàopiàn - Photograph/Photo)
{
    bn: "এটি আমার ছবির একটি অ্যালবাম।", 
    en: "This is a photo album of mine.", 
    words: [
        {h: "这是", p: "zhèshì", m: "this is", bm: "এটি হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "照片", p: "zhàopiàn", m: "photo", bm: "ছবির"}, 
        {h: "相册", p: "xiàngcè", m: "album", bm: "অ্যালবাম"}
    ]
},
{
    bn: "আমি ছবি তুলতে পছন্দ করি।", 
    en: "I like taking photos.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "照", p: "zhào", m: "take", bm: "তুলতে"}, 
        {h: "相片", p: "xiàngpiàn", m: "photo", bm: "ছবি"}
    ]
},
{
    bn: "এই ছবিটি খুব সুন্দর।", 
    en: "This photo is very beautiful.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "照片", p: "zhàopiàn", m: "photo", bm: "ছবিটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},

// 295-297: 做 (zuò - To do/Make)
{
    bn: "আপনি কি করছেন?", 
    en: "What are you doing?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "在", p: "zài", m: "particle", bm: "(বর্তমান কাল)"}, 
        {h: "做", p: "zuò", m: "do", bm: "করছেন"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},
{
    bn: "আমি কাজ করছি।", 
    en: "I am doing work.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "做", p: "zuò", m: "do", bm: "করছি"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}
    ]
},
{
    bn: "মা খাবার রান্না করছেন।", 
    en: "Mother is making food.", 
    words: [
        {h: "妈妈", p: "māma", m: "mother", bm: "মা"}, 
        {h: "做", p: "zuò", m: "make", bm: "রান্না করছেন"}, 
        {h: "饭", p: "fàn", m: "food", bm: "খাবার"}
    ]
},

// 298-300: 工作 (gōngzuò - Work/Job)
{
    bn: "আপনার কাজ কি?", 
    en: "What is your job?", 
    words: [
        {h: "你", p: "nǐ", m: "your", bm: "আপনার"}, 
        {h: "做", p: "zuò", m: "do", bm: "করেন"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}, 
        {h: "工作", p: "gōngzuò", m: "job", bm: "কাজ"}
    ]
},
{
    bn: "আমি খুব ব্যস্ত।", 
    en: "I have a lot of work.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "很多", p: "hěnduō", m: "a lot", bm: "অনেক"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}
    ]
},
{
    bn: "এই কাজটি খুব কঠিন।", 
    en: "This job is very difficult.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "工作", p: "gōngzuò", m: "job", bm: "কাজটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},

// 301-303: 医生 (yīshēng - Doctor)
{
    bn: "সে একজন ডাক্তার।", 
    en: "He is a doctor.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "医生", p: "yīshēng", m: "doctor", bm: "একজন ডাক্তার"}
    ]
},
{
    bn: "আমার বাবা ডাক্তার।", 
    en: "My father is a doctor.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "爸爸", p: "bàba", m: "father", bm: "বাবা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "医生", p: "yīshēng", m: "doctor", bm: "ডাক্তার"}
    ]
},
{
    bn: "আমি একজন ডাক্তার হতে চাই।", 
    en: "I want to be a doctor.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "做", p: "zuò", m: "be/do", bm: "হতে"}, 
        {h: "医生", p: "yīshēng", m: "doctor", bm: "একজন ডাক্তার"}
    ]
},


// 304-306: 弟弟 (dìdi - Younger brother)
{
    bn: "সে আমার ছোট ভাই।", 
    en: "He is my younger brother.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "弟弟", p: "dìdi", m: "younger brother", bm: "ছোট ভাই"}
    ]
},
{
    bn: "আমার ছোট ভাই ছাত্র।", 
    en: "My younger brother is a student.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "弟弟", p: "dìdi", m: "younger brother", bm: "ছোট ভাই"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "তুমি কি তোমার ছোট ভাইকে ভালোবাসো?", 
    en: "Do you love your younger brother?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "爱", p: "ài", m: "love", bm: "ভালোবাসো"}, 
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "弟弟", p: "dìdi", m: "younger brother", bm: "ছোট ভাইকে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 307-309: 哥哥 (gēge - Older brother)
{
    bn: "সে আমার বড় ভাই।", 
    en: "He is my older brother.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "哥哥", p: "gēge", m: "older brother", bm: "বড় ভাই"}
    ]
},
{
    bn: "আমার বড় ভাই শিক্ষক।", 
    en: "My older brother is a teacher.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "哥哥", p: "gēge", m: "older brother", bm: "বড় ভাই"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "তুমি কি তোমার বড় ভাইকে চেনো?", 
    en: "Do you know your older brother?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "认识", p: "rènshi", m: "know", bm: "চেনো"}, 
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "哥哥", p: "gēge", m: "older brother", bm: "বড় ভাইকে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 310-312: 一共 (yígòng - Altogether/Total)
{
    bn: "মোট কয়জন মানুষ?", 
    en: "How many people in total?", 
    words: [
        {h: "一共", p: "yígòng", m: "altogether", bm: "মোট"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "几", p: "jǐ", m: "how many", bm: "কয়জন"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}
    ]
},
{
    bn: "মোট ৩টি বই।", 
    en: "Three books in total.", 
    words: [
        {h: "一共", p: "yígòng", m: "altogether", bm: "মোট"}, 
        {h: "三", p: "sān", m: "three", bm: "৩টি"}, 
        {h: "本", p: "běn", m: "measure word", bm: "(বইয়ের একক)"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},
{
    bn: "মোট কত টাকা?", 
    en: "How much is it in total?", 
    words: [
        {h: "一共", p: "yígòng", m: "altogether", bm: "মোট"}, 
        {h: "多少", p: "duōshǎo", m: "how much", bm: "কত"}, 
        {h: "钱", p: "qián", m: "money", bm: "টাকা"}
    ]
},

// 313-315: 个 (gè - Measure word for people or objects)
{
    bn: "একটি আপেল।", 
    en: "One apple.", 
    words: [
        {h: "一", p: "yī", m: "one", bm: "একটি"}, 
        {h: "个", p: "gè", m: "measure word", bm: "(টির একক)"}, 
        {h: "苹果", p: "píngguǒ", m: "apple", bm: "আপেল"}
    ]
},
{
    bn: "এটি একটি ভালো মানুষ।", 
    en: "This is a good person.", 
    words: [
        {h: "这是", p: "zhèshì", m: "this is", bm: "এটি হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}, 
        {h: "人", p: "rén", m: "person", bm: "মানুষ"}
    ]
},
{
    bn: "কয়টি বই?", 
    en: "How many books?", 
    words: [
        {h: "几", p: "jǐ", m: "how many", bm: "কয়টি"}, 
        {h: "个", p: "gè", m: "measure word", bm: "(বইয়ের একক)"}, 
        {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},

// 316-318: 两 (liǎng - Two - used with measure words)
{
    bn: "দুইজন মানুষ।", 
    en: "Two people.", 
    words: [
        {h: "两", p: "liǎng", m: "two", bm: "দুইজন"}, 
        {h: "个", p: "gè", m: "measure word", bm: "(মানুষের একক)"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}
    ]
},
{
    bn: "আমার দুটি আপেল আছে।", 
    en: "I have two apples.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "两", p: "liǎng", m: "two", bm: "দুটি"}, 
        {h: "个", p: "gè", m: "measure word", bm: "(ফলের একক)"}, 
        {h: "苹果", p: "píngguǒ", m: "apple", bm: "আপেল"}
    ]
},
{
    bn: "আমি দুই ঘণ্টা কাজ করি।", 
    en: "I work for two hours.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করি"}, 
        {h: "两", p: "liǎng", m: "two", bm: "দুই"}, 
        {h: "个", p: "gè", m: "measure word", bm: "(সময়ের একক)"}, 
        {h: "小时", p: "xiǎoshí", m: "hour", bm: "ঘণ্টা"}
    ]
},

// 319-321: 姐姐 (jiějie - Older sister)
{
    bn: "সে আমার বড় বোন।", 
    en: "She is my older sister.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "姐姐", p: "jiějie", m: "older sister", bm: "বড় বোন"}
    ]
},
{
    bn: "আমার বড় বোন ডাক্তার।", 
    en: "My older sister is a doctor.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "姐姐", p: "jiějie", m: "older sister", bm: "বড় বোন"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "医生", p: "yīshēng", m: "doctor", bm: "ডাক্তার"}
    ]
},
{
    bn: "তুমি কি তোমার বড় বোনকে ভালোবাসো?", 
    en: "Do you love your older sister?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "爱", p: "ài", m: "love", bm: "ভালোবাসো"}, 
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "姐姐", p: "jiějie", m: "older sister", bm: "বড় বোনকে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 322-324: 还 (hái - Still/Also/Even)
{
    bn: "তিনি এখনও বাড়িতে আছেন।", 
    en: "He is still at home.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "还", p: "hái", m: "still", bm: "এখনও"}, 
        {h: "在", p: "zài", m: "at", bm: "আছেন"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়িতে"}
    ]
},
{
    bn: "আমি চাইনিজ খাবার এবং পাউরুটি পছন্দ করি।", 
    en: "I like Chinese food and also bread.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}, 
        {h: "还", p: "hái", m: "also", bm: "এবং"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "面包", p: "miànbāo", m: "bread", bm: "পাউরুটি"}
    ]
},
{
    bn: "সে এমনকি ইংরেজিও বলতে পারে।", 
    en: "He can even speak English.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "还", p: "hái", m: "even", bm: "এমনকি"}, 
        {h: "会", p: "huì", m: "can", bm: "পারে"}, 
        {h: "说", p: "shuō", m: "speak", bm: "বলতে"}, 
        {h: "英语", p: "yīngyǔ", m: "English", bm: "ইংরেজি"}
    ]
},

// 325-327: 谁 (shéi/shuí - Who)
{
    bn: "সে কে?", 
    en: "Who is he?", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "谁", p: "shéi", m: "who", bm: "কে"}
    ]
},
{
    bn: "ঐ বইটি কার?", 
    en: "Whose book is that?", 
    words: [
        {h: "那", p: "nà", m: "that", bm: "ঐ"}, 
        {h: "本", p: "běn", m: "measure word", bm: "(বইয়ের একক)"}, 
        {h: "书", p: "shū", m: "book", bm: "বইটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "谁", p: "shéi", m: "who", bm: "কার"}
    ]
},
{
    bn: "কে চাইনিজ ভাষা শিখছে?", 
    en: "Who is learning Chinese?", 
    words: [
        {h: "谁", p: "shéi", m: "who", bm: "কে"}, 
        {h: "在", p: "zài", m: "is", bm: "বর্তমানে"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখছে"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চাইনিজ ভাষা"}
    ]
},

// 328-330: 妹妹 (mèimei - Younger sister)
{
    bn: "সে আমার ছোট বোন।", 
    en: "She is my younger sister.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "妹妹", p: "mèimei", m: "younger sister", bm: "ছোট বোন"}
    ]
},
{
    bn: "আমার ছোট বোন ছাত্র।", 
    en: "My younger sister is a student.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "妹妹", p: "mèimei", m: "younger sister", bm: "ছোট বোন"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "তুমি কি তোমার ছোট বোনকে ভালোবাসো?", 
    en: "Do you love your younger sister?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "爱", p: "ài", m: "love", bm: "ভালোবাসো"}, 
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "妹妹", p: "mèimei", m: "younger sister", bm: "ছোট বোনকে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 331-333: 没 (méi - Not/Have not)
{
    bn: "আমি চাইনিজ খাবার খাইনি।", 
    en: "I did not eat Chinese food.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "没", p: "méi", m: "did not", bm: "খাইনি"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেয়েছি"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},
{
    bn: "আমার কোনো সময় নেই।", 
    en: "I do not have time.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "没", p: "méi", m: "do not", bm: "নেই"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "时间", p: "shíjiān", m: "time", bm: "সময়"}
    ]
},
{
    bn: "সে বাড়িতে নেই।", 
    en: "He is not at home.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "没", p: "méi", m: "not", bm: "নেই"}, 
        {h: "在", p: "zài", m: "at", bm: "বর্তমানে"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়িতে"}
    ]
},

// 334-336: 狗 (gǒu - Dog)
{
    bn: "সে একটি কুকুর পছন্দ করে।", 
    en: "He likes a dog.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করে"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "狗", p: "gǒu", m: "dog", bm: "কুকুর"}
    ]
},
{
    bn: "এই কুকুরটি খুব সুন্দর।", 
    en: "This dog is very cute.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "个", p: "gè", m: "measure word", bm: "টি"}, 
        {h: "狗", p: "gǒu", m: "dog", bm: "কুকুরটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "可爱", p: "kě'ài", m: "cute", bm: "সুন্দর/কিউট"}
    ]
},
{
    bn: "আমার কুকুর বাড়িতে নেই।", 
    en: "My dog is not at home.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "狗", p: "gǒu", m: "dog", bm: "কুকুর"}, 
        {h: "不", p: "bù", m: "not", bm: "নেই"}, 
        {h: "在", p: "zài", m: "at", bm: "বর্তমানে"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়িতে"}
    ]
},

// 337-339: 真 (zhēn - Really/Truly)
{
    bn: "এটি সত্যিই সুন্দর।", 
    en: "This is really beautiful.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "真", p: "zhēn", m: "really", bm: "সত্যিই"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "তিনি সত্যিই খুব ব্যস্ত।", 
    en: "He is truly very busy.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "真", p: "zhēn", m: "truly", bm: "সত্যিই"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "এটা সত্যিই সুস্বাদু।", 
    en: "This is really tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটা"}, 
        {h: "真", p: "zhēn", m: "really", bm: "সত্যিই"}, 
        {h: "好吃", p: "hǎochī", m: "tasty", bm: "সুস্বাদু"}
    ]
},

// 340-342: 漂亮 (piàoliang - Beautiful/Pretty)
{
    bn: "তিনি খুব সুন্দরী।", 
    en: "She is very beautiful.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "তিনি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দরী"}
    ]
},
{
    bn: "সুন্দর ছবি।", 
    en: "Beautiful photo.", 
    words: [
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}, 
        {h: "照片", p: "zhàopiàn", m: "photo", bm: "ছবি"}
    ]
},
{
    bn: "আপনার কাপড়গুলো খুব সুন্দর।", 
    en: "Your clothes are very pretty.", 
    words: [
        {h: "你的", p: "nǐde", m: "your", bm: "আপনার"}, 
        {h: "衣服", p: "yīfu", m: "clothes", bm: "কাপড়গুলো"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "pretty", bm: "সুন্দর"}
    ]
},

// 343-345: 喝 (hē - To drink)
{
    bn: "আমি জল পান করি।", 
    en: "I drink water.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করি"}, 
        {h: "水", p: "shuǐ", m: "water", bm: "জল"}
    ]
},
{
    bn: "তুমি কি চা পান করবে?", 
    en: "Do you want to drink tea?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "কি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করবে"}, 
        {h: "茶", p: "chá", m: "tea", bm: "চা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "সে কফি পান করতে পছন্দ করে।", 
    en: "He likes to drink coffee.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করে"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "咖啡", p: "kāfēi", m: "coffee", bm: "কফি"}
    ]
},

// 346-348: 茶 (chá - Tea)
{
    bn: "আমি চা পান করতে পছন্দ করি।", 
    en: "I like to drink tea.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "茶", p: "chá", m: "tea", bm: "চা"}
    ]
},
{
    bn: "এই চা খুব ভালো।", 
    en: "This tea is very good.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "茶", p: "chá", m: "tea", bm: "চা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "আপনি কি চা চান?", 
    en: "Do you want tea?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "কি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "茶", p: "chá", m: "tea", bm: "চা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 349-351: 咖啡 (kāfēi - Coffee)
{
    bn: "আমি কফি পান করি না।", 
    en: "I do not drink coffee.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করি"}, 
        {h: "咖啡", p: "kāfēi", m: "coffee", bm: "কফি"}
    ]
},
{
    bn: "এটি খুব কফি সুস্বাদু।", 
    en: "This coffee is very tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "咖啡", p: "kāfēi", m: "coffee", bm: "কফি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好喝", p: "hǎohē", m: "tasty (drink)", bm: "সুস্বাদু"}
    ]
},
{
    bn: "তুমি কি কফি পান করবে?", 
    en: "Do you want to drink coffee?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "要", p: "yào", m: "want", bm: "কি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করবে"}, 
        {h: "咖啡", p: "kāfēi", m: "coffee", bm: "কফি"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 352-354: 女儿 (nǚ'ér - Daughter)
{
    bn: "সে আমার মেয়ে।", 
    en: "She is my daughter.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "女儿", p: "nǚ'ér", m: "daughter", bm: "মেয়ে"}
    ]
},
{
    bn: "আমার মেয়ে খুব সুন্দর।", 
    en: "My daughter is very beautiful.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "女儿", p: "nǚ'ér", m: "daughter", bm: "মেয়ে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "তোমার কি মেয়ে আছে?", 
    en: "Do you have a daughter?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে কি"}, 
        {h: "女儿", p: "nǚ'ér", m: "daughter", bm: "মেয়ে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 355-357: 女 (nǚ - Female/Woman)
{
    bn: "সে একজন নারী।", 
    en: "She is a woman.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একজন"}, 
        {h: "女", p: "nǚ", m: "woman", bm: "নারী"}
    ]
},
{
    bn: "মেয়েটির নাম কি?", 
    en: "What is the girl's name?", 
    words: [
        {h: "女", p: "nǚ", m: "girl", bm: "মেয়েটি"}, 
        {h: "孩", p: "hái", m: "child", bm: "র"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম কি"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}
    ]
},
{
    bn: "মেয়েদের পোশাক।", 
    en: "Women's clothes.", 
    words: [
        {h: "女", p: "nǚ", m: "women", bm: "মেয়েদের"}, 
        {h: "装", p: "zhuāng", m: "clothing", bm: "পোশাক"}
    ]
},

// 358-360: 今年 (jīnnián - This year)
{
    bn: "আমি এ বছর চীনে যাব।", 
    en: "I will go to China this year.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "今年", p: "jīnnián", m: "this year", bm: "এ বছর"}, 
        {h: "去", p: "qù", m: "go", bm: "যাব"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীনে"}
    ]
},
{
    bn: "এ বছর খুব ঠান্ডা।", 
    en: "It is very cold this year.", 
    words: [
        {h: "今年", p: "jīnnián", m: "this year", bm: "এ বছর"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "冷", p: "lěng", m: "cold", bm: "ঠান্ডা"}
    ]
},
{
    bn: "সে এ বছর কত বছর বয়সী?", 
    en: "How old is she this year?", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "今年", p: "jīnnián", m: "this year", bm: "এ বছর"}, 
        {h: "几", p: "jǐ", m: "how many", bm: "কত"}, 
        {h: "岁", p: "suì", m: "years old", bm: "বছর বয়সী"}
    ]
},

// 361-363: 年 (nián - Year)
{
    bn: "আগামী বছর।", 
    en: "Next year.", 
    words: [
        {h: "明", p: "míng", m: "next", bm: "আগামী"}, 
        {h: "年", p: "nián", m: "year", bm: "বছর"}
    ]
},
{
    bn: "আমি গত বছর এখানে এসেছি।", 
    en: "I came here last year.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "last", bm: "গত"}, 
        {h: "年", p: "nián", m: "year", bm: "বছর"}, 
        {h: "来", p: "lái", m: "come", bm: "এসেছি"}, 
        {h: "这儿", p: "zhèr", m: "here", bm: "এখানে"}
    ]
},
{
    bn: "কয় বছর হলো?", 
    en: "How many years?", 
    words: [
        {h: "几", p: "jǐ", m: "how many", bm: "কয়"}, 
        {h: "年", p: "nián", m: "year", bm: "বছর"}
    ]
},

// 364-366: 岁 (suì - Years old/Age)
{
    bn: "আমার বয়স ২০ বছর।", 
    en: "I am 20 years old.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "二十", p: "èrshí", m: "twenty", bm: "২০"}, 
        {h: "岁", p: "suì", m: "years old", bm: "বছর"}
    ]
},
{
    bn: "তোমার মেয়ের বয়স কত?", 
    en: "How old is your daughter?", 
    words: [
        {h: "你的", p: "nǐde", m: "your", bm: "তোমার"}, 
        {h: "女儿", p: "nǚ'ér", m: "daughter", bm: "মেয়ের"}, 
        {h: "几", p: "jǐ", m: "how many", bm: "কত"}, 
        {h: "岁", p: "suì", m: "years old", bm: "বছর বয়সী"}
    ]
},
{
    bn: "সে ১০ বছর বয়সী।", 
    en: "He is 10 years old.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "十", p: "shí", m: "ten", bm: "১০"}, 
        {h: "岁", p: "suì", m: "years old", bm: "বছর বয়সী"}
    ]
},

// 367-369: 今天 (jīntiān - Today)
{
    bn: "আজ খুব গরম।", 
    en: "It is very hot today.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "热", p: "rè", m: "hot", bm: "গরম"}
    ]
},
{
    bn: "আমি আজ কাজ করব না।", 
    en: "I will not work today.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করব"}
    ]
},
{
    bn: "আজ কি সোমবার?", 
    en: "Is it Monday today?", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "是", p: "shì", m: "is", bm: "কি"}, 
        {h: "星期一", p: "xīngqīyī", m: "Monday", bm: "সোমবার"}
    ]
},

// 370-372: 天 (tiān - Day/Sky)
{
    bn: "আজকের আবহাওয়া খুব ভালো।", 
    en: "Today's weather is very good.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজকের"}, 
        {h: "的", p: "de", m: "particle", bm: "(র)"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "আমার তিন দিন ছুটি আছে।", 
    en: "I have three days off.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "三", p: "sān", m: "three", bm: "তিন"}, 
        {h: "天", p: "tiān", m: "day", bm: "দিন"}, 
        {h: "假", p: "jià", m: "holiday", bm: "ছুটি"}
    ]
},
{
    bn: "আকাশ নীল।", 
    en: "The sky is blue.", 
    words: [
        {h: "天", p: "tiān", m: "sky", bm: "আকাশ"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "蓝色", p: "lánsè", m: "blue", bm: "নীল"}
    ]
},

// 373-375: 钢琴 (gāngqín - Piano)
{
    bn: "আমি পিয়ানো বাজাতে পারি।", 
    en: "I can play the piano.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "会", p: "huì", m: "can", bm: "পারি"}, 
        {h: "弹", p: "tán", m: "play", bm: "বাজাতে"}, 
        {h: "钢琴", p: "gāngqín", m: "piano", bm: "পিয়ানো"}
    ]
},
{
    bn: "তার পিয়ানো খুব সুন্দর।", 
    en: "Her piano is very beautiful.", 
    words: [
        {h: "她", p: "tā", m: "her", bm: "তার"}, 
        {h: "的", p: "de", m: "particle", bm: "(র)"}, 
        {h: "钢琴", p: "gāngqín", m: "piano", bm: "পিয়ানো"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "তুমি কি পিয়ানো বাজাতে চাও?", 
    en: "Do you want to play the piano?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাও"}, 
        {h: "弹", p: "tán", m: "play", bm: "বাজাতে"}, 
        {h: "钢琴", p: "gāngqín", m: "piano", bm: "পিয়ানো"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 376-378: 课 (kè - Class/Lesson)
{
    bn: "আমার এখন ক্লাস আছে।", 
    en: "I have class now.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "课", p: "kè", m: "class", bm: "ক্লাস"}
    ]
},
{
    bn: "এই ক্লাসটি খুব কঠিন।", 
    en: "This class is very difficult.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "课", p: "kè", m: "class", bm: "ক্লাসটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},
{
    bn: "তুমি কি ক্লাস পছন্দ করো?", 
    en: "Do you like the class?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করো"}, 
        {h: "课", p: "kè", m: "class", bm: "ক্লাসটি"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 379-381: 孩子 (háizi - Child/Children)
{
    bn: "তোমার কয়টি শিশু আছে?", 
    en: "How many children do you have?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "几个", p: "jǐge", m: "how many", bm: "কয়টি"}, 
        {h: "孩子", p: "háizi", m: "children", bm: "শিশু"}
    ]
},
{
    bn: "শিশুটি খুব সুন্দর।", 
    en: "The child is very cute.", 
    words: [
        {h: "孩子", p: "háizi", m: "child", bm: "শিশু"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "可爱", p: "kě'ài", m: "cute", bm: "সুন্দর"}
    ]
},
{
    bn: "শিশুদের খেলার মাঠ।", 
    en: "Children's playground.", 
    words: [
        {h: "孩子", p: "háizi", m: "children", bm: "শিশুদের"}, 
        {h: "的", p: "de", m: "particle", bm: "(র)"}, 
        {h: "乐园", p: "lèyuán", m: "playground", bm: "খেলার মাঠ"}
    ]
},

// 382-384: 晚上 (wǎnshang - Evening/Night)
{
    bn: "আমি রাতে খাবার খাই।", 
    en: "I eat dinner in the evening.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "晚上", p: "wǎnshang", m: "evening", bm: "রাতে"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খাই"}, 
        {h: "饭", p: "fàn", m: "meal", bm: "খাবার"}
    ]
},
{
    bn: "আজ রাতে আমি সিনেমা দেখব।", 
    en: "I will watch a movie tonight.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "晚上", p: "wǎnshang", m: "night", bm: "রাতে"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "看", p: "kàn", m: "watch", bm: "দেখব"}, 
        {h: "电影", p: "diànyǐng", m: "movie", bm: "সিনেমা"}
    ]
},
{
    bn: "তুমি কি রাতে ব্যস্ত?", 
    en: "Are you busy in the evening?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "晚上", p: "wǎnshang", m: "evening", bm: "রাতে"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 385-387: 晚 (wǎn - Late/Evening)
{
    bn: "এখন অনেক রাত।", 
    en: "It is very late now.", 
    words: [
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "晚", p: "wǎn", m: "late", bm: "রাত"}
    ]
},
{
    bn: "শুভ সন্ধ্যা!", 
    en: "Good evening!", 
    words: [
        {h: "晚", p: "wǎn", m: "evening", bm: "সন্ধ্যা/রাত"}, 
        {h: "安", p: "ān", m: "peace/good", bm: "শুভ"}
    ]
},
{
    bn: "আমার যেতে দেরি হয়েছে।", 
    en: "I was late to go.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "go", bm: "যেতে"}, 
        {h: "晚", p: "wǎn", m: "late", bm: "দেরি"}, 
        {h: "了", p: "le", m: "marker", bm: "হয়েছে"}
    ]
},

// 388-390: 英语 (yīngyǔ - English Language)
{
    bn: "আমি ইংরেজি পড়তে পারি।", 
    en: "I can read English.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "会", p: "huì", m: "can", bm: "পারি"}, 
        {h: "读", p: "dú", m: "read", bm: "পড়তে"}, 
        {h: "英语", p: "yīngyǔ", m: "English", bm: "ইংরেজি"}
    ]
},
{
    bn: "এই বইটি ইংরেজি।", 
    en: "This book is in English.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "本", p: "běn", m: "measure word", bm: "(বইয়ের একক)"}, 
        {h: "书", p: "shū", m: "book", bm: "বইটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "英语", p: "yīngyǔ", m: "English", bm: "ইংরেজি"}
    ]
},
{
    bn: "আপনি কি ইংরেজি জানেন?", 
    en: "Do you know English?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "会", p: "huì", m: "know/can", bm: "জানেন/পাড়েন"}, 
        {h: "英语", p: "yīngyǔ", m: "English", bm: "ইংরেজি"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 391-393: 中国 (zhōngguó - China)
{
    bn: "আমি চীন থেকে এসেছি।", 
    en: "I am from China.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "是", p: "shì", m: "am", bm: "হই"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "人", p: "rén", m: "person", bm: "থেকে এসেছি"}
    ]
},
{
    bn: "চীন একটি বিশাল দেশ।", 
    en: "China is a huge country.", 
    words: [
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একটি"}, 
        {h: "大", p: "dà", m: "huge", bm: "বিশাল"}, 
        {h: "国家", p: "guójiā", m: "country", bm: "দেশ"}
    ]
},
{
    bn: "আমি চীন ভ্রমণ করতে চাই।", 
    en: "I want to travel to China.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "去", p: "qù", m: "go/travel", bm: "ভ্রমণ করতে"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীন"}
    ]
},

// 394-396: 陆雨平 (Lù Yǔpíng - Name)
{
    bn: "তার নাম লু ইউপিং।", 
    en: "His name is Lu Yuping.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তার"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম"}, 
        {h: "陆雨平", p: "Lù Yǔpíng", m: "Lu Yuping", bm: "লু ইউপিং"}
    ]
},
{
    bn: "লু ইউপিং আমার বন্ধু।", 
    en: "Lu Yuping is my friend.", 
    words: [
        {h: "陆雨平", p: "Lù Yǔpíng", m: "Lu Yuping", bm: "লু ইউপিং"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}
    ]
},
{
    bn: "লু ইউপিং চীনে কাজ করে।", 
    en: "Lu Yuping works in China.", 
    words: [
        {h: "陆雨平", p: "Lù Yǔpíng", m: "Lu Yuping", bm: "লু ইউপিং"}, 
        {h: "在", p: "zài", m: "at", bm: "তে"}, 
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীনে"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করে"}
    ]
},

// 397-399: 律师 (lǜshī - Lawyer)
{
    bn: "সে একজন আইনজীবী।", 
    en: "He is a lawyer.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "律师", p: "lǜshī", m: "lawyer", bm: "একজন আইনজীবী"}
    ]
},
{
    bn: "আমার বন্ধু একজন আইনজীবী।", 
    en: "My friend is a lawyer.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "律师", p: "lǜshī", m: "lawyer", bm: "একজন আইনজীবী"}
    ]
},
{
    bn: "আইনজীবীটি খুব বুদ্ধিমান।", 
    en: "The lawyer is very smart.", 
    words: [
        {h: "律师", p: "lǜshī", m: "lawyer", bm: "আইনজীবীটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "聪明", p: "cōngming", m: "smart", bm: "বুদ্ধিমান"}
    ]
},

// 400-402: 记者 (jìzhě - Journalist/Reporter)
{
    bn: "তিনি একজন সাংবাদিক।", 
    en: "She is a journalist.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "记者", p: "jìzhě", m: "journalist", bm: "একজন সাংবাদিক"}
    ]
},
{
    bn: "সাংবাদিকরা খুব ব্যস্ত।", 
    en: "Journalists are very busy.", 
    words: [
        {h: "记者", p: "jìzhě", m: "journalists", bm: "সাংবাদিকরা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "আমি একজন সাংবাদিক হতে চাই।", 
    en: "I want to be a journalist.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "做", p: "zuò", m: "be", bm: "হতে"}, 
        {h: "记者", p: "jìzhě", m: "journalist", bm: "একজন সাংবাদিক"}
    ]
},

// 403-405: 服务员 (fúwùyuán - Waiter/Waitress)
{
    bn: "সে একজন ওয়েটার।", 
    en: "He is a waiter.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "服务员", p: "fúwùyuán", m: "waiter", bm: "একজন ওয়েটার"}
    ]
},
{
    bn: "ওয়েটার খুব নম্র।", 
    en: "The waiter is very polite.", 
    words: [
        {h: "服务员", p: "fúwùyuán", m: "waiter", bm: "ওয়েটার"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "有礼貌", p: "yǒulǐmào", m: "polite", bm: "নম্র"}
    ]
},
{
    bn: "আমাকে মেনু দিন, ওয়েটার।", 
    en: "Give me the menu, waiter.", 
    words: [
        {h: "服务员", p: "fúwùyuán", m: "waiter", bm: "ওয়েটার"}, 
        {h: "请", p: "qǐng", m: "please", bm: "অনুগ্রহ"}, 
        {h: "给", p: "gěi", m: "give", bm: "দিন"}, 
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"}, 
        {h: "菜单", p: "càidān", m: "menu", bm: "মেনু"}
    ]
},

// 406-408: 经理 (jīnglǐ - Manager)
{
    bn: "তিনি একজন ম্যানেজার।", 
    en: "He is a manager.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "经理", p: "jīnglǐ", m: "manager", bm: "একজন ম্যানেজার"}
    ]
},
{
    bn: "ম্যানেজার খুব কঠোর।", 
    en: "The manager is very strict.", 
    words: [
        {h: "经理", p: "jīnglǐ", m: "manager", bm: "ম্যানেজার"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "严格", p: "yángé", m: "strict", bm: "কঠোর"}
    ]
},
{
    bn: "আমি ম্যানেজার হতে চাই।", 
    en: "I want to be a manager.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "做", p: "zuò", m: "be", bm: "হতে"}, 
        {h: "经理", p: "jīnglǐ", m: "manager", bm: "ম্যানেজার"}
    ]
},

// 409-411: 工程师 (gōngchéngshī - Engineer)
{
    bn: "সে একজন প্রকৌশলী।", 
    en: "She is an engineer.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "工程师", p: "gōngchéngshī", m: "engineer", bm: "একজন প্রকৌশলী"}
    ]
},
{
    bn: "প্রকৌশলী খুব বুদ্ধিমান।", 
    en: "The engineer is very smart.", 
    words: [
        {h: "工程师", p: "gōngchéngshī", m: "engineer", bm: "প্রকৌশলী"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "聪明", p: "cōngming", m: "smart", bm: "বুদ্ধিমান"}
    ]
},
{
    bn: "আমি একজন প্রকৌশলী হতে চাই।", 
    en: "I want to be an engineer.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "做", p: "zuò", m: "be", bm: "হতে"}, 
        {h: "工程师", p: "gōngchéngshī", m: "engineer", bm: "একজন প্রকৌশলী"}
    ]
},

// 412-414: 学生 (xuésheng - Student)
{
    bn: "আমি একজন ছাত্র।", 
    en: "I am a student.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "是", p: "shì", m: "am", bm: "হই"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "একজন ছাত্র"}
    ]
},
{
    bn: "ছাত্রছাত্রীরা পড়াশোনা করে।", 
    en: "Students study.", 
    words: [
        {h: "学生", p: "xuésheng", m: "students", bm: "ছাত্রছাত্রীরা"}, 
        {h: "学习", p: "xuéxí", m: "study", bm: "পড়াশোনা করে"}
    ]
},
{
    bn: "তুমি কি ছাত্র?", 
    en: "Are you a student?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "是", p: "shì", m: "are", bm: "কি"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 415-417: 商人 (shāngrén - Businessman)
{
    bn: "তিনি একজন ব্যবসায়ী।", 
    en: "He is a businessman.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "商人", p: "shāngrén", m: "businessman", bm: "একজন ব্যবসায়ী"}
    ]
},
{
    bn: "ব্যবসায়ী ধনী।", 
    en: "The businessman is rich.", 
    words: [
        {h: "商人", p: "shāngrén", m: "businessman", bm: "ব্যবসায়ী"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "富有", p: "fùyǒu", m: "rich", bm: "ধনী"}
    ]
},
{
    bn: "আমার বাবা ব্যবসায়ী।", 
    en: "My father is a businessman.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "爸爸", p: "bàba", m: "father", bm: "বাবা"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "商人", p: "shāngrén", m: "businessman", bm: "ব্যবসায়ী"}
    ]
},

// 418-420: 先生 (xiānsheng - Mr./Sir/Husband)
{
    bn: "হ্যালো, মিস্টার লি।", 
    en: "Hello, Mr. Li.", 
    words: [
        {h: "你好", p: "nǐhǎo", m: "hello", bm: "হ্যালো"}, 
        {h: "李", p: "Lǐ", m: "Li", bm: "লি"}, 
        {h: "先生", p: "xiānsheng", m: "Mr.", bm: "মিস্টার"}
    ]
},
{
    bn: "তিনি আমার স্বামী।", 
    en: "He is my husband.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "先生", p: "xiānsheng", m: "husband", bm: "স্বামী"}
    ]
},
{
    bn: "মিস্টার স্মিথ এখানে আছেন।", 
    en: "Mr. Smith is here.", 
    words: [
        {h: "史密斯", p: "Shǐmìsī", m: "Smith", bm: "স্মিথ"}, 
        {h: "先生", p: "xiānsheng", m: "Mr.", bm: "মিস্টার"}, 
        {h: "在", p: "zài", m: "is", bm: "আছেন"}, 
        {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}
    ]
},

// 421-423: 太太 (tàitai - Mrs./Madam/Wife)
{
    bn: "হ্যালো, মিসেস ওয়াং।", 
    en: "Hello, Mrs. Wang.", 
    words: [
        {h: "你好", p: "nǐhǎo", m: "hello", bm: "হ্যালো"}, 
        {h: "王", p: "Wáng", m: "Wang", bm: "ওয়াং"}, 
        {h: "太太", p: "tàitai", m: "Mrs.", bm: "মিসেস"}
    ]
},
{
    bn: "তিনি আমার স্ত্রী।", 
    en: "She is my wife.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "তিনি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "太太", p: "tàitai", m: "wife", bm: "স্ত্রী"}
    ]
},
{
    bn: "মিসেস হোয়াইট খুব সুন্দর।", 
    en: "Mrs. White is very beautiful.", 
    words: [
        {h: "怀特", p: "Huáitè", m: "White", bm: "হোয়াইট"}, 
        {h: "太太", p: "tàitai", m: "Mrs.", bm: "মিসেস"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},

// 424-426: 男朋友 (nánpéngyou - Boyfriend)
{
    bn: "সে আমার প্রেমিক।", 
    en: "He is my boyfriend.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "男朋友", p: "nánpéngyou", m: "boyfriend", bm: "প্রেমিক"}
    ]
},
{
    bn: "আমার প্রেমিকের নাম লু ইউপিং।", 
    en: "My boyfriend's name is Lu Yuping.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "男朋友", p: "nánpéngyou", m: "boyfriend", bm: "প্রেমিকের"}, 
        {h: "叫", p: "jiào", m: "called", bm: "নাম"}, 
        {h: "陆雨平", p: "Lù Yǔpíng", m: "Lu Yuping", bm: "লু ইউপিং"}
    ]
},
{
    bn: "তোমার কি প্রেমিক আছে?", 
    en: "Do you have a boyfriend?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে কি"}, 
        {h: "男朋友", p: "nánpéngyou", m: "boyfriend", bm: "প্রেমিক"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 427-429: 女朋友 (nǚpéngyou - Girlfriend)
{
    bn: "সে আমার প্রেমিকা।", 
    en: "She is my girlfriend.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "女朋友", p: "nǚpéngyou", m: "girlfriend", bm: "প্রেমিকা"}
    ]
},
{
    bn: "আমার প্রেমিকা খুব সুন্দর।", 
    en: "My girlfriend is very beautiful.", 
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"}, 
        {h: "女朋友", p: "nǚpéngyou", m: "girlfriend", bm: "প্রেমিকা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "তোমার কি প্রেমিকা আছে?", 
    en: "Do you have a girlfriend?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে কি"}, 
        {h: "女朋友", p: "nǚpéngyou", m: "girlfriend", bm: "প্রেমিকা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 430-432: 橙汁 (chéngzhī - Orange juice)
{
    bn: "আমি কমলার রস পান করতে পছন্দ করি।", 
    en: "I like to drink orange juice.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "橙汁", p: "chéngzhī", m: "orange juice", bm: "কমলার রস"}
    ]
},
{
    bn: "এই কমলার রস খুব সুস্বাদু।", 
    en: "This orange juice is very tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "橙汁", p: "chéngzhī", m: "orange juice", bm: "কমলার রস"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好喝", p: "hǎohē", m: "tasty (drink)", bm: "সুস্বাদু"}
    ]
},
{
    bn: "আপনি কি কমলার রস পান করতে চান?", 
    en: "Do you want to drink orange juice?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চান"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "橙汁", p: "chéngzhī", m: "orange juice", bm: "কমলার রস"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 433-435: 可乐 (kělè - Cola)
{
    bn: "আমি কোলা পান করতে পছন্দ করি।", 
    en: "I like to drink cola.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "可乐", p: "kělè", m: "cola", bm: "কোলা"}
    ]
},
{
    bn: "এই কোলা খুব ঠান্ডা।", 
    en: "This cola is very cold.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "可乐", p: "kělè", m: "cola", bm: "কোলা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "冷", p: "lěng", m: "cold", bm: "ঠান্ডা"}
    ]
},
{
    bn: "আপনি কি কোলা চান?", 
    en: "Do you want cola?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "要", p: "yào", m: "want", bm: "চান"}, 
        {h: "可乐", p: "kělè", m: "cola", bm: "কোলা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 436-438: 牛奶 (niúnǎi - Milk)
{
    bn: "আমি দুধ পান করি।", 
    en: "I drink milk.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করি"}, 
        {h: "牛奶", p: "niúnǎi", m: "milk", bm: "দুধ"}
    ]
},
{
    bn: "দুধ খুব স্বাস্থ্যকর।", 
    en: "Milk is very healthy.", 
    words: [
        {h: "牛奶", p: "niúnǎi", m: "milk", bm: "দুধ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "健康", p: "jiànkāng", m: "healthy", bm: "স্বাস্থ্যকর"}
    ]
},
{
    bn: "আপনি কি দুধ পান করতে চান?", 
    en: "Do you want to drink milk?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চান"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "牛奶", p: "niúnǎi", m: "milk", bm: "দুধ"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 439-441: 豆浆 (dòujiāng - Soy milk)
{
    bn: "আমি সয়াবিন দুধ পান করতে পছন্দ করি।", 
    en: "I like to drink soyabean milk.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "豆浆", p: "dòujiāng", m: "soyabean milk", bm: "সয়াবিন দুধ"}
    ]
},
{
    bn: "এই সয়াবিন দুধ খুব সুস্বাদু।", 
    en: "This soyabean milk is very tasty.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "豆浆", p: "dòujiāng", m: "soyabean milk", bm: "সয়াবিন দুধ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好喝", p: "hǎohē", m: "tasty (drink)", bm: "সুস্বাদু"}
    ]
},
{
    bn: "আপনি কি সয়াবিন দুধ পান করতে চান?", 
    en: "Do you want to drink soyabean milk?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চান"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করতে"}, 
        {h: "豆浆", p: "dòujiāng", m: "soyabean milk", bm: "সয়াবিন দুধ"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 442-444: 水 (shuǐ - Water)
{
    bn: "আমি জল পান করি।", 
    en: "I drink water.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喝", p: "hē", m: "drink", bm: "পান করি"}, 
        {h: "水", p: "shuǐ", m: "water", bm: "জল"}
    ]
},
{
    bn: "এক গ্লাস জল, দয়া করে।", 
    en: "A glass of water, please.", 
    words: [
        {h: "一", p: "yī", m: "one", bm: "এক"}, 
        {h: "杯", p: "bēi", m: "glass", bm: "গ্লাস"}, 
        {h: "水", p: "shuǐ", m: "water", bm: "জল"}, 
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}
    ]
},
{
    bn: "জল খুব গরম।", 
    en: "The water is very hot.", 
    words: [
        {h: "水", p: "shuǐ", m: "water", bm: "জল"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "热", p: "rè", m: "hot", bm: "গরম"}
    ]
},

// 445-447: 杯 (bēi - Cup/Glass)
{
    bn: "এক কাপ চা।", 
    en: "A cup of tea.", 
    words: [
        {h: "一", p: "yī", m: "one", bm: "এক"}, 
        {h: "杯", p: "bēi", m: "cup", bm: "কাপ"}, 
        {h: "茶", p: "chá", m: "tea", bm: "চা"}
    ]
},
{
    bn: "এই গ্লাসটি খুব সুন্দর।", 
    en: "This glass is very beautiful.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"}, 
        {h: "杯", p: "bēi", m: "glass", bm: "গ্লাসটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "আপনি কি এক কাপ কফি চান?", 
    en: "Do you want a cup of coffee?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "要", p: "yào", m: "want", bm: "চান"}, 
        {h: "一", p: "yī", m: "one", bm: "এক"}, 
        {h: "杯", p: "bēi", m: "cup", bm: "কাপ"}, 
        {h: "咖啡", p: "kāfēi", m: "coffee", bm: "কফি"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 448-450: 帅 (shuài - Handsome)
{
    bn: "সে খুব সুদর্শন।", 
    en: "He is very handsome.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "帅", p: "shuài", m: "handsome", bm: "সুদর্শন"}
    ]
},
{
    bn: "এটি একটি সুদর্শন লোক।", 
    en: "This is a handsome man.", 
    words: [
        {h: "这是", p: "zhèshì", m: "this is", bm: "এটি"}, 
        {h: "个", p: "gè", m: "measure word", bm: "একজন"}, 
        {h: "帅", p: "shuài", m: "handsome", bm: "সুদর্শন"}, 
        {h: "男人", p: "nánrén", m: "man", bm: "লোক"}
    ]
},
{
    bn: "তিনি দেখতে খুব সুন্দর।", 
    en: "He looks very handsome.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "长得", p: "zhǎngde", m: "looks", bm: "দেখতে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "帅", p: "shuài", m: "handsome", bm: "সুন্দর"}
    ]
},

// 451-453: 明天 (míngtiān - Tomorrow)
{
    bn: "আগামীকাল আবহাওয়া ভালো থাকবে।", 
    en: "The weather will be good tomorrow.", 
    words: [
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}, 
        {h: "了", p: "le", m: "particle", bm: "থাকবে"}
    ]
},
{
    bn: "আমি আগামীকাল কাজ করব না।", 
    en: "I will not work tomorrow.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করব"}
    ]
},
{
    bn: "আগামীকাল কি মঙ্গলবার?", 
    en: "Is tomorrow Tuesday?", 
    words: [
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "是", p: "shì", m: "is", bm: "কি"}, 
        {h: "星期二", p: "xīngqī'èr", m: "Tuesday", bm: "মঙ্গলবার"}
    ]
},

// 454-456: 多 (duō - Many/Much/How)
{
    bn: "অনেক মানুষ।", 
    en: "Many people.", 
    words: [
        {h: "多", p: "duō", m: "many", bm: "অনেক"}, 
        {h: "人", p: "rén", m: "people", bm: "মানুষ"}
    ]
},
{
    bn: "আপনি কি অনেক ব্যস্ত?", 
    en: "Are you very busy?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "多", p: "duō", m: "very", bm: "অনেক"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "তোমার বয়স কত?", 
    en: "How old are you?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "多", p: "duō", m: "how", bm: "কত"}, 
        {h: "大", p: "dà", m: "old", bm: "বয়স"}
    ]
},

// 457-459: 特别 (tèbié - Especially/Special)
{
    bn: "এটি বিশেষ সুন্দর।", 
    en: "This is especially beautiful.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "特别", p: "tèbié", m: "especially", bm: "বিশেষ"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "আমি চাইনিজ খাবার খুব পছন্দ করি।", 
    en: "I especially like Chinese food.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "特别", p: "tèbié", m: "especially", bm: "খুব"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "中国", p: "zhōngguó", m: "Chinese", bm: "চাইনিজ"}, 
        {h: "菜", p: "cài", m: "food", bm: "খাবার"}
    ]
},
{
    bn: "আজকের আবহাওয়া খুব ভালো।", 
    en: "Today's weather is especially good.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজকের"}, 
        {h: "的", p: "de", m: "particle", bm: "(র)"}, 
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"}, 
        {h: "特别", p: "tèbié", m: "especially", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},

// 460-462: 点 (diǎn - O'clock/Dot)
{
    bn: "এখন তিনটা বাজে।", 
    en: "It is three o'clock now.", 
    words: [
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "三", p: "sān", m: "three", bm: "তিনটা"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "বাজে"}
    ]
},
{
    bn: "সাড়ে চারটা বাজে।", 
    en: "It is half past four.", 
    words: [
        {h: "四", p: "sì", m: "four", bm: "চারটা"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "বাজে"}, 
        {h: "半", p: "bàn", m: "half", bm: "সাড়ে"}
    ]
},
{
    bn: "তুমি কয়টায় আসবে?", 
    en: "What time will you come?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "几", p: "jǐ", m: "what", bm: "কয়"}, 
        {h: "点", p: "diǎn", m: "time", bm: "টায়"}, 
        {h: "来", p: "lái", m: "come", bm: "আসবে"}
    ]
},

// 463-465: 上午 (shàngwǔ - Morning)
{
    bn: "আমি সকালে কাজ করি।", 
    en: "I work in the morning.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "上午", p: "shàngwǔ", m: "morning", bm: "সকালে"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করি"}
    ]
},
{
    bn: "আজ সকালে আমি ব্যস্ত।", 
    en: "I am busy this morning.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "上午", p: "shàngwǔ", m: "morning", bm: "সকালে"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "সকাল ১০টায় ক্লাস শুরু হবে।", 
    en: "Class starts at 10 a.m.", 
    words: [
        {h: "上午", p: "shàngwǔ", m: "morning", bm: "সকাল"}, 
        {h: "十", p: "shí", m: "ten", bm: "১০"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "টায়"}, 
        {h: "开始", p: "kāishǐ", m: "start", bm: "শুরু হবে"}, 
        {h: "课", p: "kè", m: "class", bm: "ক্লাস"}
    ]
},

// 466-468: 上 (shàng - Above/Up/Go to)
{
    bn: "টেবিলের উপরে।", 
    en: "On the table.", 
    words: [
        {h: "桌子", p: "zhuōzi", m: "table", bm: "টেবিলের"}, 
        {h: "上", p: "shàng", m: "on", bm: "উপরে"}
    ]
},
{
    bn: "আমি ক্লাসে যাচ্ছি।", 
    en: "I am going to class.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছি"}, 
        {h: "上", p: "shàng", m: "go to", bm: "ক্লাসে"}, 
        {h: "课", p: "kè", m: "class", bm: "ক্লাস"}
    ]
},
{
    bn: "উপরে যাও।", 
    en: "Go up.", 
    words: [
        {h: "上", p: "shàng", m: "up", bm: "উপরে"}, 
        {h: "去", p: "qù", m: "go", bm: "যাও"}
    ]
},

// 469-471: 半 (bàn - Half)
{
    bn: "সাড়ে তিনটা বাজে।", 
    en: "It is half past three.", 
    words: [
        {h: "三", p: "sān", m: "three", bm: "তিন"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "টা"}, 
        {h: "半", p: "bàn", m: "half", bm: "সাড়ে"}
    ]
},
{
    bn: "আমি আধা ঘণ্টা অপেক্ষা করেছি।", 
    en: "I waited for half an hour.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "等", p: "děng", m: "waited", bm: "অপেক্ষা করেছি"}, 
        {h: "了", p: "le", m: "particle", bm: "করেছি"}, 
        {h: "半", p: "bàn", m: "half", bm: "আধা"}, 
        {h: "小时", p: "xiǎoshí", m: "hour", bm: "ঘণ্টা"}
    ]
},
{
    bn: "দয়া করে অর্ধেকটা দিন।", 
    en: "Please give me half.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "给", p: "gěi", m: "give", bm: "দিন"}, 
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"}, 
        {h: "一半", p: "yíbàn", m: "half", bm: "অর্ধেকটা"}
    ]
},

// 472-474: 语法 (yǔfǎ - Grammar)
{
    bn: "চীনা ব্যাকরণ কঠিন।", 
    en: "Chinese grammar is difficult.", 
    words: [
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চীনা"}, 
        {h: "语法", p: "yǔfǎ", m: "grammar", bm: "ব্যাকরণ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},
{
    bn: "আমি ব্যাকরণ শিখছি।", 
    en: "I am learning grammar.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "在", p: "zài", m: "particle", bm: "(বর্তমান কাল)"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখছি"}, 
        {h: "语法", p: "yǔfǎ", m: "grammar", bm: "ব্যাকরণ"}
    ]
},
{
    bn: "এই বাক্যটির ব্যাকরণ ঠিক আছে?", 
    en: "Is the grammar of this sentence correct?", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "句子", p: "jùzi", m: "sentence", bm: "বাক্যটির"}, 
        {h: "语法", p: "yǔfǎ", m: "grammar", bm: "ব্যাকরণ"}, 
        {h: "对", p: "duì", m: "correct", bm: "ঠিক"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 475-477: 汉字 (hànzì - Chinese characters)
{
    bn: "চীনা অক্ষর লেখা কঠিন।", 
    en: "Writing Chinese characters is difficult.", 
    words: [
        {h: "写", p: "xiě", m: "write", bm: "লেখা"}, 
        {h: "汉字", p: "hànzì", m: "Chinese characters", bm: "চীনা অক্ষর"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},
{
    bn: "আমি চীনা অক্ষর শিখছি।", 
    en: "I am learning Chinese characters.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "在", p: "zài", m: "particle", bm: "(বর্তমান কাল)"}, 
        {h: "学", p: "xué", m: "learn", bm: "শিখছি"}, 
        {h: "汉字", p: "hànzì", m: "Chinese characters", bm: "চীনা অক্ষর"}
    ]
},
{
    bn: "এই অক্ষরটি কি সঠিক?", 
    en: "Is this character correct?", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "汉字", p: "hànzì", m: "character", bm: "অক্ষরটি"}, 
        {h: "对", p: "duì", m: "correct", bm: "সঠিক"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 478-480: 下午 (xiàwǔ - Afternoon)
{
    bn: "আমি বিকেলে কাজ করি না।", 
    en: "I do not work in the afternoon.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "下午", p: "xiàwǔ", m: "afternoon", bm: "বিকেলে"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করি"}
    ]
},
{
    bn: "আজ বিকেলে আপনি ব্যস্ত?", 
    en: "Are you busy this afternoon?", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "下午", p: "xiàwǔ", m: "afternoon", bm: "বিকেলে"}, 
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "ক্লাস দুপুর দুইটায়।", 
    en: "The class is at 2 p.m.", 
    words: [
        {h: "课", p: "kè", m: "class", bm: "ক্লাস"}, 
        {h: "在", p: "zài", m: "at", bm: "এ"}, 
        {h: "下午", p: "xiàwǔ", m: "afternoon", bm: "দুপুর"}, 
        {h: "两点", p: "liǎngdiǎn", m: "two o'clock", bm: "দুইটায়"}
    ]
},

// 481-483: 下 (xià - Below/Down/Next)
{
    bn: "টেবিলের নিচে।", 
    en: "Under the table.", 
    words: [
        {h: "桌子", p: "zhuōzi", m: "table", bm: "টেবিলের"}, 
        {h: "下", p: "xià", m: "under", bm: "নিচে"}
    ]
},
{
    bn: "ক্লাস শেষ হয়েছে।", 
    en: "Class is over.", 
    words: [
        {h: "下", p: "xià", m: "down/finish", bm: "শেষ"}, 
        {h: "课", p: "kè", m: "class", bm: "ক্লাস"}, 
        {h: "了", p: "le", m: "marker", bm: "হয়েছে"}
    ]
},
{
    bn: "পরের সপ্তাহে।", 
    en: "Next week.", 
    words: [
        {h: "下", p: "xià", m: "next", bm: "পরের"}, 
        {h: "个", p: "gè", m: "measure word", bm: "(একের)"}, 
        {h: "星期", p: "xīngqī", m: "week", bm: "সপ্তাহে"}
    ]
},

// 484-486: 刻 (kè - Quarter of an hour)
{
    bn: "চারটা বেজে পনেরো মিনিট।", 
    en: "It is a quarter past four.", 
    words: [
        {h: "四", p: "sì", m: "four", bm: "চার"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "টা"}, 
        {h: "一", p: "yī", m: "one", bm: "এক"}, 
        {h: "刻", p: "kè", m: "quarter", bm: "পনের"}
    ]
},
{
    bn: "তিনটার পনেরো মিনিট বাকি (পৌনে তিন)।", 
    en: "It is a quarter to three.", 
    words: [
        {h: "两", p: "liǎng", m: "two", bm: "দুই"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "টা"}, 
        {h: "三", p: "sān", m: "three", bm: "তিন"}, 
        {h: "刻", p: "kè", m: "quarter", bm: "পনেরো"}
    ]
},
{
    bn: "পনেরো মিনিট হয়েছে।", 
    en: "A quarter of an hour has passed.", 
    words: [
        {h: "一", p: "yī", m: "one", bm: "এক"}, 
        {h: "刻", p: "kè", m: "quarter", bm: "পনেরো"}, 
        {h: "钟", p: "zhōng", m: "clock/time", bm: "মিনিট"}
    ]
},

// 487-489: 口语 (kǒuyǔ - Spoken language)
{
    bn: "চীনা মৌখিক ভাষা কঠিন।", 
    en: "Chinese spoken language is difficult.", 
    words: [
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চীনা"}, 
        {h: "口语", p: "kǒuyǔ", m: "spoken language", bm: "মৌখিক ভাষা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},
{
    bn: "আমি আমার কথ্য ভাষা অনুশীলন করছি।", 
    en: "I am practicing my spoken language.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "练习", p: "liànxí", m: "practice", bm: "অনুশীলন করছি"}, 
        {h: "口语", p: "kǒuyǔ", m: "spoken language", bm: "কথ্য ভাষা"}
    ]
},
{
    bn: "আপনার মৌখিক ভাষা খুব ভালো।", 
    en: "Your spoken language is very good.", 
    words: [
        {h: "你的", p: "nǐde", m: "your", bm: "আপনার"}, 
        {h: "口语", p: "kǒuyǔ", m: "spoken language", bm: "মৌখিক ভাষা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},

// 490-492: 累 (lèi - Tired)
{
    bn: "আমি খুব ক্লান্ত।", 
    en: "I am very tired.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "累", p: "lèi", m: "tired", bm: "ক্লান্ত"}
    ]
},
{
    bn: "তুমি কি ক্লান্ত?", 
    en: "Are you tired?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "累", p: "lèi", m: "tired", bm: "ক্লান্ত"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "আজকের কাজের পরে আমি খুব ক্লান্ত।", 
    en: "I am very tired after today's work.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজকের"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজের"}, 
        {h: "后", p: "hòu", m: "after", bm: "পরে"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "累", p: "lèi", m: "tired", bm: "ক্লান্ত"}
    ]
},

// 493-495: 对 (duì - Correct/Right/Towards)
{
    bn: "হ্যাঁ, তুমি ঠিক।", 
    en: "Yes, you are right.", 
    words: [
        {h: "对", p: "duì", m: "right", bm: "ঠিক"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "的", p: "de", m: "particle", bm: "(পজেশন)"}
    ]
},
{
    bn: "আপনার উত্তরটি ভুল।", 
    en: "Your answer is not correct.", 
    words: [
        {h: "你", p: "nǐ", m: "your", bm: "আপনার"}, 
        {h: "的", p: "de", m: "particle", bm: "(র)"}, 
        {h: "答案", p: "dá'àn", m: "answer", bm: "উত্তরটি"}, 
        {h: "不", p: "bù", m: "not", bm: "ভুল"}, 
        {h: "对", p: "duì", m: "correct", bm: "ঠিক"}
    ]
},
{
    bn: "তিনি আমার দিকে তাকালেন।", 
    en: "He looked towards me.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "对", p: "duì", m: "towards", bm: "দিকে"}, 
        {h: "我", p: "wǒ", m: "me", bm: "আমার"}, 
        {h: "看", p: "kàn", m: "look", bm: "তাকালেন"}
    ]
},

// 496-498: 时间 (shíjiān - Time)
{
    bn: "আমার সময় নেই।", 
    en: "I do not have time.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "没有", p: "méiyǒu", m: "do not have", bm: "নেই"}, 
        {h: "时间", p: "shíjiān", m: "time", bm: "সময়"}
    ]
},
{
    bn: "এখন কত সময়?", 
    en: "What is the time now?", 
    words: [
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কত"}, 
        {h: "时间", p: "shíjiān", m: "time", bm: "সময়"}
    ]
},
{
    bn: "আমাদের একসাথে সময় কাটানো উচিত।", 
    en: "We should spend time together.", 
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমাদের"}, 
        {h: "一起", p: "yīqǐ", m: "together", bm: "একসাথে"}, 
        {h: "时间", p: "shíjiān", m: "time", bm: "সময়"}, 
        {h: "度过", p: "dùguò", m: "spend", bm: "কাটানো"},
        {h: "应该", p: "yīnggāi", m: "should", bm: "উচিত"}
    ]
},

// 499-501: 一起 (yīqǐ - Together)
{
    bn: "আমরা একসাথে যাব।", 
    en: "We will go together.", 
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"}, 
        {h: "一起", p: "yīqǐ", m: "together", bm: "একসাথে"}, 
        {h: "去", p: "qù", m: "go", bm: "যাব"}
    ]
},
{
    bn: "তারা একসাথে কাজ করে।", 
    en: "They work together.", 
    words: [
        {h: "他们", p: "tāmen", m: "they", bm: "তারা"}, 
        {h: "一起", p: "yīqǐ", m: "together", bm: "একসাথে"}, 
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করে"}
    ]
},
{
    bn: "তুমি আর আমি একসাথে শিখব।", 
    en: "You and I will learn together.", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "和", p: "hé", m: "and", bm: "আর"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "一起", p: "yīqǐ", m: "together", bm: "একসাথে"}, 
        {h: "学习", p: "xuéxí", m: "learn", bm: "শিখব"}
    ]
},

// 502-504: 电影 (diànyǐng - Movie)
{
    bn: "আমি সিনেমা দেখতে পছন্দ করি না।", 
    en: "I do not like to watch movies.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "不", p: "bù", m: "not", bm: "না"},
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "看", p: "kàn", m: "watch", bm: "দেখতে"}, 
        {h: "电影", p: "diànyǐng", m: "movie", bm: "সিনেমা"}
    ]
},
{
    bn: "এই সিনেমাটি ভালো না।", 
    en: "This movie is not good.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "电影", p: "diànyǐng", m: "movie", bm: "সিনেমাটি"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
   bn: "আপনার সিনেমা দেখা উচিত না।",
    en: "You should not watch movies.",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"},
        {h: "不", p: "bù", m: "not", bm: "না"},
        {h: "应该", p: "yīnggāi", m: "should", bm: "উচিত"},
        {h: "看", p: "kàn", m: "watch", bm: "দেখা"},
        {h: "电影", p: "diànyǐng", m: "movie", bm: "সিনেমা"}
    ]
},

// 505-507: 去 (qù - Go/To)
{
    bn: "আমি স্কুলে যাচ্ছি।", 
    en: "I am going to school.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছি"}, 
        {h: "学校", p: "xuéxiào", m: "school", bm: "স্কুলে"}
    ]
},
{
    bn: "তুমি কি সিনেমা দেখতে যাচ্ছ?", 
    en: "Are you going to watch a movie?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছ কি"}, 
        {h: "看", p: "kàn", m: "watch", bm: "দেখতে"}, 
        {h: "电影", p: "diànyǐng", m: "movie", bm: "সিনেমা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "সে বাড়িতে গিয়েছে।", 
    en: "He went home.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "去", p: "qù", m: "go", bm: "গিয়েছে"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়ি"}
    ]
},

// 508-510: 恐怕 (kǒngpà - I am afraid/Perhaps)
{
    bn: "আমি ভয় পাচ্ছি যে এটি সম্ভব নয়।", 
    en: "I am afraid that it is not possible.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "恐怕", p: "kǒngpà", m: "afraid", bm: "ভয় পাচ্ছি যে"}, 
        {h: "不", p: "bù", m: "not", bm: "নয়"}, 
        {h: "可能", p: "kěnéng", m: "possible", bm: "সম্ভব"}
    ]
},
{
    bn: "বোধহয় আজ বৃষ্টি হবে।", 
    en: "Perhaps it will rain today.", 
    words: [
        {h: "恐怕", p: "kǒngpà", m: "perhaps", bm: "বোধহয়"}, 
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "会", p: "huì", m: "will", bm: "হবে"}, 
        {h: "下雨", p: "xiàyǔ", m: "rain", bm: "বৃষ্টি"}
    ]
},
{
    bn: "আমি ভয় পাচ্ছি যে সে আসবে না।", 
    en: "I am afraid that he will not come.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "恐怕", p: "kǒngpà", m: "afraid", bm: "ভয় পাচ্ছি যে"}, 
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "来", p: "lái", m: "come", bm: "আসবে"}
    ]
},

// 511-513: 行 (xíng - Okay/Capable/Walk)
{
    bn: "ঠিক আছে, চল যাই।", 
    en: "Okay, let's go.", 
    words: [
        {h: "行", p: "xíng", m: "okay", bm: "ঠিক আছে"}, 
        {h: "我们", p: "wǒmen", m: "we", bm: "চল"}, 
        {h: "走", p: "zǒu", m: "go", bm: "যাই"}
    ]
},
{
    bn: "সে খুব সক্ষম।", 
    en: "He is very capable.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "行", p: "xíng", m: "capable", bm: "সক্ষম"}
    ]
},
{
    bn: "এখানে হাঁটা যাবে না।", 
    en: "Cannot walk here.", 
    words: [
        {h: "这儿", p: "zhèr", m: "here", bm: "এখানে"}, 
        {h: "不", p: "bù", m: "not", bm: "না"}, 
        {h: "行", p: "xíng", m: "allowed/walk", bm: "যাবে"}
    ]
},

// 514-516: 练习 (liànxí - Practice)
{
    bn: "আমি চীনা ভাষা অনুশীলন করি।", 
    en: "I practice Chinese.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "练习", p: "liànxí", m: "practice", bm: "অনুশীলন করি"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চীনা ভাষা"}
    ]
},
{
    bn: "অনুশীলন করা খুব গুরুত্বপূর্ণ।", 
    en: "Practicing is very important.", 
    words: [
        {h: "练习", p: "liànxí", m: "practice", bm: "অনুশীলন করা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "重要", p: "zhòngyào", m: "important", bm: "গুরুত্বপূর্ণ"}
    ]
},
{
    bn: "আমি প্রতিদিন অনুশীলন করি।", 
    en: "I practice every day.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "每天", p: "měitiān", m: "every day", bm: "প্রতিদিন"}, 
        {h: "练习", p: "liànxí", m: "practice", bm: "অনুশীলন করি"}
    ]
},

// 517-519: 现在 (xiànzài - Now)
{
    bn: "এখন কটা বাজে?", 
    en: "What time is it now?", 
    words: [
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "几", p: "jǐ", m: "what", bm: "কটা"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "বাজে"}
    ]
},
{
    bn: "আমি এখন ব্যস্ত।", 
    en: "I am busy now.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},
{
    bn: "এখন কি তোমার সময় আছে?", 
    en: "Do you have time now?", 
    words: [
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে কি"}, 
        {h: "时间", p: "shíjiān", m: "time", bm: "সময়"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 520-522: 差 (chà - Lack/Poor/To)
{
    bn: "দশটা বাজতে পাঁচ মিনিট বাকি।", 
    en: "Five minutes to ten.", 
    words: [
        {h: "差", p: "chà", m: "to/lack", bm: "বাকি"}, 
        {h: "五", p: "wǔ", m: "five", bm: "পাঁচ"}, 
        {h: "分", p: "fēn", m: "minute", bm: "মিনিট"}, 
        {h: "十", p: "shí", m: "ten", bm: "দশ"}, 
        {h: "点", p: "diǎn", m: "o'clock", bm: "টা"}
    ]
},
{
    bn: "তার চীনা ভাষা খুব খারাপ।", 
    en: "His Chinese is very poor.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তার"}, 
        {h: "汉语", p: "hànyǔ", m: "Chinese", bm: "চীনা ভাষা"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "差", p: "chà", m: "poor", bm: "খারাপ"}
    ]
},
{
    bn: "আমার একশো টাকা কম আছে।", 
    en: "I am short by 100 yuan.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "差", p: "chà", m: "short/lack", bm: "কম আছে"}, 
        {h: "一百", p: "yībǎi", m: "100", bm: "১০০"}, 
        {h: "块", p: "kuài", m: "yuan", bm: "টাকা"}
    ]
},

// 523-525: 分 (fēn - Minute/Cent/Divide)
{
    bn: "দুইটা বেজে দশ মিনিট।",
    en: "Ten minutes past two.",
    words: [
        {h: "两", p: "liǎng", m: "two", bm: "দুই"},
        {h: "点", p: "diǎn", m: "o'clock", bm: "টা"},
        {h: "十", p: "shí", m: "ten", bm: "দশ"},
        {h: "分", p: "fēn", m: "minute", bm: "মিনিট"}
    ]
},
{
    bn: "এই বইটি পাঁচ টাকা।",
    en: "This book costs five fen (cents).",
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"},
        {h: "书", p: "shū", m: "book", bm: "বইটি"},
        {h: "五", p: "wǔ", m: "five", bm: "পাঁচ"},
        {h: "分", p: "fēn", m: "fen", bm: "পয়সা"}
    ]
},
{
    bn: "দয়া করে কেকটি ভাগ করুন।",
    en: "Please divide the cake.",
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"},
        {h: "分", p: "fēn", m: "divide", bm: "ভাগ করুন"},
        {h: "蛋糕", p: "dàngāo", m: "cake", bm: "কেকটি"}
    ]
},

// 526-528: 回 (huí - Return/Back)
{
    bn: "আমি বাড়ি যাচ্ছি।",
    en: "I am going back home.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "回", p: "huí", m: "return", bm: "যাচ্ছি"},
        {h: "家", p: "jiā", m: "home", bm: "বাড়ি"}
    ]
},
{
    bn: "কখন ফিরে আসবে?",
    en: "When will you come back?",
    words: [
        {h: "什么", p: "shénme", m: "what", bm: "কখন"},
        {h: "时候", p: "shíhou", m: "time", bm: "ফিরে"},
        {h: "回", p: "huí", m: "return", bm: "আসবে"},
        {h: "来", p: "lái", m: "come", bm: "।"}
    ]
},
{
    bn: "উত্তরটি ফিরিয়ে দাও।",
    en: "Return the answer.",
    words: [
        {h: "回答", p: "huídá", m: "answer", bm: "উত্তরটি"},
        {h: "我", p: "wǒ", m: "me", bm: "।"},
        {h: "回", p: "huí", m: "return", bm: "ফিরিয়ে"}
    ]
},

// 529-531: 学校 (xuéxiào - School)
{
    bn: "আমি স্কুলে যাচ্ছি।",
    en: "I am going to school.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "去", p: "qù", m: "go", bm: "যাচ্ছি"},
        {h: "学校", p: "xuéxiào", m: "school", bm: "স্কুলে"}
    ]
},
{
    bn: "স্কুলটি খুব বড়।",
    en: "The school is very big.",
    words: [
        {h: "学校", p: "xuéxiào", m: "school", bm: "স্কুলটি"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "大", p: "dà", m: "big", bm: "বড়"}
    ]
},
{
    bn: "আমার বন্ধু স্কুলে কাজ করে।",
    en: "My friend works at the school.",
    words: [
        {h: "我的", p: "wǒde", m: "my", bm: "আমার"},
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"},
        {h: "在", p: "zài", m: "at", bm: "তে"},
        {h: "学校", p: "xuéxiào", m: "school", bm: "স্কুলে"},
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করে"}
    ]
},


// 532-534: 班 (bān - Class/Shift)
{
    bn: "আমাদের ক্লাসে ২০ জন ছাত্র আছে।", 
    en: "There are 20 students in our class.", 
    words: [
        {h: "我们", p: "wǒmen", m: "our", bm: "আমাদের"}, 
        {h: "班", p: "bān", m: "class", bm: "ক্লাসে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "二十", p: "èrshí", m: "20", bm: "২০"}, 
        {h: "个", p: "gè", m: "measure word", bm: "জন"}, 
        {h: "学生", p: "xuésheng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "আমি আজ কাজ শেষ করেছি।", 
    en: "I am getting off work today.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
        {h: "下班", p: "xiàbān", m: "get off work", bm: "কাজ শেষ করেছি"},
        {h: "了", p: "le", m: "particle", bm: "সমাপ্তি সূচক শব্দ"}
    ]
},
{
    bn: "আপনি কোন ক্লাসে পড়ছেন?", 
    en: "Which class are you in?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "是", p: "shì", m: "are", bm: "হয়"}, 
        {h: "哪个", p: "nǎge", m: "which", bm: "কোন"},
        {h: "班", p: "bān", m: "class", bm: "ক্লাসে"}
    ]
},

// 535-537: 活动 (huódòng - Activity/Event)
{
    bn: "আজকের কার্যক্রমটি খুব মজার।", 
    en: "Today's activity is very fun.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজকের"}, 
        {h: "的", p: "de", m: "particle", bm: "(র)"}, 
        {h: "活动", p: "huódòng", m: "activity", bm: "কার্যক্রমটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "有意思", p: "yǒuyìsi", m: "interesting", bm: "মজার"}
    ]
},
{
    bn: "আমি এই কার্যকলাপে অংশগ্রহণ করতে চাই।", 
    en: "I want to participate in this activity.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "参加", p: "cānjiā", m: "participate", bm: "অংশগ্রহণ করতে"}, 
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "活动", p: "huódòng", m: "activity", bm: "কার্যকলাপে"}
    ]
},
{
    bn: "আপনি কি আগামীকাল কোন কার্যক্রমে যাবেন?", 
    en: "Are you going to any activity tomorrow?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "去", p: "qù", m: "go", bm: "যাবেন"}, 
        {h: "活动", p: "huódòng", m: "activity", bm: "কার্যক্রমে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 538-540: 听说 (tīngshuō - Hear of/Be told)
{
    bn: "শুনেছি আগামীকাল বৃষ্টি হবে।", 
    en: "I heard it will rain tomorrow.", 
    words: [
        {h: "听说", p: "tīngshuō", m: "heard", bm: "শুনেছি"}, 
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "会", p: "huì", m: "will", bm: "হবে"}, 
        {h: "下雨", p: "xiàyǔ", m: "rain", bm: "বৃষ্টি"}
    ]
},
{
    bn: "আমি শুনেছি এই বইটি খুব ভালো না।",
    en: "I heard this book is not very good.",
    words: [
    {h: "我", p: "wǒ", m: "I", bm: "আমি"},
    {h: "听说", p: "tīngshuō", m: "heard", bm: "শুনেছি"},
    {h: "这本", p: "zhè běn", m: "this (book)", bm: "এই"},
    {h: "书", p: "shū", m: "book", bm: "বইটি"},
    {h: "不", p: "bù", m: "not", bm: "না"},
    {h: "很", p: "hěn", m: "very", bm: "খুব"},
    {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "আপনি কি শুনেছেন যে সে আসছে?", 
    en: "Did you hear that he is coming?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "听说", p: "tīngshuō", m: "hear", bm: "শুনেছেন কি"}, 
        {h: "他", p: "tā", m: "he", bm: "যে"}, 
        {h: "来", p: "lái", m: "come", bm: "সে আসছে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 541-543: 听 (tīng - Listen/Hear)
{
    bn: "দয়া করে মনোযোগ দিয়ে শুনুন।", 
    en: "Please listen carefully.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "认真", p: "rènzhēn", m: "carefully", bm: "মনোযোগ দিয়ে"}, 
        {h: "听", p: "tīng", m: "listen", bm: "শুনুন"}
    ]
},
{
    bn: "আমি গান শুনতে পছন্দ করি।", 
    en: "I like listening to music.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "听", p: "tīng", m: "listen", bm: "শুনতে"}, 
        {h: "音乐", p: "yīnyuè", m: "music", bm: "গান"}
    ]
},
{
    bn: "আপনি কি আমার কথা শুনতে পাচ্ছেন?", 
    en: "Can you hear me?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "能", p: "néng", m: "can", bm: "কি"}, 
        {h: "听到", p: "tīngdào", m: "hear", bm: "শুনতে পাচ্ছেন"}, 
        {h: "我", p: "wǒ", m: "me", bm: "আমার কথা"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 544-546: 说 (shuō - Speak/Say/Talk)
{
    bn: "দয়া করে আস্তে বলুন।", 
    en: "Please speak slowly.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "慢点", p: "màndiǎn", m: "slowly", bm: "আস্তে"}, 
        {h: "说", p: "shuō", m: "speak", bm: "বলুন"}
    ]
},
{
    bn: "আপনি কি ইংরেজি বলতে পারেন?", 
    en: "Can you speak English?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "会", p: "huì", m: "can", bm: "কি"}, 
        {h: "说", p: "shuō", m: "speak", bm: "বলতে পারেন"}, 
        {h: "英语", p: "yīngyǔ", m: "English", bm: "ইংরেজি"}
    ]
},
{
    bn: "তিনি কি বললেন?", 
    en: "What did he say?", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "说", p: "shuō", m: "say", bm: "বললেন"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কি"}, 
        {h: "了", p: "le", m: "particle", bm: "?"}
    ]
},

// 547-549: 女生 (nǚshēng - Girl/Schoolgirl)
{
    bn: "সে একটি চমৎকার মেয়ে।", 
    en: "She is a nice girl.", 
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "একটি"}, 
        {h: "个", p: "gè", m: "measure word", bm: "জন"}, 
        {h: "好", p: "hǎo", m: "nice", bm: "চমৎকার"}, 
        {h: "女生", p: "nǚshēng", m: "girl", bm: "মেয়ে"}
    ]
},
{
    bn: "স্কুলে অনেক মেয়ে আছে।", 
    en: "There are many girls in the school.", 
    words: [
        {h: "学校", p: "xuéxiào", m: "school", bm: "স্কুলে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "很多", p: "hěnduō", m: "many", bm: "অনেক"}, 
        {h: "女生", p: "nǚshēng", m: "girls", bm: "মেয়ে"}
    ]
},
{
    bn: "ওই মেয়েটি কে?", 
    en: "Who is that girl?", 
    words: [
        {h: "那个", p: "nàge", m: "that", bm: "ওই"}, 
        {h: "女生", p: "nǚshēng", m: "girl", bm: "মেয়েটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "谁", p: "shéi", m: "who", bm: "কে"}
    ]
},


// 550-552: 男生 (nánshēng - Boy/Schoolboy)
{
    bn: "সে একটি বুদ্ধিমান ছেলে।", 
    en: "He is a smart boy.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "একটি"}, 
        {h: "个", p: "gè", m: "measure word", bm: "জন"}, 
        {h: "聪明", p: "cōngming", m: "smart", bm: "বুদ্ধিমান"}, 
        {h: "男生", p: "nánshēng", m: "boy", bm: "ছেলে"}
    ]
},
{
    bn: "ক্লাসে অনেক ছেলে আছে।", 
    en: "There are many boys in the class.", 
    words: [
        {h: "班", p: "bān", m: "class", bm: "ক্লাসে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "很多", p: "hěnduō", m: "many", bm: "অনেক"}, 
        {h: "男生", p: "nánshēng", m: "boys", bm: "ছেলে"}
    ]
},
{
    bn: "ওই ছেলেটি কে?", 
    en: "Who is that boy?", 
    words: [
        {h: "那个", p: "nàge", m: "that", bm: "ওই"}, 
        {h: "男生", p: "nánshēng", m: "boy", bm: "ছেলেটি"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "谁", p: "shéi", m: "who", bm: "কে"}
    ]
},

// 553–555: 男 (nán - Male)
{
  bn: "সে একজন পুরুষ।",
  en: "He is a male.",
  words: [
    {h: "他", p: "tā", m: "he", bm: "সে"},
    {h: "是", p: "shì", m: "is", bm: "হলো/হয়"},
    {h: "男", p: "nán", m: "male", bm: "পুরুষ"}
  ]
},
{
  bn: "এই শিশুটি একজন ছেলে।",
  en: "This child is a boy.",
  words: [
    {h: "这个", p: "zhège", m: "this", bm: "এই"},
    {h: "孩子", p: "háizi", m: "child", bm: "শিশু"},
    {h: "是", p: "shì", m: "is", bm: "হলো"},
    {h: "男", p: "nán", m: "male/boy", bm: "ছেলে"}
  ]
},
{
  bn: "আমার বন্ধু একজন পুরুষ শিক্ষক।",
  en: "My friend is a male teacher.",
  words: [
    {h: "我的", p: "wǒ de", m: "my", bm: "আমার"},
    {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধু"},
    {h: "是", p: "shì", m: "is", bm: "হলো"},
    {h: "男", p: "nán", m: "male", bm: "পুরুষ"},
    {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
  ]
},

// 556–558: 少 (shǎo - few / little)
{
  bn: "আমার অল্প সময় আছে।",
  en: "I have little time.",
  words: [
    {h: "我", p: "wǒ", m: "I", bm: "আমি"},
    {h: "有", p: "yǒu", m: "have", bm: "আছে"},
    {h: "少", p: "shǎo", m: "little", bm: "অল্প"},
    {h: "时间", p: "shíjiān", m: "time", bm: "সময়"}
  ]
},
{
  bn: "এখানে মানুষ কম।",
  en: "There are few people here.",
  words: [
    {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"},
    {h: "人", p: "rén", m: "people", bm: "মানুষ"},
    {h: "很", p: "hěn", m: "very", bm: "খুব"},
    {h: "少", p: "shǎo", m: "few", bm: "কম"}
  ]
},
{
  bn: "সে অল্প চাইনিজ জানে।",
  en: "He knows a little Chinese.",
  words: [
    {h: "他", p: "tā", m: "he", bm: "সে"},
    {h: "会", p: "huì", m: "can / know how to", bm: "জানে"},
    {h: "少", p: "shǎo", m: "a little", bm: "অল্প"},
    {h: "中文", p: "Zhōngwén", m: "Chinese", bm: "চাইনিজ"}
  ]
},

// 559–561: 只 (zhǐ - only / just / measure word)
{
  bn: "আমার শুধু একটাই কলম আছে।",
  en: "I only have one pen.",
  words: [
    {h: "我", p: "wǒ", m: "I", bm: "আমি"},
    {h: "只", p: "zhǐ", m: "only", bm: "শুধু"},
    {h: "有", p: "yǒu", m: "have", bm: "আছে"},
    {h: "一", p: "yī", m: "one", bm: "এক"},
    {h: "支", p: "zhī", m: "measure word for pen", bm: "টা (কলমের)"},
    {h: "笔", p: "bǐ", m: "pen", bm: "কলম"}
  ]
},
{
  bn: "সে শুধু পানি খায়।",
  en: "He only drinks water.",
  words: [
    {h: "他", p: "tā", m: "he", bm: "সে"},
    {h: "只", p: "zhǐ", m: "only", bm: "শুধু"},
    {h: "喝", p: "hē", m: "drink", bm: "খায়"},
    {h: "水", p: "shuǐ", m: "water", bm: "পানি"}
  ]
},
{
  bn: "আমাদের শুধু আজ কাজ আছে।",
  en: "We only have work today.",
  words: [
    {h: "我们", p: "wǒmen", m: "we", bm: "আমাদের"},
    {h: "只", p: "zhǐ", m: "only", bm: "শুধু"},
    {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
    {h: "有", p: "yǒu", m: "have", bm: "আছে"},
    {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}
  ]
},

// 562–564: 多少 (duōshǎo - how many / how much)
{
  bn: "তোমার বয়স কত?",
  en: "How old are you?",
  words: [
    {h: "你", p: "nǐ", m: "you", bm: "তুমি"},
    {h: "多大", p: "duōdà", m: "how old", bm: "কত বছর"},
    {h: "了", p: "le", m: "modal particle", bm: "হলো/হয়েছে"}
  ]
},
{
  bn: "এই বইটির দাম কত?",
  en: "How much is this book?",
  words: [
    {h: "这本", p: "zhè běn", m: "this (measure + book)", bm: "এইটি"},
    {h: "书", p: "shū", m: "book", bm: "বই"},
    {h: "多少", p: "duōshǎo", m: "how much", bm: "কত"},
    {h: "钱", p: "qián", m: "money", bm: "টাকা"}
  ]
},
{
  bn: "এখানে কতজন মানুষ আছে?",
  en: "How many people are here?",
  words: [
    {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"},
    {h: "有", p: "yǒu", m: "have / there is", bm: "আছে"},
    {h: "多少", p: "duōshǎo", m: "how many", bm: "কত"},
    {h: "人", p: "rén", m: "people", bm: "মানুষ"}
  ]
},

// 565–567: 有意思 (yǒu yìsi - interesting / fun)
{
  bn: "এই গল্পটা খুব মজার।",
  en: "This story is very interesting.",
  words: [
    {h: "这个", p: "zhège", m: "this", bm: "এই"},
    {h: "故事", p: "gùshi", m: "story", bm: "গল্প"},
    {h: "很", p: "hěn", m: "very", bm: "খুব"},
    {h: "有意思", p: "yǒu yìsi", m: "interesting", bm: "মজার"}
  ]
},
{
  bn: "এই খেলাটা সত্যিই মজার।",
  en: "This game is really fun.",
  words: [
    {h: "这个", p: "zhège", m: "this", bm: "এই"},
    {h: "游戏", p: "yóuxì", m: "game", bm: "খেলা"},
    {h: "真", p: "zhēn", m: "really", bm: "সত্যিই"},
    {h: "有意思", p: "yǒu yìsi", m: "interesting / fun", bm: "মজার"}
  ]
},
{
  bn: "তার কথা বলা খুবই মজার।",
  en: "The way he speaks is very interesting.",
  words: [
    {h: "他", p: "tā", m: "he", bm: "সে"},
    {h: "说话", p: "shuōhuà", m: "to speak", bm: "কথা বলা"},
    {h: "很", p: "hěn", m: "very", bm: "খুব"},
    {h: "有意思", p: "yǒu yìsi", m: "interesting", bm: "মজার"}
  ]
},

// 556-558: 意思 (yìsi - Meaning/Interest)
{
    bn: "এই কথার মানে কী?", 
    en: "What is the meaning of this word?", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "字", p: "zì", m: "word", bm: "কথার"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কী"}, 
        {h: "意思", p: "yìsi", m: "meaning", bm: "মানে"}
    ]
},
{
    bn: "সিনেমাটি খুব মজার।", 
    en: "The movie is very interesting.", 
    words: [
        {h: "电影", p: "diànyǐng", m: "movie", bm: "সিনেমাটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "有", p: "yǒu", m: "have", bm: "হয়"}, 
        {h: "意思", p: "yìsi", m: "interest", bm: "মজার"}
    ]
},
{
    bn: "আমি তোমাকে বোঝাতে চাইনি।", 
    en: "I did not mean that to you.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "没有", p: "méiyǒu", m: "did not", bm: "চাইনি"}, 
        {h: "那个", p: "nàge", m: "that", bm: "হয়"}, 
        {h: "意思", p: "yìsi", m: "mean", bm: "বোঝাতে"}
    ]
},

// 559-561: 学生 (xuéshēng - Student)
{
    bn: "আমি একজন ছাত্র।", 
    en: "I am a student.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "是", p: "shì", m: "am", bm: "একজন"}, 
        {h: "学生", p: "xuéshēng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "সে চীনা ভাষার ছাত্র।", 
    en: "He is a Chinese student.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "সে"}, 
        {h: "是", p: "shì", m: "is", bm: "হয়"}, 
        {h: "中文", p: "zhōngwén", m: "Chinese", bm: "চীনা ভাষার"}, 
        {h: "学生", p: "xuéshēng", m: "student", bm: "ছাত্র"}
    ]
},
{
    bn: "এখানে অনেক ছাত্র আছে।", 
    en: "There are many students here.", 
    words: [
        {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "很多", p: "hěnduō", m: "many", bm: "অনেক"}, 
        {h: "学生", p: "xuéshēng", m: "student", bm: "ছাত্র"}
    ]
},

// 568–570: 来 (lái - come)
{
  bn: "সে আজ এখানে আসবে।",
  en: "He will come here today.",
  words: [
    {h: "他", p: "tā", m: "he", bm: "সে"},
    {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
    {h: "来", p: "lái", m: "come", bm: "আসে/আসবে"},
    {h: "这里", p: "zhèlǐ", m: "here", bm: "এখানে"}
  ]
},
{
  bn: "তুমি কখন আসবে?",
  en: "When will you come?",
  words: [
    {h: "你", p: "nǐ", m: "you", bm: "তুমি"},
    {h: "什么时候", p: "shénme shíhou", m: "when", bm: "কখন"},
    {h: "来", p: "lái", m: "come", bm: "আসবে"}
  ]
},
{
  bn: "আমরা একসাথে আসি।",
  en: "We come together.",
  words: [
    {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"},
    {h: "一起", p: "yìqǐ", m: "together", bm: "একসাথে"},
    {h: "来", p: "lái", m: "come", bm: "আসি"}
  ]
},

// 571–573: 专业 (zhuānyè - major / professional)
{
  bn: "আমার মেজর হলো কম্পিউটার সায়েন্স।",
  en: "My major is computer science.",
  words: [
    {h: "我", p: "wǒ", m: "I", bm: "আমি"},
    {h: "的", p: "de", m: "possessive particle", bm: "এর"},
    {h: "专业", p: "zhuānyè", m: "major", bm: "মেজর/বিষয়"},
    {h: "是", p: "shì", m: "is", bm: "হলো"},
    {h: "计算机科学", p: "jìsuànjī kēxué", m: "computer science", bm: "কম্পিউটার সায়েন্স"}
  ]
},
{
  bn: "সে খুবই পেশাদার শিক্ষক।",
  en: "He is a very professional teacher.",
  words: [
    {h: "他", p: "tā", m: "he", bm: "সে"},
    {h: "很", p: "hěn", m: "very", bm: "খুব"},
    {h: "专业", p: "zhuānyè", m: "professional", bm: "পেশাদার"},
    {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
  ]
},
{
  bn: "এই কোম্পানির সেবা খুব পেশাদার।",
  en: "This company's service is very professional.",
  words: [
    {h: "这个", p: "zhège", m: "this", bm: "এই"},
    {h: "公司", p: "gōngsī", m: "company", bm: "কোম্পানি"},
    {h: "的", p: "de", m: "possessive particle", bm: "এর"},
    {h: "服务", p: "fúwù", m: "service", bm: "সেবা"},
    {h: "很", p: "hěn", m: "very", bm: "খুব"},
    {h: "专业", p: "zhuānyè", m: "professional", bm: "পেশাদার"}
  ]
},

// 574–576: 主意 (zhǔyi - idea / plan)
{
  bn: "এটা একটা ভালো আইডিয়া।",
  en: "This is a good idea.",
  words: [
    {h: "这", p: "zhè", m: "this", bm: "এই"},
    {h: "是", p: "shì", m: "is", bm: "হলো"},
    {h: "一个", p: "yí gè", m: "a / one", bm: "একটা"},
    {h: "好", p: "hǎo", m: "good", bm: "ভালো"},
    {h: "主意", p: "zhǔyi", m: "idea", bm: "আইডিয়া"}
  ]
},
{
  bn: "তার একটা নতুন পরিকল্পনা আছে।",
  en: "He has a new idea/plan.",
  words: [
    {h: "他", p: "tā", m: "he", bm: "সে"},
    {h: "有", p: "yǒu", m: "have", bm: "আছে"},
    {h: "一个", p: "yí gè", m: "a / one", bm: "একটা"},
    {h: "新", p: "xīn", m: "new", bm: "নতুন"},
    {h: "主意", p: "zhǔyi", m: "idea / plan", bm: "পরিকল্পনা/আইডিয়া"}
  ]
},
{
  bn: "তুমি কী ভাবছো—কোনো আইডিয়া আছে?",
  en: "What do you think—do you have any idea?",
  words: [
    {h: "你", p: "nǐ", m: "you", bm: "তুমি"},
    {h: "怎么", p: "zěnme", m: "how", bm: "কীভাবে/কেমন"},
    {h: "想", p: "xiǎng", m: "think", bm: "ভাবছো"},
    {h: "有", p: "yǒu", m: "have", bm: "আছে"},
    {h: "没有", p: "méiyǒu", m: "or not / any", bm: "আছে কি না"},
    {h: "主意", p: "zhǔyi", m: "idea", bm: "আইডিয়া"}
  ]
},

// 577–579: 起床 (qǐchuáng - get up / wake up)
{
  bn: "আমি সকাল ৭টায় উঠি।",
  en: "I get up at 7 a.m.",
  words: [
    {h: "我", p: "wǒ", m: "I", bm: "আমি"},
    {h: "早上", p: "zǎoshang", m: "morning", bm: "সকাল"},
    {h: "七点", p: "qī diǎn", m: "7 o'clock", bm: "৭টা"},
    {h: "起床", p: "qǐchuáng", m: "get up", bm: "উঠি"}
  ]
},
{
  bn: "তুমি কখন উঠো?",
  en: "When do you get up?",
  words: [
    {h: "你", p: "nǐ", m: "you", bm: "তুমি"},
    {h: "什么时候", p: "shénme shíhòu", m: "when", bm: "কখন"},
    {h: "起床", p: "qǐchuáng", m: "get up", bm: "উঠো"}
  ]
},
{
  bn: "ছেলেটি দেরিতে উঠল।",
  en: "The boy get up late.",
  words: [
    {h: "男孩", p: "nánhái", m: "boy", bm: "ছেলেটি"},
    {h: "起床", p: "qǐchuáng", m: "get up", bm: "উঠল"},
    {h: "晚了", p: "wǎn le", m: "late", bm: "দেরিতে"}
  ]
},

// 580–582: 早饭 (zǎofàn – breakfast), 午饭 (wǔfàn – lunch)
{
  bn: "আমি সকাল ৮টায় নাস্তা খাই।",
  en: "I eat breakfast at 8 a.m.",
  words: [
    {h: "我", p: "wǒ", m: "I", bm: "আমি"},
    {h: "早上", p: "zǎoshang", m: "morning", bm: "সকাল"},
    {h: "八点", p: "bā diǎn", m: "8 o'clock", bm: "৮টা"},
    {h: "吃", p: "chī", m: "eat", bm: "খাই"},
    {h: "早饭", p: "zǎofàn", m: "breakfast", bm: "নাস্তা"}
  ]
},
{
  bn: "তুমি দুপুরে কী খাও?",
  en: "What do you eat for lunch?",
  words: [
    {h: "你", p: "nǐ", m: "you", bm: "তুমি"},
    {h: "中午", p: "zhōngwǔ", m: "noon / midday", bm: "দুপুরে"},
    {h: "吃", p: "chī", m: "eat", bm: "খাও"},
    {h: "什么", p: "shénme", m: "what", bm: "কী"},
    {h: "午饭", p: "wǔfàn", m: "lunch", bm: "দুপুরের খাবার"}
  ]
},
{
  bn: "আমরা সবাই একসাথে দুপুরের খাবার খাই।",
  en: "We all eat lunch together.",
  words: [
    {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"},
    {h: "都", p: "dōu", m: "all", bm: "সবাই"},
    {h: "一起", p: "yìqǐ", m: "together", bm: "একসাথে"},
    {h: "吃", p: "chī", m: "eat", bm: "খাই"},
    {h: "午饭", p: "wǔfàn", m: "lunch", bm: "দুপুরের খাবার"}
  ]
},

// 583-585: 运动 (yùndòng - Exercise/Sport) - Starting from 583
{
    bn: "আমি প্রতিদিন সকালে ব্যায়াম করি।", 
    en: "I exercise every morning.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "每天", p: "měitiān", m: "every day", bm: "প্রতিদিন"}, 
        {h: "早上", p: "zǎoshang", m: "morning", bm: "সকালে"}, 
        {h: "运动", p: "yùndòng", m: "exercise", bm: "ব্যায়াম করি"}
    ]
},
{
    bn: "দৌড়ানো একটি ভালো ব্যায়াম।", 
    en: "Running is a good sport.", 
    words: [
        {h: "跑步", p: "pǎobù", m: "running", bm: "দৌড়ানো"}, 
        {h: "是", p: "shì", m: "is", bm: "একটি"}, 
        {h: "好的", p: "hǎode", m: "good", bm: "ভালো"}, 
        {h: "运动", p: "yùndòng", m: "sport", bm: "ব্যায়াম"}
    ]
},
{
    bn: "আপনি কি কোনো ব্যায়াম পছন্দ করেন?", 
    en: "Do you like any exercise?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করেন"}, 
        {h: "什么", p: "shénme", m: "what", bm: "কোনো"}, 
        {h: "运动", p: "yùndòng", m: "exercise", bm: "ব্যায়াম"}
    ]
},

// 586-588: 打球 (dǎqiú - Play ball)
{
    bn: "আমরা আগামীকাল বাস্কেটবল খেলব।", 
    en: "We will play basketball tomorrow.", 
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"}, 
        {h: "明天", p: "míngtiān", m: "tomorrow", bm: "আগামীকাল"}, 
        {h: "打", p: "dǎ", m: "play", bm: "খেলব"}, 
        {h: "篮球", p: "lánqiú", m: "basketball", bm: "বাস্কেটবল"}
    ]
},
{
    bn: "তুমি কি ফুটবল খেলতে চাও?", 
    en: "Do you want to play football?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাও কি"}, 
        {h: "打", p: "dǎ", m: "play", bm: "খেলতে"}, 
        {h: "足球", p: "zúqiú", m: "football", bm: "ফুটবল"}
    ]
},
{
    bn: "ছেলেটি টেনিস খেলছে।", 
    en: "The boy is playing tennis.", 
    words: [
        {h: "男孩子", p: "nánháizi", m: "boy", bm: "ছেলেটি"}, 
        {h: "在", p: "zài", m: "is", bm: ""}, 
        {h: "打", p: "dǎ", m: "play", bm: "খেলছে"}, 
        {h: "网球", p: "wǎngqiú", m: "tennis", bm: "টেনিস"}
    ]
},

// 589-591: 跑步 (pǎobù - Running/Jogging)
{
    bn: "আমি প্রতিদিন সকালে দৌড়াই।", 
    en: "I run every morning.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "每天", p: "měitiān", m: "every day", bm: "প্রতিদিন"}, 
        {h: "早上", p: "zǎoshang", m: "morning", bm: "সকালে"}, 
        {h: "跑步", p: "pǎobù", m: "run", bm: "দৌড়াই"}
    ]
},
{
    bn: "দৌড়ানো স্বাস্থ্যের জন্য ভালো।", 
    en: "Running is good for health.", 
    words: [
        {h: "跑步", p: "pǎobù", m: "running", bm: "দৌড়ানো"}, 
        {h: "对", p: "duì", m: "for", bm: ""}, 
        {h: "身体", p: "shēntǐ", m: "body", bm: "স্বাস্থ্য"}, 
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "তুমি কি দৌড়াতে পছন্দ করো?", 
    en: "Do you like running?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করো"}, 
        {h: "跑步", p: "pǎobù", m: "run", bm: "দৌড়াতে"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},

// 592-594: 电视 (diànshì - Television)
{
    bn: "আমি টিভি দেখতে পছন্দ করি।", 
    en: "I like watching TV.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "看", p: "kàn", m: "watch", bm: "দেখতে"}, 
        {h: "电视", p: "diànshì", m: "TV", bm: "টিভি"}
    ]
},
{
    bn: "তুমি কি টিভি দেখছো?", 
    en: "Are you watching TV?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "在", p: "zài", m: "at", bm: ""}, 
        {h: "看", p: "kàn", m: "watch", bm: "দেখছো কি"}, 
        {h: "电视", p: "diànshì", m: "TV", bm: "টিভি"}, 
        {h: "吗", p: "ma", m: "marker", bm: "(প্রশ্ন)"}
    ]
},
{
    bn: "টিভিতে খবর দেখুন।", 
    en: "Watch the news on TV.", 
    words: [
        {h: "看", p: "kàn", m: "watch", bm: "দেখুন"}, 
        {h: "电视", p: "diànshì", m: "TV", bm: "টিভিতে"}, 
        {h: "新闻", p: "xīnwén", m: "news", bm: "খবর"}
    ]
},

// 595-597: 晚饭 (wǎnfàn - Dinner)
{
    bn: "আমরা একসাথে রাতের খাবার খাব।", 
    en: "We will have dinner together.", 
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"}, 
        {h: "一起", p: "yìqǐ", m: "together", bm: "একসাথে"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খাব"}, 
        {h: "晚饭", p: "wǎnfàn", m: "dinner", bm: "রাতের খাবার"}
    ]
},
{
    bn: "রাত ৮টায় রাতের খাবার প্রস্তুত।", 
    en: "Dinner is ready at 8 PM.", 
    words: [
        {h: "八点", p: "bādiǎn", m: "eight o'clock", bm: "রাত ৮টায়"}, 
        {h: "晚饭", p: "wǎnfàn", m: "dinner", bm: "রাতের খাবার"}, 
        {h: "准备好了", p: "zhǔnbèihǎole", m: "ready", bm: "প্রস্তুত"}
    ]
},
{
    bn: "তুমি রাতের খাবারে কী খেয়েছ?", 
    en: "What did you have for dinner?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "晚饭", p: "wǎnfàn", m: "dinner", bm: "রাতের খাবারে"}, 
        {h: "吃", p: "chī", m: "eat", bm: "কী খেয়েছ"}, 
        {h: "了", p: "le", m: "particle", bm: ""}
    ]
},

// 598-600: 睡觉 (shuìjiào - Sleep)
{
    bn: "আমার এখন ঘুমানো উচিত।", 
    en: "I should go to sleep now.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "现在", p: "xiànzài", m: "now", bm: "এখন"}, 
        {h: "应该", p: "yīnggāi", m: "should", bm: "উচিত"}, 
        {h: "睡觉", p: "shuìjiào", m: "sleep", bm: "ঘুমানো"}
    ]
},
{
    bn: "তুমি কয়টায় ঘুমাতে যাও?", 
    en: "What time do you go to sleep?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"}, 
        {h: "几点", p: "jǐdiǎn", m: "what time", bm: "কয়টায়"}, 
        {h: "去", p: "qù", m: "go", bm: ""}, 
        {h: "睡觉", p: "shuìjiào", m: "sleep", bm: "ঘুমাতে যাও"}
    ]
},
{
    bn: "কাল রাতে আমি ভালো ঘুমিয়েছি।", 
    en: "I slept well last night.", 
    words: [
        {h: "昨天", p: "zuótiān", m: "yesterday", bm: "কাল"}, 
        {h: "晚上", p: "wǎnshang", m: "night", bm: "রাতে"}, 
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "睡觉", p: "shuìjiào", m: "sleep", bm: "ভালো ঘুমিয়েছি"}, 
        {h: "得", p: "de", m: "particle", bm: ""}
    ]
},

// 601-603: 听力 (tīnglì - Listening Ability/Listening Test)
{
    bn: "আমার শোনার ক্ষমতা ভালো।",
    en: "My listening ability is good.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "听力", p: "tīnglì", m: "listening", bm: "শোনার ক্ষমতা"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"}
    ]
},
{
    bn: "আজ আমাদের শোনার পরীক্ষা আছে।",
    en: "We have a listening test today.",
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
        {h: "我们", p: "wǒmen", m: "we", bm: "আমাদের"},
        {h: "有", p: "yǒu", m: "have", bm: "আছে"},
        {h: "听力", p: "tīnglì", m: "listening", bm: "শোনার"},
        {h: "考试", p: "kǎoshì", m: "test", bm: "পরীক্ষা"}
    ]
},
{
    bn: "আপনার শোনার ক্ষমতা উন্নত করুন।",
    en: "Improve your listening ability.",
    words: [
        {h: "提高", p: "tígāo", m: "improve", bm: "উন্নত করুন"},
        {h: "你", p: "nǐ", m: "your", bm: "আপনার"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "听力", p: "tīnglì", m: "listening", bm: "শোনার ক্ষমতা"}
    ]
},


// 604-606: 文学 (wénxué - Literature)
{
    bn: "আমি সাহিত্য পড়তে পছন্দ করি।",
    en: "I like to read literature.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"},
        {h: "看", p: "kàn", m: "read", bm: "পড়তে"},
        {h: "文学", p: "wénxué", m: "literature", bm: "সাহিত্য"}
    ]
},
{
    bn: "তিনি সাহিত্যের শিক্ষক।",
    en: "He is a literature teacher.",
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"},
        {h: "是", p: "shì", m: "is", bm: "।"},
        {h: "文学", p: "wénxué", m: "literature", bm: "সাহিত্যের"},
        {h: "老师", p: "lǎoshī", m: "teacher", bm: "শিক্ষক"}
    ]
},
{
    bn: "এই বইটি সাহিত্য সম্পর্কে।",
    en: "This book is about literature.",
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"},
        {h: "书", p: "shū", m: "book", bm: "বইটি"},
        {h: "关于", p: "guānyú", m: "about", bm: "সম্পর্কে"},
        {h: "文学", p: "wénxué", m: "literature", bm: "সাহিত্য"}
    ]
},


// 607-609: 历史 (lìshǐ - History)
{
    bn: "আমি ইতিহাস পড়তে পছন্দ করি।",
    en: "I like to read history.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"},
        {h: "看", p: "kàn", m: "read", bm: "পড়তে"},
        {h: "历史", p: "lìshǐ", m: "history", bm: "ইতিহাস"}
    ]
},
{
    bn: "চীনা ইতিহাস খুব দীর্ঘ।",
    en: "Chinese history is very long.",
    words: [
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীনা"},
        {h: "历史", p: "lìshǐ", m: "history", bm: "ইতিহাস"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "长", p: "cháng", m: "long", bm: "দীর্ঘ"}
    ]
},
{
    bn: "এটি একটি ঐতিহাসিক স্থান।",
    en: "This is a historical place.",
    words: [
        {h: "这是", p: "zhèshì", m: "this is", bm: "এটি একটি"},
        {h: "历史", p: "lìshǐ", m: "historical", bm: "ঐতিহাসিক"},
        {h: "地方", p: "dìfang", m: "place", bm: "স্থান"}
    ]
},

// 610-612: 语言 (yǔyán - Language)
{
    bn: "আমি অনেক ভাষা শিখতে চাই।",
    en: "I want to learn many languages.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"},
        {h: "学", p: "xué", m: "learn", bm: "শিখতে"},
        {h: "很多", p: "hěnduō", m: "many", bm: "অনেক"},
        {h: "语言", p: "yǔyán", m: "languages", bm: "ভাষা"}
    ]
},
{
    bn: "চীনা একটি সুন্দর ভাষা।",
    en: "Chinese is a beautiful language.",
    words: [
        {h: "中文", p: "zhōngwén", m: "Chinese", bm: "চীনা"},
        {h: "是", p: "shì", m: "is", bm: "একটি"},
        {h: "美丽", p: "měilì", m: "beautiful", bm: "সুন্দর"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "语言", p: "yǔyán", m: "language", bm: "ভাষা"}
    ]
},
{
    bn: "ভাষা মানুষের যোগাযোগের মাধ্যম।",
    en: "Language is a means of human communication.",
    words: [
        {h: "语言", p: "yǔyán", m: "language", bm: "ভাষা"},
        {h: "是", p: "shì", m: "is", bm: "।"},
        {h: "人类", p: "rénlèi", m: "human", bm: "মানুষের"},
        {h: "交流", p: "jiāoliú", m: "communication", bm: "যোগাযোগের"},
        {h: "工具", p: "gōngjù", m: "tool", bm: "মাধ্যম"}
    ]
},

// 613-615: 经济 (jīngjì - Economy)
{
    bn: "আমি অর্থনীতি অধ্যয়ন করছি।",
    en: "I am studying economics.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "学", p: "xué", m: "study", bm: "অধ্যয়ন করছি"},
        {h: "经济", p: "jīngjì", m: "economics", bm: "অর্থনীতি"}
    ]
},
{
    bn: "চীনের অর্থনীতি দ্রুত বাড়ছে।",
    en: "China's economy is growing fast.",
    words: [
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীনের"},
        {h: "经济", p: "jīngjì", m: "economy", bm: "অর্থনীতি"},
        {h: "发展", p: "fāzhǎn", m: "develop", bm: "বাড়ছে"},
        {h: "得", p: "de", m: "marker", bm: ""},
        {h: "很快", p: "hěnkuài", m: "fast", bm: "দ্রুত"}
    ]
},
{
    bn: "বর্তমান পরিস্থিতি অর্থনৈতিকভাবে কঠিন।",
    en: "The current situation is economically difficult.",
    words: [
        {h: "现在", p: "xiànzài", m: "now", bm: "বর্তমান"},
        {h: "情况", p: "qíngkuàng", m: "situation", bm: "পরিস্থিতি"},
        {h: "在", p: "zài", m: "is", bm: ""},
        {h: "经济", p: "jīngjì", m: "economy", bm: "অর্থনৈতিকভাবে"},
        {h: "上", p: "shàng", m: "on", bm: ""},
        {h: "很", p: "hěn", m: "very", bm: "।"},
        {h: "困难", p: "kùnnan", m: "difficult", bm: "কঠিন"}
    ]
},

// 616-618: 文化 (wénhuà - Culture)
{
    bn: "চীনা সংস্কৃতি খুব সমৃদ্ধ।",
    en: "Chinese culture is very rich.",
    words: [
        {h: "中国", p: "zhōngguó", m: "China", bm: "চীনা"},
        {h: "文化", p: "wénhuà", m: "culture", bm: "সংস্কৃতি"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "丰富", p: "fēngfù", m: "rich", bm: "সমৃদ্ধ"}
    ]
},
{
    bn: "আমি বিভিন্ন সংস্কৃতি সম্পর্কে জানতে চাই।",
    en: "I want to know about different cultures.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"},
        {h: "了解", p: "liǎojiě", m: "know/understand", bm: "জানতে"},
        {h: "不同", p: "bùtóng", m: "different", bm: "বিভিন্ন"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "文化", p: "wénhuà", m: "culture", bm: "সংস্কৃতি"}
    ]
},
{
    bn: "আমাদের একে অপরের সংস্কৃতিকে সম্মান করা উচিত।",
    en: "We should respect each other's culture.",
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমাদের"},
        {h: "应该", p: "yīnggāi", m: "should", bm: "উচিত"},
        {h: "尊重", p: "zūnzhòng", m: "respect", bm: "সম্মান করা"},
        {h: "彼此", p: "bǐcǐ", m: "each other", bm: "একে অপরের"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "文化", p: "wénhuà", m: "culture", bm: "সংস্কৃতি"}
    ]
},

// 619-621: 容易 (róngyì - Easy)
{
    bn: "চীনা ভাষা শেখা খুব সহজ নয়।",
    en: "Learning Chinese is not very easy.",
    words: [
        {h: "学", p: "xué", m: "learn", bm: "শেখা"},
        {h: "中文", p: "zhōngwén", m: "Chinese", bm: "চীনা ভাষা"},
        {h: "不", p: "bù", m: "not", bm: "নয়"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "容易", p: "róngyì", m: "easy", bm: "সহজ"}
    ]
},
{
    bn: "এই কাজটি করা সহজ।",
    en: "This job is easy to do.",
    words: [
        {h: "做", p: "zuò", m: "do", bm: "করা"},
        {h: "这个", p: "zhège", m: "this", bm: "এই"},
        {h: "工作", p: "gōngzuò", m: "job", bm: "কাজটি"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "容易", p: "róngyì", m: "easy", bm: "সহজ"}
    ]
},
{
    bn: "আজকের পরীক্ষা সহজ ছিল।",
    en: "Today's test was easy.",
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজকের"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "考试", p: "kǎoshì", m: "test", bm: "পরীক্ষা"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "容易", p: "róngyì", m: "easy", bm: "সহজ ছিল"}
    ]
},

// 622-624: 难 (nán - Difficult/Hard)
{
    bn: "এই প্রশ্নটি খুব কঠিন।",
    en: "This question is very difficult.",
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"},
        {h: "问题", p: "wèntí", m: "question", bm: "প্রশ্নটি"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},
{
    bn: "অংক করা খুব কঠিন।",
    en: "Doing math is very difficult.",
    words: [
        {h: "做", p: "zuò", m: "do", bm: "করা"},
        {h: "数学", p: "shùxué", m: "math", bm: "অংক"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},
{
    bn: "জীবন কখনো কখনো কঠিন হতে পারে।",
    en: "Life can be difficult sometimes.",
    words: [
        {h: "生活", p: "shēnghuó", m: "life", bm: "জীবন"},
        {h: "有时候", p: "yǒushíhou", m: "sometimes", bm: "কখনো কখনো"},
        {h: "会", p: "huì", m: "can", bm: "হতে পারে"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "难", p: "nán", m: "difficult", bm: "কঠিন"}
    ]
},

// 625-627: 星期日 (xīngqīrì - Sunday)
{
    bn: "রবিবার আমি বিশ্রাম নিই।",
    en: "I rest on Sunday.",
    words: [
        {h: "星期日", p: "xīngqīrì", m: "Sunday", bm: "রবিবার"},
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "休息", p: "xiūxi", m: "rest", bm: "বিশ্রাম নিই"}
    ]
},
{
    bn: "আগামী রবিবার আমার জন্মদিন।",
    en: "My birthday is next Sunday.",
    words: [
        {h: "下个", p: "xiàge", m: "next", bm: "আগামী"},
        {h: "星期日", p: "xīngqīrì", m: "Sunday", bm: "রবিবার"},
        {h: "我", p: "wǒ", m: "I", bm: "আমার"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"}
    ]
},
{
    bn: "আমরা রবিবার বই পড়তে যাই।",
  en: "We go to read a book on Sunday.",
  words: [
    {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"},
    {h: "星期日", p: "xīngqīrì", m: "Sunday", bm: "রবিবার"},
    {h: "去", p: "qù", m: "go", bm: "যাই"},
    {h: "看", p: "kàn", m: "read/watch", bm: "পড়তে"},
    {h: "书", p: "shū", m: "book", bm: "বই"}
    ]
},

// 628-630: 星期 (xīngqī - Week)
{
    bn: "আজ সপ্তাহের কোন দিন?",
    en: "What day of the week is it today?",
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
        {h: "是", p: "shì", m: "is", bm: ""},
        {h: "星期", p: "xīngqī", m: "week", bm: "সপ্তাহের"},
        {h: "几", p: "jǐ", m: "which", bm: "কোন দিন"}
    ]
},
{
    bn: "আমি সপ্তাহের শেষে কাজ করি না।",
    en: "I do not work on weekends.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "周末", p: "zhōumò", m: "weekend", bm: "সপ্তাহের শেষে"},
        {h: "不", p: "bù", m: "not", bm: "না"},
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"}
    ]
},
{
    bn: "এই সপ্তাহ খুব ব্যস্ত।",
    en: "This week is very busy.",
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"},
        {h: "星期", p: "xīngqī", m: "week", bm: "সপ্তাহ"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},

// 631-633: 事儿 (shìr - Matter/Thing/Affair - often written as 事儿 in spoken context, but dictionary form is 事)
{
    bn: "আপনার কি কোনো কাজ আছে?",
    en: "Do you have any matter?",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"},
        {h: "有", p: "yǒu", m: "have", bm: "আছে কি"},
        {h: "事儿", p: "shìr", m: "matter", bm: "কোনো কাজ"}
    ]
},
{
    bn: "আমি আজ ব্যস্ত, অনেক কাজ আছে।",
    en: "I am busy today, I have many things to do.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"},
        {h: "有", p: "yǒu", m: "have", bm: "আছে"},
        {h: "很多", p: "hěnduō", m: "many", bm: "অনেক"},
        {h: "事儿", p: "shìr", m: "matter", bm: "কাজ"}
    ]
},
{
    bn: "এটি একটি ছোট কাজ।",
    en: "This is a small matter.",
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"},
        {h: "是", p: "shì", m: "is", bm: "একটি"},
        {h: "件", p: "jiàn", m: "measure word", bm: ""},
        {h: "小", p: "xiǎo", m: "small", bm: "ছোট"},
        {h: "事儿", p: "shìr", m: "matter", bm: "কাজ"}
    ]
},

// 634-636: 星期 (xīngqī - Week)
{
    bn: "আজ সপ্তাহের কোন দিন?",
    en: "What day of the week is it today?",
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
        {h: "是", p: "shì", m: "is", bm: ""},
        {h: "星期", p: "xīngqī", m: "week", bm: "সপ্তাহের"},
        {h: "几", p: "jǐ", m: "which", bm: "কোন দিন"}
    ]
},
{
    bn: "আমি সপ্তাহের শেষে কাজ করি না।",
    en: "I do not work on weekends.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "周末", p: "zhōumò", m: "weekend", bm: "সপ্তাহের শেষে"},
        {h: "不", p: "bù", m: "not", bm: "কাজ করি না"},
        {h: "工作", p: "gōngzuò", m: "work", bm: ""}
    ]
},
{
    bn: "এই সপ্তাহ খুব ব্যস্ত।",
    en: "This week is very busy.",
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এই"},
        {h: "星期", p: "xīngqī", m: "week", bm: "সপ্তাহ"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"}
    ]
},


 // 637-639: 事儿 (shìr - Matter/Thing/Affair)
{
    bn: "আপনার কি কোনো কাজ আছে?",
    en: "Do you have any matter?",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"},
        {h: "有", p: "yǒu", m: "have", bm: "আছে কি"},
        {h: "事儿", p: "shìr", m: "matter", bm: "কোনো কাজ"}
    ]
},
{
    bn: "আমি আজ ব্যস্ত, অনেক কাজ আছে।",
    en: "I am busy today, I have many things to do.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
        {h: "很", p: "hěn", m: "very", bm: ""},
        {h: "忙", p: "máng", m: "busy", bm: "ব্যস্ত"},
        {h: "有", p: "yǒu", m: "have", bm: "আছে"},
        {h: "很多", p: "hěnduō", m: "many", bm: "অনেক"},
        {h: "事儿", p: "shìr", m: "matter", bm: "কাজ"}
    ]
},
{
    bn: "এটি একটি ছোট কাজ।",
    en: "This is a small matter.",
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"},
        {h: "是", p: "shì", m: "is", bm: "একটি"},
        {h: "件", p: "jiàn", m: "measure word", bm: ""},
        {h: "小", p: "xiǎo", m: "small", bm: "ছোট"},
        {h: "事儿", p: "shìr", m: "matter", bm: "কাজ"}
    ]
},

// 640-642: 生日 (shēngrì - Birthday)
{
    bn: "আজ আমার জন্মদিন।",
    en: "Today is my birthday.",
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"},
        {h: "是", p: "shì", m: "is", bm: ""},
        {h: "我", p: "wǒ", m: "I", bm: "আমার"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"}
    ]
},
{
    bn: "তোমার জন্মদিন কবে?",
    en: "When is your birthday?",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তোমার"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"},
        {h: "是", p: "shì", m: "is", bm: ""},
        {h: "几月", p: "jǐyuè", m: "which month", bm: "কবে"},
        {h: "几号", p: "jǐhào", m: "which day", bm: ""}
    ]
},
{
    bn: "শুভ জন্মদিন!",
    en: "Happy Birthday!",
    words: [
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"},
        {h: "快乐", p: "kuàilè", m: "happy", bm: "শুভ"}
    ]
},

// 643-645: 日 (rì - Day/Date/Sun)
{
    bn: "আজকের তারিখ কত?",
    en: "What is today's date?",
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজকের"},
        {h: "几", p: "jǐ", m: "which", bm: ""},
        {h: "月", p: "yuè", m: "month", bm: "তারিখ"},
        {h: "几", p: "jǐ", m: "which", bm: ""},
        {h: "日", p: "rì", m: "day", bm: "কত"}
    ]
},
{
    bn: "আমি আগামীকাল যাব।",
    en: "I will go tomorrow.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "明日", p: "míngrì", m: "tomorrow", bm: "আগামীকাল"},
        {h: "去", p: "qù", m: "go", bm: "যাব"}
    ]
},
{
    bn: "সূর্য পূর্ব দিকে ওঠে।",
    en: "The sun rises in the east.",
    words: [
        {h: "日", p: "rì", m: "sun", bm: "সূর্য"},
        {h: "从", p: "cóng", m: "from", bm: ""},
        {h: "东边", p: "dōngbian", m: "east side", bm: "পূর্ব দিকে"},
        {h: "升起", p: "shēngqǐ", m: "rise", bm: "ওঠে"}
    ]
},

// 646-648: 聚会 (jùhuì - Party/Get-together)
{
    bn: "আমরা একটি পার্টি করছি।",
    en: "We are having a party.",
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"},
        {h: "在", p: "zài", m: "at/present", bm: ""},
        {h: "聚会", p: "jùhuì", m: "party", bm: "একটি পার্টি করছি"}
    ]
},
{
    bn: "তুমি কি পার্টিতে আসবে?",
    en: "Will you come to the party?",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"},
        {h: "会", p: "huì", m: "will", bm: ""},
        {h: "来", p: "lái", m: "come", bm: "আসবে কি"},
        {h: "参加", p: "cānjiā", m: "attend", bm: ""},
        {h: "聚会", p: "jùhuì", m: "party", bm: "পার্টিতে"}
    ]
},
{
    bn: "পার্টিটি খুব মজাদার ছিল।",
    en: "The party was very fun.",
    words: [
        {h: "聚会", p: "jùhuì", m: "party", bm: "পার্টিটি"},
        {h: "很", p: "hěn", m: "very", bm: ""},
        {h: "开心", p: "kāixīn", m: "happy/fun", bm: "খুব মজাদার ছিল"}
    ]
},

// 649-651: 大家 (dàjiā - Everyone/Everybody)
{
    bn: "সবাই কেমন আছেন?",
    en: "How is everyone?",
    words: [
        {h: "大家", p: "dàjiā", m: "everyone", bm: "সবাই"},
        {h: "好", p: "hǎo", m: "good", bm: "কেমন"},
        {h: "吗", p: "ma", m: "question particle", bm: "আছেন"}
    ]
},
{
    bn: "সবাই একসাথে কাজ করুন।",
    en: "Everyone work together.",
    words: [
        {h: "大家", p: "dàjiā", m: "everyone", bm: "সবাই"},
        {h: "一起", p: "yìqǐ", m: "together", bm: "একসাথে"},
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করুন"}
    ]
},
{
    bn: "সবাইকে স্বাগতম।",
    en: "Welcome everyone.",
    words: [
        {h: "欢迎", p: "huānyíng", m: "welcome", bm: "স্বাগতম"},
        {h: "大家", p: "dàjiā", m: "everyone", bm: "সবাইকে"}
    ]
},

// 652-654: 唱歌 (chànggē - Sing a song)
{
    bn: "আমি গান গাইতে ভালোবাসি না",
  en: "I do not love to sing.",
  words: [
    {h: "我", p: "wǒ", m: "I", bm: "আমি"},
    {h: "不", p: "bù", m: "not", bm: "না"},
    {h: "喜欢", p: "xǐhuan", m: "like", bm: "ভালোবাসি"},
    {h: "唱歌", p: "chànggē", m: "sing", bm: "গান গাইতে"}
    ]
},
{
    bn: "সে খুব সুন্দর গান গায়।",
    en: "She sings very beautifully.",
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"},
        {h: "唱", p: "chàng", m: "sing", bm: "গান"},
        {h: "歌", p: "gē", m: "song", bm: ""},
        {h: "唱", p: "chàng", m: "sing", bm: "গায়"},
        {h: "得", p: "de", m: "Particle", bm: ""},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "好听", p: "hǎotīng", m: "pleasant to hear", bm: "সুন্দর"}
    ]
},
{
    bn: "চলো গান গাই।",
    en: "Let's sing.",
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: ""},
        {h: "一起", p: "yìqǐ", m: "together", bm: "চলো"},
        {h: "唱歌", p: "chànggē", m: "sing", bm: "গান গাই"}
    ]
},

// 655-657: 唱 (chàng - Sing)
{
    bn: "তিনি একটি লোকগান গাইলেন।",
    en: "He sang a folk song.",
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"},
        {h: "唱", p: "chàng", m: "sing", bm: "গাইলেন"},
        {h: "了", p: "le", m: "past tense", bm: ""},
        {h: "一", p: "yī", m: "one", bm: ""},
        {h: "首", p: "shǒu", m: "measure word", bm: ""},
        {h: "民歌", p: "míngē", m: "folk song", bm: "একটি লোকগান"}
    ]
},
{
    bn: "তুমি কি গান গাইতে পারো?",
    en: "Can you sing?",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "তুমি"},
        {h: "会", p: "huì", m: "can", bm: "পারো কি"},
        {h: "唱", p: "chàng", m: "sing", bm: "গান গাইতে"}
    ]
},
{
    bn: "সবাই মিলে গান গেয়ো না।",
    en: "Everyone don't sing together.",
    words: [
        {h: "大家", p: "dàjiā", m: "everyone", bm: "সবাই"},
        {h: "别", p: "bié",  m: "don't", bm: "না"},
        {h: "一起", p: "yìqǐ", m: "together", bm: "মিলে"},
        {h: "唱", p: "chàng", m: "sing", bm: "গান গেয়ো"}
    ]
},

// 658-660: 不好意思 (bù hǎoyìsi - Feel embarrassed/Excuse me/Sorry)
{
    bn: "মাফ করবেন, আমি দেরি করে ফেলেছি।",
    en: "Excuse me, I am late.",
    words: [
        {h: "不好意思", p: "bù hǎoyìsi", m: "sorry/excuse me", bm: "মাফ করবেন,"},
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "迟到", p: "chídào", m: "late", bm: "দেরি করে ফেলেছি"},
        {h: "了", p: "le", m: "particle", bm: ""}
    ]
},
{
    bn: "আমি লজ্জিত বোধ করছি।",
    en: "I feel embarrassed.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "觉得", p: "juéde", m: "feel", bm: "বোধ করছি"},
        {h: "不好意思", p: "bù hǎoyìsi", m: "embarrassed", bm: "লজ্জিত"}
    ]
},
{
    bn: "মাফ করবেন, এটা কি আপনার সিট?",
    en: "Excuse me, is this your seat?",
    words: [
        {h: "不好意思", p: "bù hǎoyìsi", m: "excuse me", bm: "মাফ করবেন,"},
        {h: "这", p: "zhè", m: "this", bm: "এটা কি"},
        {h: "是", p: "shì", m: "is", bm: ""},
        {h: "你", p: "nǐ", m: "your", bm: "আপনার"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "座位", p: "zuòwèi", m: "seat", bm: "সিট?"}
    ]
},

// 661-663: 可惜 (kěxī - Pity/Regretful)
{
    bn: "খুবই পরিতাপের বিষয়!",
    en: "What a pity!",
    words: [
        {h: "太", p: "tài", m: "too", bm: "খুবই"},
        {h: "可惜", p: "kěxī", m: "pity/regretful", bm: "পরিতাপের বিষয়!"}
    ]
},
{
    bn: "আপনি না আসায় খুব খারাপ লাগছে।",
    en: "It is a pity you couldn't come.",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"},
        {h: "没", p: "méi", m: "not", bm: "না আসায়"},
        {h: "来", p: "lái", m: "come", bm: ""},
        {h: "真", p: "zhēn", m: "really", bm: "খুব"},
        {h: "可惜", p: "kěxī", m: "pity", bm: "খারাপ লাগছে"}
    ]
},
{
    bn: "এটি একটি সুযোগ, হারানোর কোনো মানে হয় না।",
    en: "It's a pity to miss this opportunity.",
    words: [
        {h: "错过了", p: "cuòguòle", m: "missed", bm: "হারানো"},
        {h: "这个", p: "zhège", m: "this", bm: "এই"},
        {h: "机会", p: "jīhuì", m: "opportunity", bm: "সুযোগটি"},
        {h: "很", p: "hěn", m: "very", bm: ""},
        {h: "可惜", p: "kěxī", m: "pity", bm: "পরিতাপের"}
    ]
},

// 664-666: 送 (sòng - To give as a gift/To send/To deliver)
{
    bn: "আমি আপনাকে একটি উপহার দিতে চাই।", 
    en: "I want to give you a gift.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"}, 
        {h: "送", p: "sòng", m: "give", bm: "দিতে"}, 
        {h: "你", p: "nǐ", m: "you", bm: "আপনাকে"}, 
        {h: "一个", p: "yígè", m: "a", bm: "একটি"}, 
        {h: "礼物", p: "lǐwù", m: "gift", bm: "উপহার"}
    ]
},
{
    bn: "বাবা আমাকে স্কুলে পৌঁছে দেন।", 
    en: "Dad sends me to school.", 
    words: [
        {h: "爸爸", p: "bàba", m: "Dad", bm: "বাবা"}, 
        {h: "送", p: "sòng", m: "send/drop off", bm: "পৌঁছে দেন"}, 
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"}, 
        {h: "去", p: "qù", m: "go", bm: ""}, 
        {h: "学校", p: "xuéxiào", m: "school", bm: "স্কুলে"}
    ]
},
{
    bn: "আমি তাকে বিদায় জানাতে স্টেশনে গেছি।", 
    en: "I went to the station to see him off.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "去", p: "qù", m: "go", bm: "গেছি"}, 
        {h: "车站", p: "chēzhàn", m: "station", bm: "স্টেশনে"}, 
        {h: "送", p: "sòng", m: "see off", bm: "বিদায় জানাতে"}, 
        {h: "他", p: "tā", m: "him", bm: "তাকে"}
    ]
},

// 667-669: 礼物 (lǐwù - Gift/Present)
{
    bn: "এটি তোমার জন্মদিনের উপহার।", 
    en: "This is your birthday gift.", 
    words: [
        {h: "这", p: "zhè", m: "this", bm: "এটি"}, 
        {h: "是", p: "shì", m: "is", bm: "।"}, 
        {h: "给", p: "gěi", m: "for", bm: ""}, 
        {h: "你", p: "nǐ", m: "your", bm: "তোমার"}, 
        {h: "的", p: "de", m: "possessive", bm: ""}, 
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিনের"}, 
        {h: "礼物", p: "lǐwù", m: "gift", bm: "উপহার"}
    ]
},
{
    bn: "উপহারটি অনেক সুন্দর।", 
    en: "The gift is very beautiful.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: ""}, 
        {h: "礼物", p: "lǐwù", m: "gift", bm: "উপহারটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "অনেক"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},
{
    bn: "আপনি কি আমার উপহার পছন্দ করেছেন?", 
    en: "Do you like my gift?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করেছেন"}, 
        {h: "我", p: "wǒ", m: "my", bm: "আমার"}, 
        {h: "的", p: "de", m: "possessive", bm: ""}, 
        {h: "礼物", p: "lǐwù", m: "gift", bm: "উপহার"}, 
        {h: "吗", p: "ma", m: "question particle", bm: "কি"}
    ]
},

// 670-672: 号 (hào - Number/Day of month)
{
    bn: "আজকের তারিখ কত?", 
    en: "What is today's date?", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "几", p: "jǐ", m: "which", bm: ""}, 
        {h: "号", p: "hào", m: "date/day", bm: "তারিখ"}
    ]
},
{
    bn: "আমার ফোন নম্বর কত?", 
    en: "What is my phone number?", 
    words: [
        {h: "我", p: "wǒ", m: "my", bm: "আমার"}, 
        {h: "的", p: "de", m: "'s", bm: ""}, 
        {h: "电话", p: "diànhuà", m: "telephone", bm: "ফোন"}, 
        {h: "号码", p: "hàomǎ", m: "number", bm: "নম্বর কত"}
    ]
},
{
    bn: "আমি ৩ নম্বর বাসটি নিচ্ছি।", 
    en: "I am taking bus number 3.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "坐", p: "zuò", m: "sit/take", bm: "নিচ্ছি"}, 
        {h: "3", p: "sān", m: "3", bm: "৩"}, 
        {h: "号", p: "hào", m: "number", bm: "নম্বর"}, 
        {h: "公交车", p: "gōngjiāochē", m: "bus", bm: "বাসটি"}
    ]
},

// 673-675: 月 (yuè - Month/Moon)
{
    bn: "এক বছরে বারোটি মাস থাকে।", 
    en: "There are twelve months in a year.", 
    words: [
        {h: "一年", p: "yìnián", m: "one year", bm: "এক বছরে"}, 
        {h: "有", p: "yǒu", m: "have", bm: "থাকে"}, 
        {h: "十二", p: "shí'èr", m: "twelve", bm: "বারোটি"}, 
        {h: "个月", p: "gèyuè", m: "months", bm: "মাস"}
    ]
},
{
    bn: "আমার জন্মদিন মে মাসে।", 
    en: "My birthday is in May.", 
    words: [
        {h: "我", p: "wǒ", m: "my", bm: "আমার"}, 
        {h: "的", p: "de", m: "'s", bm: ""}, 
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"}, 
        {h: "在", p: "zài", m: "in", bm: "।"}, 
        {h: "五", p: "wǔ", m: "five", bm: "মে"}, 
        {h: "月", p: "yuè", m: "month", bm: "মাসে"}
    ]
},
{
    bn: "আজ আকাশে চাঁদ খুব সুন্দর।", 
    en: "The moon is very beautiful in the sky tonight.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজ"}, 
        {h: "晚上", p: "wǎnshang", m: "evening", bm: ""}, 
        {h: "月亮", p: "yuèliang", m: "moon", bm: "চাঁদ"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর"}
    ]
},

// 676-678: 蛋糕 (dàngāo - Cake)
{
    bn: "আজকের জন্মদিন উপলক্ষ্যে একটি কেক আছে।", 
    en: "There is a cake for today's birthday.", 
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: "আজকের"}, 
        {h: "的", p: "de", m: "'s", bm: ""}, 
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "蛋糕", p: "dàngāo", m: "cake", bm: "একটি কেক"}
    ]
},
{
    bn: "আমি চকলেট কেক খেতে পছন্দ করি।", 
    en: "I like to eat chocolate cake.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "巧克力", p: "qiǎokèlì", m: "chocolate", bm: "চকলেট"}, 
        {h: "蛋糕", p: "dàngāo", m: "cake", bm: "কেক"}
    ]
},
{
    bn: "এই কেকটি খুব সুস্বাদু।", 
    en: "This cake is very delicious.", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "蛋糕", p: "dàngāo", m: "cake", bm: "কেকটি"}, 
        {h: "很", p: "hěn", m: "very", bm: "খুব"}, 
        {h: "好吃", p: "hǎochī", m: "delicious", bm: "সুস্বাদু"}
    ]
},

// 679-681: 盒 (hé - Box/Case)
{
    bn: "আমার কাছে এক বাক্স কলম আছে।", 
    en: "I have a box of pens.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমার"}, 
        {h: "有", p: "yǒu", m: "have", bm: "আছে"}, 
        {h: "一", p: "yī", m: "one", bm: "এক"}, 
        {h: "盒", p: "hé", m: "box", bm: "বাক্স"}, 
        {h: "笔", p: "bǐ", m: "pen", bm: "কলম"}
    ]
},
{
    bn: "দয়া করে উপহারটি বাক্সে রাখুন।", 
    en: "Please put the gift in the box.", 
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"}, 
        {h: "把", p: "bǎ", m: "marker", bm: ""}, 
        {h: "礼物", p: "lǐwù", m: "gift", bm: "উপহারটি"}, 
        {h: "放", p: "fàng", m: "put", bm: "রাখুন"}, 
        {h: "在", p: "zài", m: "in", bm: ""}, 
        {h: "盒子", p: "hézi", m: "box", bm: "বাক্সে"}
    ]
},
{
    bn: "বাক্সটি খালি।", 
    en: "The box is empty.", 
    words: [
        {h: "盒子", p: "hézi", m: "box", bm: "বাক্সটি"}, 
        {h: "是", p: "shì", m: "is", bm: ""}, 
        {h: "空", p: "kōng", m: "empty", bm: "খালি"}
    ]
},

// 682-684: 巧克力 (qiǎokèlì - Chocolate)
{
    bn: "আমি চকলেট খেতে পছন্দ করি।", 
    en: "I like to eat chocolate.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করি"}, 
        {h: "吃", p: "chī", m: "eat", bm: "খেতে"}, 
        {h: "巧克力", p: "qiǎokèlì", m: "chocolate", bm: "চকলেট"}
    ]
},
{
    bn: "এটি খুব সুস্বাদু চকলেট।", 
    en: "This is very delicious chocolate.", 
    words: [
        {h: "这是", p: "zhèshì", m: "this is", bm: "এটি খুব"}, 
        {h: "很", p: "hěn", m: "very", bm: ""}, 
        {h: "好吃", p: "hǎochī", m: "delicious", bm: "সুস্বাদু"}, 
        {h: "的", p: "de", m: "particle", bm: ""}, 
        {h: "巧克力", p: "qiǎokèlì", m: "chocolate", bm: "চকলেট"}
    ]
},
{
    bn: "আপনি কি চকলেট পছন্দ করেন?", 
    en: "Do you like chocolate?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"}, 
        {h: "喜欢", p: "xǐhuan", m: "like", bm: "পছন্দ করেন"}, 
        {h: "巧克力", p: "qiǎokèlì", m: "chocolate", bm: "চকলেট"}, 
        {h: "吗", p: "ma", m: "particle", bm: "কি"}
    ]
},

// 685-687: 多大 (duōdà - How big/How old)
{
    bn: "আপনার বয়স কত?", 
    en: "How old are you?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"}, 
        {h: "多大", p: "duōdà", m: "how old", bm: "বয়স কত"}, 
        {h: "了", p: "le", m: "particle", bm: "？"}
    ]
},
{
    bn: "এই ঘরটি কত বড়?", 
    en: "How big is this room?", 
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"}, 
        {h: "房间", p: "fángjiān", m: "room", bm: "ঘরটি"}, 
        {h: "多大", p: "duōdà", m: "how big", bm: "কত বড়"}, 
        {h: "？", p: "?", m: "?", bm: ""}
    ]
},
{
    bn: "আপনার বাচ্চা কত বড় হয়েছে?", 
    en: "How big is your child?", 
    words: [
        {h: "你", p: "nǐ", m: "your", bm: "আপনার"}, 
        {h: "的", p: "de", m: "'s", bm: ""}, 
        {h: "孩子", p: "háizi", m: "child", bm: "বাচ্চা"}, 
        {h: "多大", p: "duōdà", m: "how big", bm: "কত বড়"}, 
        {h: "了", p: "le", m: "particle", bm: "হয়েছে?"}
    ]
},

// 688-690: 出生 (chūshēng - To be born)
{
    bn: "আমি বাংলাদেশে জন্মগ্রহণ করেছি।", 
    en: "I was born in Bangladesh.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "在", p: "zài", m: "in", bm: "বাংলাদেশে"}, 
        {h: "孟加拉国", p: "mèngjiālāguó", m: "Bangladesh", bm: ""}, 
        {h: "出生", p: "chūshēng", m: "born", bm: "জন্মগ্রহণ করেছি"}
    ]
},
{
    bn: "আপনার জন্মস্থান কোথায়?", 
    en: "Where were you born?", 
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"}, 
        {h: "出生", p: "chūshēng", m: "born", bm: "জন্মস্থান"}, 
        {h: "在", p: "zài", m: "at", bm: ""}, 
        {h: "哪里", p: "nǎlǐ", m: "where", bm: "কোথায়?"}
    ]
},
{
    bn: "তিনি ১৯৭০ সালে জন্মগ্রহণ করেন।", 
    en: "He was born in 1970.", 
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"}, 
        {h: "1970年", p: "yījiǔqīlíngnián", m: "1970", bm: "১৯৭০ সালে"}, 
        {h: "出生", p: "chūshēng", m: "born", bm: "জন্মগ্রহণ করেন"}
    ]
},

// 691-693: 就 (jiù - Then/At once/Just)
{
    bn: "আমি এখনই আসছি।", 
    en: "I am coming right away.", 
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"}, 
        {h: "就", p: "jiù", m: "at once", bm: "এখনই"}, 
        {h: "来", p: "lái", m: "come", bm: "আসছি"}
    ]
},
{
    bn: "যদি রোদ থাকে, তবে আমি যাব।", 
    en: "If it is sunny, then I will go.", 
    words: [
        {h: "要是", p: "yàoshi", m: "if", bm: "যদি"}, 
        {h: "晴天", p: "qíngtiān", m: "sunny", bm: "রোদ থাকে"}, 
        {h: "我", p: "wǒ", m: "I", bm: "তবে আমি"}, 
        {h: "就", p: "jiù", m: "then", bm: ""}, 
        {h: "去", p: "qù", m: "go", bm: "যাব"}
    ]
},
{
    bn: "আমাদের বাড়ির পাশেই স্কুল।", 
    en: "The school is just next to our house.", 
    words: [
        {h: "学校", p: "xuéxiào", m: "school", bm: "স্কুল"}, 
        {h: "就", p: "jiù", m: "just", bm: ""}, 
        {h: "在", p: "zài", m: "at", bm: ""}, 
        {h: "我们", p: "wǒmen", m: "our", bm: "আমাদের"}, 
        {h: "家", p: "jiā", m: "home", bm: "বাড়ির"}, 
        {h: "旁边", p: "pángbiān", m: "next to", bm: "পাশেই"}
    ]
},

// 694-696: 欢迎 (huānyíng - Welcome)
{
    bn: "আপনাকে স্বাগতম।",
    en: "Welcome to you.",
    words: [
        {h: "欢迎", p: "huānyíng", m: "welcome", bm: "স্বাগতম"},
        {h: "你", p: "nǐ", m: "you", bm: "আপনাকে"}
    ]
},
{
    bn: "আমাদের বাড়িতে স্বাগতম।",
    en: "Welcome to our home.",
    words: [
        {h: "欢迎", p: "huānyíng", m: "welcome", bm: "স্বাগতম"},
        {h: "到", p: "dào", m: "to", bm: ""},
        {h: "我们", p: "wǒmen", m: "our", bm: "আমাদের"},
        {h: "家", p: "jiā", m: "home", bm: "বাড়িতে"}
    ]
},
{
    bn: "সবাইকে স্বাগত জানানো হয়েছে।",
    en: "Everyone is welcome.",
    words: [
        {h: "欢迎", p: "huānyíng", m: "welcome", bm: "স্বাগত"},
        {h: "大家", p: "dàjiā", m: "everyone", bm: "সবাইকে"}
    ]
},

// 697-699: 快乐 (kuàilè - Happy)
{
    bn: "শুভ জন্মদিন!",
    en: "Happy Birthday!",
    words: [
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"},
        {h: "快乐", p: "kuàilè", m: "happy", bm: "শুভ"}
    ]
},
{
    bn: "আমি খুব খুশি।",
    en: "I am very happy.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "快乐", p: "kuàilè", m: "happy", bm: "খুশি"}
    ]
},
{
    bn: "ছুটির দিনগুলি খুব আনন্দের হয়।",
    en: "Holidays are very happy.",
    words: [
        {h: "节日", p: "jiérì", m: "holiday", bm: "ছুটির দিনগুলি"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "快乐", p: "kuàilè", m: "happy", bm: "আনন্দের হয়"}
    ]
},

// 700-702: 不客气 (bú kèqi - You're welcome)
{
    bn: "আপনাকে ধন্যবাদ। - কোনো ব্যাপার না।",
    en: "Thank you. - You're welcome.",
    words: [
        {h: "谢谢", p: "xièxie", m: "thank you", bm: "আপনাকে ধন্যবাদ"},
        {h: "不客气", p: "bú kèqi", m: "you're welcome", bm: "কোনো ব্যাপার না"}
    ]
},
{
    bn: "সাহায্যের জন্য ধন্যবাদ। - এটা তো আমার দায়িত্ব।",
    en: "Thanks for the help. - You're welcome.",
    words: [
        {h: "谢谢", p: "xièxie", m: "thanks", bm: "ধন্যবাদ"},
        {h: "帮助", p: "bāngzhù", m: "help", bm: "সাহায্যের জন্য"},
        {h: "不客气", p: "bú kèqi", m: "you're welcome", bm: "এটা তো আমার দায়িত্ব"}
    ]
},
{
    bn: "দয়া করে বসুন। - ধন্যবাদ।",
    en: "Please sit down. - You're welcome (as a polite response).",
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া"},
        {h: "坐", p: "zuò", m: "sit", bm: "করে বসুন"},
        {h: "不客气", p: "bú kèqi", m: "you're welcome", bm: "ধন্যবাদ (polite)"}
    ]
},

// 703-705: 客气 (kèqi - Polite/Courteous)
{
    bn: "আপনি খুব ভদ্র।",
    en: "You are very polite.",
    words: [
        {h: "你", p: "nǐ", m: "you", bm: "আপনি"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "客气", p: "kèqi", m: "polite", bm: "ভদ্র"}
    ]
},
{
    bn: "একে অপরের সাথে ভদ্রতা করা উচিত।",
    en: "Should be polite to each other.",
    words: [
        {h: "彼此", p: "bǐcǐ", m: "each other", bm: "একে অপরের"},
        {h: "应该", p: "yīnggāi", m: "should", bm: "উচিত"},
        {h: "客气", p: "kèqi", m: "polite", bm: "ভদ্রতা করা"}
    ]
},
{
    bn: "এত ভদ্রতা করার দরকার নেই।",
    en: "No need to be so polite.",
    words: [
        {h: "不用", p: "búyòng", m: "no need", bm: "দরকার নেই"},
        {h: "这么", p: "zhème", m: "so", bm: "এত"},
        {h: "客气", p: "kèqi", m: "polite", bm: "ভদ্রতা করার"}
    ]
},

// 706-708: 祝 (zhù - To wish/To offer blessings)
{
    bn: "শুভ জন্মদিন!",
    en: "Wish you a happy birthday!",
    words: [
        {h: "祝", p: "zhù", m: "wish", bm: "শুভ"},
        {h: "你", p: "nǐ", m: "you", bm: ""},
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিন"},
        {h: "快乐", p: "kuàilè", m: "happy", bm: ""}
    ]
},
{
    bn: "শুভ নববর্ষ!",
    en: "Wish you a happy new year!",
    words: [
        {h: "祝", p: "zhù", m: "wish", bm: "শুভ"},
        {h: "你", p: "nǐ", m: "you", bm: ""},
        {h: "新年", p: "xīnnián", m: "new year", bm: "নববর্ষ"},
        {h: "快乐", p: "kuàilè", m: "happy", bm: ""}
    ]
},
{
    bn: "আপনার সুস্বাস্থ্য কামনা করি।",
    en: "Wish you good health.",
    words: [
        {h: "祝", p: "zhù", m: "wish", bm: "কামনা করি"},
        {h: "你", p: "nǐ", m: "you", bm: "আপনার"},
        {h: "身体", p: "shēntǐ", m: "body/health", bm: "সু"},
        {h: "健康", p: "jiànkāng", m: "healthy", bm: "স্বাস্থ্য"}
    ]
},

// 709-711: 介绍 (jièshào - To introduce/Introduction)
{
    bn: "আমি আপনাকে নিজের পরিচয় করিয়ে দিচ্ছি।",
    en: "Let me introduce myself.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "介绍", p: "jièshào", m: "introduce", bm: "পরিচয় করিয়ে"},
        {h: "一下", p: "yíxià", m: "a bit", bm: "দিচ্ছি"},
        {h: "自己", p: "zìjǐ", m: "myself", bm: "নিজের"}
    ]
},
{
    bn: "দয়া করে নতুন বন্ধুটির সাথে পরিচয় করিয়ে দিন।",
    en: "Please introduce the new friend.",
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"},
        {h: "介绍", p: "jièshào", m: "introduce", bm: "পরিচয় করিয়ে"},
        {h: "一下", p: "yíxià", m: "a bit", bm: "দিন"},
        {h: "新", p: "xīn", m: "new", bm: "নতুন"},
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধুটির সাথে"}
    ]
},
{
    bn: "এটি একটি আকর্ষণীয় বই।",
    en: "This is an interesting book introduction.",
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এটি একটি"},
        {h: "书", p: "shū", m: "book", bm: ""},
        {h: "介绍", p: "jièshào", m: "introduce", bm: "আকর্ষণীয় বই"},
        {h: "很", p: "hěn", m: "very", bm: ""},
        {h: "有", p: "yǒu", m: "have", bm: ""},
        {h: "意思", p: "yìsi", m: "meaning", bm: ""}
    ]
},


// 712-714: 一下 (yíxià - A bit/A while/Once)
{
    bn: "দয়া করে এখানে একটু বসুন।",
    en: "Please sit here for a while.",
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"},
        {h: "在", p: "zài", m: "at", bm: ""},
        {h: "这儿", p: "zhèr", m: "here", bm: "এখানে"},
        {h: "坐", p: "zuò", m: "sit", bm: "বসুন"},
        {h: "一下", p: "yíxià", m: "a while", bm: "একটু"}
    ]
},
{
    bn: "আমি একটু বিশ্রাম নিতে চাই।",
    en: "I want to take a short rest.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "想", p: "xiǎng", m: "want", bm: "চাই"},
        {h: "休息", p: "xiūxi", m: "rest", bm: "বিশ্রাম"},
        {h: "一下", p: "yíxià", m: "a bit", bm: "একটু"}
    ]
},
{
    bn: "দয়া করে এটি একবার দেখুন।",
    en: "Please look at this once.",
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"},
        {h: "看", p: "kàn", m: "look", bm: "দেখুন"},
        {h: "一下", p: "yíxià", m: "once", bm: "একবার"},
        {h: "这个", p: "zhège", m: "this", bm: "এটি"}
    ]
},

// 715-717: 常常 (chángcháng - Often/Frequently)
{
    bn: "আমি প্রায়ই সিনেমা দেখতে যাই।",
    en: "I often go to watch movies.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "常常", p: "chángcháng", m: "often", bm: "প্রায়ই"},
        {h: "去", p: "qù", m: "go", bm: "যাই"},
        {h: "看", p: "kàn", m: "watch", bm: "দেখতে"},
        {h: "电影", p: "diànyǐng", m: "movie", bm: "সিনেমা"}
    ]
},
{
    bn: "সে প্রায়ই বাড়িতেই থাকে।",
    en: "She often stays at home.",
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"},
        {h: "常常", p: "chángcháng", m: "often", bm: "প্রায়ই"},
        {h: "呆在", p: "dāizài", m: "stay at", bm: "থাকে"},
        {h: "家", p: "jiā", m: "home", bm: "বাড়িতেই"}
    ]
},
{
    bn: "আমরা প্রায়ই একসাথে দুপুরের খাবার খাই।",
    en: "We often have lunch together.",
    words: [
        {h: "我们", p: "wǒmen", m: "we", bm: "আমরা"},
        {h: "常常", p: "chángcháng", m: "often", bm: "প্রায়ই"},
        {h: "一起", p: "yìqǐ", m: "together", bm: "একসাথে"},
        {h: "吃", p: "chī", m: "eat", bm: "খাই"},
        {h: "午饭", p: "wǔfàn", m: "lunch", bm: "দুপুরের খাবার"}
    ]
},

// 718-720: 常 (cháng - Often/Frequently)
{
    bn: "আমি প্রায়ই লাইব্রেরিতে যাই।",
    en: "I often go to the library.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "常", p: "cháng", m: "often", bm: "প্রায়ই"},
        {h: "去", p: "qù", m: "go", bm: "যাই"},
        {h: "图书馆", p: "túshūguǎn", m: "library", bm: "লাইব্রেরিতে"}
    ]
},
{
    bn: "তিনি প্রায়ই আমাকে সাহায্য করেন।",
    en: "He often helps me.",
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"},
        {h: "常", p: "cháng", m: "often", bm: "প্রায়ই"},
        {h: "帮", p: "bāng", m: "help", bm: "সাহায্য"},
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"},
        {h: "忙", p: "máng", m: "busy/help", bm: ""}
    ]
},
{
    bn: "এখানে প্রায়ই বৃষ্টি হয়।",
    en: "It often rains here.",
    words: [
        {h: "这儿", p: "zhèr", m: "here", bm: "এখানে"},
        {h: "常", p: "cháng", m: "often", bm: "প্রায়ই"},
        {h: "下雨", p: "xiàyǔ", m: "rain", bm: "বৃষ্টি হয়"}
    ]
},

// 721-723: 教 (jiāo - To teach)
{
    bn: "তিনি আমাকে চীনা ভাষা শেখান।",
    en: "He teaches me Chinese.",
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"},
        {h: "教", p: "jiāo", m: "teach", bm: "শেখান"},
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"},
        {h: "中文", p: "zhōngwén", m: "Chinese", bm: "চীনা ভাষা"}
    ]
},
{
    bn: "আমাকে একটি গান শেখান।",
    en: "Teach me a song.",
    words: [
        {h: "教", p: "jiāo", m: "teach", bm: "শেখান"},
        {h: "我", p: "wǒ", m: "me", bm: "আমাকে"},
        {h: "一首", p: "yìshǒu", m: "one (song)", bm: "একটি"},
        {h: "歌", p: "gē", m: "song", bm: "গান"}
    ]
},
{
    bn: "তিনি শিক্ষক হিসেবে কাজ করেন।",
    en: "He works as a teacher (lit. teaches books).",
    words: [
        {h: "他", p: "tā", m: "he", bm: "তিনি"},
        {h: "教", p: "jiāo", m: "teach", bm: "কাজ করেন"},
        {h: "书", p: "shū", m: "book", bm: ""}
    ]
},

// 724-726: 写 (xiě - To write)
{
    bn: "আমি একটি চিঠি লিখছি।",
    en: "I am writing a letter.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "写", p: "xiě", m: "write", bm: "লিখছি"},
        {h: "信", p: "xìn", m: "letter", bm: "একটি চিঠি"}
    ]
},
{
    bn: "আপনার নাম এখানে লিখুন।",
    en: "Write your name here.",
    words: [
        {h: "写", p: "xiě", m: "write", bm: "লিখুন"},
        {h: "你", p: "nǐ", m: "your", bm: "আপনার"},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "名字", p: "míngzi", m: "name", bm: "নাম"},
        {h: "在", p: "zài", m: "at", bm: "এখানে"},
        {h: "这", p: "zhè", m: "this", bm: ""}
    ]
},
{
    bn: "সে খুব সুন্দর করে লেখে।",
    en: "She writes very beautifully.",
    words: [
        {h: "她", p: "tā", m: "she", bm: "সে"},
        {h: "写", p: "xiě", m: "write", bm: "লেখে"},
        {h: "得", p: "de", m: "marker", bm: ""},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "漂亮", p: "piàoliang", m: "beautiful", bm: "সুন্দর করে"}
    ]
},

// 727-729: 昨天 (zuótiān - Yesterday)
{
    bn: "গতকাল আমি সিনেমা দেখতে গিয়েছিলাম।",
    en: "I went to see a movie yesterday.",
    words: [
        {h: "昨天", p: "zuótiān", m: "yesterday", bm: "গতকাল"},
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "去", p: "qù", m: "go", bm: "গিয়েছিলাম"},
        {h: "看", p: "kàn", m: "watch", bm: "সিনেমা দেখতে"},
        {h: "电影", p: "diànyǐng", m: "movie", bm: ""}
    ]
},
{
    bn: "গতকাল আবহাওয়া খুব ভালো ছিল।",
    en: "The weather was very good yesterday.",
    words: [
        {h: "昨天", p: "zuótiān", m: "yesterday", bm: "গতকাল"},
        {h: "天气", p: "tiānqì", m: "weather", bm: "আবহাওয়া"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "好", p: "hǎo", m: "good", bm: "ভালো"},
        {h: "了", p: "le", m: "particle", bm: "ছিল"}
    ]
},
{
    bn: "আজকের কাজ গতকালই শেষ করেছি।",
    en: "I finished today's work yesterday.",
    words: [
        {h: "今天", p: "jīntiān", m: "today", bm: ""},
        {h: "的", p: "de", m: "'s", bm: ""},
        {h: "工作", p: "gōngzuò", m: "work", bm: "আজকের কাজ"},
        {h: "昨天", p: "zuótiān", m: "yesterday", bm: "গতকালই"},
        {h: "完成", p: "wánchéng", m: "finish", bm: "শেষ করেছি"}
    ]
},

// 730-732: 寿面 (shòumiàn - Birthday noodles)
{
    bn: "জন্মদিনে দীর্ঘায়ুর জন্য নুডলস খাওয়া হয়।",
    en: "Eat birthday noodles for long life.",
    words: [
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিনে"},
        {h: "吃", p: "chī", m: "eat", bm: "খাওয়া হয়"},
        {h: "寿面", p: "shòumiàn", m: "birthday noodles", bm: "দীর্ঘায়ুর জন্য নুডলস"}
    ]
},
{
    bn: "মা আমার জন্য জন্মদিনের নুডলস রান্না করেছেন।",
    en: "Mom cooked birthday noodles for me.",
    words: [
        {h: "妈妈", p: "māma", m: "mom", bm: "মা"},
        {h: "为", p: "wèi", m: "for", bm: ""},
        {h: "我", p: "wǒ", m: "me", bm: "আমার জন্য"},
        {h: "做", p: "zuò", m: "make/cook", bm: "রান্না করেছেন"},
        {h: "了", p: "le", m: "particle", bm: ""},
        {h: "寿面", p: "shòumiàn", m: "birthday noodles", bm: "জন্মদিনের নুডলস"}
    ]
},
{
    bn: "এই জন্মদিনের নুডলসগুলো খুব সুস্বাদু।",
    en: "These birthday noodles are very delicious.",
    words: [
        {h: "这个", p: "zhège", m: "this", bm: "এই"},
        {h: "寿面", p: "shòumiàn", m: "birthday noodles", bm: "জন্মদিনের নুডলসগুলো"},
        {h: "很", p: "hěn", m: "very", bm: "খুব"},
        {h: "好吃", p: "hǎochī", m: "delicious", bm: "সুস্বাদু"}
    ]
},
// 733-735: 一会儿 (yīhuìr - In a moment/A little while)
{
    bn: "আমি কিছুক্ষণ পর আসব।",
    en: "I will come in a little while.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "一会儿", p: "yīhuìr", m: "in a moment", bm: "কিছুক্ষণ পর"},
        {h: "来", p: "lái", m: "come", bm: "আসব"}
    ]
},
{
    bn: "দয়া করে কিছুক্ষণ অপেক্ষা করুন।",
    en: "Please wait for a moment.",
    words: [
        {h: "请", p: "qǐng", m: "please", bm: "দয়া করে"},
        {h: "等", p: "děng", m: "wait", bm: "অপেক্ষা করুন"},
        {h: "一会儿", p: "yīhuìr", m: "a moment", bm: "কিছুক্ষণ"}
    ]
},
{
    bn: "আমি একটু পরে কাজ শেষ করব।",
    en: "I will finish the work in a while.",
    words: [
        {h: "我", p: "wǒ", m: "I", bm: "আমি"},
        {h: "一会儿", p: "yīhuìr", m: "a while", bm: "একটু পরে"},
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ"},
        {h: "完成", p: "wánchéng", m: "finish", bm: "শেষ করব"}
    ]
},

// 736-738: 咱们 (zánmen - We/Us - inclusive of listener)
{
    bn: "চলো আমরা যাই।",
    en: "Let's go.",
    words: [
        {h: "咱们", p: "zánmen", m: "we", bm: "আমরা"},
        {h: "走", p: "zǒu", m: "go", bm: "চলো যাই"}
    ]
},
{
    bn: "আমরা কি বন্ধু?",
    en: "Are we friends?",
    words: [
        {h: "咱们", p: "zánmen", m: "we", bm: "আমরা"},
        {h: "是", p: "shì", m: "are", bm: "কি"},
        {h: "朋友", p: "péngyou", m: "friends", bm: "বন্ধু?"}
    ]
},
{
    bn: "আমাদের একসাথে কাজ করা উচিত।",
    en: "We should work together.",
    words: [
        {h: "咱们", p: "zánmen", m: "we", bm: "আমাদের"},
        {h: "应该", p: "yīnggāi", m: "should", bm: "উচিত"},
        {h: "一起", p: "yìqǐ", m: "together", bm: "একসাথে"},
        {h: "工作", p: "gōngzuò", m: "work", bm: "কাজ করা"}
    ]
},

// 739-741: 干杯 (gānbēi - Cheers/Toast)
{
    bn: "চলুন পান করি! (চিয়ার্স)",
    en: "Cheers!",
    words: [
        {h: "干杯", p: "gānbēi", m: "cheers", bm: "চলুন পান করি!"}
    ]
},
{
    bn: "বন্ধুর জন্মদিনের জন্য চলুন পান করি।",
    en: "Let's toast to a friend's birthday.",
    words: [
        {h: "为", p: "wèi", m: "for", bm: ""},
        {h: "朋友", p: "péngyou", m: "friend", bm: "বন্ধুর"},
        {h: "生日", p: "shēngrì", m: "birthday", bm: "জন্মদিনের জন্য"},
        {h: "干杯", p: "gānbēi", m: "cheers", bm: "চলুন পান করি"}
    ]
},
{
    bn: "সবাই মিলে চলুন পান করি।",
    en: "Let's all cheer together.",
    words: [
        {h: "大家", p: "dàjiā", m: "everyone", bm: "সবাই"},
        {h: "一起", p: "yìqǐ", m: "together", bm: "মিলে"},
        {h: "干杯", p: "gānbēi", m: "cheers", bm: "চলুন পান করি"}
    ]
},




];