function Player(x_in,y_in) {var x=x_in;var y=y_in;function update(grav) { if(y>0.0) { y+=grav; } } } function leef() { pl=new Player();var gravity=9.8; while(true) { pl.update(gravity); } }