var app = {

    initialize: function() {
        var self = this;
        this.store = new MemoryStore(function(){
            $('body').html(new HomeView(self.store).render().el);
        });
        this.registerEvents();
    },
    
    registerEvents: function(){
        if (document.documentElement.hasOwnProperty('ontouchstart')){
            $('body').on('touchstart', 'a', function(event){
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event){
                $(event.target).removeClass('tappable-active');
            });
        } else {
            $('body').on('mousedown', 'a', function(event){
                $(event.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(event){
                $(event.target).removeClass('tappable-active');
            });
        }
    },

    showAlert: function(message, title){
        if (navigator.notification){
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    }
};

app.initialize();