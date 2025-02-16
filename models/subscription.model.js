import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, 'subscription price is required'],
        min: [0,'price must be greater than 0'],
    },
    currency: {
        type: String,
        required: [true, 'subscription currency is required'],
        enum: ['INR','USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'],
        default: 'INR',
    },
    frequency: {
        type: String,
       enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category:{
        type: String,
        enum: ['sports', 'news', 'entertainment', 'lifestyle', 'technology', 'finance', 'politics', 'others'],
        require: true
    },
    paymentMethod: {
        type: String,
        require: true,
        trim: true
    },
    staus: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active',
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Start date must be in the past',

        }
    },
    renewalDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
               return  value > this.startDate;
            },
            message: 'Renewal date must be after start date',
            
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    },
}, { timestamps: true });

subscriptionSchema.pre('save', function(next) {
    if (!this.renewalDate) {
        const renewalDate = {
            daily : 1,
            weekly : 7,
            monthly : 30,
            yearly : 365
        }
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalDate[this.frequency]);
    }
    if (this.renewalDate <= new Date()) {
        this.staus = 'expired';
    }
    next();
});
    
const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;