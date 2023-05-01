    const switchElement = document.querySelector('.switch')

    switchElement.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })

    var typer = {
   words: ['Baker', 'Maker', 'Cook'],
   wordIndex: 0,
   speed: 150,
   nextWordWait: 1000,
   html: {
      word: document.querySelector('.myWord')
   },
   init: function init() {
      this.typeLetter();
   },
   typeLetter: function typeLetter() {
      var _this = this;

      var timer = arguments.length <= 0 || arguments[0] === undefined ? this.speed : arguments[0];

      setTimeout(function () {
         var word = {
            finished: _this.words[_this.wordIndex],
            current: _this.readWord()
         };

         var nextLetterIndex = word.finished.length - word.current.length;
         if (nextLetterIndex > 0) {
            nextLetterIndex = word.finished.length - nextLetterIndex;
            var nextLetter = word.finished[nextLetterIndex];
            _this.html.word.innerHTML += nextLetter;
            _this.typeLetter();
            return;
         }
         _this.nextWord();
      }, timer);
   },
   readWord: function readWord() {
      return this.html.word.innerHTML;
   },
   clearWord: function clearWord() {
      this.html.word.innerHTML = '';
   },
   nextWord: function nextWord() {
      var _this2 = this;

      this.wordIndex++;
      if (this.wordIndex == this.words.length) {
         this.wordIndex = 0;
      }
      setTimeout(function () {
         _this2.clearWord();
         _this2.typeLetter(_this2.nextWordWait);
      }, this.nextWordWait);
   }
};

typer.init();

 $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


//
   
var coll = document.getElementsByClassName("collapsible");
var i, j;

for (i = 0; i < coll.length; i++) {
  // Set initial display style to "none"
  coll[i].nextElementSibling.style.display = "none";
  
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
    // Close other collapsibles
    for (j = 0; j < coll.length; j++) {
      if (coll[j] != this) {
        coll[j].classList.remove("active");
        var otherContent = coll[j].nextElementSibling;
        otherContent.style.display = "none";
      }
    }
  });
}