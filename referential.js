/* referential.js
 * Holds various information about a referential.
 * Represented referentials are orthogonal. (90° angle between axis, same
 * length for the axis).
 * TODO
 * A referential lives inside another referential. So a referential object
 * should have a reference to its parents. Ultimately, the "last" parent is
 * the screen referential ; this one doesn't have any parent.
 * Methods would be provided to map points to and from the parent referential.
 * And/Or bunches of points.
 * Theses methods should not be very different (a matter of multiplication
 * rather than division, and vice-versa).
 */
referential = ( function()
{
  create = function( origin, scale, rotation, parentReferential )
  {
    var parentRef = parentReferential; // will be set to undefined if no parent
                                       // referential is given.

    var origin    = origin; // expressed in parent's coordinates
    var rotation  = rotation; // rad
    var scale     = scale;

    var that = {};

    that.setParent = function( parRef ){
      parentRef = parRef;
    };

    that.translate = function( vector ){
      origin.shift( vector );
    };

    that.setOrigin = function( newOrigin ){
      origin = newOrigin;
    };

    that.rotate = function( da ){
      rotation += da;
    };

    that.setRotation = function( newRotation ){
      rotation = newRotation;
    };

    that.scale = function( ds ){
      scale += ds;
    };

    that.setScale = function( newScale ){
      scale = newScale;
    };

    that.getOrigin = function(){
      return origin;
    };
    that.getRotation = function(){
      return rotation;
    };
    that.getScale = function(){
      return scale;
    };

    that.applyToContext = function( context ){
      // relies on the caller to save context before calling the method
      context.translate( origin.getX(), origin.getY() );
      context.rotate( rotation );
      context.scale( scale, scale );
    };

    that.mapToParent = function( /* bunch of points or vector */ ){
    };

    that.mapFromParent = function( /* bunch of points or vectors */ ){
    };

    return that;
  };

  return{
    create : create
  };

}() );
