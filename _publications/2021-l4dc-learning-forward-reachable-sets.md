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

<pre id="bibtex" style="font-size: 0.8em; background-color: #f0f0f0; border-radius: 5px; padding: 10px;">
@InProceedings{pmlr-v144-thorpe21a,
  title = 	 {Learning Approximate Forward Reachable Sets Using Separating Kernels},
  author =       {Thorpe, Adam J. and Ortiz, Kendric R. and Oishi, Meeko M. K.},
  booktitle = 	 {Proceedings of the 3rd Conference on Learning for Dynamics and Control},
  pages = 	 {201--212},
  year = 	 {2021},
  editor = 	 {Jadbabaie, Ali and Lygeros, John and Pappas, George J. and A.&nbsp;Parrilo, Pablo and Recht, Benjamin and Tomlin, Claire J. and Zeilinger, Melanie N.},
  volume = 	 {144},
  series = 	 {Proceedings of Machine Learning Research},
  month = 	 {07 -- 08 June},
  publisher =    {PMLR},
  pdf = 	 {http://proceedings.mlr.press/v144/thorpe21a/thorpe21a.pdf},
  url = 	 {https://proceedings.mlr.press/v144/thorpe21a.html},
  abstract = 	 {We present a data-driven method for computing approximate forward reachable sets using separating kernels in a reproducing kernel Hilbert space. We frame the problem as a support estimation problem, and learn a classifier of the support as an element in a reproducing kernel Hilbert space using a data-driven approach. Kernel methods provide a computationally efficient representation for the classifier that is the solution to a regularized least squares problem. The solution converges almost surely as the sample size increases, and admits known finite sample bounds. This approach is applicable to stochastic systems with arbitrary disturbances and neural network verification problems by treating the network as a dynamical system, or by considering neural network controllers as part of a closed-loop system. We present our technique on several examples, including a spacecraft rendezvous and docking problem, and two nonlinear system benchmarks with neural network controllers.}
}
</pre>