init = function()
{
  var REFRESH_RATE = 33; // ms
  var ZOOM_RATE    = 33;

  var canvas  = document.getElementById( "yapeCanvas" );
  var context = canvas.getContext( "2d" );

  var C_WIDTH  = canvas.width;
  var C_HEIGHT = canvas.height;

  var mouseButtonDown = false;

  var mainReferential = referential.create( point.create( 0, 0 ), 50, 0,
                                            undefined );

  var coolAxis = axis.create( mainReferential );

  var zoomEasing = function( dz )
  {
    mainReferential.scale( dz );

    if( mouseButtonDown )
    {
      setTimeout( zoomEasing, ZOOM_RATE, dz );
    }
  };

  var onMouseDown = function( evt )
  {
    evt.preventDefault();

    mouseButtonDown = true;

    var dz = ( evt.which == 1 ? 0.5 : -0.5 );

    setTimeout( zoomEasing, ZOOM_RATE, dz );

    return true;
  };

  var onContextMenu = function( evt )
  {
    evt.preventDefault();

    return true;
  };

  onMouseUp = function( evt )
  {
    mouseButtonDown = false;
  };

  var onMouseMove = function( evt )
  {
    mainReferential.setOrigin( getCursorScreenPos( evt ) );
  };

  var onKeyUp = function( evt )
  {
    // do stuff on key up
  };

  var getCursorScreenPos = function( mouseEvt )
  {
    var x;
    var y;

    if( mouseEvt.pageX !== undefined && mouseEvt.pageY !== undefined )
    {
      x = mouseEvt.pageX;
      y = mouseEvt.pageY;
    }
    else
    {
      x = mouseEvt.clientX + document.body.scrollLeft +
      document.documentElement.scrollLeft;

      y = mouseEvt.clientY +
      document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    return point.create( x, y );
  };

  var draw = function()
  {
    context.save();

    context.clearRect( 0, 0, C_WIDTH, C_HEIGHT );

    coolAxis.draw( context );

    context.restore();

    setTimeout( draw, REFRESH_RATE );
  };

  canvas.addEventListener( "mousedown", onMouseDown, false );
  canvas.addEventListener( "contextmenu", onContextMenu, false );
  canvas.addEventListener( "mouseup", onMouseUp, false );
  canvas.addEventListener( "mousemove", onMouseMove, false );
  window.addEventListener( "keyup", onKeyUp, false );

  setTimeout( draw, REFRESH_RATE );
};

document.onselectstart = function()
{
  return false;
};
