/* point.js
 * Modelize a 2d point
 */
point = ( function()
{
  var create = function( x, y )
  {
    var that = {};

    var x = x;
    var y = y;

    that.shift = function( vector ){
      x += vector.getX();
      y += vector.getY();
    }

    that.getX = function(){
      return x;
    };

    that.getY = function(){
      return y;
    };

    that.clone = function(){
      return create( x, y );
    };

    that.toString = function(){
      return "{ x : " + x + ", y : " + y + " }";
    };

    return that;
  };

  return{
    create : create,
  };
}() );
