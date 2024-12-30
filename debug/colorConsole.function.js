const Format = {
    Reset:"\x1b[0m",
    Bright:"\x1b[1m",
    Dim:"\x1b[2m",
    Underscore:"\x1b[4m",
    Blink:"\x1b[5m",
    Reverse:"\x1b[7m",
    Hidden:"\x1b[8m",
}

const Background = {
    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",
}

const Foreground = {
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
}
const DetermineBG = (BG) => {
    let str = "";
    if(BG  == "Black")str= Background.BgBlack;
    if(BG  == "Red")str= Background.BgRed;
    if(BG  == "Green")str= Background.BgGreen;
    if(BG  == "Yellow")str= Background.BgYellow;
    if(BG  == "Blue")str= Background.BgBlue;
    if(BG  == "Magenta")str= Background.BgMagenta;
    if(BG  == "Cyan")str= Background.BgCyan;
    if(BG  == "White")str= Background.BgWhite;
    return str;
}
const DetermineFG = (FG) => {
    let str = "";
    if(FG  == "Black")str= Foreground.FgBlack;
    if(FG  == "Red")str= Foreground.FgRed;
    if(FG  == "Green")str= Foreground.FgGreen;
    if(FG  == "Yellow")str= Foreground.FgYellow;
    if(FG  == "Blue")str= Foreground.FgBlue;
    if(FG  == "Magenta")str= Background.BgMagenta;
    if(FG  == "Cyan")str= Foreground.FgCyan;
    if(FG  == "White")str= Foreground.FgWhite;
    return str;
}
const DetermineFormat = (Form) => {
    let str ="";
    if(Form == "Dim")str = Format.Dim;
    if(Form == "Bright")str = Format.Bright;
    if(Form == "Underscore")str = Format.Underscore;
    if(Form == "Blink")str = Format.Blink;
    return str;
}

let ColorConsole = (Fg, Bg, Frm, Log) => {
    let str = `${DetermineFG(Fg) + DetermineBG(Bg) + DetermineFormat(Frm)}%s\x1b[0m`;
    console.log(str, "[ECHO_LOG] " + Log);

}

module.exports = ColorConsole;
