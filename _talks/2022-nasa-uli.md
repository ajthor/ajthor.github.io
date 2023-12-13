---
title: "LP Solutions for Stochastic Optimal Control Problems via Hilbert Space Embeddings of Distributions"
collection: talks
type: "Talk"
permalink: /talks/2022-nasa-uli
venue: "Stanford University"
date: 2022-01-11
location: "Palo Alto CA, USA (Virtual)"
---

{% include responsive-embed url="https://youtu.be/q4Itz-qpoAE?si=JNMGTpL1zQbzs3hg" ratio="16:9" %}

Modern autonomous control systems that operate in stochastic environments are faced with significant challenges due to uncertainty. Model misspecifications may fail to capture statistical phenomena or nonlinear effects, which can lead to unsafe operation or provide solutions which may fail to satisfy real-world constraints. This motivates the need for control algorithms which are data-driven, that use historical observations taken from the system evolution or generated via high-fidelity simulation to construct an implicit model of the system dynamics without resorting to explicit model assumptions.

We present a method to compute approximate solutions to stochastic optimal control problems subject to stochastic constraints based in the theory of kernel methods. We employ the theory of kernel embeddings of distributions, a nonparametric statistical learning technique which represents integral operators as elements in a high-dimensional space of functions known as a reproducing kernel Hilbert space. We show that constructing a stochastic optimal policy can be formulated as a linear program under this representation. The benefit of our approach is not only in the computational efficiency of an LP solution, but also that we do not rely upon a priori model assumptions, and assume no prior knowledge of the structure of the disturbance or the system stochasticity.  We apply our approach to motion planning problems in stochastic environments. 

[Slides](http://ajthor.github.io/files/Presentation_NASA_ULI.pdf)
[YouTube](https://youtu.be/q4Itz-qpoAE?si=JNMGTpL1zQbzs3hg)
