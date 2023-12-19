var language_ldb = localStorage.getItem('languages');
var theme_ldb = localStorage.getItem('theme');

/* Se cambia el tema con localStorage*/
if(theme_ldb === "1" || "2"){
    theme()
}

/* Se cambia el idioma con localStorage */
if(language_ldb === "1" || "2"){
    languages()
    }

function theme(){
    /* Se cambia el tema */
    let opcionThe = document.getElementById('theme').value;

    if (opcionThe === "1") { /* Se cambia el tema a Dark */
        document.getElementById('body').classList.remove('theme-light');
        document.getElementById('body').classList.add('theme-dark');
        document.getElementById('theme').classList.remove('theme-light');
        document.getElementById('theme').classList.add('theme-dark');
    }
    else { /* Se cambia el tema a Light */
        document.getElementById('body').classList.remove('theme-dark');
        document.getElementById('body').classList.add('theme-light');
        document.getElementById('theme').classList.remove('theme-dark');
        document.getElementById('theme').classList.add('theme-light');
    }
    /* Se guardan los datos en Local Storage */
    localStorage.setItem('theme', opcionThe) 
}


function languages(){
    /* Se cambia el idioma */
    const opcionlan = document.getElementById('languages').value;
    /* Se cambia el idioma a ingles */
    if(opcionlan === "1"){
        changeLanguage = {
            languages : {
                lanSelected : "Select language",
                opcLan1 : "English",
                opcLan2 : "Spanish",
            },
            theme : {
                theSelected : "Select theme",
                opcThe1 : "Dark",
                opcThe2 : "Light",
            },
            art1 : {
                description : "1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)",
                button : "Buy",
            },
            art2 : {
                description : "1 Kentucky burger / Sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter)",
                button : "Buy",
            },
            art3 : {
                description : "1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda 400ml",
                button : "Buy",
            },
            art4 : {
                description : "1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Filet, Coleslaw Salad, BBQ and Butter)",
                button : "Buy",            
            },
            art5 : {
                description : "1 Kentucky hamburger/Sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter) + 1 Small Potato + 1 PET Soda 400ml",
                button : "Buy",            
            },
            art6 : {
                description : "1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, Coleslaw Salad, BBQ and butter) + 1 Small Potato + 1 PET Soda 400ml",
                button : "Buy",            
            },
            art7 : {
                description : "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese, BBQ Sauce)",
                button : "Buy",            
            },
            art8 : {
                description : "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese + BBQ Sauce) + 1 Small Potato + 1 Pet 400m Soda",
                button : "Buy",            
            },
        }
    }
    /* Se cambia el idioma a español */
    else {
        changeLanguage = {
            languages : {
                lanSelected : "Selecciona el idioma",
                opcLan1 : "Ingles",
                opcLan2 : "Español",
            },
            theme : {
                theSelected : "Selecciona el tema",
                opcThe1 : "Oscuro",
                opcThe2 : "Claro",
            },
            art1 : {
                description : "1 Sándwich BBQ Crunch (1 Filete de pollo apanado)",
                button : "Comprar",
            },
            art2 : {
                description : "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla)",
                button : "Comprar",
            },
            art3 : {
                description : "1 Sándwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET 400ml",
                button : "Comprar",
            },
            art4 : {
                description : "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla)",
                button : "Comprar",            
            },
            art5 : {
                description : "1 Kentucky hamburguesa /Sandwich (1 Filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml",
                button : "Comprar",            
            },
            art6 : {
                description : "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml",
                button : "Comprar",            
            },
            art7 : {
                description : "1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar, Salsa BBQ)",
                button : "Comprar",            
            },
            art8 : {
                description : "1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar + Salsa BBQ) + 1 Papa Pequeña + 1 Gaseosa Pet 400m",
                button : "Comprar",            
            },
        }
    }

    /* Se guardan los datos en Local Storage */
    localStorage.setItem("languages", opcionlan);

    /* Se cambia el idioma */
    document.getElementById('lanSelected').textContent = (changeLanguage.languages.lanSelected);
    document.getElementById('opcLan1').textContent = (changeLanguage.languages.opcLan1);  /* Spanish*/
    document.getElementById('opcLan2').textContent = (changeLanguage.languages.opcLan2); /* English*/
    /* Se cambia el tema */
    document.getElementById('theSelected').textContent = (changeLanguage.theme.theSelected);
    document.getElementById('opcThe1').textContent = (changeLanguage.theme.opcThe1); /* Theme Dark*/
    document.getElementById('opcThe2').textContent = (changeLanguage.theme.opcThe2); /* Theme Ligth*/
    /* Se cambia la descripcion de los articulos */
    document.getElementById('des-Art-1').textContent = (changeLanguage.art1.description); /* Art-1*/
    document.getElementById('des-Art-2').textContent = (changeLanguage.art2.description); /* Art-2*/
    document.getElementById('des-Art-3').textContent = (changeLanguage.art3.description); /* Art-3*/
    document.getElementById('des-Art-4').textContent = (changeLanguage.art4.description); /* Art-4*/
    document.getElementById('des-Art-5').textContent = (changeLanguage.art5.description); /* Art-5*/
    document.getElementById('des-Art-6').textContent = (changeLanguage.art6.description); /* Art-6*/
    document.getElementById('des-Art-7').textContent = (changeLanguage.art7.description); /* Art-7*/
    document.getElementById('des-Art-8').textContent = (changeLanguage.art8.description); /* Art-8*/
    /* Se cambia la descripcion de los botones */
    document.getElementById('btn-Art-1').textContent = (changeLanguage.art1.button); /* Art-1*/
    document.getElementById('btn-Art-2').textContent = (changeLanguage.art2.button); /* Art-2*/
    document.getElementById('btn-Art-3').textContent = (changeLanguage.art2.button); /* Art-3*/
    document.getElementById('btn-Art-4').textContent = (changeLanguage.art2.button); /* Art-4*/
    document.getElementById('btn-Art-5').textContent = (changeLanguage.art2.button); /* Art-5*/
    document.getElementById('btn-Art-6').textContent = (changeLanguage.art2.button); /* Art-6*/
    document.getElementById('btn-Art-7').textContent = (changeLanguage.art2.button); /* Art-7*/
    document.getElementById('btn-Art-8').textContent = (changeLanguage.art2.button); /* Art-8*/
}







