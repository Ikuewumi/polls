import { Component } from "solid-js";

export const Hero: Component = () => {

    return (
        <>
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
                    <img src="/public/undraw/voting.svg" alt="A Candidate, Voting" />
                </picture>
            </section>
        </>
    )

}
