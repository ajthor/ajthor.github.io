---
title: "State-based confidence bounds for data-driven stochastic reachability using Hilbert space embeddings"
collection: publications
permalink: /publication/2022-automatica
excerpt: 'In this paper, we compute finite sample bounds for data-driven approximations of the solution to stochastic reachability problems.'
date: 2022-04-01
venue: 'Automatica'
paperurl: 'https://doi.org/10.1016/j.automatica.2021.110146'
citation: 
teaser: 2022-automatica-teaser.png
---

In this paper, we compute finite sample bounds for data-driven approximations of the solution to stochastic reachability problems. Our approach uses a nonparametric technique known as kernel distribution embeddings, and provides probabilistic assurances of safety for stochastic systems in a model-free manner. By implicitly embedding the stochastic kernel of a Markov control process in a reproducing kernel Hilbert space, we can approximate the safety probabilities for stochastic systems with arbitrary stochastic disturbances as simple matrix operations and inner products. We present finite sample bounds for point-based approximations of the safety probabilities through construction of probabilistic confidence bounds that are state- and input-dependent. One advantage of this approach is that the bounds are responsive to non-uniformly sampled data, meaning that tighter bounds are feasible in regions of the state- and input-space with more observations. We numerically evaluate the approach, and demonstrate its efficacy on a neural network-controlled pendulum system.

<pre id="bibtex" style="font-size: 0.8em; background-color: #f0f0f0; border-radius: 5px; padding: 10px;">
@article{THORPE2022110146,
title = {State-based confidence bounds for data-driven stochastic reachability using Hilbert space embeddings},
journal = {Automatica},
volume = {138},
pages = {110146},
year = {2022},
issn = {0005-1098},
doi = {https://doi.org/10.1016/j.automatica.2021.110146},
url = {https://www.sciencedirect.com/science/article/pii/S0005109821006750},
author = {Adam J. Thorpe and Kendric R. Ortiz and Meeko M.K. Oishi},
keywords = {Machine learning, Stochastic systems, Reachability, Safety, Optimal control},
abstract = {In this paper, we compute finite sample bounds for data-driven approximations of the solution to stochastic reachability problems. Our approach uses a nonparametric technique known as kernel distribution embeddings, and provides probabilistic assurances of safety for stochastic systems in a model-free manner. By implicitly embedding the stochastic kernel of a Markov control process in a reproducing kernel Hilbert space, we can approximate the safety probabilities for stochastic systems with arbitrary stochastic disturbances as simple matrix operations and inner products. We present finite sample bounds for point-based approximations of the safety probabilities through construction of probabilistic confidence bounds that are state- and input-dependent. One advantage of this approach is that the bounds are responsive to non-uniformly sampled data, meaning that tighter bounds are feasible in regions of the state- and input-space with more observations. We numerically evaluate the approach, and demonstrate its efficacy on a neural network-controlled pendulum system.}
}
</pre>