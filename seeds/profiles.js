exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({profile_id: 99901, user_id: 99901, bio: "Here is some bio stuff", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99902, user_id: 99902, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99903, user_id: 99903, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99904, user_id: 99904, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99905, user_id: 99905, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99906, user_id: 99906, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99907, user_id: 99907, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99908, user_id: 99908, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99909, user_id: 99909, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99910, user_id: 99910, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99911, user_id: 99911, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99912, user_id: 99912, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99913, user_id: 99913, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99914, user_id: 99914, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99915, user_id: 99915, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99916, user_id: 99916, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99917, user_id: 99917, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99918, user_id: 99918, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99919, user_id: 99919, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99920, user_id: 99920, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99921, user_id: 99921, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99922, user_id: 99922, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99923, user_id: 99923, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99924, user_id: 99924, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99925, user_id: 99925, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"}),
        knex('profiles').insert({profile_id: 99926, user_id: 99926, bio: "Null Content", img: "http://www.bahai.org/chrome/img/beliefs/bahaullah-covenant-feature-img.jpg?3e7a0319"})
      ]);
    });
};
