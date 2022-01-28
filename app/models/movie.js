const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		director: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Movie', movieSchema)