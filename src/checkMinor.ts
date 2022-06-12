export function minor(text: string | any): boolean {
    if (!text) throw new Error('Korcen: 확인할 텍스트를 입력해 주세요');
    if (typeof text !== 'string') throw new Error('Korean: String 타입만 입력 가능합니다');
    const newtext = text.toLowerCase()

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const damnit = ["ㅁㅊ", "ㅁ친", "ㅁ쳤","aㅣ친","me친","미ㅊ"]
    for (const i of damnit) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/이미친/gi, '')
    text = text.replace(/미친증/gi, '')
    text = text.replace(/거미/gi, '')
    text = text.replace(/친구/gi, '')
    const damnit2 = ["미친", "미쳤","무친놈","뮈칀","뮈친"]
    for (const i of damnit2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const picking = ["꼽냐", "꼽니", "꼽나"]
    for (const i of picking) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/그만 졸라/gi, '')
    text = text.replace(/졸라서/gi, '')
    text = text.replace(/졸라맨/gi, '')
    const picking2 = ["ㅈㄴ","ㅈ나","존ㄴ","존맛","존나","존내","쫀나","존네","졸라"]
    for (const i of picking2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const picking3 = ["뒤져","뒈져","뒈진","뒈질","디져라","디진다","디질래"]
    for (const i of picking3) {
        if (text.includes(i)) {
            return true;
        }
    }

    return false;
}
