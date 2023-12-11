---
title: "SOCKS: A Stochastic Optimal Control and Reachability Toolbox Using Kernel Methods"
collection: publications
permalink: /publication/2022-hscc-socks
excerpt: 'We present SOCKS, a data-driven stochastic optimal control toolbox based in kernel methods. SOCKS is a collection of data-driven algorithms that compute approximate solutions to stochastic optimal control problems with arbitrary cost and constraint functions, including stochastic reachability, which seeks to determine the likelihood that a system will reach a desired target set while respecting a set of pre-defined safety constraints.'
date: 2022-05-04
venue: 'Proceedings of the 25th ACM International Conference on Hybrid Systems: Computation and Control'
paperurl: 'https://doi.org/10.1145/3501710.3519525'
citation: 
---

We present SOCKS, a data-driven stochastic optimal control toolbox based in kernel methods. SOCKS is a collection of data-driven algorithms that compute approximate solutions to stochastic optimal control problems with arbitrary cost and constraint functions, including stochastic reachability, which seeks to determine the likelihood that a system will reach a desired target set while respecting a set of pre-defined safety constraints. Our approach relies upon a class of machine learning algorithms based in kernel methods, a nonparametric technique which can be used to represent probability distributions in a high-dimensional space of functions known as a reproducing kernel Hilbert space. As a nonparametric technique, kernel methods are inherently data-driven, meaning that they do not place prior assumptions on the system dynamics or the structure of the uncertainty. This makes the toolbox amenable to a wide variety of systems, including those with nonlinear dynamics, black-box elements, and poorly characterized stochastic disturbances. We present the main features of SOCKS and demonstrate its capabilities on several benchmarks.

<pre id="bibtex" style="font-size: 0.8em; background-color: #f0f0f0; border-radius: 5px; padding: 10px;">
@inproceedings{10.1145/3501710.3519525,
author = {Thorpe, Adam and Oishi, Meeko},
title = {SOCKS: A Stochastic Optimal Control and Reachability Toolbox Using Kernel Methods},
year = {2022},
isbn = {9781450391962},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3501710.3519525},
doi = {10.1145/3501710.3519525},
abstract = {We present SOCKS, a data-driven stochastic optimal control toolbox based in kernel methods. SOCKS is a collection of data-driven algorithms that compute approximate solutions to stochastic optimal control problems with arbitrary cost and constraint functions, including stochastic reachability, which seeks to determine the likelihood that a system will reach a desired target set while respecting a set of pre-defined safety constraints. Our approach relies upon a class of machine learning algorithms based in kernel methods, a nonparametric technique which can be used to represent probability distributions in a high-dimensional space of functions known as a reproducing kernel Hilbert space. As a nonparametric technique, kernel methods are inherently data-driven, meaning that they do not place prior assumptions on the system dynamics or the structure of the uncertainty. This makes the toolbox amenable to a wide variety of systems, including those with nonlinear dynamics, black-box elements, and poorly characterized stochastic disturbances. We present the main features of SOCKS and demonstrate its capabilities on several benchmarks.},
booktitle = {Proceedings of the 25th ACM International Conference on Hybrid Systems: Computation and Control},
articleno = {21},
numpages = {12},
keywords = {Stochastic Optimal Control, Stochastic Reachability, Machine Learning},
location = {Milan, Italy},
series = {HSCC '22}
}
</pre>