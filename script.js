	function swapDivs(div1, div2, div3, div4, div5, div6) {
		let intro = document.getElementById("#intro");
		let about = document.getElementById("#about");
		let contact = document.getElementById("#contact");
		let media = document.getElementById("#media");
		let shows = document.getElementById("#shows");
		let lyrics = document.getElementById("#lyrics");
		$(div1).fadeIn("slow");
		$(div2).hide();
		$(div3).hide();
		$(div4).hide();
		$(div5).hide();
		$(div6).hide();

	}
//jquery to show/hide divs
$(document).ready(function() {
        $("#intro").show();
        $("#about").hide();
        $("#contact").hide();
		$("#navbar").hide();
		$("#shows").hide();
		$("#media").hide();
		$("#lyrics").hide();
        	$("#enterButton").click(function() {
				swapDivs(about, intro, contact, shows, media, lyrics);
				$("#navbar").fadeIn("slow");
        	})
        	$("#homePage").click(function() {
				swapDivs(intro, about, contact, shows, media, lyrics);
				$("#navbar").hide();
        	})
        	$("#contactButton").click(function() {
        		swapDivs(contact, intro, about, shows, media, lyrics);
				$("#navbar").fadeIn("slow");
        	})
        	$("#aboutButton").click(function() {
				swapDivs(about, intro, shows, media, contact, lyrics);
				$("#navbar").fadeIn("slow");
        	})
			$("#mediaButton").click(function(){
				swapDivs(media, intro, shows, about, contact, lyrics);
				$("#navbar").fadeIn("slow");
			})
			$("#showsButton").click(function(){
				swapDivs(shows, intro, about, contact, media, lyrics);
				$("#navbar").fadeIn("slow");
			})
			$("#lyricsButton").click(function(){
				swapDivs(lyrics, intro, about, contact, media, shows);
				$("#navbar").fadeIn("slow");
			})
	});
