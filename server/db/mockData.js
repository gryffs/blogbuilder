import Posts from './schemas/posts';

Posts.remove({}, (err) => {
  if (err) console.error('error removing old posts in mock data: ', err);
  console.log('Posts dropped in mock data');
});

Posts.create({
  title: 'Cocoa Talk: A Few Goals',
  article: `Hello everyone!  I have started a series of posts to just talk about random, personal things, that may or may not have anything to do with art.  Also, it is called Cocoa Talk because I don’t like coffee, and I think I’m too young, but I’m wanting the style of these posts to be pretty raw, as if I was talking to you guys in real life, face to face.

Today’s post is about posts and projects I want to do in the future.  I think if I write down my dreams and goals I am more likely to achieve them, and you all can respond to the ones that you are most excited to see.  I have quite a few dreams, so these are more of short term goals, because otherwise this would be a ridiculously long post. Anyway, here we go!

First of all, I would really like to start making tutorials.  When I started the blog, the plan was that it would be at least fifty percent tutorials.  However, because of various excuses I could make, I have only posted about two.
I also really need to work on my photos.  I say this a lot, but when you are an artist it is very important, because you need people to see what your work really looks like.  My biggest problem is lighting.  If I could just fix that….
I want to paint more.  There are so many different effects that you can get from different mediums.  I have done a lot of graphite, and I’m starting to do a lot of colored pencil, but I also think that painting is really cool.  I think I’m just trying to experiment as much as possible.
Speaking of experimenting, another thing I’m wanting to try is making studies.  That way I can broaden the scope of what I draw and add more than just faces.  A few things I would love to start with are insects, small animals, rocks, bones, body parts (like mouths), and flowers.
I also want to write short stories.  When I draw some of my pictures I make up stories in my head to go with them.  I think writing and posting them on the blog would be very fun.
Posting more often is also on my list.  I have finally mastered posting once a week, but posting two or three times a week is my ideal.
And then there’s working on the look and lay out of the blog.  The theme that I currently have works, but I think it needs a little, or a lot of tweaking.  Lucky for me, my dad is a coder, and so we are planning on working on it together. (Yay!)
That about wraps it up.  Which ones would you like to see the most?  What do you like about the blog, and what do you guys think would improve it?  Feedback from you guys is really important to me, so please share!`,
  author: 'Haley Griffis',
  tags: ['blog', 'goals', 'improve', 'improvement', 'learning', 'life', 'plans'],
  categories: ['Art', 'Lifestyle', 'Personal'],
  date: '2017-02-14T16:57:34.949Z',
}, (err, posts) => {
  if (err) console.error('Error with Posts Mock Data: ', err);
  console.log('Mock Posts created: ', posts);
});

Posts.create({
  title: 'Why Artists Are Important',
  article: `Why are artists important?  We see their influence in many places in day to day life, as well as in the past.  However, artists seem to be looked down upon.  Our culture labels them as starving and poor, and we usually get that idea.  In fact, I read something somewhere that pretty much said that if you want to both disappoint and freak out your parents, then become an artist (No, I am not choosing to become an artist because I want to rebel against my parents), but what if artists actually contribute to society?  What if artists have the ability to cross boundaries through their work? What if artists even create jobs?  What if art and the creation of it is something that is honorable to pursue?

To get a really good idea of just how important artists are, first  we must imagine a world without them.  If there was a magical (or futuristic?) button that could erase all art and artists ever created, and it was pushed, then ‘poof’, the world would be gone.  Not just the world we know it, the whole world.  According to Genesis 1:1 “In the beginning God created…”  Just looking at nature, we see that what God created was art.  In fact, very often our human art is inspired by His art, and so art, in a sense, is mimicking the Perfect Artist.

Now, let’s say that God is still the Creator of our imaginary universe.  (He is God.  Even if there was such a button it wouldn’t change Him, but there isn’t a button that does that, so let us get back to the point.)  The earth is back in place, but the world that we knew has entirely vanished.  Cultural depth has disappeared.  Everything is uniform and colorless.   The murals of the Renaissance are gone and so are the cathedrals they were painted in.  Greek culture would be no different than African or Japanese.  Our songs, instruments, and dancing cease to exist.  In fact, we may not even have things like cars or phones or airplanes.  Communication would also suffer considering our ideas are very often communicated through art and literature.

Even if we programmed our figurative button to only disintegrate today’s artists we would lose a valuable contributor to society.  Many artists are very involved in the community around them.  My little brothers took a class taught by an artist at the library and loved it.  They got to experiment with new things and got to do it with the people around them.

Many people are finding that they are able to open doors to meeting new people and making new friends through art and their own creativity.  Tapigami artist Danny Scheible, who is involved in children’s workshops as well as working with museums and galleries, brings tape with him everywhere.  When people see him making things with his tape it starts conversations that he wouldn’t have had before.

Another example is Erin Benzakein.  Erin is a flower grower and a designer who has an amazing blog that has a huge community.  Her flower farm, Floret, also provides workshops that sell out within twenty-four hours and are attended  by people all over the U.S.

It’s not just individual artists and small businesses that are building community. Urban ArtWorks is a non-prophet organization that was started to clean up trash and graffiti along Seattle’s industrial zone.  They train at-risk youth in art and real-life skills, painting murals all over the city. According to their website, seventy percent of those youth never re-offend.

More and more of these kinds of organizations are starting because art is available to everyone.  You can create art no matter where you are in life.  Age, race, and wealth don’t really matter when it comes to art.  Art reflects who you are on a canvas (Well, that depends too, because art is a whole lot of things).

On a more technical note, art creates jobs.  There are galleries and museums that make most of their money off of art.  There are art schools that have their teachers and staff.  Etsy, one of the most popular online market places, has 979 employees.  They also have 1.7 million sellers, some of which make a large amount of income off of selling their goods through Etsy.

Then there are the supply suppliers (that is fun to say).  Hobby Lobby has 23,000 employees and Michael’s craft stores have 48,900 employees.

Not all of the people using these services are full time artists (although you don’t have to make art full time to be an artist, but you do have to make art), but most people are buying or selling these things because they like art.

Doctors save lives and prevent illness.  Mechanics create and maintain labor-saving machinery.  Artists satisfy a craving for beauty, whether through images, sounds, or words.

Artists are important because beauty is important.  Art brings people together because of a common love of beauty.  People buy art because it means something to them.  That is why artists choose to be artists; because they see the importance of beauty, and because they are called to create it.`,
  author: 'Haley Griffis',
  tags: ['art', 'artists', 'learning', 'life'],
  categories: ['Art', 'Crafts', 'Decorating', 'Inspiration', 'Lifestyle'],
  date: '2017-02-07T14:33:34.949Z',
}, (err, posts) => {
  if (err) console.error('Error with Posts Mock Data: ', err);
  console.log('Mock Posts created: ', posts);
});

Posts.create({
  title: 'The Teddy Bear',
  article: `A teddy bear sits on a high dusty shelf

Dirty and torn and all by himself

His stuffing won’t stay in

His arm ‘s drooping down

But on his face there isn’t a frown.

He’s peacefully thinking of times long ago,

Times when he was played with, even though

Now he is beaten from all of your play,

If you would hug him, it would make his day.`,
  author: 'Haley Griffis',
  tags: ['art', 'art-journal', 'drawing', 'ideas', 'life'],
  categories: ['Art', 'Inspiration'],
  date: '2017-01-10T17:25:34.949Z',
}, (err, posts) => {
  if (err) console.error('Error with Posts Mock Data: ', err);
  console.log('Mock Posts created: ', posts);
});

Posts.create({
  title: 'Living in a Travel Trailer With a Family of Eight',
  article: `The Good, the Bad and the Cramped.
If you share a room with siblings, you feel pretty close.  They always happen to know exactly what you’re doing all the time.  If you’re trying to hide something from them, they see it somehow.  If you wake up early for a bit of alone time, they wake up too.  If you walk into the room while they aren’t looking, keep the light off, and shut yourself in the closet, THEY WILL FIND YOU.

Now imagine living in an RV. There’s a little kitchen with a tiny oven and refrigerator.  Three feet away from that there’s a dinette, and to the side, a couch that seats two. A built-in houses the TV and radio, along with getting the shoes dumped in front of it (I’ve tried to organize those things…). Behind the built-in is the “master bedroom”.  At the opposite side of the living space is the kids’ room.  This is where my family of eight, not including two cats and our dog, has been living for the past two months.

It isn’t that bad, though.  We go out and do things, like go to the library.  Dad also took my thirteen year-old sister and me into Austin for the day.  We even stopped by the mall! You know your dad loves you when he takes you to the mall.

As far as staying in the travel trailer goes though, well, it’s not exactly a picnic.  I love my siblings, but the only time that it’s really bareable is when the kids are asleep.  On the smiley side we play a lot of card games.

As for playing outside; there isn’t anywhere to play.  The spot we have has quite a bit of space, but it’s new and the grass hasn’t grown in yet, not to mention the mud is really bad.  Mom doesn’t usually mind the boys getting dirty.  This mud, though… well, it’s something else.  We do go to the playground in town sometimes.  However, you can only drive to town so many times.

I said I’d tell you if I learned anything about making art in here; I didn’t.  At the most:  it’s a pain to try.  There isn’t really enough space.  You can sketch in a very durable sketch book, and that’s about it.

We also did not have any wifi.  Yes, I typed this whole thing on my phone.  Because we don’t have a computer, my posts have been less frequent.   At least, that is my excuse.

So while aspects of the whole travel trailer thing have been good, I honestly don’t like fulltiming.  I think it has more to do with being sick of moving than the trailer itself.  I do have a bit of news that makes me feel like doing the happy dance: It’s over!  We are moving into a house!  It’s just a rental, but it’s a step closer to being settled!

So now we just have to move again…`,
  author: 'Haley Griffis',
  categories: ['Lifestyle', 'Personal'],
  date: '2016-12-20T18:47:34.949Z',
}, (err, posts) => {
  if (err) console.error('Error with Posts Mock Data: ', err);
  console.log('Mock Posts created: ', posts);
});
