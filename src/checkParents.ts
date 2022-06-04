export function parents(text: string | any): boolean {
    if (!text) throw new Error('Korcen: 확인할 텍스트를 입력해 주세요');
    if (typeof text !== 'string') throw new Error('Korean: String 타입만 입력 가능합니다');
    const newtext = text.toLowerCase()

    const nigger2 = ["ㄴ1ㄱ", "ㄴ1ㅁ", "느금ㅁ", "ㄴㄱ마", "ㄴㄱ빠", "ㄴ금빠", "ㅇH미", "ㄴ1에미"]
    for (const i of nigger2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const your = ["ㄴㄱㅁ", "ㄴ금마", "느금ㅁ", "ㄴㄱ마", "ㄴㄱ빠", "ㄴ금빠", "ㄴ미", "느금", "누굼마"]
    for (const i of your) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    const your2 = ["느금마", "느그엄마", "늑엄마", "늑금마", "느그애미", "넉엄마", "느그부모", "느그애비", "느금빠", "느그메", "느그빠", "니미씨", "니미씹",
        "느그마", "니엄마", "엄창", "엠창", "니미럴", "누굼마", "느금", "내미랄", "내미럴", "엄마없", "아빠없"]
    for (const i of your2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/도/gi, '')
    const motherfuck = ["니애미", "노애미", "노앰", "앰뒤련",
        "아버지도없는게", "애미도없는게", "애비도없는게", "어머니도없는게", "니애비", "노애비", "애미없", "애비없", "애미뒤", "애비뒤", "니아빠", "너에미", "눼기미", "뉘귀미"
        , "뉘기미", "뉘김이", "뉘뮈", "뉘미랄", "뉘미럴", "뉘미롤", "뉘밀얼", "뉘밀할", "뉘어미", "뉘에미", "느검마", "늬긔미", "늬기미", "니기미", "니믜창", "니미랄", "니미럴"
        , "니미쒸블", "니미씨펄넘", "니미좃", "니밀할", "니부랑", "니뽕좃"]
    for (const i of motherfuck) {
        if (text.includes(i)) {
            return true;
        }
    }


    return false;
}
