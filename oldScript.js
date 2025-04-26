// old version V

$(document).ready(function(){
    let pokedex = fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
    // black and white
    // let pokedex = fetch('https://pokeapi.co/api/v2/pokemon?limit=156&offset=493')

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
                
                        
                        'Network response was bad: '
                        , 
                        response.statusText
                        

                    )
                    

                }

            return response.json
            (



            )


        }


    ).then
    (


        result=>
        {


            for( x of result.results)
            {
                let pokemon = fetch(x.url)

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
                            
                                    
                                    'Network response was bad: '
                                    , 
                                    response.statusText
                                    

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
                        <div class='${data.types[0]?.type.name} pokemon'>
        
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


        }
        

    )

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
                        
                        prompt("that isn't a pokemon")
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
                $('#pokemonDisplay').html(`
                <div class='${data.types[0]?.type.name} ${data.name}'>

                    <h2> ${data.name} </h2>

                    <h3> ID: ${data.id} </h3>

                    <img src="${data.sprites.front_default}" alt="">

                    <p> base experience: ${data.base_experience}</p>
                    
                    <p> main type: ${data.types[0]?.type.name}</p>
                    
                    <p> ability: ${data.abilities[0]?.ability.name}</p>

                    

                </div>
                `)                    

            }


        )

    }

    $('#getThatPokemon').on('click',function(){

        let pokemonName = document.getElementById('name').value

        addPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)

    })

})