---
title: "Learning Approximate Forward Reachable Sets Using Separating Kernels"
collection: publications
permalink: /publication/2021-l4dc-learning-forward-reachable-sets
excerpt: 'We present a data-driven method for computing approximate forward reachable sets using separating kernels in a reproducing kernel Hilbert space.'
date: 2021-04-01
venue: 'Proceedings of The 3rd Annual Learning for Dynamics and Control Conference'
paperurl: 'https://proceedings.mlr.press/v144/thorpe21a.html'
citation: 
---

We present a data-driven method for computing approximate forward reachable sets using separating kernels in a reproducing kernel Hilbert space. We frame the problem as a support estimation problem, and learn a classifier of the support as an element in a reproducing kernel Hilbert space using a data-driven approach. Kernel methods provide a computationally efficient representation for the classifier that is the solution to a regularized least squares problem. The solution converges almost surely as the sample size increases, and admits known finite sample bounds. This approach is applicable to stochastic systems with arbitrary disturbances and neural network verification problems by treating the network as a dynamical system, or by considering neural network controllers as part of a closed-loop system. We present our technique on several examples, including a spacecraft rendezvous and docking problem, and two nonlinear system benchmarks with neural network controllers.
