(
var osc = NetAddr("127.0.0.1", 5891);
~anim = Pbind(
  \dur, 4,
  \dest, osc,
  \msg, "/",
  \text, "test!",
  \wait, Pwhite(1,5),
  \scale, Pseq((0.1,0.15..0.75), inf) * Pxrand((1..5),inf),
  \rotate, Pxrand((1..10)/2, inf),
  \vertical, Pwhite(1,5),
  \horizontal, Pxrand((1..5)/10, inf) * 2,
  \zPosition, Pxrand((-5..10), inf),
  \figure, Pxrand(["Dancer", "Shroom"], inf),
  \play, { ~dest.sendBundle(~latency, [~msg, ~text, ~wait, ~scale, ~rotate, ~vertical, ~horizontal, ~zPosition, ~figure]) }
).trace.play;
)
