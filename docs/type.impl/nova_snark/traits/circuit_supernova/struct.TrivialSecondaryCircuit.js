(function() {var type_impls = {
"lurk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TrivialSecondaryCircuit%3CF%3E\" class=\"impl\"><a href=\"#impl-Debug-for-TrivialSecondaryCircuit%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for TrivialSecondaryCircuit&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + PrimeField,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","lurk::proof::supernova::C2"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TrivialSecondaryCircuit%3CF%3E\" class=\"impl\"><a href=\"#impl-Clone-for-TrivialSecondaryCircuit%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for TrivialSecondaryCircuit&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + PrimeField,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; TrivialSecondaryCircuit&lt;F&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","lurk::proof::supernova::C2"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StepCircuit%3CF%3E-for-TrivialSecondaryCircuit%3CF%3E\" class=\"impl\"><a href=\"#impl-StepCircuit%3CF%3E-for-TrivialSecondaryCircuit%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; StepCircuit&lt;F&gt; for TrivialSecondaryCircuit&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: PrimeField,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.arity\" class=\"method trait-impl\"><a href=\"#method.arity\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">arity</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Return the the number of inputs or outputs of each step\n(this method is called only at circuit synthesis time)\n<code>synthesize</code> and <code>output</code> methods are expected to take as\ninput a vector of size equal to arity and output a vector of size equal to arity</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.circuit_index\" class=\"method trait-impl\"><a href=\"#method.circuit_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">circuit_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Return this <code>StepCircuit</code>’s assigned index, for use when enforcing the program counter.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.synthesize\" class=\"method trait-impl\"><a href=\"#method.synthesize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">synthesize</a>&lt;CS&gt;(\n    &amp;self,\n    _cs: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut CS</a>,\n    program_counter: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;AllocatedNum&lt;F&gt;&gt;,\n    z: &amp;[AllocatedNum&lt;F&gt;]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AllocatedNum&lt;F&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;AllocatedNum&lt;F&gt;&gt;), SynthesisError&gt;<span class=\"where fmt-newline\">where\n    CS: ConstraintSystem&lt;F&gt;,</span></h4></section></summary><div class='docblock'>Synthesize the circuit for a computation step and return variable\nthat corresponds to the output of the step <code>pc_{i+1}</code> and <code>z_{i+1}</code></div></details></div></details>","StepCircuit<F>","lurk::proof::supernova::C2"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-TrivialSecondaryCircuit%3CF%3E\" class=\"impl\"><a href=\"#impl-Default-for-TrivialSecondaryCircuit%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for TrivialSecondaryCircuit&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + PrimeField,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; TrivialSecondaryCircuit&lt;F&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","lurk::proof::supernova::C2"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()