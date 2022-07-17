
export default function generator() {

        let cardList = [];
        for (let i = 1; i <= 13; i++) {
                cardList.push({ "suit": "diamond", "value": i });
        }

        for (let i = 1; i <= 13; i++) {
                cardList.push({ "suit": "spade", "value": i });
        }

        for (let i = 1; i <= 13; i++) {
                cardList.push({ "suit": "club", "value": i });
        }

        for (let i = 1; i <= 13; i++) {
                cardList.push({ "suit": "heart", "value": i });
        }

        return cardList;

}
