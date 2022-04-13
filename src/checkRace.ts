export function race(text: string|any): boolean {
    const newtext = text.toLowerCase()
    text = newtext.replace(/[^가-힣]/gi, '')
    const nigger = ["깜둥이", "흑형","조센진","짱개","짱깨","짱께","짱게","쪽바리","쪽파리","빨갱이",]
    for (const i of nigger) {
        if (text.includes(i)) {
            return true;
        }
    }

    return false;
}
