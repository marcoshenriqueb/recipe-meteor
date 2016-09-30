import {Recipes} from '../collections/Recipes';

Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId});
});
