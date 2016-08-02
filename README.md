# TidalCycles meets Unity 3D

This project is a *Proof of Concept*/*Boilerplate* to create [Unity 3D](https://unity3d.com/) scenes that receives OSC messages that affect `GameObjects` with the intention of livecoding visuals using [TidalCycles](http://tidalcycles.org/).

## How do I play with it?

1. Cloning this repository  
2. In Unity: Open this project, then open the `Tidal.unity` scene  
3. In Unity: Click the *play* button  
4. In TidalCycles: Evaluate the code from `Unity.tidal`  
4. That's it  

You should be able to start playing patterns that modify *on-the-fly* the behavior of the cubes/shrooms.

### But this is silly! I want to .....

Well, yeah. I just wrote this to see if it was possible. It's not that interesting nor optimized (it runs smoothly with a `i5-2410M` and an Intel integrated graphic card, but YMMV).  
If you want to (you can!) do something more interesting, just create a `Scene` with a `GameObject` that contains these three scripts: `OSC`, `UDPPacketIO` and `TidalReceiver` (which you might want to edit according to your needs). That's all, no black magic here :-)

## Third party projects used

* [@polyrhythmatic's fork of unity-osc-receiver](https://github.com/polyrhythmatic/unity-osc-receiver/)
* [A mushroom from AxeyWorks' Low Poly: Free Pack](https://www.assetstore.unity3d.com/en/#!/content/58821)

## License

See [LICENSE](LICENSE)
