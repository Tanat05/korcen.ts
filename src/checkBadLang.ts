export function check(text: string | any): boolean {
    if (!text) throw new Error('Korean: 확인할 텍스트를 입력해 주세요');
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
    let fuckyou = ['ㅗㅗ','ㅗ', '┻', '┴', '┹', '_ㅣ_', '_l_', '_/_', '⊥', '_ |\_', '_|\_', '_ㅣ\_', '_I_']
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
    let fuck = ["18놈", "ㅅㅍ", "시ㅂ", "시ㅏㄹ", "씨ㅂ","씨방", "씨ㅏㄹ", "ㅣ발", "ㅆ발", "ㅅㅣㅂㅏ", "ㅆㅣ발", "ㅅ발", "ㅅㅂ", "ㅆㅂ", "ㅆ바", "tlbal", "ㅅ바", "시ㅂㅏ", "ㅅㅂㅏ", "시ㅏㄹ", "ㅅㅟ발", "씨ㅏㄹ", "ㅅ불", "ㅆ불", "ㅅ쁠", "ㅆ뿔", "tlba", "씨8", "tlbak", "tlpal", "tlbar", "sipal", "tlval", "시bal", "시bar", "시bak", "시pal", "시qk", "시val", "si바", "si발", "si불", "si빨", "si팔", "tl바", "tl발", "tl불", "tl빨", "tl팔", "10발련", "10발넘", "10발놈", "10발년", "ㅅ ㅣ akwkksw바알", "tlqkd", "샤빨", "18련", "쌰뺠", "si8", "스벌", "개존맛", "t발", "TQ", "tq", "rotoRl", "개좇돼", "18뇬", "시방", "tlqkf", "sibak", "w같은", "신발련", "뷰우웅신", "좇", "^^ㅣ벌", "^^벌", "씨벌", "18아", "tㅂ", "siba", "tq", "qt", "ㅆㅍ", "Ribal", "Libal"]
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
    "씨빨", "씨랼", "씨파", "띠발", "띡발", "띸발","싸발", "십발", "슈발","야발", "씨불", "씨랄",
    "쉬발", "쓰발", "쓔발", "쌰발", "쉬발", "쒸발", "씨팔", "씨밝", "씨밯", "쑤발", "치발", "샤발",
    "발씨", "리발", "씨볼","찌발", "씨비바라랄", "시바랄", "씨바라","쒸팔","쉬팔","씨밮","쒸밮","시밮",
    "씨삐라","ㅆ삐라","씨벌","슈벌","시불","시부렝","씨부렝","시부랭","씨부랭","시부랭","발놈시","뛰발",
    "뛰봘","뜨발","뜨벌","띄발","씨바알","샤빨","샤발","스벌","쓰벌","신발련","신발년","신발놈","띠발","띠바랄"]
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
    const bullshit1 = ["ㅈㄹ", "지ㄹ", "ㅈ랄", "ㅈ라","wlfkf","g랄", "g럴", "g롤","g뢀"]
    for (const i of bullshit1) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, 'ㄹ')
    text = text.replace(/지랄탄/gi, '')
    text = text.replace(/지랄버릇/gi, '')
    text = text.replace(/이/gi, '')
    const bullshit2 = ["지랄", "찌랄", "지럴", "지롤", "랄지","쥐랄","쮜랄","지뢀","띄랄"]
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
    const asshole = ["ㅄ", "ㅂㅅ", "병ㅅ", "ㅂ신", "ㅕㅇ신","ㅂㅇ신","뷰신"]
    for (const i of asshole) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/영/gi, '')
    text = text.replace(/엉/gi, '')
    const asshole2 = ["병신", "병딱", "벼신","붱신","뼝신","뿽신","삥신","병시니"]
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
    const shit2 = ["rotorl","rotprl","sib새"]
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
    const sonofbitch = ["ㅅㄲ", "ㅅ끼", "ㅆ끼", "쎆","색ㄲㅣ","ㅍ", "쌖", "쌔꺄", "새꺄", "씹색"]
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
    const sonofbitch2 = ["새끼", "쉐리", "쌔끼", "썌끼", "쎼끼", "쌬끼", "샠끼","세끼","샊","쌖","섺","쎆","십새","새키","씹색","새까","새꺄",
    "새뀌","새끠","새캬","색꺄","색끼"]
    for (const i of sonofbitch2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    text = text.replace(/줫습니다/gi, '')
    text = text.replace(/쫒아/gi, '')
    text = text.replace(/쫒다/gi, '')
    const dick = ["ㅈ같", "ㅈ망", "ㅈ까", "ㅈ경","ㅈ가튼"]
    for (const i of dick) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    const dick2 = ["좆", "촟", "조까", "좈", "쫒", "졷", "좃","좋같","좃같","좃물","좃밥","줫","좋밥","좋물","좇"]
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
    const whatthefuck = ["뻑유", "뻐킹", "뻐큐","빡큐","뿩큐","뻑큐","빡유"]
    for (const i of whatthefuck) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const whatthefuck2 = ["닥쳐", "닭쳐","닥치라","아가리해"]
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
    const whatthefuck4 = ["개ㅐ색"]
    for (const i of whatthefuck4) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const sonofagun = ["개같", "개가튼", "개쉑", "개스키", "개세끼", "개색히", "개가뇬", "개새기", "개쌔기", "개쌔끼", "쌖", "쎆", "새긔", "개소리", "개년", "개소리",
    "개드립","개돼지","개씹창","개간나","개스끼","개섹기","개자식","개때꺄","개때끼","개발남아","개샛끼","개가든","개가뜬","개가턴","개가툰","개가튼",
    "개갇은","개갈보","개걸레","개너마","개너므","개넌","개넘","개녀나","개년","개노마","개노무새끼","개논","개놈","개뇨나","개뇬","개뇸","개뇽","개눔",
    "개느마","개늠","개때꺄","개때끼","개떼끼","개랙기","개련","개발남아","개발뇬","개색","개색끼","개샊","개샛끼","개샛키","개샛킹","개샛히","개샜끼",
    "개생키","개샠","개샤끼","개샤킥","개샥","개샹늠","개세끼","개세리","개세키","개섹히","개섺","개셃","개셋키","개셐","개셰리","개솩","개쇄끼","개쇅",
    "개쇅끼","개쇅키","개쇗","개쇠리","개쉐끼","개쉐리","개쉐키","개쉑","개쉑갸","개쉑기","개쉑꺄","개쉑끼","개쉑캬","개쉑키","개쉑히","개쉢","개쉨",
    "개쉬","개쉬끼","개쉬리","개쉽","개스끼","개스키","개습","개습세","개습쌔","개싀기","개싀끼","개싀밸","개싀킈","개싀키","개싏","개싑창","개싘",
    "개시끼","개시퀴","개시키","개식기","개식끼","개식히","개십새","개십팔","개싯기","개싯끼","개싯키","개싴","개쌍넘","개쌍년","개쌍놈","개쌍눔",
    "개쌍늠","개쌍연","개쌍영","개쌔꺄","개쌔끼","개쌕","개쌕끼","개쌰깨","개썅","개쎄","개쎅","개쎼키","개쐐리","개쒜","개쒝","개쒯","개쒸","개쒸빨놈",
    "개쒹기","개쓉","개쒹기","개쓉","개씀","개씁","개씌끼","개씨끼","개씨팕","개씨팔","개잡것","개잡년","개잡놈","개잡뇬","개젓","개젖","개젗","개졋",
    "개졎","개조또","개조옷","개족","개좃","개좆","개좇","개지랄","개지럴","개창년","개허러","개허벌년","개호러","개호로","개후랄","개후레","개후로",
    "개후장","걔섀끼","걔잡넘","걔잡년","걔잡뇬","게가튼","게같은","게너마","게넘","게년","게노마","게놈","게뇨나","게뇬","게뇸","게뇽","게눔","게늠",
    "게띠발넘","게부랄","게부알","게새끼","게새리","게새키","게색","게색기","게색끼","게샛키","게세꺄","게자지","게잡넘","게잡년","게잡뇬","게젓",
    "게좆","계같은뇬","계뇬","계뇽"]
    for (const i of sonofagun) {
        if (text.includes(i)) {
            return true;
        }
    }

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
    text = text.replace(/오/gi, '')
    const pussy = ["보지","버지물","버짓물","보짓","ⓑⓞⓩⓘ","bozi","개보즤","개보지","버지벌렁벌렁","보짖","뵤즤"]
    for (const i of pussy) {
        if (text.includes(i)) {
            return true;
        }
    }


    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const onahole = ["ㅈㅈ빨", "자ㅈ", "ㅈ지빨"]
    for (const i of onahole) {
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
    text = text.replace(/아/gi, '')
    const dicks = ["자지","자짓"]
    for (const i of dicks) {
        if (text.includes(i)) {
            return true;
        }
    }


    text = newtext.replace(/\^/gi, 'ㅅ')
    text = text.replace(/sex/gi, '섹스')
    text = text.replace(/엑/gi, '')
    text = text.replace(/cess/gi, '')
    text = text.replace(/exit/gi, '')
    text = text.replace(/[^ㄱ-힣]/gi, '')
    const sex = ["sex","s스", "x스", "se스", "se스", "s스","ㅅㅅ","s하고e싶다x","ㅅㅔㅅㄱ","ㅅㅔㄱ스", "섹ㅅ", "ㅅ스", "세ㄱㅅ", "ㅅㅔㄱㅅ", "야플"]
    for (const i of sex) {
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
    const sex2 = ["섹스", "섻", "쉑스", "섿스", "섹그", "야스", "색스", "셱스", "섁스", "세엑스", "썩스","섹수","섹파","섹하자","쉐스","쉑스","쉐엑스","색수","세엑수우","섹하고",
    "섹하구","섹하자","섹하장","섹하쟈","섹한번"]
    for (const i of sex2) {
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
    const onahole3 = ["매춘부","씹하다","매춘부","성노예"]
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

    text = newtext.replace(/련/gi, '년')
    text = text.replace(/뇬/gi, '년')
    text = text.replace(/놈/gi, '년')
    text = text.replace(/러운지/gi, '')
    text = text.replace(/려운지/gi, '년')
    text = text.replace(/[^가-힣]/gi, '')
    const belittling = ["딸딸이","질싸","안에사정","자위남","자위녀","폰섹","포르노","폰세엑","폰쉑","폰쎅","질내사정","그룹섹","남창","男色","누워라이년아",
    "누웠냐씨방새","다리벌려","대주까","대줄년","뒤로너어줘","딸따뤼","딸쳐","떡쳐라","막대쑤셔줘","막대핥아줘","먹고보니내딸","먹고보니누나","먹고보니딸",
    "먹고보니똥개","먹고보니엄마","먹고보니응아","먹고보니재수","먹고보니처제","먹고보니형수","몸뚱이줄께","몸안에사정","밖에다쌀께","박고빼고",
    "배위에싸죠","g스팟","지스팟","크리토리스","클리토리스","페니스","애널","젖까","젖가튼","젖나","젖만","ja위","자위","고자새끼","고츄","꺼추","께세","꼬추"]
    for (const i of belittling) {
        if (text.includes(i)) {
            return true;
        }
    }

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

    text = newtext.replace(/[^가-힣]/gi, '')
    const nigger = ["깜둥이", "흑형", "조센진", "짱개", "짱깨", "짱께", "짱게", "쪽바리", "쪽파리", "빨갱이",]
    for (const i of nigger) {
        if (text.includes(i)) {
            return true;
        }
    }

    const nigger2 = ["ㄴ1ㄱ", "ㄴ1ㅁ", "느금ㅁ", "ㄴㄱ마", "ㄴㄱ빠", "ㄴ금빠","ㅇH미","ㄴ1에미"]
    for (const i of nigger2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^ㄱ-힣]/gi, '')
    const your = ["ㄴㄱㅁ", "ㄴ금마", "느금ㅁ", "ㄴㄱ마", "ㄴㄱ빠", "ㄴ금빠","ㄴ미", "느금", "누굼마"]
    for (const i of your) {
        if (text.includes(i)) {
            return true;
        }
    }
    text = newtext.replace(/[^가-힣]/gi, '')
    const your2 = ["느금마", "느그엄마", "늑엄마", "늑금마", "느그애미", "넉엄마", "느그부모", "느그애비", "느금빠", "느그메", "느그빠","니미씨","니미씹",
    "느그마","니엄마","엄창","엠창","니미럴","누굼마","느금","내미랄","내미럴","엄마없","아빠없"]
    for (const i of your2) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/도/gi, '')
    const motherfuck = ["니애미", "노애미", "노앰", "앰뒤련",
    "아버지도없는게", "애미도없는게", "애비도없는게", "어머니도없는게", "니애비", "노애비","애미없","애비없","애미뒤","애비뒤","니아빠","너에미","눼기미","뉘귀미"
    ,"뉘기미","뉘김이","뉘뮈","뉘미랄","뉘미럴","뉘미롤","뉘밀얼","뉘밀할","뉘어미","뉘에미","느검마","늬긔미","늬기미","니기미","니믜창","니미랄","니미럴"
    ,"니미쒸블","니미씨펄넘","니미좃","니밀할","니부랑","니뽕좃"]
    for (const i of motherfuck) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^a-z]/gi, '')
    const foreign = ['2 girls 1 cup', '2g1c', '4r5e', '5h1t', '5hit', 'a$$hole', 'a_s_s', 'a55hole', 'acrotomophilia', 'ahole', 'alabama hot pocket'
    ,'alaskan pipeline', 'anal', 'anal impaler', 'anal leakage', 'analprobe', 'anilingus', 'apeshit', 'ar5e', 'arrse', 'arse', 'arsehole', 'ass fuck'
    , 'ass hole', 'assbag', 'assbandit', 'assbang', 'assbanged', 'assbanger', 'assbangs', 'assbite', 'assclown', 'asscock', 'asscracker', 'asses'
    , 'assface', 'assfaces', 'assfuck', 'assfucker', 'ass-fucker', 'assfukka', 'assgoblin', 'assh0le', 'asshat', 'ass-hat', 'asshead', 'assho1e'
    , 'asshole', 'assholes', 'asshopper', 'ass-jabber', 'assjacker', 'asslick', 'asslicker', 'assmaster', 'assmonkey', 'assmucus', 'assmucus'
    , 'assmunch', 'assmuncher', 'assnigger', 'asspirate', 'ass-pirate', 'assshit', 'assshole', 'asssucker', 'asswad', 'asswhole', 'asswipe'
    , 'asswipes', 'auto erotic', 'autoerotic', 'axwound', 'azazel', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'baby batter', 'baby juice', 'ball gag'
    , 'ball gravy', 'ball licking', 'ball sack', 'ball sucking', 'ballbag', 'ballsack', 'bampot', "bang (one's) box", 'bangbros', 'barely legal'
    , 'barenaked', 'barf', 'bastard', 'bastardo', 'bastards', 'bastinado', 'batty boy', 'bdsm', 'beaner', 'beaners', 'beardedclam', 'beastial'
    , 'beastiality', 'beatch', 'beaver cleaver', 'beaver lips', 'beef curtain', 'beef curtains', 'beeyotch', 'bellend', 'beotch', 'bescumber'
    , 'bestial', 'bestiality', 'bi+ch', 'biatch', 'big knockers', 'big tits', 'bigtits', 'bimbo', 'bimbos', 'bint', 'birdlock', 'bitch', 'bitch tit'
    , 'bitchass', 'bitched', 'bitcher', 'bitchers', 'bitches', 'bitchin', 'bitching', 'bitchtits', 'bitchy', 'black cock', 'bloodclaat', 'blow job'
    , 'blow me', 'blow mud', 'blow your load', 'blowjob', 'blowjobs', 'blue waffle', 'blue waffle', 'blumpkin', 'boiolas', 'bollock', 'bollocks'
    , 'bollok', 'bollox', 'bondage', 'boned', 'boner', 'boners', 'bong', 'boob', 'boobies', 'boobs', 'booby', 'booger', 'boong', 'booobs', 'boooobs'
    , 'booooobs', 'booooooobs', 'bootee', 'bootie', 'booty call', 'booze', 'boozer', 'boozy', 'bosom', 'bosomy', 'breasts', 'brotherfucker'
    , 'brown showers', 'buceta', 'bugger', 'bull shit', 'bulldyke', 'bullet vibe', 'bullshit', 'bullshits', 'bullshitted', 'bullturds', 'bumblefuck'
    , 'bumclat', 'bummer', 'bung', 'bung hole', 'bunghole', 'bunny fucker', 'bust a load', 'busty', 'butt fuck', 'butt plug', 'buttcheeks', 'buttfuck'
    , 'buttfucka', 'buttfucker', 'buttmuch', 'buttmunch', 'butt-pirate', 'buttplug', 'c.0.c.k', 'c.o.c.k.', 'c.u.n.t', 'c0ck', 'c-0-c-k', 'c0cksucker'
    , 'camel toe', 'cameltoe', 'camgirl', 'camslut', 'camwhore', 'carpet muncher', 'carpetmuncher', 'cawk', 'chesticle', 'chi-chi man'
    , 'chick with a dick', 'child-fucker', 'chinc', 'chincs', 'chink', 'chinky', 'choad', 'choade', 'choade', 'choc ice', 'chocolate rosebuds'
    , 'chode', 'chodes', 'chota bags', 'chota bags', 'cipa', 'circlejerk', 'cl1t', 'cleveland steamer', 'clit', 'clit licker', 'clitface', 'clitfuck'
    , 'clitorus', 'clits', 'clitty', 'clitty litter', 'clover clamps', 'clunge', 'clusterfuck', 'cnut', 'c-o-c-k', 'cock pocket', 'cock snot'
    , 'cock sucker', 'cockass', 'cockbite', 'cockblock', 'cockburger', 'cockeye', 'cockface', 'cockfucker', 'cockhead', 'cockholster', 'cockjockey'
    , 'cockknocker', 'cockknoker', 'cocklump', 'cockmaster', 'cockmongler', 'cockmongruel', 'cockmonkey', 'cockmunch', 'cockmuncher', 'cocknose'
    , 'cocknugget', 'cockshit', 'cocksmith', 'cocksmoke', 'cocksmoker', 'cocksniffer', 'cocksuck', 'cocksuck', 'cocksucked', 'cocksucked', 'cocksucker'
    , 'cock-sucker', 'cocksuckers', 'cocksucking', 'cocksucks', 'cocksucks', 'cocksuka', 'cocksukka', 'cockwaffle', 'coital', 'cokmuncher', 'coksucka'
    , 'commie', 'coochie', 'coochy', 'coon', 'coonnass', 'coons', 'cooter', 'cop some wood', 'coprolagnia', 'coprophilia', 'corksucker', 'cornhole'
    , 'cornhole', 'corp whore', 'corp whore', 'crackwhore', 'crap', 'crappy', 'cretin', 'crikey', 'cripple', 'crotte', 'cum chugger', 'cum chugger'
    , 'cum dumpster', 'cum dumpster', 'cum freak', 'cum freak', 'cum guzzler', 'cum guzzler', 'cumbubble', 'cumdump', 'cumdump', 'cumdumpster'
    , 'cumguzzler', 'cumjockey', 'cummer', 'cummin', 'cumming', 'cums', 'cumshot', 'cumshots', 'cumslut', 'cumstain', 'cumtart', 'cunilingus'
    , 'cunillingus', 'cunnie', 'cunnilingus', 'cunny', 'cunt', 'c-u-n-t', 'cunt hair', 'cunt hair', 'cuntass', 'cuntbag', 'cuntbag', 'cuntface'
    , 'cunthole', 'cunthunter', 'cuntlick', 'cuntlick', 'cuntlicker', 'cuntlicker', 'cuntlicking', 'cuntlicking', 'cuntrag', 'cunts', 'cuntsicle'
    , 'cuntsicle', 'cuntslut', 'cunt-struck', 'cunt-struck', 'cyalis', 'cyberfuc', 'cyberfuck', 'cyberfuck', 'cyberfucked', 'cyberfucked'
    , 'cyberfucker', 'cyberfuckers', 'cyberfucking', 'cyberfucking', 'd0ng', 'd0uch3', 'd0uche', 'd1ck', 'd1ld0', 'd1ldo', 'dammit', 'date rape'
    , 'daterape', 'dawgie-style', 'deep throat', 'deepthroat', 'dendrophilia', 'dick', 'dick head', 'dick hole', 'dick hole', 'dick shy', 'dick shy'
    , 'dickbag', 'dickbeaters', 'dickdipper', 'dickface', 'dickflipper', 'dickfuck', 'dickfucker', 'dickhead', 'dickheads', 'dickhole', 'dickish'
    , 'dick-ish', 'dickjuice', 'dickmilk', 'dickmonger', 'dickripper', 'dicks', 'dicksipper', 'dickslap', 'dick-sneeze', 'dicksucker', 'dicksucking'
    , 'dicktickler', 'dickwad', 'dickweasel', 'dickweed', 'dickwhipper', 'dickwod', 'dickzipper', 'dildo', 'dildos', 'diligaf', 'dingleberries'
    , 'dingleberry', 'dipship', 'dipshit', 'dirty pillows', 'dirty sanchez', 'dlck', 'dog style', 'dog-fucker', 'doggie style', 'doggiestyle'
    , 'doggie-style', 'doggin', 'dogging', 'doggy style', 'doggystyle', 'doggy-style', 'dolcett', 'dominatrix', 'dommes', 'donkey punch', 'donkeypunch'
    , 'donkeyribber', 'doochbag', 'doofus', 'dookie', 'doosh', 'dopey', 'double dong', 'double penetration', 'douch3', 'douche', 'douchebag'
    , 'douchebags', 'douche-fag', 'douchewaffle', 'douchey', 'dp action', 'dry hump', 'dumass', 'dumb ass', 'dumbass', 'dumbasses', 'dumbcunt'
    , 'dumbfuck', 'dumbshit', 'dumshit', 'eat a dick', 'eat a dick', 'eat hair pie', 'eat hair pie', 'eat my ass', 'ejaculate', 'ejaculated'
    , 'ejaculates', 'ejaculates', 'ejaculating', 'ejaculating', 'ejaculatings', 'ejaculation', 'ejakulate', 'erect', 'erection', 'erotic', 'erotism'
    , 'escort', 'essohbee', 'extacy', 'extasy', 'f u c k', 'f u c k e r', 'f.u.c.k', 'f_u_c_k', 'f4nny', 'fack', 'fagbag', 'fagfucker', 'fagg'
    , 'fagged', 'fagging', 'faggit', 'faggitt', 'faggot', 'faggotcock', 'faggots', 'faggs', 'fagot', 'fagots', 'fags', 'fagtard', 'faig', 'faigt'
    , 'fannybandit', 'fannyflaps', 'fannyfucker', 'fanyy', 'fartknocker', 'fatass', 'fcuk', 'fcuker', 'fcuking', 'fecal', 'felch', 'felcher'
    , 'felching', 'fellate', 'fellatio', 'feltch', 'feltcher', 'female squirting', 'femdom', 'fenian', 'fingerbang', 'fingerfuck', 'fingerfuck'
    , 'fingerfucked', 'fingerfucked', 'fingerfucker', 'fingerfucker', 'fingerfuckers', 'fingerfucking', 'fingerfucking', 'fingerfucks'
    , 'fingerfucks', 'fist fuck', 'fist fuck', 'fisted', 'fistfuck', 'fistfucked', 'fistfucked', 'fistfucker', 'fistfucker', 'fistfuckers'
    , 'fistfuckers', 'fistfucking', 'fistfucking', 'fistfuckings', 'fistfuckings', 'fistfucks', 'fistfucks', 'fisting', 'fisty', 'fleshflute'
    , 'flog the log', 'floozy', 'foad', 'fondle', 'fooker', 'foot fetish', 'footjob', 'foreskin', 'frotting', 'fubar', 'fuck', 'fuck', 'f-u-c-k'
    , 'fuck buttons', 'fuck hole', 'fuck hole', 'fuck off', 'fuck puppet', 'fuck puppet', 'fuck trophy', 'fuck trophy', 'fuck yo mama'
    , 'fuck yo mama', 'fuck you', 'fucka', 'fuckass', 'fuck-ass', 'fuck-ass', 'fuckbag', 'fuck-bitch', 'fuck-bitch', 'fuckboy', 'fuckbrain'
    , 'fuckbutt', 'fuckbutter', 'fucked', 'fuckedup', 'fucker', 'fuckers', 'fuckersucker', 'fuckface', 'fuckhead', 'fuckheads', 'fuckhole'
    , 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme', 'fuckme', 'fuckmeat', 'fuckmeat', 'fucknugget', 'fucknut', 'fucknutt'
    , 'fuckoff', 'fucks', 'fuckstick', 'fucktard', 'fuck-tard', 'fucktards', 'fucktart', 'fucktoy', 'fucktoy', 'fucktwat', 'fuckup', 'fuckwad'
    , 'fuckwhit', 'fuckwit', 'fuckwitt', 'fudge packer', 'fudgepacker', 'fudge-packer', 'fuker', 'fukker', 'fukkers', 'fukkin', 'fuks', 'fukwhit'
    , 'fukwit', 'futanari', 'fux0r', 'fvck', 'fxck', 'gang bang', 'gangbang', 'gang-bang', 'gang-bang', 'gangbanged', 'gangbangs', 'gassy ass'
    , 'gassy ass', 'gay sex', 'gayass', 'gaybob', 'gaydo', 'gayfuck', 'gayfuckist', 'gaysex', 'gaytard', 'gaywad', 'gender bender', 'giant cock'
    , 'gigolo', 'gippo', 'glans', 'goatcx', 'goatse', 'goddamn', 'goddamned', 'god-damned', 'goddamnit', 'godsdamn', 'gokkun', 'golden shower'
    , 'goldenshower', 'goo girl', 'goodpoop', 'gooks', 'goregasm', 'group sex', 'gspot', 'g-spot', 'gtfo', 'h0m0', 'h0mo', 'hand job', 'handjob'
    , 'hardcoresex', 'hentai', 'heroin', 'herpes', 'hobag', 'hoer', 'hom0', 'homodumbshit', 'homoerotic', 'homoey', 'honkey', 'honky', 'hooker'
    , 'hore', 'horniest', 'horny', 'hot carl', 'hot chick', 'hotsex', 'how to murdep', 'how to murder', 'humped', 'humping', 'iberian slap'
    , 'inbred', 'incest', 'intercourse', 'jack off', 'jackass', 'jackasses', 'jackhole', 'jackoff', 'jack-off', 'jail bait', 'jailbait', 'japs'
    , 'jerk', 'jerk off', 'jerk0ff', 'jerkass', 'jerked', 'jerkoff', 'jerk-off', 'jigaboo', 'jiggaboo', 'jiggerboo', 'jism', 'jizm', 'jizm', 'jizz'
    , 'jizzed', 'jock', 'juggs', 'jungle bunny', 'junglebunny', 'kafir', 'kike', 'kikes', 'kinbaku', 'kinkster', 'knobead', 'knobed', 'knobend'
    , 'knobhead', 'knobjocky', 'knobjokey', 'kooch', 'kooches', 'kootch', 'kunilingus', 'kunt', 'kwif', 'kyke', 'l3i+ch', 'l3itch', 'labia', 'lameass'
    , 'lardass', 'leather restraint', 'leather straight jacket', 'lemon party', 'leper', 'lezza', 'lezzie', 'lolita', 'lovemaking', 'lube', 'm0f0'
    , 'm0fo', 'm45terbate', 'ma5terb8', 'ma5terbate', 'mafugly', 'mafugly', 'make me come', 'male squirting', 'masterb8', 'masterbat*', 'masterbat3'
    , 'masterbate', 'master-bate', 'master-bate', 'masterbating', 'masterbation', 'masterbations', 'masturbate', 'masturbating', 'masturbation', 'mcfagget'
    , 'menage a trois', 'meth', 'm-fucking', 'microphallus', 'milf', 'missionary position', 'mof0', 'mofo', 'mo-fo', 'molest', 'moolie', 'moron'
    , 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked', 'mothafucked', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking'
    , 'mothafucking', 'mothafuckings', 'mothafucks', 'mother fucker', 'mother fucker', 'motherfuck', 'motherfucka', 'motherfucked', 'motherfucker'
    , 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks', 'mound of venus', 'muff diver', 'muff puff'
    , 'muff puff', 'muffdiver', 'muffdiving', 'murder', 'mutha', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'n1gga', 'n1gger', 'nambla'
    , 'nawashi', 'need the dick', 'negro', 'nig nog', 'nigaboo', 'nigg3r', 'nigg4h', 'nigga', 'niggah', 'niggas', 'niggaz', 'nigger', 'niggers'
    , 'niglet', 'nig-nog', 'nimphomania', 'nob jokey', 'nobhead', 'nobjocky', 'nobjokey', 'nonce', 'nsfw images', 'nude', 'nudity', 'numbnuts'
    , 'nut sack', 'nutsack', 'nympho', 'nymphomania', 'octopussy', 'omorashi', 'one cup two girls', 'one guy one jar', 'opiate', 'opium', 'orgasim'
    , 'orgasims', 'orgasm', 'orgasmic', 'orgasms', 'orgies', 'orgy', 'p.u.s.s.y.', 'p0rn', 'paedophile', 'paki', 'peckerhead', 'pedobear', 'pedophile'
    , 'pedophilia', 'pedophiliac', 'peepee', 'pegging', 'penial', 'penile', 'penis', 'penisbanger', 'penisfucker', 'penispuffer', 'phallic'
    , 'phone sex', 'phonesex', 'phuck', 'phuk', 'phuked', 'phuking', 'phukked', 'phukking', 'phuks', 'phuq', 'piece of shit', 'pigfucker', 'pillowbiter'
    , 'pimp', 'pimpis', 'piss pig', 'pissflaps', 'pisspig', 'pleasure chest', 'polack', 'pole smoker', 'polesmoker', 'pollock', 'ponyplay', 'poof'
    , 'poon', 'poonani', 'poonany', 'poontang', 'poop chute', 'poopchute', 'poopuncher', 'porch monkey', 'porchmonkey', 'porn', 'porno', 'pornography'
    , 'pornos', 'potty', 'prick', 'pricks', 'prickteaser', 'prig', 'prince albert piercing', 'pron', 'prostitute', 'pthc', 'pube', 'pubes', 'pubic'
    , 'pubis', 'punani', 'punanny', 'punany', 'puss', 'pusse', 'pussi', 'pussies', 'pussy', 'pussy fart', 'pussy fart', 'pussy palace', 'pussy palace'
    , 'pussylicking', 'pussypounder', 'pussys', 'queaf', 'queaf', 'queef', 'queerbait', 'queerhole', 'queero', 'quim', 'raghead', 'raging boner', 'rape'
    , 'raped', 'raper', 'rapey', 'raping', 'rapist', 'raunch', 'reetard', 'renob', 'retard', 'retarded', 'reverse cowgirl', 'rimjaw', 'rimjob', 'rimming'
    , 'ritard', 'rosy palm', 'rosy palm and her 5 sisters', 'rtard', 'r-tard', 'rusty trombone', 's hit', 's.h.i.t.', 's.o.b.', 's_h_i_t', 'sadism'
    , 'sadist', 'sand nigger', 'sandnigger', 'sausage queen', 'schizo', 'schlong', 'scissoring', 'scroat', 'scrog', 'scrot', 'scrote', 'scum', 'seks'
    ,'semen', 'sexo', 'sh!+', 'sh!t', 'sh1t', 's-h-1-t', 'shag', 'shagger', 'shaggin', 'shagging', 'shaved beaver', 'shaved pussy', 'shemale', 'shi+'
    , 'shibari', 'shit', 's-h-i-t', 'shit ass', 'shit fucker', 'shit fucker', 'shitass', 'shitbag', 'shitbagger', 'shitblimp', 'shitbrains', 'shitbreath'
    , 'shitcanned', 'shitcunt', 'shitdick', 'shite', 'shiteater', 'shited', 'shitey', 'shitface', 'shitfaced', 'shitfuck', 'shitfull', 'shithead'
    , 'shitheads', 'shithole', 'shithouse', 'shiting', 'shitings', 'shits', 'shitspitter', 'shitstain', 'shitt', 'shitted', 'shitter', 'shitters'
    , 'shitters', 'shittier', 'shittiest', 'shitting', 'shittings', 'shitty', 'shiz', 'shiznit', 'shota', 'skullfuck', 'slanteye', 'slave', 'slut'
    , 'slut bucket', 'slut bucket', 'slutbag', 'slutdumper', 'slutkiss', 'sluts', 'smut', 'smutty', 'snuff', 's-o-b', 'sod off', 'sodomize', 'sodomy'
    , 'son of a bitch', 'son of a motherless goat', 'son of a whore', 'son-of-a-bitch', 'splooge', 'splooge moose', 'spooge', 'spook', 'spread legs'
    , 'spunk', 'stfu', 'stiffy', 'stoned', 'strap on', 'strapon', 'strappado', 'strip club', 'style doggy', 'suckass', 'suicide girls', 'sultry women'
    , 'sumofabiatch', 't1tt1e5', 't1tties', 'taff', 'taig', 'taking the piss', 'tard', 'tea bagging', 'teabagging', 'teat', 'teets', 'teez', 'teste'
    , 'testee', 'testes', 'testical', 'testicle', 'testis', 'threesome', 'throating', 'thundercunt', 'tit wank', 'tit wank', 'titfuck', 'titi', 'tities'
    , 'tits', 'titt', 'tittie5', 'tittiefucker', 'titties', 'titty', 'tittyfuck', 'tittyfucker', 'tittywank', 'titwank', 'tosser', 'towelhead', 'tramp'
    , 'tranny', 'tribadism', 'tub girl', 'tubgirl', 'turd', 'tush', 'tushy', 'tw4t', 'twat', 'twathead', 'twatlips', 'twats', 'twatty', 'twatwaffle'
    , 'two fingers', 'two fingers with tongue', 'two girls one cup', 'twunt', 'twunter', 'unclefucker', 'undies', 'undressing', 'upskirt', 'urethra play'
    , 'urophilia', 'v14gra', 'v1gra', 'vagina', 'vajayjay', 'va-j-j', 'venus mound', 'veqtable', 'violet wand', 'vixen', 'vjayjay', 'vorarephilia'
    , 'vulva', 'wang', 'wank', 'wanker', 'wankjob', 'wanky', 'wazoo', 'wet dream', 'wetback', 'wh0re', 'wh0reface', 'whoar', 'whore', 'whorealicious'
    , 'whorebag', 'whored', 'whoreface', 'whorehopper', 'whorehouse', 'whores', 'whoring', 'wigger', 'window licker', 'wrinkled starfish', 'yaoi'
    , 'yeasty', 'yellow showers', 'yiffy', 'yobbo', 'zibbi', 'zoophilia', 'zubb']
    for (const i of foreign) {
        if (text.includes(i)) {
            return true;
        }
    }

    const foreign2 = ["肉便器","糞野郎","バカ野郎","腐れ外道","部落民","中出し","強姦","特定アジア","人非人","鬼畜","負け犬","支那","トルコ風呂","淫売","未開人"]
    for (const i of foreign2) {
        if (text.includes(i)) {
            return true;
        }
    }

    const foreign3 = ['G巴', 'Ｇ巴', 'G叭', 'Ｇ叭', 'G芭', 'Ｇ芭', 'G掰', 'Ｇ掰', 'g點', 'MM屄', 'mm美圖'
    , 'qvod成人', 'sex聊天室', 'SM後庭器具', 'SM援交', 'SM舔穴', 'sm調教', 'XIAAV論壇','ㄊㄇㄉ', '一本道電影', '一夜性網'
    , '一夜情論壇', '一夜情激情成人聊天室', '九九情色帝國', '九城情色', '二B', '二穴中出', '人人有色論壇', '人妻交換', '人妻色誘', '人妻做愛', '人妻榨乳'
    , '人性本色', '入穴一遊', '三唑侖', '三級激情片', '三陪', '上你幹妳', '上門按摩', '下賤', '口內爆射', '口交', '口含雞巴', '口活', '口射', '口淫', '口爆'
    , '大b', '大力抽送', '大奶美逼', '大奶騷女', '大母牛娛樂論壇', '大乳頭', '大波粉B', '大波騷婦', '大花逼', '大眾色情成人網', '大麻', '大雞巴', '大鶏巴'
    , '女尻', '女屄', '女馬ㄉ', '女馬白勺', '女馬的', '女幹', '小b', '小穴', '小姐上門全套', '小姐打飛機', '小姐裸聊', '小逼', '小嫩雞', '小騷BB', '阝月'
    , '中文搜性網', '互淫', '互舔淫穴', '內射', '公媳亂', '勾魂少婦', '午夜天堂成人', '天天干貼圖', '天天情色', '夫妻3p', '夫妻多p', '夫妻俱樂部', '夫妻亂交'
    , '少女小姐上門', '少女被插', '手淫', '日本鬼子', '日死你', '日你', '日屄', '日逼', '欠日', '欠幹', '毛鮑', '王八', '他ㄇㄉ', '他ㄇ的', '他嗎的', '他媽的'
    , '凸他', '凸她', '凸肉優', '凸你', '凸我', '凸妳', '出售冰毒', '出售曲馬多', '出售苯基丙酮', '出售海豹M9', '出售迷幻藥', '出售迷情藥', '出售氫化可的松'
    , '出售麥角醇', '出售麻古', '出售麻果配方', '出售麻黃素', '出售氯胺酮', '出售腎', '出售間苯三酚', '出售黃牙籤', '出售黃白牙籤', '出售黃麻素', '出售黃體酮'
    , '出售羥基環戊基', '出售槍支', '出售監聽王', '出售蒙汗藥', '出售鄰氯苯晴', '出售磚石冰毒', '出售鎂粉', '出售鹽酸曲馬多', '出售鹽酸曲馬多片', '出售鹽酸羥亞胺'
    , '出售鑽石冰毒', '包二奶', '去你媽的', '去氧麻黃堿製作方法', '可卡因', '叼你媽', '失身粉', '奴隷調教', '奶大屄肥', '尻', '左旋黃麻素', '巨騷', '幼交', '幼妓'
    , '幼逼', '扒穴', '扒屄', '打手槍', '打炮', '打飛機', '打野炮', '本土無碼', '母女雙飛', '母子交歡', '母子姦情', '母奸', '玉穴', '玉乳', '生小孩沒屁眼'
    , '生徒胸觸', '甲基苯丙', '甲基苯胺', '白虎小穴', '白虎少婦', '白虎美女貼圖', '白虎陰穴', '白虎嫩B', '白粉', '白液四濺', '白嫩騷婦', '白漿四濺', '穴海'
    , '穴淫', '穴爽', '穴圖', '交換夫妻', '先奸後殺', '全家死光光', '冰毒', '吃精', '吃雞巴', '合成氯胺酮', '合成鹽酸羥亞胺', '多人性愛', '多人輪', '奸幼'
    , '她馬的', '她媽的', '好色cc', '安非他命', '成人A片', '成人bt', '成人下載', '成人五月天', '成人午夜場', '成人百強', '成人自拍', '成人社區', '成人書庫'
    , '成人情色', '成人情色網站', '成人聊天室', '成人軟體', '成人黃色網站', '成人圖片', '成人圖片網站', '成人網站', '成人網站導航', '成人論壇', '成人導航'
    , '成人激情小說', '成人激情電影', '成人激情圖片', '成人激情網站', '死GM', '死全家', '江山如此多嬌txt下載', '江豬媳', '百性閣', '百鳳宮', '老少亂倫', '老師的小穴'
    , '肉穴', '肉具', '肉便器', '肉洞', '肉唇', '肉淫器吞精', '肉莖', '肉壺', '肉棍', '肉棍幹騷婦', '肉絲褲襪', '肉感炮友', '肉溝', '肉逼', '肉慾', '肉縫'
    , '肉簫', '自拍美穴', '自拍寫真', '自插小穴', '自慰摳穴', '舌頭穴', '色97愛', '色BB吧', '色色成人', '色狐狸網址', '色界論��', '色書庫', '色狼小說'
    , '色狼論壇', '色迷城', '色情工廠', '色情倚天屠龍記', '色情論壇', '色窩窩', '西班牙蒼蠅水', '你他馬的', '你他媽的', '你它馬的', '你它媽的', '你她馬的'
    , '你老母', '你娘卡好', '你麻痹', '你媽比', '你媽的', '你媽逼', '吞精', '吞精騷妹', '含屌', '吸精', '吸精少女', '吹蕭', '妓女', '妓女', '妖媚熟母', '完蛋操'
    , '屁眼', '快樂AV', '我日', '我奸', '我的性啟蒙老師', '我要官人', '我要性交', '我要性交網', '我草', '我做騷妻', '我就去色', '我幹', '我愛我色網址', '我操'
    , '我操你', '杜冷丁', '狂乳激揺', '狂插', '狂插男根膠囊', '狂插性器具', '男女交歡', '男女蒲典', '男女激情淫亂', '肛交', '肛交吹喇叭', '肛屄', '肛門拳交'
    , '肛門噴水', '走光偷拍', '足腳交', '迅雷三級影片', '那娘錯比', '那嗎B', '那嗎老比', '那嗎逼', '那嗎瘟比', '那嗎錯比', '乳尻', '乳交', '乳此絲襪', '乳射'
    , '乳爆', '乳霸', '亞洲有碼', '亞洲性交電影', '亞洲性虐', '亞洲情色網', '亞洲淫娃', '亞洲插穴圖', '供應化學冰', '供應天然咖啡因', '供應可哥精', '供應四氫吡喃酮'
    , '供應奶油冰', '供應甲基可哥堿', '供應甲基苯丙胺', '供應白冰', '供應冰糖', '供應咖啡鹼', '供應咖啡鹼', '供應青蒿素', '供應胡椒基甲基', '供應氫化可的松'
    , '供應麥角醇', '供應麻果丸子', '供應麻黃素', '供應麻穀', '供應植物冰', '供應氯胺酮', '供應無水咖啡因', '供應黃冰', '供應黃體酮', '供應罌粟殼', '供應鹽酸氯'
    , '供應鹽酸羥亞胺', '兩性淫亂地址', '制幻劑', '制服狩', '制服美婦', '制服誘惑', '叔嫂肉慾', '夜色王朝', '夜色貴族', '奇淫寶鑒', '妹妹陰毛', '妹妹騷圖', '屄'
    , '屄毛', '屄屄特寫', '性之站', '性奴', '性奴會', '性用品', '性交', '性交自拍', '性交吞精', '性交易', '性交無碼', '性交圖', '性交課', '性免費電影', '性兩'
    , '性具', '性服務', '性虎', '性虎色網', '性派對', '性虐', '性虐待', '性息', '性高潮', '性聊', '性無能', '性視頻', '性傭', '性愛', '性愛韋小寶之玩女大王'
    , '性愛淫圖', '性愛插穴', '性愛視頻下載', '性愛圖', '性愛擂臺', '性感肉絲', '性感妖嬈', '性感沙灘2', '性感乳娘', '性感誘惑', '性感騷女', '性遊戲', '性夢'
    , '性福', '性福源', '性戰擂臺', '性饑渴', '抽插', '拍肩迷藥', '拔屄', '拔屄自拍', '招妓', '招鶏', '放尿', '放蕩少婦', '放蕩少婦賓館', '放蕩熟女', '明星淫圖'
    , '明星裸體照', '東北xx網', '東京丸井買賣', '東洋屄', '松島楓迅雷下載', '波霸乳交器具', '狗b', '狗日', '狗卵子', '狗娘', '狗娘養的', '狗狼養的', '狗養'
    , '狗操', '玩穴', '玩逼', '肏', '肏屄', '肥逼', '花和尚導航', '花都逍遙鄉村春光', '花樣性交', '近親相奸', '近親相姦', '金毛穴', '金鱗豈是池中物全本', '亮穴'
    , '亮屄', '俏臀攝魄', '俗人島', '前凸後翹', '咪咪圖片', '咬著龜頭', '品穴', '品色堂', '品色堂網址', '品香堂', '哇嘎成人三級', '姦染', '姦情', '姦淫', '姦淫'
    , '姦淫電車', '姫辱', '屌人也', '屌女也', '屌他', '屌她', '屌你', '屌我', '屌妳', '帝國夜色', '挑情', '春光外瀉', '春藥', '柔陰術', '毒品出售', '毒龍舔腳'
    , '洗腸射尿', '流淫', '流蜜汁', '炮友之家', '相奸', '紅蜘蛛迷奸藥', '美女b毛圖', '美女成人', '美女吞精', '美女性交真圖', '美女面對面激情裸聊', '美女高潮'
    , '美女淫穴', '美女聊天室', '美女視頻聊天室', '美女祼聊', '美女激情視頻網', '美幼', '美穴', '美乳', '美乳美穴', '美乳鬥豔', '美臀夾陰', '美臀嫰穴', '美騷婦'
    , '美體豔姿', '胡瘟', '虐奴', '虐戀花園', '要色色', '訂購大冰磚', '訂購苯基丙酮', '訂購氯胺酮', '訂購鹽酸羥亞胺', '迫奸', '風騷欲女', '風��淫蕩', '風豔閣'
    , '食精', '香水型迷奸藥', '香煙迷藥催眠迷幻藥', '原味絲襪', '哭母', '哭爸', '唐僧和粉塵女子的性愛生活', '套弄花心', '射奶', '射爽', '射精', '射顏', '恥辱輪奸'
    , '拳交', '捏你鶏巴', '捏弄', '桃園蜜洞', '浪女', '浪叫', '浪穴', '浪婦', '浴尿', '浴室亂倫', '浴室幹騷女系列', '海洛因', '狼友', '神經病', '秘唇', '粉穴'
    , '粉屄', '粉紅穴', '胯下呻吟', '胸濤乳浪', '草你娘', '草你媽', '草你媽', '草擬媽', '迷幻藥', '迷失禦花園', '迷奸', '迷奸系列', '迷奸香水', '迷奸藥', '迷情水'
    , '迷情藥製作方法', '迷魂藥', '迷魂藥三唑侖', '迷藥', '迷藥迷情藥', '針孔偷拍', '馬白勺', '高效三唑侖', '高級逼', '高清性愛', '高潮白漿', '高潮集錦', '高麗棒子'
    , '鬼畜輪奸', '鬼輪姦', '假陽具插穴', '做愛', '做愛自拍', '做愛電影', '做愛圖片', '偷拍美穴', '偷窺圖片', '偷歡照片', '動漫色圖', '娼', '婊子', '婬亂軍團'
    , '寂寞自摸', '密穴', '密穴貼圖', '採花堂', '採花網', '梅花屄', '欲仙欲死', '欲仙欲浪', '欲海天龍傳', '殺你一家', '殺你全家', '淩辱', '淫B', '淫女', '淫水'
    , '淫叫', '淫奴', '淫母', '淫汁', '淫穴', '淫穴裡騷水', '淫穴騷水', '淫奸電影', '淫肉誘惑', '淫色', '淫色貼圖', '淫告白', '淫妞', '淫妹', '淫妻', '淫妻交換'
    , '淫姐', '淫店', '淫東方', '淫河', '淫娃', '淫流', '淫虐', '淫師蕩母', '淫書', '淫浪', '淫婦', '淫情', '淫液', '淫貨', '淫絲蕩襪', '淫腔', '淫亂工作'
    , '淫亂診所', '淫亂潮吹', '淫亂熟女', '淫逼', '淫圖', '淫網', '淫蜜', '淫慾', '淫樣', '淫漿', '淫賤', '淫戰群P', '淫蕩迷情藥', '淫蕩貴婦', '淫糜', '淫聲浪語'
    , '淫穢', '淫穢', '淫穢bt電影', '淫穢圖片', '淫獸學園', '淫癡', '淫魔', '淫驢屯', '爽穴', '猖妓', '猛插', '猛操狂射', '現代情色小說', '羞恥母', '聊色'
    , '處女開包', '被幹', '被操', '販賣king粉', '販賣搖頭丸', '逍遙遊論壇', '速效迷奸藥', '造愛', '野外性交', '陰戶', '陰毛', '陰水', '陰穴新玩法', '陰屄', '陰門'
    , '陰阜', '陰阜高聳', '陰莖插小穴', '陰道圖片', '雪腿玉胯', '麻古製作工藝', '婷婷激情聊天室', '媚藥少年', '就去日', '廁奴', '廁所偷拍', '廁所盜攝', '扉之陰'
    , '掰穴', '掰穴打洞', '掰穴皮卡丘', '提供K粉', '提供冰毒', '提供氯胺酮', '提供鹽酸羥亞胺', '插b', '插比', '插穴', '插穴手淫', '插穴止癢', '插穴圖', '插老師穴'
    , '插你媽', '插姐姐嫩穴', '插後庭', '插陰莖', '插進', '插逼', '插暴', '換妻', '朝天穴', '氯胺酮出貨', '氯胺酮技術轉讓', '氯胺酮到貨', '氯胺酮訂購', '氯胺酮電話'
    , '無毛穴', '無毛美少女', '無套自拍', '無碼長片', '無碼炮圖', '無碼做愛', '無碼淫女', '無碼淫漫', '無碼無套', '無碼精選', '無碼體驗', '發浪', '發騷'
    , '硝酸甘油炸藥製造', '童顏巨乳', '絲襪足交', '絲襪高跟', '絲襪淫婦', '腚', '菅野亞梨沙迅雷下載', '菊花洞', '街頭扒衣', '買胡椒基甲基酮', '買賣小冰磚'
    , '買賣四氫吡喃酮', '買賣黃麻素', '買賣鹽酸羥亞胺', '超毛大鮑', '酥穴', '酥胸誘惑', '酥癢', '開苞', '陽具', '陽痿', '集體性愛', '集體淫', '黃牙籤出售'
    , '黃色成人網站', '黃色妹妹a級大片', '黃色妹妹a級大片', '黑毛屄', '黑屄', '黑逼', '亂交', '亂倫', '亂輪', '傻比', '塞你公', '塞你母', '塞你老母', '塞你老師'
    , '塞你爸', '塞你娘', '媽B', '媽比', '媽白勺', '媽批', '媽的', '媽媽色', '媽逼', '嫐屄', '幹78', '幹７８', '幹GY', '幹ＧＹ', '幹一家', '幹七八', '幹人也'
    , '幹入', '幹女也', '幹他', '幹他媽', '幹它', '幹尼', '幹穴', '幹全家', '幹她', '幹她媽', '幹死', '幹死你', '幹汝', '幹你', '幹你老比', '幹你老母', '幹你良'
    , '幹你娘', '幹你媽', '幹你媽b', '幹你媽逼', '幹我', '幹牠', '幹妳', '幹妳老母', '幹妳娘', '幹妳馬', '幹妳媽', '幹拎娘', '幹林', '幹炮', '幹砲', '幹勒'
    , '幹啦', '幹您', '幹您娘', '幹逼', '幹機', '幹機掰', '幹雞', '幹爆', '微型袖珍手狗', '想上你', '惹火自拍', '愛幼閣', '愛色cc', '愛妻淫穴', '愛液', '愛液橫流'
    , '愛愛', '搖頭丸', '搖頭丸', '新金瓶梅', '極品奶妹', '極品白虎', '極品波神', '極品波霸', '極品金髮美女美穴圖', '歇逼', '經典炮圖', '群P', '群交', '群交亂舞'
    , '群奸', '群奸亂交', '群奸輪射', '群陰會', '群魔色舞', '聖泉學淫', '萬淫堂', '裙下風光', '裙內偷拍', '跨下呻吟', '農夫電影', '逼毛', '逼奸', '逼樣', '逼癢'
    , '嫖妓指南', '嫖娼', '嫩b', '嫩BB', '嫩女', '嫩奶', '嫩穴', '嫩屄', '嫩逼', '嫩鮑', '嫩鮑魚', '嫩縫', '對準桃源洞口', '摳穴', '摸你鶏巴', '摸陰蒂', '漏逼'
    , '瑪雅網', '瘋狂抽送', '瘋狗', '監禁陵辱', '碧香亭', '精液', '精液浴', '精液榨取', '緄', '緊穴', '緊縛淩辱', '舔B', '舔奶', '舔穴', '舔屁眼', '舔弄大陰唇'
    , '舔弄小雞雞', '舔屄', '舔腳', '舔逼', '舔雞巴', '蒙汗藥', '蜜穴', '蜜洞', '蜜桃成熟時', '裸聊網站', '裸陪', '裸照圖片', '裸露自拍', '裸體少婦', '裹本'
    , '製作氯胺酮', '製作鹽酸羥亞胺', '製造緬古合成', '製造緬古合成', '誘色uu', '誘姦', '誘惑視頻', '豪乳', '銀民吧', '劌', '噴精', '噴霧蒙汗藥', '墮淫', '嫵媚挑逗'
    , '慰春情', '撅起大白腚', '暴力虐待', '暴奸', '暴乳', '暴淫', '暴幹', '歐美大乳', '歐美無套', '潮噴', '熟女亂倫', '熟女顏射', '熟婦騷器', '窮逼', '線上激情電影'
    , '蓮花逼', '蝴蝶逼', '調教性奴', '調教虐待', '豬操', '賣手槍', '賣比', '賣海洛因', '賣淫', '賣騷', '賤', '賤B', '賤bi', '賤人', '賤比', '賤貨', '賤逼', '賤種'
    , '賫', '輪奸', '輪暴', '輪操', '銷售king粉', '銷售乙醚', '銷售天然咖啡因', '銷售水晶冰', '銷售北朝鮮冰', '銷售可哥精', '銷售左旋麻黃素', '銷售甲基苯丙'
    , '銷售冰古', '銷售苯基丙酮', '銷售純古', '銷售麻古果子', '銷售麻黃素', '銷售間苯三酚', '銷售黃綠牙籤', '銷售羥基環戊基', '銷售趙氏弓弩', '銷售鄰氯苯晴'
    , '銷售鹽酸氯胺酮', '銷售鹽酸羥亞胺', '銷魂洞', '鋝', '靠北', '靠母', '靠爸', '魅惑巨乳', '懆您娘', '懆您媽', '操b', '操B指南', '操人也', '操女也', '操比'
    , '操他', '操母狗', '操穴', '操穴噴水', '操她', '操死', '操你', '操你媽', '操我', '操妳', '操妻', '操屄', '操射', '操爽', '操蛋', '操腫', '操逼', '操機掰'
    , '操爛騷婦', '操爛騷貨', '機8', '機Y', '機Ｙ', '機八', '機巴', '機叭', '機芭', '機掰', '激凸走光', '激情打炮', '激情交友', '激情聊天', '激情圖片', '激情裸體'
    , '激情潮噴', '激插', '蕆', '蕩女', '蕩妹', '蕩婦', '閶', '龜公', '龜兒子', '龜孫子', '龜頭對準陰道', '濕穴', '濕身誘惑', '濫B', '濫比', '濫交', '濫貨', '濫逼'
    , '縱情兵團', '賽你老母', '賽妳阿母', '闃', '鴻圖記', '點色論壇', '翹臀嫩穴', '翹臀嫩逼', '豐唇豔姬', '雙管獵槍買賣', '雙龍入洞', '雜交', '雜種', '雞８', '雞Y'
    , '雞Ｙ', '雞八', '雞巴', '雞巴暴脹', '雞叭', '雞奸', '雞吧', '雞芭', '雞掰', '顏射', '顏射自拍', '顏騎', '懶叫', '懶教', '爆乳人妻', '爆乳娘', '爆操', '獸交'
    , '獸奸', '癟三', '癡乳', '鶏8', '鶏八', '鶏女', '鶏巴', '鶏奸', '鶏吧', '鶏院', '麗春苑', '罌粟', '騷B', '騷女', '騷女叫春', '騷水', '騷包', '騷母', '騷穴'
    , '騷卵', '騷乳', '騷妹', '騷妻', '騷姐姐', '騷屄', '騷姨媽', '騷洞', '騷浪', '騷浪美女', '騷婦掰B', '騷婦露逼', '騷貨', '騷棍', '騷棒', '騷逼', '騷逼噴水'
    , '騷鶏', '灌滿精液', '爛b', '爛比', '爛袋', '爛貨', '爛逼', '蘚鮑', '覽叫', '露B', '露穴', '露屄', '露陰照', '露逼', '鷄巴', '囅', '鹽酸氯胺酮', '鹽酸羥亞胺'
    , '豔母淫臀', '豔乳', '豔婦淫女', '豔情小說', '豔舞淫業']
    for (const i of foreign3) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes(("fuck"))) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("commin")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("knod")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("cunt")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("dotard")) {
        return true;
    }

    text = newtext.replace(/[^a-z]/gi, '')
    if (text.includes("dyke")) {
        return true;
    }

    const emoji = ["🖕🏻", "👌🏻👈🏻", "👉🏻👌🏻", "🤏🏻", "🖕", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿"]
    for (const i of emoji) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const mh = ["노시개", "노알라", "뇌사모", "뇌물현","응디시티"]
    for (const i of mh) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const ji = ["귀걸이아빠", "달창", "대깨문", "문재앙", "문죄앙", "문죄인", "문크예거", "훠훠훠", "문빠"]
    for (const i of ji) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const gh = ["근혜어", "길라임", "나대블츠", "닭근혜", "댓통령", "레이디가카", "바쁜벌꿀", "수첩공주", "유신공주", "유체이탈화법", "칠푼이", "쿼터갓"]
    for (const i of gh) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const jh = ["반인반신", "데미갓", "박정희"]
    for (const i of jh) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    const cs = ["간철수"]
    for (const i of cs) {
        if (text.includes(i)) {
            return true;
        }
    }

    text = newtext.replace(/[^가-힣]/gi, '')
    text = text.replace(/카톡/gi,"")
    text = text.replace(/카페/gi,"")
    text = text.replace(/하다가/gi,"")
    text = text.replace(/먹다가/gi,"")
    text = text.replace(/카와이/gi,"")
    text = text.replace(/카츠/gi,"")
    text = text.replace(/카레/gi,"")
    text = text.replace(/니가/gi,"")
    text = text.replace(/내가/gi,"")
    text = text.replace(/너가/gi,"")
    text = text.replace(/우리가/gi,"")
    text = text.replace(/너희가/gi,"")
    const mb = ["가카", "이명박근혜", "다스는누구겁니까?"]
    for (const i of mb) {
        if (text.includes(i)) {
            return true;
        }
    }


    return false;
}
