(function() {

	function focus(el) {
		el.classList.add('focus');
	}

	function unfocus(el) {
		el.classList.remove('focus');
	}

	function addEvents(el) {
		el.addEventListener('click', function(e) {focus(el)}, false);
		el.addEventListener('touchend', function(e) {focus(el);}, false);
		el.addEventListener('mouseout', function() {unfocus(el)}, false);
	}

	var el = document.getElementById('clickity');
	
	addEvents(el);
})();