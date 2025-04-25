$(document).ready(function(){
    let pokedex = fetch('https://pokeapi.co/api/v2/pokemon?limit=156&offset=493')

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
                        <div class='${data.types[0]?.type.name}'>
        
                            <h2> ${data.name} </h2>

                            <img src="${data.sprites.front_default}" alt="">

                            <p>${data.base_experience}</p>

                        </div>
                        `)                    

                    }


                )


            }


        }
        

    )

})