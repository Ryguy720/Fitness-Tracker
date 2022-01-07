const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter excercise type"
        },

        name: {
            type: String,
            trim: true,
            required: "Please enter an excersise"
        },
        duration: {
            type: Number,

        },
        weight: {
            type: Number,

        },
        reps: {
            type: Number,

        },
        sets: {
            type: Number,

        },
        distance: {
            type: Number,

        },
    }],
    day: {
        type: Date,
        default: Date.now
    }
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
