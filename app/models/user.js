import DS from "ember-data";

// define the User model
var User = DS.Model.extend({
  firstName:  DS.attr('string'),
  lastName:   DS.attr('string'),
});

// creates User fixtures
// this is what the FixtureAdapter uses as the API source
User.reopenClass({
  FIXTURES: [
    {id: 1, firstName: 'Steve', lastName: 'Jobs', bio: "Steve Jobs was born in San Francisco, California, on February 24, 1955, to two University of Wisconsin graduate students who gave him up for adoption. Smart but directionless, Jobs experimented with different pursuits before starting Apple Computers with Steve Wozniak in 1976. Apple's revolutionary products, which include the iPod, iPhone and iPad, are now seen as dictating the evolution of modern technology. He died in 2011, following a long battle with pancreatic cancer."},
    {id: 2, firstName: 'Jony', lastName: 'Ive', bio: "Sir Jonathan Paul \"Jony\" Ive, (born 27 February 1967) is an English designer and the Senior Vice President of Design at Apple Inc. He oversees the Industrial Design Group, and also provides leadership and direction for Human Interface (HI) software teams across the company. He is the designer of many of Apple\'s products, including the MacBook Pro, iMac, MacBook Air, Mac mini, iPod, iPod Touch, iPhone, iPad, iPad Mini, Apple Watch and iOS 7. Steve Jobs considered Ive to be his \"spiritual partner at Apple,\" while Fortune magazine stated in 2010 that Ive\'s designs have \"set the course not just for Apple but for design more broadly.\""}
  ]
});

export default User;