/* a system of orthogonal axis with a mark at unit length.
 * Origin, scale and rotation are taken wrt parent referencial
 */
axis = ( function()
{
  var create = function( referential )
  {
    // do the creation
    var referential = referential;

    var that = {};

    that.draw = function( context ){
      context.save();

      referential.applyToContext( context );

      context.beginPath();

      // color and line style
      context.strokeStyle = "rgba( 0, 0, 0, 0.5 )";
      context.lineWidth   = 1 / referential.getScale();

      // draw x axis
      context.moveTo( -1, 0 );
      context.lineTo( 1, 0 );
      context.moveTo( 0, 0 );
      context.lineTo( 1, 0 );

      // draw y axid
      context.moveTo( 0, -1 );
      context.lineTo( 0, 1 );
      context.moveTo( 0, 0 );
      context.lineTo( 0, 1 );

      context.closePath();

      context.stroke();

      context.restore();
    };

    return that;
  };

  return{
    create : create
  };
}() );
