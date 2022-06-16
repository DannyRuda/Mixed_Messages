const youtubers = [
    {
        name: 'HandofBlood',
        reactions: ['took his punishment wheel with him', 'lost his mustache out of shock', 'lost his mustache out of enjoyment', 'says "War enttäuschend, bin ich early"', 'is lost in space digga'],
        pronoun: 'He'
    },
    {
        name: 'Pietsmiet',
        reactions: ['sticks his tongue out', 'takes a sip from his beer', 'screams agressively'],
        pronoun: 'He'
    },
    {
        name: 'Mahluna',
        reactions: ['laughs nervously', 'laughs awkwardly', 'laughs excited', 'smiles desperately'],
        pronoun: 'She'
    }
];

const actions = ['meets an excited Viewer in public','wins the "Deutscher Computerspielpreis"', 'gets a passenger ride in a race car', 'loses the last round in Valorant'];

function randomNum(arraylength) {
    return Math.floor(Math.random()*arraylength);
};

function generateSentence(numYoutuber) {
    return `${youtubers[numYoutuber].name} ${actions[randomNum(actions.length)]}. ${youtubers[numYoutuber].pronoun} ${youtubers[numYoutuber].reactions[randomNum(youtubers[numYoutuber].reactions.length)]}!`;
}

console.log(generateSentence(randomNum(youtubers.length)));