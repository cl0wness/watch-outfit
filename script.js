let btnOpros = document.getElementById('btn-opros')
btnOpros.onclick = function(){
    let orderSection = document.querySelector('.order-section')
    orderSection.scrollIntoView({
        behavior: "smooth"
    })
}

let btnIdea = document.getElementById('btn-idea')
btnIdea.onclick = function(){
    let ideaSection = document.querySelector('.idea-section')
    ideaSection.scrollIntoView({
        behavior: "smooth"
    })
}

let btnContact = document.getElementById('btn-contact')
btnContact.onclick = function(){
    let contactSection = document.querySelector('.contact-section')
    contactSection.scrollIntoView({
        behavior: "smooth"
    })
}

let btnQuest = document.getElementById('btn-quest')
btnQuest.onclick = function(){
    let questSection = document.querySelector('.contact-section')
    questSection.scrollIntoView({
        behavior: "smooth"
    })
}