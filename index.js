//QUESTION 1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

//CONSTRUCTOR METHOD

const instagramPost = new Object();
instagramPost.handle = 'nathanielblow';
instagramPost.content = 'HallelujahChallenge';
instagramPost.ImgLink = 'https://instagram.fabb1-2.fna.fbcdn.net/v/t51.2885…FCUDwf6O6gYyH9tUQJkPCA&oe=63FCD3CA&_nc_sid=cff2a4';
instagramPost.NoOfViews = 3139;
instagramPost.NoOflikes = 40943;

console.log(instagramPost); 

//  QUESTION 2.Create 2 Instagram post objects from the constructor function you created above

function igPost(handle, content, ImgLink, NoOfViews, NoOflikes) {
    this.handle = handle;
    this.content = content;
    this.ImgLink = ImgLink;
    this.NoOfViews = NoOfViews;
    this.NoOflikes = NoOflikes;
}

const igPost2 = new igPost('learnfrenchwithclemence', '20 usefeul phrase', 'https://instagram.fabb1-2.fna.fbcdn.net/v/t51.2885…FCUDwf6O6gYyH9tUQJkPCA&oe=63FCD3CA&_nc_sid=cff2a4', 703, 21598);

console.log(igPost2)

const igPost3 = new igPost('cnn', 'Breaking news', 'https://instagram.fabb1-2.fna.fbcdn.net/v/t51.2885…ladwdSe4-M7i5-GHLnflJw&oe=63FBE902&_nc_sid=cff2a4', 2000, 61847);

console.log(igPost3)


//QUESTION 3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

//a.  Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function.

function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location
    }
}
const personMusa = createPerson('Musa Dawodu', 19, 'Lekki Lagos');
console.log(personMusa);

//b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createJambScores(ENG, GOVT, LIT, CRK){
    return{
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    }
}
const musaScore = createJambScores(70, 85, 82, 94);
console.log(musaScore)

// const musaScorePlus = {
//     ENG: 70,
//     GOVT: 85,
//     LIT: 82,
//     CRK: 94
// }

personMusa.createJambScores = musaScore
console.log(personMusa)

//4. What are the different ways you can clone an object? Give examples for each of them.

//a.Using Object.assign() e.g

const firstDrug = {
    name: 'panadol',
    category: 'OTC',
    expiry: 2024,
};
const anotherDrug = Object.assign({}, firstDrug);

console.log(firstDrug);
console.log(anotherDrug);
anotherDrug.name = 'paraflex';

console.log(firstDrug)
console.log(anotherDrug);


//b. Using spread syntax ...

const drug3 = { ...firstDrug};
drug3.name = 'vitamin C';

console.log(firstDrug);
console.log(drug3);

//c. Using the method JSON.parse(JSON.stringify())

const drug4 = JSON.parse(JSON.stringify(firstDrug));
drug4.name = 'Jointace';

console.log({firstDrug});
console.log({drug4});


//5. Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	//’Omoyele Sowore is the presidential candidate of AAC’

     const presidentialCandidates = {
        AAC: 'Omoyele Sowore',
        ACCORD: 'Christopher Imumolen',
         APC: 'Bola Ahmed Tinubu',
         LP: 'Peter Obi',
         NNPP: 'Rabiu Kwankwaso',
         PDP: 'Atiku Abubakar',
     }
     //enumeration method using for...in
     for(const key in presidentialCandidates) {
        console.log(presidentialCandidates[key] + 'is the presidential candidate of' + key);
       
     }