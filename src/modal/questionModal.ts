// import mongoose from 'mongoose';

// const questionSchema = new mongoose.Schema({
//   question: { type: String, required: true },
//   answers: [String], // Array of possible answers
//   correctAnswer: { type: String, required: true }, // Correct answer
// });

// const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);

// export default Question;







// import mongoose, { Document, Model } from 'mongoose';

// interface IQuestion extends Document {
//   question: string;
//   answers: string[];
//   correctAnswer: string;
//   category: string;
//   difficulty: 'easy' | 'medium' | 'hard';
// }

// const questionSchema = new mongoose.Schema<IQuestion>({
//   question: {
//     type: String,
//     required: true,
//   },
//   answers: {
//     type: [String],
//     required: true,
//     validate: [arrayLimit, '{PATH} must have at least 2 and at most 4 options'],
//   },
//   correctAnswer: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function(this: IQuestion, v: string) {
//         return this.answers.includes(v);
//       },
//       message: (props: { value: string }) => `${props.value} is not a valid answer option!`
//     }
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   difficulty: {
//     type: String,
//     enum: ['easy', 'medium', 'hard'],
//     required: true,
//   }
// });

// function arrayLimit(val: string[]): boolean {
//   return val.length >= 2 && val.length <= 4;
// }

// const Question: Model<IQuestion> = mongoose.models.Question || mongoose.model<IQuestion>('Question', questionSchema);

// export default Question;


import mongoose, { Document, Model } from 'mongoose';

interface IQuestion extends Document {
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt?: Date;
  updatedAt?: Date;
}

const questionSchema = new mongoose.Schema<IQuestion>({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
    validate: [arrayLimit, '{PATH} must have at least 2 and at most 4 options'],
  },
  correctAnswer: {
    type: String,
    required: true,
    validate: {
      validator: function(this: IQuestion, v: string) {
        return this.answers.includes(v);
      },
      message: (props: { value: string }) => `${props.value} is not a valid answer option!`
    }
  },
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

function arrayLimit(val: string[]): boolean {
  return val.length >= 2 && val.length <= 4;
}

const Question: Model<IQuestion> = mongoose.models.Question || mongoose.model<IQuestion>('Question', questionSchema);

export default Question;
