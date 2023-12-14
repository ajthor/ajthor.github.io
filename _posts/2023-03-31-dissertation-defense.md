---
title: "Dissertation Defense"
collection: talks
type: "Talk"
permalink: /talks/2023-dissertation-defense
venue: "University of New Mexico, Albuquerque NM, USA"
date: 2023-03-31
location: "Albuquerque, NM"
---

I successfully defended my dissertation with distinction in March 2023! My dissertation, titled "Data-Driven Stochastic Optimal Control Using Hilbert Space Embeddings of Distributions", was advised by [Dr. Meeko Oishi](https://www.unm.edu/~oishi/).

A special thanks to my committee members: [Dr. Meeko Oishi](https://www.unm.edu/~oishi/), [Dr. Rafael Fierro](https://ece.unm.edu/faculty-staff/electrical-and-computer/rafael-fierro.html), [Dr. Eirini Tsiropoulou](http://ece-research.unm.edu/tsiropoulou/Home.html), [Dr. Claus Danielson](https://www.unm.edu/~cdanielson/)!

I've included the abstract and slides from my defense below.

## Abstract

Autonomous systems are increasingly being deployed in complex environments subject to real-world uncertainty. For such systems, it may be exceptionally difficult or even impossible to compute a simple mathematical model of the system--for instance due to the presence of human elements, complex mechanics or system dynamics, or learning-enabled components. Data-driven control has recently gained significant attention in this area, where observations taken from the system evolution are used to compute an implicit representation of the system that is amenable to analysis and control. However, data-driven algorithms for control present new challenges, and require new insights to enable their use.
    
The primary focus of this thesis are algorithms for data-driven control based in the theory of reproducing kernel Hilbert spaces. Specifically, we focus on using data to compute empirical estimates of key statistical quantities in stochastic optimal control problems based in the framework of kernel embeddings of distributions. We demonstrate that such kernel-based techniques are applicable for a wide variety of approximate stochastic optimal control problems of interest, including chance-constrained control and dynamic programming. Current approaches to data-driven control are often limited to finite action spaces, linear dynamics, or Gaussian disturbances. In contrast, our approach can handle nonlinear dynamics and arbitrary stochastic disturbances, and imposes minimal assumptions. Moreover, our approach is computationally efficient, and enables stochastic policy synthesis that can be solved as a linear program in Hilbert space. In addition, we developed tools for kernel-based control in a publicly-available, open source toolbox called SOCKS, that implements all algorithms presented in this thesis. 
    
We also present an approach to data-driven safety analysis of stochastic systems using the theory of stochastic reachability. Stochastic reachability seeks to provide probabilistic assurances of safety, i.e. the likelihood that a system will reach a desired goal while respecting pre-specified safety constraints. We develop kernel-based algorithms to approximate and solve the backward stochastic reachability problem in a model-free manner. 

We also discuss the problem of incorporating known, prior information of the system dynamics in the form of side information into the learning problem. Oftentimes, naive implementations of data-driven techniques fail to take into account important features which are known a priori about the system dynamics. Such knowledge is known as side information, and is typically derived from physical properties of the system model, e.g. symmetry, algebraic constraints on the dynamics, or knowledge of particular regions of the vector field. We present methods which augment the learning problem to incorporate such knowledge.

[Slides](http://ajthor.github.io/files/adam_thorpe_dissertation_defense.pdf)
