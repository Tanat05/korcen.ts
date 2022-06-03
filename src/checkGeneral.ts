export function general(text: string|any): boolean {
    if(!text) throw new Error('Korcen: 확인할 텍스트를 입력해 주세요');
    if(typeof text !== 'string') throw new Error('Korean: String 타입만 입력 가능합니다');
    const newtext = text.toLowerCase()
    text = newtext.replace(/ /gi, '')
    text = text.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/ㅗ먹어/gi, 'ㅗ')
    text = text.replace(/오ㅗㅗ/gi, 'ㅗ')
    text = text.replace(/오ㅗ/gi, 'ㅗ')
    text = text.replace(/로ㅗㅗ/gi, 'ㅗ')
    text = text.replace(/로ㅗ/gi, 'ㅗ')
    text = text.replace(/호ㅗㅗ/gi, 'ㅗ')
    text = text.replace(/호ㅗ/gi, 'ㅗ')
    text = text.replace(/옹ㅗㅗ/gi, 'ㅗ')
    text = text.replace(/옹ㅗ/gi, 'ㅗ')
    text = text.replace(/롤ㅗㅗ/gi, 'ㅗ')
    text = text.replace(/롤ㅗ/gi, 'ㅗ')
    text = text.replace(/요ㅗ/gi, 'ㅗ')
    text = text.replace(/하ㅗ/gi, 'ㅗ')
    text = text.replace(/우ㅗ/gi, 'ㅗ')
    text = text.replace(/ㅇㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗㅜ/gi, 'ㅗ')
    let fuckyou = ['ㅗ', '┻', '┴', '┹', '_ㅣ_', '_l_', '_/_', '⊥', '_ |\_', '_|\_', '_ㅣ\_', '_I_']
    for (const i of fuckyou) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/\^/gi, 'ㅅ')
    text = text.replace(/人/gi, 'ㅅ')
    text = text.replace(/丨/gi, 'ㅣ')
    text = text.replace(/甘/gi, 'ㅂ')
    text = text.replace(/卜/gi, 'ㅏ')
    text = text.replace(/1/gi, 'ㅣ')
    text = text.replace(/l/gi, 'ㅣ')
    text = text.replace(/bal/gi, '발')
    text = text.replace(/bar/gi, '발')
    text = text.replace(/r/gi, 'ㅏ')
    text = text.replace(/ᐲ/gi, 'ㅅ')
    text = text.replace(/ᗨ/gi, 'ㅂ')
    text = text.replace(/si/gi, '시')
    text = text.replace(/tl/gi, '시')
    text = text.replace(/qkf/gi, '발')
    text = text.replace(/qk/gi, '바')
    text = text.replace(/[^ㄱ-힣]/gi, '')
    let fuck = ["시ㅂ", "시ㅏㄹ", "씨ㅂ", "씨ㅏㄹ", "ㅣ발", "ㅆ발", "ㅅ발", "ㅅㅂ", "ㅆㅂ", "ㅆ바", "ㅅ바", "시ㅂㅏ", "ㅅㅂㅏ", "시ㅏㄹ", "씨ㅏㄹ", "ㅅ불", "ㅆ불","ㅅ쁠", "ㅆ뿔", "씨8", "sipal","ㅅ ㅣ akwkksw바알","샤빨","쌰뺠","스벌","개존맛","TQ","tq","rotoRl","개좇돼","시방","tlqkf","w같은","신발련","뷰우웅신","좇","^^ㅣ벌","^^벌","씨벌","18아","tㅂ","siba","tq","qt","ㅆㅍ","Ribal","Libal"]
    for (const i of fuck) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = text.replace(/[^가-힣]/gi, '')
    text = text.replace(/시발택시/gi, '')
    text = text.replace(/시발자동차/gi, '')
    text = text.replace(/정치발/gi, '')
    text = text.replace(/시발점/gi, '')
    text = text.replace(/시발유/gi, '')
    text = text.replace(/시발역/gi, '')
    text = text.replace(/시발수뢰/gi, '')
    text = text.replace(/아저씨바/gi, '')
    text = text.replace(/시바견/gi, '')
    text = text.replace(/시바/gi, '')
    text = text.replace(/이/gi, '')
    fuck = ["시발", "씨발", "시봘", "씨봘", "씨바", "시바", "샤발", "씌발", "씹발", "시벌", "시팔", "싯팔", "씨빨", "씨랼", "씨파", "띠발", "띡발", "띸발","싸발", "십발", "슈발","야발", "씨불", "씨랄", "쉬발", "쓰발", "쓔발", "쌰발", "쉬발", "쒸발", "씨팔", "씨밝", "씨밯", "쑤발", "치발", "샤발", "발씨", "리발", "씨볼","찌발", "씨비바라랄", "시바랄", "씨바라","슈벌","씹할","씹하다","십새","Sival","Sibal","시불","시부렝","시부랭"]
    for (const i of fuck) {
        if (text.includes(i)) {
            return true;
        }
    }
  
    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/근/gi, 'ㄹ')
    const bullshit1 = ["ㅈㄹ", "지ㄹ", "ㅈ랄", "ㅈ라"]
    for (const i of bullshit1) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, 'ㄹ')
    text = text.replace(/지랄탄/gi, '')
    text = text.replace(/지랄버릇/gi, '')
    text = text.replace(/이/gi, '')
    const bullshit2 = ["지랄", "찌랄", "지럴", "지롤", "랄지"]
    for (const i of bullshit2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/빙/gi, '병')
    text = text.replace(/븅/gi, '병')
    text = text.replace(/등/gi, '병')
    text = text.replace(/붱/gi, '병')
    text = text.replace(/뵈/gi, '병')
    text = text.replace(/뼝/gi, '병')
    text = text.replace(/싄/gi, '신')
    text = text.replace(/씬/gi, '신')
    const asshole = ["ㅄ", "ㅂㅅ", "병ㅅ", "ㅂ신", "ㅕㅇ신"]
    for (const i of asshole) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/영/gi, '')
    text = text.replace(/엉/gi, '')
    const asshole2 = ["병신", "병딱", "벼신"]
    for (const i of asshole2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/전염병/gi, '')
    text = text.replace(/감염병/gi, '')
    const motherfucker = ["염병", "엠병", "옘병", "염병", "얨병"]
    for (const i of motherfucker) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/왜꺼져/gi, '')
    text = text.replace(/꺼져요/gi, '')
    text = text.replace(/이꺼져/gi, '')
    text = text.replace(/꺼져서/gi, '')
    text = text.replace(/내꺼져/gi, '')
    text = text.replace(/제꺼져/gi, '')
    text = text.replace(/꺼져있/gi, '')
    if (text.includes("꺼져")){
        return true;
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const shit = ["엿같", "엿가튼", "엿먹어"]
    for (const i of shit) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/\^/gi, 'ㅅ')
    text = text.replace(/H/gi, 'ㅐ')
    text = text.replace(/[^가-힣]/gi, '')
    const sonofbitch = ["ㅅㄲ", "ㅅ끼", "ㅆ끼", "쎆", "쌖","쌔꺄","새꺄","씹색"]
    for (const i of sonofbitch) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/의새끼/gi, '')
    text = text.replace(/애/gi, '')
    text = text.replace(/에/gi, '')
    text = text.replace(/루세끼/gi, '')
    text = text.replace(/시세끼/gi, '')
    text = text.replace(/세끼먹/gi, '')
    const sonofbitch2 = ["새끼", "쉐리", "쌔끼", "썌끼", "쎼끼", "쌬끼", "샠끼","애쌔끼","세끼","이시키"]
    for (const i of sonofbitch2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const dick = ["ㅈ같", "ㅈ망", "ㅈ까", "ㅈ경"]
    for (const i of dick) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    const dick2 = ["좆", "촟", "조까", "좈", "쫒", "졷", "좃"]
    for (const i of dick2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const damn = ["썅", "씨앙", "씨양"]
    for (const i of damn) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const whatthefuck = ["뻑유", "뻐킹", "뻐큐"]
    for (const i of whatthefuck) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
        const  sonofagun = ["개같", "개가튼", "개쉑", "개스키", "개세끼", "개색히", "개가뇬", "개새기", "개쌔기", "개쌔끼", "쌖", "쎆", "새긔", "개소리", "개년", "개소리","개드립","개샊","씹색","십새","Sib새"]
        for (const i of sonofagun) {
        if (text.includes(i)) {
            return true;
        }
    }

    return false;
}
