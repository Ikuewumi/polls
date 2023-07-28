import { Component } from "solid-js";
import { Feature } from "../types";
import { Check, Lock, Mask } from "./icons";

export const Hero: Component = () => {

    return (
        <section class="p-hero sg cols two">

            <div class="p-hero-content">
                <div class="p-hero-div">
                    <h1>Polls Redefined: </h1>
                    <span>Interactive Voting for The Modern Age</span>
                </div>

                <div class="p-hero-btnbar">
                    <button class="p-hero-cta">Start Voting</button>
                    <button class="p-hero-sec">Why Us?</button>
                </div>

            </div>

            <picture class="p-hero-img">
                <img src="/undraw/voting.svg" alt="A Candidate, Voting" />
            </picture>
        </section>
    )

}


export const Features: Component = () => {




    const featuresList: Feature[] = [

        {
            name: "Flexibility",
            img: <Check />,
            description: "Offering flexible and inclusive decision-making, multi-options polls ensures your polls cater to a wider range of responses, making every vote count!"
        },


        {
            name: "Security",
            img: <Lock />,
            description: "With Password-Protected Polls, rest easy knowing your valuable insights and information remain secure, fostering trust and engagement among select users."
        },


        {
            name: "Anonymity",
            img: <Mask />,
            description: "Perfect for sensitive topics, employee surveys, or customer feedback, this feature empowers users to provide genuine insights, delivering authentic results that drive better decision-making."
        }


    ]






    return (
        <section class="p-features sg">
            <div class="p-features-preamble">
                <h2>Why Us?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae, facere vero expedita voluptas dolor a officia magnam! Facilis, quis!</p>
            </div>

            <ul class="p-features-list">
                {featuresList.map(feature =>
                    (<li><FeatureCard {...feature} /></li>)
                )}
            </ul>
        </section>
    )



}














export const FeatureCard: Component<Feature> = (props) => {

    return (
        <article class="p-features-card">
            <div class="image">
                {props.img}
            </div>
            <div class="content">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
        </article>
    )
}






