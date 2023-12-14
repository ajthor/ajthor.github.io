---
title: "Stochastic Optimal Control & Safety Via Kernel Embeddings: A Data-Driven Approach"
collection: talks
type: "Talk"
permalink: /talks/2022-04-12-ethz-weierstrass
venue: "Weierstrass Institute for Applied Analysis and Stochastics, Berlin (virtual)"
date: 2022-04-12
location: "Berlin, Germany (Virtual)"
---

I gave a talk in April 2022 at the Weierstrass Institute for Applied Analysis and Stochastics in Berlin, Germany. The talk was on my recent work on stochastic optimal control using techniques from kernel methods.

## Abstract

As autonomy becomes more prevalent, it is increasingly being deployed in highly uncertain environments. This motivates the need for data-driven control methods which are capable of handling complex systems, humans in the loop, poorly-structured disturbances, and also provide assurances of safety. We present a computationally efficient approach for computing stochastic policies based in the theory of kernel embeddings of distributions, a nonparametric statistical learning technique that embeds integral operators as elements in a high-dimensional function space known as a reproducing kernel Hilbert space. We demonstrate how this representation enables us to compute stochastic policies as a linear program, and enables tractability for a wide variety of systems which are resistant to traditional modeling techniques. We have implemented these techniques in a publicly-available toolbox, and apply our approach to motion planning problems and demonstrate its use for computing the safety probabilities for stochastic reachability problems.

[Slides](http://ajthor.github.io/files/2022_ETHZ.pdf)