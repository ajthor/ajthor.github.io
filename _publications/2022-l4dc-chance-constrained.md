---
title: "Data-Driven Chance Constrained Control using Kernel Distribution Embeddings"
collection: publications
permalink: /publication/2022-l4dc-chance-constrained
excerpt: 'We present a data-driven algorithm for efficiently computing stochastic control policies for general joint chance constrained optimal control problems.'
date: 2022-04-01
venue: 'Proceedings of The 4th Annual Learning for Dynamics and Control Conference'
paperurl: 'https://proceedings.mlr.press/v168/thorpe22a.html'
citation: 
---

In this paper, we compute finite sample bounds for data-driven approximations of the solution to stochastic reachability problems. Our approach uses a nonparametric technique known as kernel distribution embeddings, and provides probabilistic assurances of safety for stochastic systems in a model-free manner. By implicitly embedding the stochastic kernel of a Markov control process in a reproducing kernel Hilbert space, we can approximate the safety probabilities for stochastic systems with arbitrary stochastic disturbances as simple matrix operations and inner products. We present finite sample bounds for point-based approximations of the safety probabilities through construction of probabilistic confidence bounds that are state- and input-dependent. One advantage of this approach is that the bounds are responsive to non-uniformly sampled data, meaning that tighter bounds are feasible in regions of the state- and input-space with more observations. We numerically evaluate the approach, and demonstrate its efficacy on a neural network-controlled pendulum system.

<pre id="bibtex" style="font-size: 0.8em; background-color: #f0f0f0; border-radius: 5px; padding: 10px;">
@InProceedings{pmlr-v168-thorpe22a,
  title = 	 {Data-Driven Chance Constrained Control using Kernel Distribution Embeddings},
  author =       {Thorpe, Adam and Lew, Thomas and Oishi, Meeko and Pavone, Marco},
  booktitle = 	 {Proceedings of The 4th Annual Learning for Dynamics and Control Conference},
  pages = 	 {790--802},
  year = 	 {2022},
  editor = 	 {Firoozi, Roya and Mehr, Negar and Yel, Esen and Antonova, Rika and Bohg, Jeannette and Schwager, Mac and Kochenderfer, Mykel},
  volume = 	 {168},
  series = 	 {Proceedings of Machine Learning Research},
  month = 	 {23--24 Jun},
  publisher =    {PMLR},
  pdf = 	 {https://proceedings.mlr.press/v168/thorpe22a/thorpe22a.pdf},
  url = 	 {https://proceedings.mlr.press/v168/thorpe22a.html},
  abstract = 	 {We present a data-driven algorithm for efficiently computing stochastic control policies for general joint chance constrained optimal control problems. Our approach leverages the theory of kernel distribution embeddings, which allows representing expectation operators as inner products in a reproducing kernel Hilbert space. This framework enables approximately reformulating the original problem using a dataset of observed trajectories from the system without imposing prior assumptions on the parameterization of the system dynamics or the structure of the uncertainty. By optimizing over a finite subset of stochastic open-loop control trajectories, we relax the original problem to a linear program over the control parameters that can be efficiently solved using standard convex optimization techniques. We demonstrate our proposed approach in simulation on a system with nonlinear non-Markovian dynamics navigating in a cluttered environment.}
}
</pre>