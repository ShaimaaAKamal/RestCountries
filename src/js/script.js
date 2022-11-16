export default function handleModeChange(mode,setMode){
    const darkMode=document.querySelector('#darkMode');
    const lightMode=document.querySelector('#lightMode');
    const  bgNavElements=document.querySelectorAll('.changeBack') 
    console.log(bgNavElements); 
    
    if(mode === 'dark'){
        lightMode.classList.remove('d-none');
        darkMode.classList.add('d-none');
        document.body.classList.remove('lightElement');
        document.body.classList.add('darkElement');
        bgNavElements.forEach(element => {
            element.classList.remove('bgNav');
            element.classList.add('bgNavDark')
        })
        mode='dark'
        setMode('dark');

    }
    else{
        lightMode.classList.add('d-none');
        darkMode.classList.remove('d-none');
        document.body.classList.add('lightElement');
        document.body.classList.remove('darkElement');
        bgNavElements.forEach(element => {
            element.classList.add('bgNav');
            element.classList.remove('bgNavDark')
        })

        mode='light'
        setMode('light');


    }

    darkMode.addEventListener('click',()=>{
        lightMode.classList.remove('d-none');
        darkMode.classList.add('d-none');
        document.body.classList.remove('lightElement');
        document.body.classList.add('darkElement');
        bgNavElements.forEach(element => {
            element.classList.remove('bgNav');
            element.classList.add('bgNavDark')
        })

        mode='dark';
        setMode('dark');


    })

    lightMode.addEventListener('click',()=>{
        lightMode.classList.add('d-none');
        darkMode.classList.remove('d-none');
        document.body.classList.add('lightElement');
        document.body.classList.remove('darkElement');
        bgNavElements.forEach(element => {
            element.classList.add('bgNav');
            element.classList.remove('bgNavDark')
        })

        mode='light';
        setMode('light');

    })



    return mode;

  }