const mongoose = require('mongoose');

Schema = mongoose.Schema;

const HeartSchema = new Schema({

    age: {
        type: Number,
        required: true
    },
    sex: {
        type: Number,
        required: true
    },
    chestPain: {
        type: Number,
        required: true
    },
    restingBpS: {
        type: Number,
        required: true
    },
    cholesterol: {
        type: Number,
        required: true
    },
    fastingBloodSugar: {
        type: Number,
        required: true
    },
    restingEcgL: {
        type: Number,
        required: true
    },
    maxHeartRate: {
        type: Number,
        required: true
    },
    exerciseAngina: {
        type: Number,
        required: true
    },
    oldpeak: {
        type: Number,
        required: true
    },
    STslope: {
        type: Number,
        required: true
    },
    target: {
        type: Number,
        required: true
    }
});

const Heart = mongoose.model('heart',HeartSchema);

module.exports = Heart;
