/* vector2d.js
 * Modelize a 2d vector.
 * TODO Re-use point's prototype and add vector's specific operations
 */
vector2d = ( function()
{
  var create = function( x, y )
  {
    var that = {};

    var x = x;
    var y = y;

    that.add = function( vector ){
      x += vector.getX();
      y += vector.getY();
    };

    that.scale = function( lambda ){
      x *= lambda;
      y *= lambda;
    };

    that.dotProduct = function( vector ){
      return x * vector.getX() + y * vector.getY();
    };

    that.norm = function(){
      return Math.sqrt( that.dotProduct( that ) );
    };

    that.normalize = function(){
      var norm = that.norm();

      x /= norm;
      y /= norm;
    };

    that.getColinearityCoeff = function( otherVector ){
      // 1. check colinearity
      // 2. if colinear return coeff
      //    else return undefined

      var alphaX = that.getX() / otherVector.getX();
      var alphaY = that.getY() / otherVector.getY();

      if( alphaX === alphaY ) // TODO include epsilon tolerance ?
      {
        return alphaX; // or alphaY. whatever.
      }

      return undefined;
    };

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
