export function belittle(text: string | any): boolean {
    if (!text) throw new Error('Korean: 확인할 텍스트를 입력해 주세요');
    if (typeof text !== 'string') throw new Error('Korcen: String 타입만 입력 가능합니다');
    const newtext = text.toLowerCase()
    
    text = newtext.replace(/뇬/gi, '련')
    text = text.replace(/놈/gi, '련')
    text = text.replace(/넘/gi, '련')
    const belittling2 = ["10련"]
    for (const i of belittling2) {
        if (text.includes(i)) {
            return true;
        }
    }
    
    text = newtext.replace(/련/gi, '년')
    text = text.replace(/뇬/gi, '년')
    text = text.replace(/놈/gi, '년')
    text = text.replace(/넘/gi, '년')
    text = text.replace(/러운지/gi, '')
    text = text.replace(/려운지/gi, '')
    text = text.replace(/무서운지/gi, '')
    text = text.replace(/[^가-힣]/gi, '')
    const belittling3 = ["따까리", "장애년", "찐따년", "싸가지", "창년", "썅년", "버러지", "고아년", "고아년", "개간년", "종간나", "도구년", "걸래년", "썅년", "씹년",
    "창녀", "머저리", "씹쓰래기", "씹쓰레기", "씹장생", "씹자식", "운지", "급식충", "틀딱충", "조센징", "매국노", "똥꼬충", "진지충", "듣보잡",
    "한남충","정신병자","중생아","돌팔이","김치녀","폰팔이","틀딱년","같은년","개돼중","쓰글년","썩을년","썩글년","씹할","거지새끼","거지쉐뀌",
    "거지쉑이","거지쎄끼","거지쒜리","걸래가튼","걸래넘","걸래년","걸래놈","걸레가튼","걸레년","그지새끼","그지새키","그지색","기집년","까진년",
    "깔보","난잡년","빡대가리","더러운년","돌아이","또라이"]
    for (const i of belittling3) {
        if (text.includes(i)) {
            return true;
        }
    }

    return false;
}
