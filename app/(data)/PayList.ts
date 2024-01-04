export const PayList: IPay[] = [
    {
        id: 1,
        name: "cash",
        img: "/pay/money.svg",
    },
    {
        id: 2,
        name: "card",
        img: "/pay/card.svg",
    }
]

export interface IPay {
    id: number;
    name: string;
    img: string;
}