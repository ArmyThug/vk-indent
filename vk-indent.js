var vkIndentStats = [];

function vkIndent()
{
	var textBody = jQuery('.bp_text'),
		textBr,
		textBodyFiltered = textBody.filter(function (index, elem) {
			var id = jQuery(this).parent().attr('id');
			
			if (vkIndentStats.indexOf(id) != -1)
			{
				return false;
			}
			vkIndentStats.push(id);
			return true;
		});
	
	textBr = textBodyFiltered.children('br');
	textBody.css({'text-indent':'2em'});
	textBr.after('&emsp;&emsp;');
}

(function(e,s)
{
	e.src=s;
	e.onload=function(){
		jQuery.noConflict();
		console.log('jQuery injected');
		setInterval(vkIndent, 2000);
		jQuery('#bt_pages').click(function() {
			vkIndentStats = [];
		});
	};
	document.head.appendChild(e);
})
(document.createElement('script'),'//code.jquery.com/jquery-latest.min.js')
