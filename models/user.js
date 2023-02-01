const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: "Username is Required",
        },
        email: {
            type: String,
            unique: true,
            required: "Username is Required",
            match: [/.+@.+\..+/],
        },
        thoughts: [
            {
                type: Schema.types.ObjectId,
            ref: "Thought",
        },
    ],
        friends: [
            {
            type: Schema.types.ObjectId,
            ref: "user",
        },
    ],

    },
    {
        toJson: {
            virtuals: true,
        },
        id: false,
    }
);

UserSchema.virtuals('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', UserSchema);

module.exports = User;