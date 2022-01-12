// function initInicio() {

//     function renderCards() {

//         const xhr = new XMLHttpRequest
//         xhr.open('get', 'plantillas/card.hbs')
//         xhr.addEventListener('load', () => {
//             if(xhr.status == 200) {
//                 let plantillaHbs = xhr.response
//                 //console.log(plantillaHbs)
    
//                 var template = Handlebars.compile(plantillaHbs);
//                 let html = (template({  cards: cards }))
    
//         document.getElementById('cards-container').innerHTML = html
//             }
//         })
//         xhr.send()
//     }
//         renderCards()


//         function Card(image,heading,price){
//             this.image = image
//             this.heading = heading
//             this.price = price


//             this.appendTo= (destinationElement)=>{ 

//                 let  card = document.createElement('article')
//                 card.classList.add('card__article')
//                 card.addEventListener ('click', (e)=>{
//                     e.preventDefault()
//                     console.log(this);

//                 })
                
//                 destinationElement.appendChild(card)
//             }
//     }
        
    
//     const cards = [ 
//         new Card("solar_ash.png","Galaxy Watch 1.3' ","$67.500"), 
//         new Card("age_of_empires_IV.jpg","Galaxy Watch 4","$36.999"), 
//         new Card("age_of_empires_III.jpg ","Galaxy Watch 4 Pink","$38.999"), 
//         new Card("battlefield_2024.jpg","Galaxy Watch 3","$42.499"), 
//         new Card("grand_theft_auto.jpg","Galaxy Watch Active 2","$35.990"), 
//         new Card("god_of_war.jfif","Galaxy Watch Active","$32.999"), 
//         new Card("guardianes_de_la_galaxia.png","Apple Watch Series 6","$69.999"), 
//         ]
    
//         const elemCardsContainer = document.querySelector('.cards-container')
        
//     }

