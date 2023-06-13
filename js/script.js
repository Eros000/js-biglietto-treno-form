const myButton = document.getElementById('my-button')

myButton.addEventListener('click',
    function (){

        const km = parseInt(document.getElementById('my-km').value)

        console.log('km', km, typeof km)

        const age = parseInt(document.getElementById('my-age').value)

        console.log('age', age, typeof age)

        let price = (km*0.21)

        if (age < 18){
            price =(km*(0.21*0.8))
        }

        if (age > 65){
            price =(km*(0.21*0.6))
        }

        console.log ('price', price, typeof price)

        
    }

);


