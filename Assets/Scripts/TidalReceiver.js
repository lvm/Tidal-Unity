public var RemoteIP : String = "127.0.0.1";
public var SendToPort : int = 9000;
public var ListenerPort : int = 5891;
private var handler : Osc;

public var cubeTag : String = "Dancer";
public var shroomTag : String = "Shroom";

private var originalCube : GameObject;
private var originalShroom : GameObject;

private var figure : String = "";

private var wait : int = 10;

private var scale : float = 1.0;
private var rotate : float = 0.0;

private var horizontal : int = 1;
private var vertical : int = 1;

private var zPosition : float = 5.0;


function Start ()
{
  var udp : UDPPacketIO = GetComponent("UDPPacketIO");
  udp.init(RemoteIP, SendToPort, ListenerPort);
  handler = GetComponent("Osc");
  handler.init(udp);
  handler.SetAllMessageHandler(AllMessageHandler);

  originalCube = startCube();
  originalShroom = startShroom();
}

function Update () {
  if ( figure.ToLower() == shroomTag.ToLower() ){ cloneObject(originalShroom, shroomTag); }
  else { cloneObject(originalCube, cubeTag); }
}

function startCube() : GameObject {
  var go : GameObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
  go.tag = cubeTag;
  go.transform.position = new Vector3(0,0,0);
  go.AddComponent(SinDancer);
  go.SetActive(false);

  return go;
}

function startShroom() : GameObject {
  var go : GameObject = GameObject.FindWithTag(shroomTag);
  go.transform.position = new Vector3(0,0,0);
  go.AddComponent(SinDancer);
  go.SetActive(false);

  return go;
}

function cloneObject(originalObject, objectTag){
  var clonePosition = new Vector3(Random.Range(-2.0, 2.0), Random.Range(-10.0, 10.0), Random.Range(zPosition*-1.0, zPosition));
  var clone = Instantiate(originalObject, clonePosition, Quaternion.identity);
  clone.tag = objectTag;
  clone.SetActive(true);
  clone.SendMessage('selfDestroy', wait);
  clone.SendMessage('Scale', new Vector3(scale*1.0, scale*1.0, scale*1.0));
  clone.SendMessage('Rotate', rotate);
  clone.SendMessage('setMovementVertical', vertical);
  clone.SendMessage('setMovementHorizontal', horizontal);
}

function AllMessageHandler(oscMessage: OscMessage) {
  var msgString = Osc.OscMessageToString(oscMessage);
  var msgAddress = oscMessage.Address;
  var msgValue = oscMessage.Values;
  //Debug.Log(msgString);
  Primitives(msgValue);
}

function Primitives(msgValue)
{
  text       = msgValue[0];
  wait       = msgValue[1];
  scale      = msgValue[2];
  rotate     = msgValue[3];
  vertical   = msgValue[4];
  horizontal = msgValue[5];
  zPosition  = msgValue[6];
  figure     = msgValue[7];
}
