import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  tags: Array,
  comments: Array,
  date: { type: Date, default: Date.now },
});

const Posts = mongoose.model('Posts', postsSchema);

export default Posts;
