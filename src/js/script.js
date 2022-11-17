export default function handleModeChange(mode,setMode){
    const darkMode=document.querySelector('#darkMode');
    const lightMode=document.querySelector('#lightMode');
    const  bgNavElements=document.querySelectorAll('.changeBack')
   
    if(mode === 'dark'){
        mode =activateDarkMode(lightMode,darkMode,bgNavElements,setMode)
    }
    
    else{
        mode =activateLightMode(lightMode,darkMode,bgNavElements,setMode)
    }

    darkMode.addEventListener('click',()=>{
        mode =activateDarkMode(lightMode,darkMode,bgNavElements,setMode)
    })

    lightMode.addEventListener('click',()=>{
        mode =activateLightMode(lightMode,darkMode,bgNavElements,setMode)
    })
    return mode;
  }

  function activateDarkMode(lightMode,darkMode,bgNavElements,setMode){
    
    lightMode.classList.remove('d-none');
    darkMode.classList.add('d-none');
    document.body.classList.remove('lightElement');
    document.body.classList.add('darkElement');
    bgNavElements.forEach(element => {
        element.classList.remove('bgNav');
        element.classList.add('bgNavDark')
    })
    const mode='dark'
    setMode('dark');
    return mode;
  }

  function activateLightMode(lightMode,darkMode,bgNavElements,setMode){
    lightMode.classList.add('d-none');
    darkMode.classList.remove('d-none');
    document.body.classList.add('lightElement');
    document.body.classList.remove('darkElement');
    bgNavElements.forEach(element => {
        element.classList.add('bgNav');
        element.classList.remove('bgNavDark')
    })

    const mode='light';
    setMode('light');
    return mode
  }

 