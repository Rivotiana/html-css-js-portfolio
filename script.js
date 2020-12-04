
console.log('hitany ee')

var themedot = document.getElementsByClassName('theme-dot')
for(var i=0;themedot.length >i ;i++){
    themedot[i].addEventListener('click',function(){
        var mode= this.dataset.mode
        console.log('voklikyy',mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if (mode=='light'){
        document.getElementById('theme-style').href='default.css'
    }
    if (mode=='blue'){
        document.getElementById('theme-style').href='blue.css'
    }
    if (mode=='green'){
        document.getElementById('theme-style').href='green.css'
    }
    if (mode=='purple'){
        document.getElementById('theme-style').href='purple.css'
    }
}




