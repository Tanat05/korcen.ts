export function sexual(text: string | any): boolean {
    if (!text) throw new Error('Korcen: 확인할 텍스트를 입력해 주세요');
    if (typeof text !== 'string') throw new Error('Korean: String 타입만 입력 가능합니다');
    const newtext = text.toLowerCase()

    const pussy = ["ⓑⓞⓩⓘ", "bozi", "보ㅈㅣ"]
    for (const i of pussy) {
        if (newtext.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/보g/gi, "보지")
    text = text.replace(/보지도못/gi, '')
    text = text.replace(/보지도않/gi, '')
    text = text.replace(/켜보지/gi, '')
    text = text.replace(/보지맙/gi, '')
    text = text.replace(/초보지/gi, '')
    text = text.replace(/로보지/gi, '')
    text = text.replace(/홍보지/gi, '')
    text = text.replace(/서보지/gi, '')
    text = text.replace(/보지금/gi, '')
    text = text.replace(/정지금/gi, '')
    text = text.replace(/걸보지/gi, '')
    text = text.replace(/을보지/gi, '')
    text = text.replace(/나보지/gi, '')
    text = text.replace(/면접보지/gi, '')
    text = text.replace(/영화보지/gi, '')
    text = text.replace(/애니보지/gi, '')
    text = text.replace(/만화보지/gi, '')
    text = text.replace(/사진보지/gi, '')
    text = text.replace(/그림보지/gi, '')
    text = text.replace(/보지는/gi, '')
    text = text.replace(/보지지/gi, '')
    text = text.replace(/못보지/gi, '')
    text = text.replace(/보지않/gi, '')
    text = text.replace(/보지마/gi, '')
    text = text.replace(/보지말/gi, '')
    text = text.replace(/안보지/gi, '')
    text = text.replace(/보지도마/gi, '')
    text = text.replace(/보지는않/gi, '')
    text = text.replace(/정보/gi, '')
    text = text.replace(/지팡이/gi, '')
    text = text.replace(/행보/gi, '')
    text = text.replace(/바보지/gi, '')
    text = text.replace(/인가보지/gi, '')
    text = text.replace(/오/gi, '')
    const pussy1 = ["보지", "버지물", "버짓물", "보짓", "ⓑⓞⓩⓘ",
    "bozi", "개보즤", "개보지", "버지벌렁벌렁", "보짖", "뵤즤", "봊이"]
    for (const i of pussy1) {
        if (text.includes(i)) {
            return true;
        }
    }

    const dicks = ["ja지"]
    for (const i of dicks) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const onahole1 = ["ㅈㅈ빨", "자ㅈ", "ㅈ지빨"]
    for (const i of onahole1) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/남자지/gi, '')
    text = text.replace(/여자지/gi, '')
    text = text.replace(/감자지/gi, '')
    text = text.replace(/왁자지/gi, '')
    text = text.replace(/자지금/gi, '')
    text = text.replace(/자지러/gi, '')
    text = text.replace(/개발자/gi, '')
    text = text.replace(/관리자/gi, '')
    text = text.replace(/타자지/gi, '')
    text = text.replace(/혼자/gi, '')
    text = text.replace(/못자지/gi, '')
    text = text.replace(/자지원/gi, '')
    text = text.replace(/사용자/gi, '')
    text = text.replace(/자지않/gi, '')
    text = text.replace(/자지마/gi, '')
    text = text.replace(/자지말/gi, '')
    text = text.replace(/지원자/gi, '')
    text = text.replace(/안자지/gi, '')
    text = text.replace(/부자지/gi, '')
    text = text.replace(/자지도마/gi, '')
    text = text.replace(/자지는않/gi, '')
    text = text.replace(/혜자지/gi, '')
    text = text.replace(/아/gi, '')
    const dicks1 = ["자지","자짓","잦이"]
    for (const i of dicks1) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/cess/gi, '')
    text = text.replace(/exit/gi, '')
    const sex = ["sex", "s스", "x스", "se스", "se스", "s스", "ㅅㅅ", "s하고e싶다x", "ㅅㅔㅅㄱ"]
    for (const i of sex) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/\^/gi, 'ㅅ')
    text = text.replace(/sex/gi, '섹스')
    text = text.replace(/엑/gi, '')
    text = text.replace(/[^ㄱ-힣]/gi, '')
    const sex1 = ["ㅅㅔㄱ스", "섹ㅅ", "ㅅ스", "세ㄱㅅ", "ㅅㅔㄱㅅ"]
    for (const i of sex1) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/야스오/gi, '')
    text = text.replace(/크시야/gi, '')
    text = text.replace(/카구야/gi, '')
    text = text.replace(/스파이/gi, '')
    text = text.replace(/말이야/gi, '')
    text = text.replace(/스티브/gi, '')
    text = text.replace(/스쿼드/gi, '')
    const sex2 = ["섹스", "섻", "쉑스", "섿스", "섹그", "야스", "색스", "셱스", "섁스", "세엑스", "썩스","섹수","섹파","섹하자","쉐스","쉑스","쉐엑스","색수","세엑수우","섹하고",
    "섹하구","섹하자","섹하장","섹하쟈","섹한번"]
    for (const i of sex2) {
        if (text.includes(i)) {
            return true;
        }
    }

    const dick3 = ["꼬3", "꼬툭튀", "꼬톡튀"]
    for (const i of dick3) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const sex3 = ["씹하다"]
    for (const i of sex3) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const fireegg = ["불알", "부랄", "뽕알", "뿅알", "뿌랄", "뿔알","개부달","개부랄","개부러럴","개부럴","개부뢀","개부알","개불알","똘추","똥구멍"]
    for (const i of fireegg) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const onahole2 = ["오나홍", "오나홀", "ㅇㄴ홀","텐가","바이브레이터","오ㄴ홀","ㅇ나홀"]
    for (const i of onahole2) {
        if (text.includes(i)) {
            return true;
        }
    }


    text = newtext.replace(/[^가-힣]/gi, '')
    const onahole3 = ["매춘부","성노예"]
    for (const i of onahole3) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const onahole4 = ["자궁문신"]
    for (const i of onahole4) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const onahole5 = ["모유물","로리물","근친상간","룸섹스","원조교재","속박플레이","야플","야외플레이"]
    for (const i of onahole5) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const belittling = ["딸딸이","질싸","안에사정","자위남","자위녀","폰섹","포르노","폰세엑","폰쉑","폰쎅","질내사정","그룹섹","남창","男色","누워라이년아",
    "누웠냐씨방새","다리벌려","대주까","대줄년","뒤로너어줘","딸따뤼","딸쳐","떡쳐라","막대쑤셔줘","막대핥아줘","먹고보니내딸","먹고보니누나","먹고보니딸",
    "먹고보니똥개","먹고보니엄마","먹고보니응아","먹고보니재수","먹고보니처제","먹고보니형수","몸뚱이줄께","몸안에사정","밖에다쌀께","박고빼고",
    "배위에싸죠","g스팟","지스팟","크리토리스","클리토리스","페니스","애널","젖까","젖가튼","젖나","젖만","ja위","자위","고자새끼","고츄","꺼추","께세","꼬추"]
    for (const i of belittling) {
        if (text.includes(i)) {
            return true;
        }
    }

    return false;
}
