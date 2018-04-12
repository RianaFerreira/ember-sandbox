import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ["Yahuda Katz","Yukihiro Matsumoto","Matin Fowler","Kent Beck"];
  }
});
