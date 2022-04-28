$(document).ready(function(){
		var quoteSource=[
		{
			quote:"I know I'm a handful but that's why you got two hands.",
            name:"😀"
	    },
	    {
	    	quote:"You can't make everyone happy. You're not an avocado.",
	        name:"😀" 
	    },
	    {
	    	quote:"I tried to be normal once. Worst two minutes of my life.",
	    	name:"😀"
	    },
	    {
	    	quote:"Life is like looking for your phone, most of the time it's in your hand.",
	    	name:"😀"
	    },
	    {
	    	quote:"Are you really living life or just paying bills until you die?",
name:"😀"
	    },
	    {
	    	quote:"When life puts you in tough situations, don't say why me? Just say try me!",
	    	name:"😀"
	    },
	    {
	    	quote:"If you stumble, make it part of the dance.",
	    	name:"😀"
	    },
	    {
	    	quote:"Life is too short for fake butter, cheese, or people.",
	    	name:"😀"
	    },
	    {
	    	quote: "You cannot be anything if you want to be everything.",
	    	name:"😀"
	    },
	    {
	    	quote:"Embrace the glorious mess that you are." ,
	    	name:"😀"
	    },
	    {
	    	quote:"No matter how big a hammer you use, you can't pound common sense into stupid people.",
	    	name:"😀"
	    },
	    {
	    	quote:"Laughter is the shock absorber that eases the blow of life.",
	    	name:"😀"
	    },
	    {
	    	quote:"It will never be perfect. Make it work." ,
	    	name:"😀"
	    },
	    {
	    	quote:"Hope for the best but always be ready for the mess.",
	    	name:"😀"
	    },
	    {
	    	quote:"Life is short... and so am I.",
	    	name:"😀"
	    },
	    {
	    	quote: "Life is short. Smile while you still have teeth.",
	    	name:"😀"
	    },
	    {
	    	quote:"With great power comes great electricity bill.",
	    	name:"😀"
	    },
	    {
	    	quote:"If you think you are too small to make a difference, try sleeping with a mosquito.",
	    	    	name:"😀"
	    },
	    

	];
		

		$('#quoteButton').click(function(evt){
			
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();			
			evt.preventDefault();			
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'								'+newQuoteGenius+'</p>');
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};
	
	});
		
});