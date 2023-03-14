const {Schema, model} = require("mongoose")

const postSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref : "User"

    }

})

model("Post", postSchema)