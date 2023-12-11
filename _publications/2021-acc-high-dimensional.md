---
title: "Approximate Stochastic Reachability for High Dimensional Systems"
collection: publications
permalink: /publication/2021-acc-high-dimensional
excerpt: 'We present a method to compute the stochastic reachability safety probabilities for high-dimensional stochastic dynamical systems.'
date: 2019-11-19
venue: '2021 American Control Conference (ACC)'
paperurl: 'https://doi.org/10.23919/ACC50511.2021.9483404'
citation: 
---

We present a method to compute the stochastic reachability safety probabilities for high-dimensional stochastic dynamical systems. Our approach takes advantage of a nonparametric learning technique known as conditional distribution embeddings to model the stochastic kernel using a data-driven approach. By embedding the dynamics and uncertainty within a reproducing kernel Hilbert space, it becomes possible to compute the safety probabilities for stochastic reachability problems as simple matrix operations and inner products. We employ a convergent approximation technique, random Fourier features, in order to alleviate the increased computational requirements for high-dimensional systems. This technique avoids the curse of dimensionality, and enables the computation of safety probabilities for high-dimensional systems without prior knowledge of the structure of the dynamics or uncertainty. We validate this approach on a double integrator system, and demonstrate its capabilities on a million-dimensional, nonlinear, non-Gaussian, repeated planar quadrotor system.

<pre id="bibtex" style="font-size: 0.8em; background-color: #f0f0f0; border-radius: 5px; padding: 10px;">
@INPROCEEDINGS{9483404,
  author={Thorpe, Adam J. and Sivaramakrishnan, Vignesh and Oishi, Meeko M. K.},
  booktitle={2021 American Control Conference (ACC)}, 
  title={Approximate Stochastic Reachability for High Dimensional Systems}, 
  year={2021},
  volume={},
  number={},
  pages={1287-1293},
  doi={10.23919/ACC50511.2021.9483404}
}
</pre>