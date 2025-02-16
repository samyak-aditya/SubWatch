import Subscription from "../models/subscription.model";

export const createSubscription = async (req,res,next) => {

    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id
        });

        res.status(201).json({ success: true, data: subscription});
    } catch (error) {
        next(error);
    }


}

export const getAllSubscriptions = async (req,res,next) => {
    try {

        if(req.user.id !== req.params.id){
            const error = new Error("you are not the owner of this accoun");
            error.status = 401;
            throw error;
        }
        const subscriptions = await Subscription.find({ user: req.params._id });
        res.status(200).json({ success: true, data: subscriptions });
    } catch (error) {
        next(error);
    }
}