export function minor(text: string|any): boolean {
    if(!text) throw new Error('Korean: 확인할 텍스트를 입력해 주세요');
    if(typeof text !== 'string') throw new Error('Korean: String 타입만 입력 가능합니다');
    const newtext = text.toLowerCase()
    text = newtext.replace(/[^가-힣]/gi, '')
        const  sonofagun = ["개같", "개가튼", "개쉑", "개스키", "개세끼", "개색히", "개가뇬", "개새기", "개쌔기", "개쌔끼", "쌖", "쎆", "새긔", "개소리", "개년", "개소리","개드립","개샊","씹색","십새","Sib새"]
        for (const i of sonofagun) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const damnit = ["ㅁㅊ", "ㅁ친", "ㅁ쳤"]
    for (const i of damnit) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/이미친/gi, '')
    text = text.replace(/미친증/gi, '')
    const damnit2 = ["미친", "미쳤","me친","aㅣ친"]
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

    return false;
}
