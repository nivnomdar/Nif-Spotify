import { Stripe } from 'stripe';

export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ?? "",
    {
        // apiVersion: "2024-02-19",
        appInfo: {
            name: "Nif-Spotify",
            version: "0.1.0"
        }
    }
)