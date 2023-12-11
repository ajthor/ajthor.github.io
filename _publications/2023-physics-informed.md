---
title: "Physics-Informed Kernel Embeddings: Integrating Prior System Knowledge with Data-Driven Control"
collection: publications
permalink: /publication/2023-physics-informed
excerpt: 'We present a method to incorporate such prior knowledge into data-driven control algorithms using kernel embeddings, a nonparametric machine learning technique based in the theory of reproducing kernel Hilbert spaces. Our proposed approach incorporates prior knowledge of the system dynamics as a bias term in the kernel learning problem.'
date: 2023-01-09
venue: '2024 American Control Conference (ACC), Submitted'
paperurl: 'https://arxiv.org/abs/2301.03565'
citation: 
---

Data-driven control algorithms use observations of system dynamics to construct an implicit model for the purpose of control. However, in practice, data-driven techniques often require excessive sample sizes, which may be infeasible in real-world scenarios where only limited observations of the system are available. Furthermore, purely data-driven methods often neglect useful a priori knowledge, such as approximate models of the system dynamics. We present a method to incorporate such prior knowledge into data-driven control algorithms using kernel embeddings, a nonparametric machine learning technique based in the theory of reproducing kernel Hilbert spaces. Our proposed approach incorporates prior knowledge of the system dynamics as a bias term in the kernel learning problem. We formulate the biased learning problem as a least-squares problem with a regularization term that is informed by the dynamics, that has an efficiently computable, closed-form solution. Through numerical experiments, we empirically demonstrate the improved sample efficiency and out-of-sample generalization of our approach over a purely data-driven baseline. We demonstrate an application of our method to control through a target tracking problem with nonholonomic dynamics, and on spring-mass-damper and F-16 aircraft state prediction tasks.

<pre id="bibtex" style="font-size: 0.8em; background-color: #f0f0f0; border-radius: 5px; padding: 10px;">
@misc{thorpe2023physicsinformed,
      title={Physics-Informed Kernel Embeddings: Integrating Prior System Knowledge with Data-Driven Control}, 
      author={Adam J. Thorpe and Cyrus Neary and Franck Djeumou and Meeko M. K. Oishi and Ufuk Topcu},
      year={2023},
      eprint={2301.03565},
      archivePrefix={arXiv},
      primaryClass={eess.SY}
}
</pre>