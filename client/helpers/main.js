////////// Helpers for main

Template.main.helpers({
    counter: function() {
        return Session.get('counter');
    }
});