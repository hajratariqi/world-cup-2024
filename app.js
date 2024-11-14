var main = document.getElementById('main')
let options = {month: 'short', day: 'numeric' };
let matchDate = new Date('18 October 2024').toLocaleDateString('en-US', options);
let secMatchDate = new Date('20 October 2024').toLocaleDateString('en-US', options);
let thirdMatchDate = new Date('17 October 2024').toLocaleDateString('en-US', options);
let fourthMatchDate = new Date('15 October 2024').toLocaleDateString('en-US', options);
let fivethMatchDate = new Date('14 October 2024').toLocaleDateString('en-US', options);
let sixthMatchDate = new Date('13 October 2024').toLocaleDateString('en-US', options);



const Matches = function(stage, date, team){
    this.stage = stage
    this.date = date
    this.team = team
//     this.images = []
//     this.heading = []
// console.log(this.heading);

//     for (var i of team) {
//         if(i && i['teamName']){
//         this.heading.push(i['teamName']);
//         }
        
        
//         if (i && i['img']) {
//             let imgElem = new Image();
//             let imgSrc = imgElem.src = i['img'];
//             this.images.push(imgSrc);
            
//         }else{
//             console.log('not found');
//         }
//     }
}

let teamMatch1 = [
    {img: './Flag-NewZealand.png',teamName: 'New Zealand',  score: '158/5 (20)'},
    {img: './africa.jpg',teamName: 'South africa',  score: '126/8 (20)'},
    {wonScore: 'NZ-W won by 32 runs', teamImg: './nz-w.jpeg'}

]
let teamMatch3 = [
    {img: './Flag-NewZealand.png',teamName: 'New Zealand',  score: '128/9 (20)'},
    {img: './westIndian.jpg',teamName: 'West Indian Women',  score: '120/8 (20)'},
    {wonScore: 'NZ-W won by 8 runs', teamImg: './nz-w.jpeg'}
]
let teamMatch4 = [
    {img: './Flag-NewZealand.png',teamName: 'Australia Women',  score: '134/5 (20)'},
    {img: './africa.jpg',teamName: 'South africa Women',  score: '135/2 (17.2)'},
    {wonScore: 'SA-W won by 8 wickets (16 balls left)', teamImg: './pakistanTeam.webp'}
]
let teamMatch5 = [
    {img: './england.jpg',teamName: 'England Women',  score: '171/7 (20)'},
    {img: './westIndian.jpg',teamName: 'West Indian women',  score: '144/4 (18)'},,
    {wonScore: 'WI-W won by 6 wickets (16 balls left)', teamImg: './wi-w.webp'}
]
let teamMatch2 = [
    {img: './Flag-NewZealand.png',teamName: 'New Zealand Women',  score: '110/6(20)'},
    {img: './pakistan.png',teamName: 'Pakistan Women',  score: '56(11.4)'},
    {wonScore: 'NZ-W won by 564 runs', teamImg: './nz-w.jpeg'}
]
let teamMatch6 = [
    {img: './Flag-NewZealand.png', teamName: 'Australia Women', score: '151/8(20)'},
    {img: './india.webp',teamName: 'India women',  score: '142/9(20)'},
    {wonScore: 'AU-W won by 9 runs', teamImg: './pakistanTeam.webp'}
]

let matches =  [
new Matches('final', matchDate, teamMatch1),
new Matches('semi-final', secMatchDate, teamMatch2),
new Matches('semi-final', thirdMatchDate, teamMatch3),
new Matches('group-stage', fourthMatchDate, teamMatch4),
new Matches('group-stage', fivethMatchDate, teamMatch5),
new Matches('group-stage', sixthMatchDate, teamMatch6),
]

matches.map((card) =>(
    main.innerHTML += 
`<div class='card'>
    <div class='row'>
        <h4>${card.stage}</h4>
        <h4>${card.date}</h4>
    </div>
     <div>
     <div>
      ${card.team.map((i) => (
    `<div>
      <div class='row'>
         <div class='row-center'>
            ${i.img ? `<img class='flag' src=${i.img} alt="Team Image"/>` : ''}
            ${i.teamName ? `<h4>${i.teamName}</h4>` : ''}
        </div>
        ${i.score ? ` <p>${i.score}</p>` : ''}
      </div>
         <div class='row'>
            ${i.wonScore ? ` <p>${i.wonScore}</p>` : ''}
            ${i.teamImg ? `<img class='flag' src=${i.teamImg} alt="Team Image"/>` : ''}
        </div>
    </div>`
      ))};

      </div>
    </div>

</div>`
))