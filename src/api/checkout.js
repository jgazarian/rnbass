const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); //prettier-ignore

export default async function checkoutHandler(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: process.env.STRIPE_PRICE_ID,
        quantity: 1
      }
    ],
    mode: "payment",
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`
  });

  res.redirect(303, session.url);
}
