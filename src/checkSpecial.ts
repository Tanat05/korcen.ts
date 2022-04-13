export function special(text: string|any): boolean {
    const newtext = text.toLowerCase()
    const emoji = ["🖕🏻", "👌🏻👈🏻", "👉🏻👌🏻", "🤏🏻", "🖕", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿"]
    for (const i of emoji) {
        if (newtext.includes(i)) {
            return true;
        }
    }
    
    return false;
}