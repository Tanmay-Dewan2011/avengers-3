var canvas = new fabric.Canvas('myCanvas');

block_img_height = 30;
block_img_width = 30;

player_y = 10;
player_x = 10;

player_object = "";
block_image = "";

function player_update()
{
    fabric.Image.fromURL("carpenter-clipart.png", function(Img)
 {
      player_object = Img;
     player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
       player_object.set({ top:player_y, left:player_x });
        canvas.add(player_object); 
    }); 
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    { 
         block_image = Img;
          block_image.scaleToWidth(block_img_width);
           block_image.scaleToHeight(block_img_height);
            block_image.set({ top:player_y, left:player_x });
             canvas.add(block_image);
             });
             }
            

             window.addEventListener("keydown", my_keydown);
             function my_keydown(e)
              {
               keyPressed = e.keyCode;
               console.log(keyPressed);
               if(e.shiftKey == true && keyPressed == '80')
               {
               console.log("p and shift pressed together");
               block_image_width = block_image_width + 10;
               block_image_height = block_image_height + 10;
               document.getElementById("current_width").innerHTML = block_image_width;
               document.getElementById("current_height").innerHTML = block_image_height;
               }

               if(e.shiftKey && keyPressed == '77') 
               {
               console.log("m and shift pressed together");
               block_image_width = block_image_width - 10;
               block_image_height = block_image_height - 10;
               document.getElementById("current_width").innerHTML = block_image_width;
               document.getElementById("current_height").innerHTML = block_image_height;
               }
               if(keyPressed == '38')
               {
                up();
                console.log("up");
               }
               if(keyPressed == '40')
               {
                down();
                console.log("down");
               }
               if(keyPressed == '37')
               {
                left();
                console.log("left");
               }
               if(keyPressed == '39')
               {
                right();
                console.log("right");
               }
               if(keyPressed == '70')
               {
                   new_image('spiderman_face.png')
                   console.log("f key pressed")
               }
               if(keyPressed == '76')
               {
                   new_image('hulk_legs.png')
                   console.log("l key pressed")
               }
               if(keyPressed == '66')
               {
                   new_image('ironman_body.png')
                   console.log("b key pressed")
               }
               if(keyPressed == '82')
               {
                   new_image('thor_right_hand.png')
                   console.log("r key pressed")
               }
               if(keyPressed == '72')
               {
                   new_image('captain_america_left_hand.png')
                   console.log("h key pressed")
               }
            }
                  
            function up()
            {
                if(player_y >=0)
                {
                    player_y = player_y - block_img_height;
                    console.log("block image height =" + block_img_height);
                    console.log("when the up arrow key is pressed x =" + player_x + "y =" + player_y);
                    canvas.remove (player_object);
                    player_update();                 
                }
            }

            function down()
            {
                if(player_y <=500)
                {
                    player_y = player_y + block_img_height;
                    console.log("block image height =" + block_img_height);
                    console.log("when the down arrow key is pressed x =" + player_x + "y =" + player_y);
                    canvas.remove (player_object);
                    player_update();                 
                }
            }

            function right()
            {
                if(player_x <=800)
                {
                    player_x = player_x + block_img_width;
                    console.log("block image width =" + block_img_width);
                    console.log("when the right arrow key is pressed x =" + player_x + "y =" + player_y);
                    canvas.remove (player_object);
                    player_update();                 
                }
            }

            function left()
            {
                if(player_x >=0)
                {
                    player_x = player_x - block_img_width;
                    console.log("block image width =" + block_img_width);
                    console.log("when the left arrow key is pressed x =" + player_x + "y =" + player_y);
                    canvas.remove (player_object);
                    player_update();                 
                }
            }