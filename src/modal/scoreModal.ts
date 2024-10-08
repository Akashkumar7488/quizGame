// import mongoose from 'mongoose';

// const scoreSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   score: { type: Number, required: true },
// });

// const Score = mongoose.models.Score || mongoose.model('Score', scoreSchema);

// export default Score;










import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Score = mongoose.models.Score || mongoose.model('Score', scoreSchema);

export default Score;