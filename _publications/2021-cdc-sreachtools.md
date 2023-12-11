---
title: "SReachTools Kernel Module: Data-Driven Stochastic Reachability Using Hilbert Space Embeddings of Distributions"
collection: publications
permalink: /publication/2021-cdc-sreachtools
excerpt: 'We present algorithms for performing data-driven stochastic reachability as an addition to SReachTools, an open-source stochastic reachability toolbox.'
date: 2021-12-14
venue: '2021 60th IEEE Conference on Decision and Control (CDC)'
paperurl: 'https://doi.org/10.1109/CDC45484.2021.9683169'
citation: 
---

We present algorithms for performing data-driven stochastic reachability as an addition to SReachTools, an open-source stochastic reachability toolbox. Our method leverages a class of machine learning techniques known as kernel embeddings of distributions to approximate the safety probabilities for a wide variety of stochastic reachability problems. By representing the probability distributions of the system state as elements in a reproducing kernel Hilbert space, we can learn the "best fit" distribution via a simple regularized least-squares problem, and then compute the stochastic reachability safety probabilities as simple linear operations. This technique admits finite sample bounds and has known convergence in probability. We implement these methods as part of SReachTools, and demonstrate their use on a double integrator system, on a million-dimensional repeated planar quadrotor system, and a cart-pole system with a black-box neural network controller.

<pre id="bibtex" style="font-size: 0.8em; background-color: #f0f0f0; border-radius: 5px; padding: 10px;">
@INPROCEEDINGS{9683169,
  author={Thorpe, Adam J. and Ortiz, Kendric R. and Oishi, Meeko M. K.},
  booktitle={2021 60th IEEE Conference on Decision and Control (CDC)}, 
  title={SReachTools Kernel Module: Data-Driven Stochastic Reachability Using Hilbert Space Embeddings of Distributions}, 
  year={2021},
  volume={},
  number={},
  pages={5073-5079},
  doi={10.1109/CDC45484.2021.9683169}
}
</pre>