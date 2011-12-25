i/* Modelize a bouncing ball
  * The idea is to show the ball as a circle made of several segments (the
  * more the better). Each segment is linked to its neighbor by a "spinning
  * string" (in opposition to compression/extension string) that tends to
  * align both segments it links.
  * This way the resulting shape should be roughly round, and yet be
  * subject to funny behaviours when thrown against a "wall".
  *
  * The global ball will have a weigth, which will apply at its gravity
  * center
  */
