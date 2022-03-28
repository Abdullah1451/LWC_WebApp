import { LightningElement } from 'lwc';

export default class NavigationBar extends LightningElement {
    
    // constructor(){
    //     super();
    //     console.log(" constructor called");
    // }

    navSlide(event){
        const evt = event.currentTarget;
        const burger = this.template.querySelector('.burger');
        const nav = this.template.querySelector('.navbar-links');
        const navLinks = this.template.querySelectorAll('.navbar-links li')
        nav.classList.toggle('nav-active');    

        //console.log(navLinks);

        for (let [index, link] of Object.entries(navLinks)) {
            if(link.style.animation){
                link.style.animation = '';
                nav.style.display = '';
                // link.style.opacity = '0';
            }
            else{
                nav.style.display = 'flex';
                // link.style.opacity = '1';
                link.style.animation = 'navLinkFade 0.5s ease forwards ';}
            }
        
        //burger animation

        burger.classList.toggle('toggle');


        // [...navLinks].forEach((link, index) => {
        //     link.style.animation = 'navLinkFade 0.5s ease forwards $(index/7)s';
        //     console.log(index/7);
        // })
    }
}

