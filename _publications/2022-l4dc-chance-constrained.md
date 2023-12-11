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
