(function() {var type_impls = {
"lurk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#92-402\">source</a><a href=\"#impl-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.frames\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#107-109\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.frames\" class=\"fn\">frames</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Frame&gt;&gt;</h4></section><section id=\"method.emitted\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#111-113\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.emitted\" class=\"fn\">emitted</a>(_store: &amp;<a class=\"struct\" href=\"lurk/lem/store/struct.Store.html\" title=\"struct lurk::lem::store::Store\">Store</a>&lt;F&gt;, eval_frame: &amp;Frame) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"lurk/lem/pointers/struct.Ptr.html\" title=\"struct lurk::lem::pointers::Ptr\">Ptr</a>&gt;</h4></section><section id=\"method.cache_witness\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#115-132\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.cache_witness\" class=\"fn\">cache_witness</a>(&amp;mut self, s: &amp;<a class=\"struct\" href=\"lurk/lem/store/struct.Store.html\" title=\"struct lurk::lem::store::Store\">Store</a>&lt;F&gt;) -&gt; <a class=\"type\" href=\"https://docs.rs/anyhow/1.0.80/anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, SynthesisError&gt;</h4></section><section id=\"method.clear_cached_witness\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#135-137\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.clear_cached_witness\" class=\"fn\">clear_cached_witness</a>(&amp;mut self)</h4></section><section id=\"method.precedes\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#140-142\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.precedes\" class=\"fn\">precedes</a>(&amp;self, maybe_next: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section><section id=\"method.synthesize_frames\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#144-193\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.synthesize_frames\" class=\"fn\">synthesize_frames</a>&lt;CS: ConstraintSystem&lt;F&gt;&gt;(\n    &amp;self,\n    cs: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut CS</a>,\n    store: &amp;<a class=\"struct\" href=\"lurk/lem/store/struct.Store.html\" title=\"struct lurk::lem::store::Store\">Store</a>&lt;F&gt;,\n    input: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"lurk/circuit/gadgets/pointer/struct.AllocatedPtr.html\" title=\"struct lurk::circuit::gadgets::pointer::AllocatedPtr\">AllocatedPtr</a>&lt;F&gt;&gt;,\n    frames: &amp;[Frame],\n    g: &amp;<a class=\"struct\" href=\"lurk/lem/circuit/struct.GlobalAllocator.html\" title=\"struct lurk::lem::circuit::GlobalAllocator\">GlobalAllocator</a>&lt;F&gt;\n) -&gt; <a class=\"type\" href=\"https://docs.rs/anyhow/1.0.80/anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"lurk/circuit/gadgets/pointer/struct.AllocatedPtr.html\" title=\"struct lurk::circuit::gadgets::pointer::AllocatedPtr\">AllocatedPtr</a>&lt;F&gt;&gt;, SynthesisError&gt;</h4></section><section id=\"method.blank\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#195-219\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.blank\" class=\"fn\">blank</a>(folding_config: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"lurk/proof/supernova/enum.FoldingConfig.html\" title=\"enum lurk::proof::supernova::FoldingConfig\">FoldingConfig</a>&lt;F, C&gt;&gt;, pc: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section><section id=\"method.from_frames\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#221-361\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.from_frames\" class=\"fn\">from_frames</a>(\n    frames: &amp;[Frame],\n    store: &amp;'a <a class=\"struct\" href=\"lurk/lem/store/struct.Store.html\" title=\"struct lurk::lem::store::Store\">Store</a>&lt;F&gt;,\n    folding_config: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"lurk/proof/supernova/enum.FoldingConfig.html\" title=\"enum lurk::proof::supernova::FoldingConfig\">FoldingConfig</a>&lt;F, C&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Self&gt;</h4></section><section id=\"method.build_frames\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#363-383\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.build_frames\" class=\"fn\">build_frames</a>(\n    expr: <a class=\"struct\" href=\"lurk/lem/pointers/struct.Ptr.html\" title=\"struct lurk::lem::pointers::Ptr\">Ptr</a>,\n    env: <a class=\"struct\" href=\"lurk/lem/pointers/struct.Ptr.html\" title=\"struct lurk::lem::pointers::Ptr\">Ptr</a>,\n    store: &amp;<a class=\"struct\" href=\"lurk/lem/store/struct.Store.html\" title=\"struct lurk::lem::store::Store\">Store</a>&lt;F&gt;,\n    limit: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>,\n    ec: &amp;<a class=\"struct\" href=\"lurk/lem/eval/struct.EvalConfig.html\" title=\"struct lurk::lem::eval::EvalConfig\">EvalConfig</a>&lt;'_, F, C&gt;\n) -&gt; <a class=\"type\" href=\"https://docs.rs/anyhow/1.0.80/anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Frame&gt;, <a class=\"enum\" href=\"lurk/error/enum.ProofError.html\" title=\"enum lurk::error::ProofError\">ProofError</a>&gt;</h4></section><section id=\"method.significant_frame_count\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#385-397\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.significant_frame_count\" class=\"fn\">significant_frame_count</a>(frames: &amp;[Frame]) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.program_counter\" class=\"method\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#399-401\">source</a><h4 class=\"code-header\">pub fn <a href=\"lurk/lem/multiframe/struct.MultiFrame.html#tymethod.program_counter\" class=\"fn\">program_counter</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></div></details>",0,"lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#76\">source</a><a href=\"#impl-Debug-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#76\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StepCircuit%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#914-936\">source</a><a href=\"#impl-StepCircuit%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; StepCircuit&lt;F&gt; for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.arity\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#915-917\">source</a><a href=\"#method.arity\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">arity</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Return the the number of inputs or outputs of each step\n(this method is called only at circuit synthesis time)\n<code>synthesize</code> and <code>output</code> methods are expected to take as\ninput a vector of size equal to arity and output a vector of size equal to arity</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.synthesize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#919-931\">source</a><a href=\"#method.synthesize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">synthesize</a>&lt;CS: ConstraintSystem&lt;F&gt;&gt;(\n    &amp;self,\n    cs: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut CS</a>,\n    _pc: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;AllocatedNum&lt;F&gt;&gt;,\n    z: &amp;[AllocatedNum&lt;F&gt;]\n) -&gt; <a class=\"type\" href=\"https://docs.rs/anyhow/1.0.80/anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;(<a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AllocatedNum&lt;F&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;AllocatedNum&lt;F&gt;&gt;), SynthesisError&gt;</h4></section></summary><div class='docblock'>Synthesize the circuit for a computation step and return variable\nthat corresponds to the output of the step <code>pc_{i+1}</code> and <code>z_{i+1}</code></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.circuit_index\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#933-935\">source</a><a href=\"#method.circuit_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">circuit_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Return this <code>StepCircuit</code>’s assigned index, for use when enforcing the program counter.</div></details></div></details>","StepCircuit<F>","lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Circuit%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#732-807\">source</a><a href=\"#impl-Circuit%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; Circuit&lt;F&gt; for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.synthesize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#733-806\">source</a><a href=\"#method.synthesize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">synthesize</a>&lt;CS: ConstraintSystem&lt;F&gt;&gt;(\n    self,\n    cs: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut CS</a>\n) -&gt; <a class=\"type\" href=\"https://docs.rs/anyhow/1.0.80/anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, SynthesisError&gt;</h4></section></summary><div class='docblock'>Synthesize the circuit into a rank-1 quadratic constraint system.</div></details></div></details>","Circuit<F>","lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FrameLike%3CPtr%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#416-431\">source</a><a href=\"#impl-FrameLike%3CPtr%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; <a class=\"trait\" href=\"lurk/proof/trait.FrameLike.html\" title=\"trait lurk::proof::FrameLike\">FrameLike</a>&lt;<a class=\"struct\" href=\"lurk/lem/pointers/struct.Ptr.html\" title=\"struct lurk::lem::pointers::Ptr\">Ptr</a>&gt; for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.FrameIO\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.FrameIO\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"lurk/proof/trait.FrameLike.html#associatedtype.FrameIO\" class=\"associatedtype\">FrameIO</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"lurk/lem/pointers/struct.Ptr.html\" title=\"struct lurk::lem::pointers::Ptr\">Ptr</a>&gt;</h4></section></summary><div class='docblock'>the type for the Frame’s IO</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.input\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#419-423\">source</a><a href=\"#method.input\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lurk/proof/trait.FrameLike.html#tymethod.input\" class=\"fn\">input</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"lurk/lem/pointers/struct.Ptr.html\" title=\"struct lurk::lem::pointers::Ptr\">Ptr</a>&gt;</h4></section></summary><div class='docblock'>the input of the frame</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.output\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#426-430\">source</a><a href=\"#method.output\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lurk/proof/trait.FrameLike.html#tymethod.output\" class=\"fn\">output</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"lurk/lem/pointers/struct.Ptr.html\" title=\"struct lurk::lem::pointers::Ptr\">Ptr</a>&gt;</h4></section></summary><div class='docblock'>the output of the frame</div></details></div></details>","FrameLike<Ptr>","lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#76\">source</a><a href=\"#impl-Clone-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#76\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StepCircuit%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#846-912\">source</a><a href=\"#impl-StepCircuit%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; StepCircuit&lt;F&gt; for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.arity\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#849-851\">source</a><a href=\"#method.arity\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">arity</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Return the number of inputs or outputs of each step\n(this method is called only at circuit synthesis time)\n<code>synthesize</code> and <code>output</code> methods are expected to take as\ninput a vector of size equal to arity and output a vector of size equal to arity</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.synthesize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#853-911\">source</a><a href=\"#method.synthesize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">synthesize</a>&lt;CS&gt;(\n    &amp;self,\n    cs: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;mut CS</a>,\n    z: &amp;[AllocatedNum&lt;F&gt;]\n) -&gt; <a class=\"type\" href=\"https://docs.rs/anyhow/1.0.80/anyhow/type.Result.html\" title=\"type anyhow::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;AllocatedNum&lt;F&gt;&gt;, SynthesisError&gt;<div class=\"where\">where\n    CS: ConstraintSystem&lt;F&gt;,</div></h4></section></summary><div class='docblock'>Sythesize the circuit for a computation step and return variable\nthat corresponds to the output of the step <code>z_{i+1}</code></div></details></div></details>","StepCircuit<F>","lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Provable%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#809-844\">source</a><a href=\"#impl-Provable%3CF%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F: <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>, C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt;&gt; <a class=\"trait\" href=\"lurk/proof/trait.Provable.html\" title=\"trait lurk::proof::Provable\">Provable</a>&lt;F&gt; for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.public_inputs\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#810-832\">source</a><a href=\"#method.public_inputs\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lurk/proof/trait.Provable.html#tymethod.public_inputs\" class=\"fn\">public_inputs</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;F&gt;</h4></section></summary><div class='docblock'>Returns the public inputs of the provable structure.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.public_input_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#835-838\">source</a><a href=\"#method.public_input_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lurk/proof/trait.Provable.html#tymethod.public_input_size\" class=\"fn\">public_input_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the size of the public inputs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.num_frames\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#841-843\">source</a><a href=\"#method.num_frames\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"lurk/proof/trait.Provable.html#tymethod.num_frames\" class=\"fn\">num_frames</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the number of reduction frames in the provable structure.</div></details></div></details>","Provable<F>","lurk::proof::nova::C1LEM"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NonUniformCircuit%3C%3CF+as+CurveCycleEquipped%3E::E1%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#938-962\">source</a><a href=\"#impl-NonUniformCircuit%3C%3CF+as+CurveCycleEquipped%3E::E1%3E-for-MultiFrame%3C'a,+F,+C%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, F, C&gt; NonUniformCircuit&lt;&lt;F as <a class=\"trait\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html\" title=\"trait lurk::proof::nova::CurveCycleEquipped\">CurveCycleEquipped</a>&gt;::<a class=\"associatedtype\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html#associatedtype.E1\" title=\"type lurk::proof::nova::CurveCycleEquipped::E1\">E1</a>&gt; for <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html\" title=\"trait lurk::proof::nova::CurveCycleEquipped\">CurveCycleEquipped</a> + <a class=\"trait\" href=\"lurk/field/trait.LurkField.html\" title=\"trait lurk::field::LurkField\">LurkField</a>,\n    C: <a class=\"trait\" href=\"lurk/coprocessor/trait.Coprocessor.html\" title=\"trait lurk::coprocessor::Coprocessor\">Coprocessor</a>&lt;F&gt; + 'a,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.C1\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.C1\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">C1</a> = <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h4></section></summary><div class='docblock'>The type of the step-circuits on the primary</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.C2\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.C2\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">C2</a> = TrivialSecondaryCircuit&lt;&lt;&lt;&lt;F as <a class=\"trait\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html\" title=\"trait lurk::proof::nova::CurveCycleEquipped\">CurveCycleEquipped</a>&gt;::<a class=\"associatedtype\" href=\"lurk/proof/nova/trait.CurveCycleEquipped.html#associatedtype.E1\" title=\"type lurk::proof::nova::CurveCycleEquipped::E1\">E1</a> as CurveCycleEquipped&gt;::Secondary as Engine&gt;::Scalar&gt;</h4></section></summary><div class='docblock'>The type of the step-circuits on the secondary</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.num_circuits\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#946-949\">source</a><a href=\"#method.num_circuits\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">num_circuits</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>How many circuits are provided?</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.primary_circuit\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#951-957\">source</a><a href=\"#method.primary_circuit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">primary_circuit</a>(&amp;self, circuit_index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"struct\" href=\"lurk/lem/multiframe/struct.MultiFrame.html\" title=\"struct lurk::lem::multiframe::MultiFrame\">MultiFrame</a>&lt;'a, F, C&gt;</h4></section></summary><div class='docblock'>Return a new instance of the primary circuit at <code>index</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.secondary_circuit\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/lurk/lem/multiframe.rs.html#959-961\">source</a><a href=\"#method.secondary_circuit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">secondary_circuit</a>(&amp;self) -&gt; <a class=\"type\" href=\"lurk/proof/supernova/type.C2.html\" title=\"type lurk::proof::supernova::C2\">C2</a>&lt;F&gt;</h4></section></summary><div class='docblock'>Return a new instance of the secondary circuit.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initial_circuit_index\" class=\"method trait-impl\"><a href=\"#method.initial_circuit_index\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">initial_circuit_index</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Initial circuit index, defaults to zero.</div></details></div></details>","NonUniformCircuit<<F as CurveCycleEquipped>::E1>","lurk::proof::nova::C1LEM"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()