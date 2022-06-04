export function general(text: string | any): boolean {
    if (!text) throw new Error('Korcen: 확인할 텍스트를 입력해 주세요');
    if (typeof text !== 'string') throw new Error('Korean: String 타입만 입력 가능합니다');
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
    text = text.replace(/rㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗr/gi, 'ㅗ')
    text = text.replace(/sㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗs/gi, 'ㅗ')
    text = text.replace(/eㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗe/gi, 'ㅗ')
    text = text.replace(/fㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗf/gi, 'ㅗ')
    text = text.replace(/aㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗa/gi, 'ㅗ')
    text = text.replace(/qㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗq/gi, 'ㅗ')
    text = text.replace(/wㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗw/gi, 'ㅗ')
    text = text.replace(/dㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗd/gi, 'ㅗ')
    text = text.replace(/gㅗ/gi, 'ㅗ')
    text = text.replace(/ㅗg/gi, 'ㅗ')
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
    text = text.replace(/피시방/gi, '')
    text = text.replace(/피씨방/gi, '')
    text = text.replace(/[^ㄱ-힣]/gi, '')
    let fuck = ["18놈", "ㅅㅍ", "시ㅂ", "시ㅏㄹ", "씨ㅂ", "씨ㅏㄹ", "ㅣ발", "ㅆ발", "ㅅㅣㅂㅏ", "ㅆㅣ발", "ㅅ발", "ㅅㅂ", "ㅆㅂ", "ㅆ바", "tlbal", "ㅅ바", "시ㅂㅏ", "ㅅㅂㅏ", "시ㅏㄹ", "ㅅㅟ발", "씨ㅏㄹ", "ㅅ불", "ㅆ불", "ㅅ쁠", "ㅆ뿔", "tlba", "씨8", "tlbak", "tlpal", "tlbar", "sipal", "tlval", "시bal", "시bar", "시bak", "시pal", "시qk", "시val", "si바", "si발", "si불", "si빨", "si팔", "tl바", "tl발", "tl불", "tl빨", "tl팔", "10발련", "10발넘", "10발놈", "10발년", "ㅅ ㅣ akwkksw바알", "tlqkd", "샤빨", "18련", "쌰뺠", "si8", "스벌", "개존맛", "t발", "TQ", "tq", "rotoRl", "개좇돼", "18뇬", "시방", "tlqkf", "sibak", "w같은", "신발련", "뷰우웅신", "좇", "^^ㅣ벌", "^^벌", "씨벌", "18아", "tㅂ", "siba", "tq", "qt", "ㅆㅍ", "Ribal", "Libal"]
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
    text = text.replace(/일/gi, '')
    text = text.replace(/벌어/gi, '')
    text = text.replace(/시바이누/gi, '')
    text = text.replace(/시바스리갈/gi, '')
    text = text.replace(/시바산/gi, '')
    text = text.replace(/시바신/gi, '')
    text = text.replace(/오리발/gi, '')
    text = text.replace(/발끝/gi, '')
    text = text.replace(/다시바/gi, '')
    text = text.replace(/비슈누시바/gi, '')
    text = text.replace(/시바핫카이/gi, '')
    text = text.replace(/시바타이쥬/gi, '')
    text = text.replace(/데스티니시바/gi, '')
    text = text.replace(/시바루/gi, '')
    text = text.replace(/시바료타로/gi, '')
    text = text.replace(/시바라스시/gi, '')
    text = text.replace(/젤리/gi, '')
    text = text.replace(/발사/gi, '')
    text = text.replace(/크시/gi, '')
    text = text.replace(/크시야/gi, '')
    text = text.replace(/어찌/gi, '')
    text = text.replace(/발로란트/gi, '')
    text = text.replace(/무시발언/gi, '')
    text = text.replace(/의/gi, '')
    fuck = ["시발", "씨발", "시봘", "씨봘", "씨바", "시바", "샤발", "씌발", "씹발", "시벌", "시팔", "싯팔",
        "씨빨", "씨랼", "씨파", "띠발", "띡발", "띸발", "싸발", "십발", "슈발", "야발", "씨불", "씨랄",
        "쉬발", "쓰발", "쓔발", "쌰발", "쉬발", "쒸발", "씨팔", "씨밝", "씨밯", "쑤발", "치발", "샤발",
        "발씨", "리발", "씨볼", "찌발", "씨비바라랄", "시바랄", "씨바라", "쒸팔", "쉬팔", "씨밮", "쒸밮", "시밮",
        "씨삐라", "ㅆ삐라", "씨벌", "슈벌", "시불", "시부렝", "씨부렝", "시부랭", "씨부랭", "시부랭", "발놈시", "뛰발",
        "뛰봘", "뜨발", "뜨벌", "띄발", "씨바알", "샤빨", "샤발", "스벌", "쓰벌", "신발련", "신발년", "신발놈", "띠발", "띠바랄"]
    for (const i of fuck) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/련/gi, '놈')
    text = text.replace(/뇬/gi, '놈')
    text = text.replace(/놈/gi, '놈')
    text = text.replace(/넘/gi, '놈')
    const bullshit3 = ["18것", "18놈", "18럼", "18롬", "18새끼", "18세끼", "18세리", "18섹", "18쉑", "10쉑"]
    for (const i of bullshit3) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/근/gi, 'ㄹ')
    text = text.replace(/있지/gi, '')
    text = text.replace(/없지/gi, '')
    text = text.replace(/하지/gi, '')
    text = text.replace(/근/gi, 'ㄹ')
    text = text.replace(/ㄹㅇ/gi, '')
    const bullshit1 = ["ㅈㄹ", "지ㄹ", "ㅈ랄", "ㅈ라", "wlfkf", "g랄", "g럴", "g롤", "g뢀"]
    for (const i of bullshit1) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, 'ㄹ')
    text = text.replace(/지랄탄/gi, '')
    text = text.replace(/지랄버릇/gi, '')
    text = text.replace(/이/gi, '')
    const bullshit2 = ["지랄", "찌랄", "지럴", "지롤", "랄지", "쥐랄", "쮜랄", "지뢀", "띄랄"]
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
    text = text.replace(/우/gi, '')
    text = text.replace(/웅/gi, '')
    const asshole = ["ㅄ", "ㅂㅅ", "병ㅅ", "ㅂ신", "ㅕㅇ신", "ㅂㅇ신", "뷰신"]
    for (const i of asshole) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/영/gi, '')
    text = text.replace(/엉/gi, '')
    const asshole2 = ["병신", "병딱", "벼신", "붱신", "뼝신", "뿽신", "삥신", "병시니"]
    for (const i of asshole2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    text = newtext.replace(/"[ㅂㅁㅋㅈㄴㅌㄷㅇㅊㄱㄹㅍㅅㅎㅃㅉㄸㄲㅆㅠㅛㅗㅜㅕㅓㅡㅑㅏㅐㅣㅔㄺㄼㄽㅃㅉㄸㄲㅆㅀㄿㄾㅘㅚㅟㅝㅞㅢㅙ]/gi, '')
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
    if (text.includes("꺼져")) {
        return true;
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const shit = ["엿같", "엿가튼", "엿먹어"]
    for (const i of shit) {
        if (text.includes(i)) {
            return true;
        }
    }
    const shit2 = ["rotorl", "rotprl", "sib새"]
    for (const i of shit2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/\^/gi, 'ㅅ')
    text = text.replace(/H/gi, 'ㅐ')
    text = text.replace(/10새/gi, '새끼')
    text = text.replace(/10섹/gi, '새끼')
    text = text.replace(/10쌔/gi, '새끼')
    text = text.replace(/10쎄/gi, '새끼')
    text = text.replace(/10새/gi, '새끼')
    text = text.replace(/10쉑/gi, '새끼')
    text = text.replace(/[^가-힣]/gi, '')
    const sonofbitch = ["ㅅㄲ", "ㅅ끼", "ㅆ끼", "쎆", "색ㄲㅣ", "ㅍ", "쌖", "쌔꺄", "새꺄", "씹색"]
    for (const i of sonofbitch) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/의새끼/gi, '')
    text = text.replace(/애/gi, '')
    text = text.replace(/에/gi, '')
    text = text.replace(/루세끼/gi, '')
    text = text.replace(/시세끼/gi, '')
    text = text.replace(/세끼먹/gi, '')
    text = text.replace(/고양이새끼/gi, '')
    text = text.replace(/키보드/gi, '')
    const sonofbitch2 = ["새끼", "쉐리", "쌔끼", "썌끼", "쎼끼", "쌬끼", "샠끼", "세끼", "샊", "쌖", "섺", "쎆", "십새", "새키", "씹색", "새까", "새꺄",
        "새뀌", "새끠", "새캬", "색꺄", "색끼"]
    for (const i of sonofbitch2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/줫습니다/gi, '')
    text = text.replace(/쫒아/gi, '')
    text = text.replace(/쫒다/gi, '')
    const dick = ["ㅈ같", "ㅈ망", "ㅈ까", "ㅈ경", "ㅈ가튼"]
    for (const i of dick) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    const dick2 = ["좆", "촟", "조까", "좈", "쫒", "졷", "좃", "좋같", "좃같", "좃물", "좃밥", "줫", "좋밥", "좋물", "좇"]
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
    const whatthefuck = ["뻑유", "뻐킹", "뻐큐", "빡큐", "뿩큐", "뻑큐", "빡유"]
    for (const i of whatthefuck) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const whatthefuck2 = ["닥쳐", "닭쳐", "닥치라", "아가리해"]
    for (const i of whatthefuck2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/r[0-9]+/gi, '')
    const whatthefuck3 = ["dog새"]
    for (const i of whatthefuck3) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/그만 졸라/gi, '')
    text = text.replace(/졸라서/gi, '')
    const picking2 = ["ㅈㄴ", "ㅈ나", "존ㄴ", "존맛", "존나", "존내", "쫀나", "존네", "졸라"]
    for (const i of picking2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const picking3 = ["뒤져", "뒈져", "뒈진", "뒈질", "디져라", "디진다", "디질래"]
    for (const i of picking3) {
        if (text.includes(i)) {
            return true;
        }
    }

    return false;
}
