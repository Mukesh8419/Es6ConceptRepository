const uName=['tina','priyanka','sheweta','rohit']
const display=uName.map(item=>{
    return "<li>"+item+'</li>';
      })
      const render="<ul>"+display.join("")+"</ul>";
      console.log(render)
      // document.write(render);