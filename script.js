$(document).ready(function(){

    function addPokemon(url){

        let pokemon = fetch(url)
    
        .then
        (
            

            response =>

            {


                if(
                    

                    !response.ok
                    

                    )

                    {
                        

                        throw new Error
                        (
                    
                            
                            'Network response was bad: ', response.statusText
                            

                        )
                        

                    }

                return response.json
                (



                )


            }


        ).then(

            data=>
            {
                $('body').append(`
                <div class='${data.types[0]?.type.name} ${data.name}'>

                    <h2> ${data.name} </h2>

                    <img src="${data.sprites.front_default}" alt="">

                    <p>base experience: ${data.base_experience}</p>
                    
                    <p>type: ${data.types[0]?.type.name}</p>
                    
                    <p>ability: ${data.abilities[0]?.ability.name}</p>

                    

                </div>
                `)                    

            }


        )

    }

    // add drillbur
    addPokemon('https://pokeapi.co/api/v2/pokemon/529/')
    
    // add emboar
    addPokemon("https://pokeapi.co/api/v2/pokemon/500/")

    // add lugia
    addPokemon("https://pokeapi.co/api/v2/pokemon/249/")

    // add spiritomb
    addPokemon("https://pokeapi.co/api/v2/pokemon/442/")

    // add gible
    addPokemon("https://pokeapi.co/api/v2/pokemon/443/")

    // add trubbish
    addPokemon("https://pokeapi.co/api/v2/pokemon/568/")

    // add krookodile
    addPokemon("https://pokeapi.co/api/v2/pokemon/553/")

    // add darkrai
    addPokemon("https://pokeapi.co/api/v2/pokemon/491/")

    // add mamoswine
    addPokemon("https://pokeapi.co/api/v2/pokemon/473/")

    // add joltik
    addPokemon("https://pokeapi.co/api/v2/pokemon/595/")

})

