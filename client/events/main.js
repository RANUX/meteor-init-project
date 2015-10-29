////////// Events for main

Template.main.events({
    'click button': function(event) {
        Session.set('counter', Session.get('counter')+1);
    }
});