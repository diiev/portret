const accordion = (triggersSelector) => {
        const btns = document.querySelectorAll(triggersSelector);
              btns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        this.classList.toggle('active-style');
                        this.nextElementSibling.classList.toggle('active-content');

                        if (this.classList.contains('active-style')) {

                            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
                        } 
                        else {
                            this.nextElementSibling.style.maxHeight = "0px";
                            
                        }
                        btns.forEach(otherbtn => { 
                            if (otherbtn !== btn) {
                                otherbtn.classList.remove('active-style');
                                otherbtn.nextElementSibling.classList.remove('active-content');     
                                otherbtn.nextElementSibling.style.maxHeight = "0px";
                            }
                            
                        });
                    });
                  
              });
        // blocks.forEach(block => {
        //     block.classList.add('animated', 'fadeInDown');
        // });
        // btns.forEach(btn => {
        //     btn.addEventListener('click', function() {
        //         if (!this.classList.contains('active')){
        //             btns.forEach(btn => {
        //                 btn.classList.remove('active', 'active-style');
        //             });
        //             this.classList.add('active', 'active-style');
        //         }
        //     });
        // });
};

export default accordion;