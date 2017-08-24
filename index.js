/*Vue.component("lista",{
    template: "#lista",
    props: ['pers']
});    
*/
var app = new Vue({
  	el: '#app',
    data: {
    	personas: [],
        Detalles: {}
    },

    mounted: function() {
        var _this = this;

    	$.ajax({
            url: "http://10.60.23.22:50292/api/Personas/" ,
            type: "GET"
            

        }).done(function(response){
            for(var i=0; i<response.length; i++){
               console.log(response[i]);
            }
            _this.personas = response;

            console.log(this.personas);                

        }).fail(function(err){
          
            console.log(err);
            
        });

    },
    methods:{
        mostrarDetalles(persona){
            alert("Es con la persona "+ persona.nombre);
            var _this = this;
            _this.Detalles = persona;
        },

        añadir(){
           $.ajax({
                url: "http://10.60.23.22:50292/api/Personas/" ,
                type: "POST", 
                data: ""

            }).done(function(response){
                

                              

            }).fail(function(err){
              
                console.log(err);
                
            }); 
        }
    }

});