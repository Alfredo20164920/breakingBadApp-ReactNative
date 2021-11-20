export interface LoginInterfece {
    email: String,
    password: String
}

export interface CharacterInterface{
    char_id: string,
    name: string,
    birthday: string,
    occupation: [string],
    img: string,
    status: string,
    nickname: string,
    portrayed: string,
}

export interface PhraseInterface{
    id: string,
    quote: string,
    author: string,
    series: string
}