const SINGLE_CHAR_NORMALIZATION_MAP: Record<string, string> = {
    '𝗌': 's', '𝘴': 's', '𝙨': 's', '𝚜': 's', '𝐬': 's', '𝑠': 's', '𝒔': 's', '𝓈': 's', '𝔰': 's', '𝖘': 's', '𝕤': 's',
    'ｓ': 's', 'ş': 's', 'ⓢ': 's', '⒮': 's', '🅢': 's', '🆂': 's', '🅂': 's', '𝑺': 's', 'ſ': 's', '$': 's', '5': 's', // ſ:s 유지, š, ś, ŝ, ṣ, ṡ, ș, ṥ, ṧ, ṩ는 s 섹션에만 있었음

    '𝖾': 'e', '𝘦': 'e', '𝙚': 'e', '𝚎': 'e', '𝐞': 'e', '𝑒': 'e', '𝒆': 'e', 'ℯ': 'e', '𝓮': 'e', '𝔢': 'e', '𝖊': 'e', '𝕖': 'e',
    'ｅ': 'e', 'ė': 'e', 'ⓔ': 'e', '⒠': 'e', '🅔': 'e', '🅴': 'e', '🄴': 'e', 'є': 'e', 'ê': 'e', 'ë': 'e', 'é': 'e', 'è': 'e',
    'ē': 'e', 'ĕ': 'e', 'ě': 'e', 'ę': 'e', 'ẹ': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ế': 'e', 'ề': 'e', 'ệ': 'e', 'ễ': 'e', 'ể': 'e',
    '3': 'e', '€': 'e',

    '𝗑': 'x', '𝘹': 'x', '𝙭': 'x', '𝚡': 'x', '𝐱': 'x', '𝑥': 'x', '𝒙': 'x', '𝓍': 'x', '𝔁': 'x', '𝔵': 'x', '𝖝': 'x', '𝕩': 'x',
    'ｘ': 'x', 'ⓧ': 'x', '⒳': 'x', '🅧': 'x', '🆇': 'x', '🅇': 'x', '×': 'x', '✕': 'x', '✖': 'x', '❌': 'x', '⨯': 'x',
    '⚔': 'x', '*': 'x', '✗': 'x', '✘': 'x',

    'ų': 'u', 'ü': 'u', 'ú': 'u', 'ù': 'u', 'û': 'u', 'ũ': 'u', 'ū': 'u', 'ŭ': 'u', 'ů': 'u', 'ű': 'u', 'ụ': 'u', 'ư': 'u',
    'ç': 'c', 'ć': 'c', 'ĉ': 'c', 'č': 'c', 'ċ': 'c', '¢': 'c', '©': 'c', 'ḉ': 'c',
    'Ｆ': 'F', 'Ḟ': 'F', 'Ƒ': 'F', 'ℱ': 'F', 'Ꞙ': 'F', 'Ꝼ': 'F',
    'Ｋ': 'K', 'Ḱ': 'K', 'Ǩ': 'K', 'Ḳ': 'K', 'Ḵ': 'K', 'Ⱪ': 'K', 'Ꝁ': 'K',
    'Ｃ': 'C', 'Ć': 'C', 'Ĉ': 'C', 'Č': 'C', 'Ċ': 'C', 'Ç': 'C', 'Ḉ': 'C',
    'Ｕ': 'U', 'Ú': 'U', 'Ù': 'U', 'Û': 'U', 'Ũ': 'U', 'Ū': 'U', 'Ŭ': 'U', 'Ů': 'U', 'Ű': 'U', 'Ụ': 'U',

    'ㅗ': 'ㅗ', '┻': 'ㅗ', '┴': 'ㅗ', '┹': 'ㅗ', '⊥': 'ㅗ', '†': 'ㅗ', '⟂': 'ㅗ', '╨': 'ㅗ', '╧': 'ㅗ', '╥': 'ㅗ',
    '人': 'ㅅ', '∧': 'ㅅ', '㉦': 'ㅅ', 'ᐲ': 'ㅅ', 'Λ': 'ㅅ', '⩘': 'ㅅ', '⋀': 'ㅅ', '⩚': 'ㅅ',
    '甘': 'ㅂ', '廿': 'ㅂ', 'ᗨ': 'ㅂ', 'ᗐ': 'ㅂ', 'ᗕ': 'ㅂ', '田': 'ㅂ', '口': 'ㅂ', '日': 'ㅂ', '目': 'ㅂ', '囗': 'ㅂ',
    '己': 'ㄹ', '乙': 'ㄹ', '已': 'ㄹ', '巳': 'ㄹ', '匚': 'ㄷ',
    '卜': 'ㅏ', '/': 'ㅏ', '⼃': 'ㅏ', '⼁': 'ㅏ', '⼂': 'ㅏ', 'r': 'ㅏ', 'F': 'ㅏ',
    'ㅣ': 'ㅣ', '¦': 'ㅣ', '｜': 'ㅣ', '￤': 'ㅣ', 'І': 'ㅣ', 'Ӏ': 'ㅣ', '1': 'ㅣ', '|': 'ㅣ', 'l': 'ㅣ', '!': 'ㅣ', 'I': 'ㅣ', // 1, |, l, !, I 모두 ㅣ로 매핑
    'H': 'ㅐ', 'ㅖ': 'ㅐ', 'ㅒ': 'ㅐ', 'Н': 'ㅐ', 'Ⲏ': 'ㅐ', 'ℍ': 'ㅐ',
    '🐦': '새', '🐔': '새', '🦅': '새', '🦉': '새', '🦆': '새', '🦜': '새', '🦤': '새', '🦢': '새', '🕊': '새',
    '🐕': '개', '🐶': '개', '🐺': '개',
    '丕': '조', '朝': '조', '則': '조', '兆': '조', '組': '조', '早': '조', '鳥': '조', '潮': '조', '照': '조',
    '0': 'ㅇ', 'O': 'ㅇ', 'o': 'ㅇ', '◯': 'ㅇ', '⭕': 'ㅇ', '○': 'ㅇ', '●': 'ㅇ', '◎': 'ㅇ', '◉': 'ㅇ', '◌': 'ㅇ', // o:ㅇ 유지

    'a': 'a', '@': 'a', '4': 'a', 'α': 'a', 'ä': 'a', 'å': 'a', 'ã': 'a', 'ā': 'a', 'ȧ': 'a', 'ǎ': 'a',
    'b': 'b', '8': 'b', '6': 'b', 'ƃ': 'b', 'ɓ': 'b', 'Ƅ': 'b', 'ℬ': 'b', 'ᖯ': 'b', 'ᑲ': 'b',
    'd': 'd', 'ḋ': 'd', 'ḍ': 'd', 'ᑯ': 'd', 'ᗞ': 'd', 'ᗪ': 'd', 'ᖙ': 'd', 'ⅆ': 'd', 'ɗ': 'd',
    'f': 'f', 'ƒ': 'f', 'ḟ': 'f', 'ⅎ': 'f', 'ᶂ': 'f', 'ꜰ': 'f', 'ꟻ': 'f',
    'g': 'g', 'ǥ': 'g', 'ɡ': 'g', 'ġ': 'g', 'ģ': 'g', 'ĝ': 'g', 'ǧ': 'g', '9': 'g', 
    'h': 'h', 'ĥ': 'h', 'ħ': 'h', 'ƕ': 'h', 'ḥ': 'h', 'ḫ': 'ḫ', 'ⱨ': 'h', 'ꜧ': 'h',
    'i': 'i', 'ī': 'i', 'ĭ': 'i', 'ǐ': 'i', 'į': 'i',
    'j': 'j', 'ĵ': 'j', 'ǰ': 'j', 'ȷ': 'j', 'ɉ': 'j', 'ⱼ': 'j', 'ʝ': 'j', 'ɟ': 'j',
    'k': 'k', 'ķ': 'k', 'ƙ': 'k', 'ǩ': 'k', 'ḱ': 'k', 'ḳ': 'k', 'ḵ': 'k', 'ⱪ': 'k',
    'ĺ': 'l', 'ļ': 'l', 'ľ': 'l', 'ŀ': 'l', 'ł': 'l',
    'm': 'm', 'ɱ': 'm', 'ḿ': 'm', 'ṁ': 'm', 'ṃ': 'm', 'ⱥ': 'm', 'ᵯ': 'm', 'ᴍ': 'm',
    'n': 'n', 'ń': 'n', 'ň': 'n', 'ñ': 'n', 'ņ': 'n', 'ṅ': 'n', 'ṇ': 'n', 'ṉ': 'n',
    'p': 'p', 'ṕ': 'p', 'ṗ': 'p', 'ƥ': 'p', 'ᵽ': 'p', 'ᵱ': 'p', 'ᴘ': 'p', 'ᑭ': 'p',
    'q': 'q', 'ʠ': 'q', 'ɋ': 'q', 'ȹ': 'q', 'ⱊ': 'q', 'ⱍ': 'q', 'ꝗ': 'q',
    'ŕ': 'r', 'ř': 'r', 'ŗ': 'r', 'ṙ': 'r', 'ṛ': 'r', 'ṝ': 'r', 'ṟ': 'r', 
    't': 't', '7': 't', '+': 't', 'ť': 't', 'ţ': 't', 'ŧ': 't', 'ț': 't', 'ṫ': 't',
    'v': 'v', 'ṿ': 'v', 'ⱴ': 'v', 'ᵥ': 'v', 'ᵛ': 'v', '√': 'v', 'ᐱ': 'v', '∨': 'v',
    'w': 'w', 'ẁ': 'w', 'ẃ': 'w', 'ẅ': 'w', 'ŵ': 'w', 'ẇ': 'w', 'ẉ': 'w', 'ⱳ': 'w',
    'y': 'y', 'ý': 'y', 'ỳ': 'y', 'ŷ': 'y', 'ÿ': 'y', 'ȳ': 'y', 'ẏ': 'y', 'ỵ': 'y',
    'z': 'z', '2': 'z', 'ź': 'z', 'ẑ': 'z', 'ž': 'z', 'ż': 'z', 'ẓ': 'z', 'ẕ': 'z',
};

const MULTI_CHAR_REPLACEMENTS: Record<string, string> = {
    '_ㅣ_': 'ㅗ', '_/_': 'ㅗ', '_ |\_': 'ㅗ', '_|\_': 'ㅗ', '_ㅣ\\_': 'ㅗ', '_I_': 'ㅗ',
    '／＼': 'ㅅ', '/＼': 'ㅅ',
    '77': 'ㄲ',
    '刀卜': '까',
    '₨': 'rs',
    'ㅇl=스': '섹스',
    'ㅇㅣ-ㅣ': '애',
    'lㅣ': '니',
    'ㅁㅣ': '미',
    '丕刀卜己卜人丨廿卜己卜口卜': '조까씹쌔끼',
};

const FALSE_POSITIVE_PATTERNS_MINOR: string[] = [
    '거미', '친구', '개미', '이미친', '미친증', '동그라미',
    '뒤져봐야', '뒤질뻔', '뒤져보다', '뒤져보는', '뒤져보고', '뒤져간다', '뒤져서',
    '뒤져본', '뒤져봄', '뒤져볼',
];

const allFalsePositivePatterns: string[] = [
    ...FALSE_POSITIVE_PATTERNS_MINOR,
];
allFalsePositivePatterns.sort((a, b) => b.length - a.length);

const ALL_FP_REGEX: RegExp = new RegExp(allFalsePositivePatterns.map(escapeRegex).join('|'), 'gi');

const MINOR_PROFANITY_PATTERNS: string[] = [
    'ㅁㅊ', 'ㅁ친', 'ㅁ쳤', 'aㅣ친', 'me친', '미ㅊ', 'di친',
    '미친놈', '미친새끼',
    '꼽냐', '꼽ni', '꼽나',
    '뒤져', '뒈져', '뒈진', '뒈질', '디져라', '디진다', '디질래', '뒤질',
];


const allProfanityPatterns: string[] = [
    ...MINOR_PROFANITY_PATTERNS,
];

allProfanityPatterns.sort((a, b) => b.length - a.length);

function escapeRegex(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const singleCharMapRegex: RegExp = new RegExp(Object.keys(SINGLE_CHAR_NORMALIZATION_MAP).map(key => escapeRegex(key)).join('|'), 'gi');

const multiCharReplacementRegex: RegExp = new RegExp(
    Object.keys(MULTI_CHAR_REPLACEMENTS)
        .map(escapeRegex)
        .sort((a, b) => b.length - a.length)
        .join('|'),
    'gi'
);

export function minor(text: string | any): boolean {
    if (typeof text !== 'string') {
        if (text === null || text === undefined) {
             throw new Error('korcen: 확인할 텍스트를 입력해 주세요');
        }
        throw new Error('korcen: String 타입만 입력 가능합니다');
    }
    if (!text.trim()) {
        throw new Error('korcen: 확인할 텍스트를 입력해 주세요');
    }

    let processedText: string = text.toLowerCase().replace(/ /gi, '');

    processedText = processedText.replace(singleCharMapRegex, (match: string): string => {
        const lowerMatch = match.toLowerCase();
        for (const key in SINGLE_CHAR_NORMALIZATION_MAP) {
            if (key.toLowerCase() === lowerMatch) {
                return SINGLE_CHAR_NORMALIZATION_MAP[key];
            }
        }
        return match;
    });

    processedText = processedText.replace(multiCharReplacementRegex, (match: string): string => {
        const lowerMatch = match.toLowerCase();
        for (const key in MULTI_CHAR_REPLACEMENTS) {
            if (key.toLowerCase() === lowerMatch) {
                return MULTI_CHAR_REPLACEMENTS[key];
            }
        }
        return match;
    });

    processedText = processedText.replace(ALL_FP_REGEX, '');

    for (const pattern of allProfanityPatterns) {
        if (processedText.includes(pattern.toLowerCase())) {
            return true;
        }
    }

    return false;
}
