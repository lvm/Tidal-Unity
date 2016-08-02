private var initialPosition : Vector3;
private var newPosition : Vector3;
private var movementSpeedVertical : float = 1.0;
private var movementSpeedHorizontal : float = 1.0;
private var rotation : int = 0;
private var shrink : boolean = false;

function Start ()
{
  initialPosition = gameObject.transform.position;
}

function Update ()
{
  newPosition = gameObject.transform.position;
  newPosition.x += Mathf.Sin(Time.time) * Time.deltaTime * movementSpeedHorizontal;
  newPosition.y += Time.deltaTime * movementSpeedVertical;

  gameObject.transform.position = newPosition;

  if( gameObject.transform.position.y >= 12.0 ){
    gameObject.transform.position.y = -12.0;
  }

  gameObject.transform.Rotate(new Vector3(rotation, rotation, rotation));

  if ( shrink ){
    gameObject.transform.localScale -= new Vector3(0.1, 0.1, 0.1);
    if( gameObject.transform.localScale.x <= 0.0 ) {
      Destroy(gameObject);
    }
  }
}

function selfDestroy(seconds){
  yield WaitForSeconds(seconds);
  shrink = true;
}

function setMovementHorizontal(n){
  movementSpeedHorizontal = n;
}

function setMovementVertical(n){
  movementSpeedVertical = n;
}

function Rotate(n){
  rotation = n;
}

function Scale (vector){
  gameObject.transform.localScale = vector;
}
