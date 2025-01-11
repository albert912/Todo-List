import "./styles.css";


const adbuton = document.querySelector(".add");

const maindiv = document.querySelector(".main");

const sideselect = document.querySelector(".side");

const dialg = document.querySelector(".adialog");

const pdiv = document.querySelector(".projdiv");

const stodiv = document.querySelector(".tododiv");

const depro = document.querySelector(".default");

const totitle = document.createElement("p");

totitle.classList.add("ttitle");

const jticon = document.querySelector(".ticon");

const spdefault = document.querySelector(".pdefault");




dialg.classList.add("diolog");



adbuton.addEventListener("click", () => {



    dialg.showModal();

    
   const title = document.createElement("h1");

   title.textContent = "New Project"

   title.classList.add("tmod");

   dialg.appendChild(title);

   //

    const nwproject = document.createElement("form");

    dialg.appendChild(nwproject);


    const lbl = document.createElement("label");

    lbl.textContent = "Project Title:";

    lbl.setAttribute("for", "textinput");

    lbl.classList.add("labels");

    nwproject.appendChild(lbl);

    const firstbr = document.createElement("br");

    nwproject.appendChild(firstbr);

    const secondbr = document.createElement("br");

    nwproject.appendChild(secondbr);

    const txinput = document.createElement("input");

    txinput.setAttribute("type" , "text");

    txinput.setAttribute("id", "textinput");

    txinput.setAttribute("name", "textinput");

    txinput.setAttribute("placeholder", "Enter project's title");

    txinput.setAttribute("maxlength", "25");

    nwproject.appendChild(txinput);

    const thirdbr = document.createElement("br");

    nwproject.appendChild(thirdbr);

    const ctext = document.createElement("p");

    ctext.textContent = "Max Characters:  25";

    ctext.classList.add("chtext");

    nwproject.appendChild(ctext);

    const sbutton = document.createElement("button");

    sbutton.textContent = "Submit";

    sbutton.classList.add("subt");

    nwproject.appendChild(sbutton);



       sbutton.addEventListener("click", (event) => {

        event.preventDefault()


  const gvalue = txinput.value;


  dialg.close();

  dialg.textContent = "";

console.log(gvalue);


const newdiv = document.createElement("div");

newdiv.classList.add("sdiv");

newdiv.textContent += gvalue;

pdiv.appendChild(newdiv);


const imgfornd = document.createElement("img");

imgfornd.classList.add("ssimg");

imgfornd.setAttribute("src", "https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png");

imgfornd.setAttribute("alt", "trashicon");

imgfornd.setAttribute("width", "35px");

imgfornd.setAttribute("height", "35px");

newdiv.appendChild(imgfornd);


imgfornd.addEventListener("click", (event) => {


  newdiv.remove();


  });


       });




});

// To-do list user interface of the default project



spdefault.addEventListener("click", (event) => {




 if (depro) {

  maindiv.textContent = "";

 totitle.textContent = "Default";



 maindiv.appendChild(totitle);


}

 else {



 }



});

jticon.addEventListener("click", function() {


  depro.remove();
  
  

  totitle.remove();
  
  
  
  });
  

// Todo list inputs

const ctodo = document.querySelector(".adtodo");


const sd = document.querySelector(".dadto");



ctodo.addEventListener("click", (event) => {




    sd.showModal();


    const h1dt = document.createElement("h1");

    h1dt.textContent = "New Task";

    h1dt.classList.add("sh1dt");

    sd.appendChild(h1dt);


    const dform = document.createElement("form");

    dform.classList.add("sdform");

    sd.appendChild(dform);

    const dttext = document.createElement("label");

    dttext.textContent = "Task Title:";

    dttext.classList.add("sdttext");

    dttext.setAttribute("for", "title");

    dform.appendChild(dttext);


  const ttinput = document.createElement("input");

  ttinput.setAttribute("type", "text");

  ttinput.setAttribute("id", "title");

  ttinput.setAttribute("name", "title");

  ttinput.setAttribute("maxlength", "24");

 



   ttinput.classList.add("sttinput");

   dform.appendChild(ttinput);

   const mc = document.createElement("p");

   mc.textContent = "Max Characters: 24";

   mc.classList.add("smc");

   dform.appendChild(mc);


   const dlabel = document.createElement("label");

   dlabel.textContent = "Description:";

   dlabel.setAttribute("for", "desc");

   dlabel.classList.add("sdlabel");

  dform.appendChild(dlabel);

   const tarea = document.createElement("textarea");

   tarea.classList.add("starea");

   dform.appendChild(tarea);


  const ddlabel = document.createElement("label");

  ddlabel.textContent = "Due Date:";

  ddlabel.classList.add("sddlabel");

  ddlabel.setAttribute("for", "ddate");

  dform.appendChild(ddlabel);

  const dinput = document.createElement("input");

  dinput.setAttribute("type", "date");

  dinput.setAttribute("id", "ddate");

  dinput.setAttribute("name", "ddate");

  dinput.classList.add("sdinput");

  dform.appendChild(dinput);


  const plabel = document.createElement("label");

  plabel.textContent = "Priority";

  plabel.setAttribute("for", "prio");

  plabel.classList.add("splabel");

  dform.appendChild(plabel);

  const list = document.createElement("select");

  list.classList.add("slist");

  list.setAttribute("name", "prios");

  list.setAttribute("id", "prios");

  dform.appendChild(list);

  const opt1 = document.createElement("option");

  opt1.textContent = "Low";

  opt1.setAttribute("value", "low");

 

  list.appendChild(opt1);



  const opt2 = document.createElement("option");

  opt2.textContent = "Medium";

  opt2.setAttribute("value", "medium");

  list.appendChild(opt2);

  const opt3 = document.createElement("option");

  opt3.textContent = "High";

  opt3.setAttribute("value", "high");

  list.appendChild(opt3);


  const dsbutton = document.createElement("button");

  dsbutton.classList.add("sdsbutton");

  dsbutton.textContent = "Submit";

  dform.appendChild(dsbutton);





  // Todo list user interface

  dsbutton.addEventListener("click", (event) => { 

    event.preventDefault()


    const fvalue = ttinput.value;

  


    const svalue = tarea.value;

 

    const tvalue = dinput.value;

  

    const fovalue = list.value;





    sd.close();


   


    console.log(fvalue);



    console.log(svalue);




    console.log(tvalue);




    console.log(fovalue);


  

  const mspandiv = document.createElement("div");

  mspandiv.classList.add("smspandiv");

  stodiv.appendChild(mspandiv);


     const cspandiv1 = document.createElement("div");

     cspandiv1.classList.add("scspandiv1");

     mspandiv.appendChild(cspandiv1);

     const cspandiv2 = document.createElement("div");

     cspandiv2.classList.add("scspandiv2");

     mspandiv.appendChild(cspandiv2);


   


    const afspan = document.createElement("span");

    afspan.classList.add("safspan");

    cspandiv1.appendChild(afspan);


    const cbox = document.createElement("input");

    cbox.setAttribute("type", "checkbox");

    cbox.classList.add("scbox");

    afspan.appendChild(cbox);


    const fspan = document.createElement("span");

    fspan.classList.add("sfspan");
    
    cspandiv1.appendChild(fspan);
    
    const tspan = document.createElement("span");
    
    tspan.classList.add("stspan");
    
    cspandiv1.appendChild(tspan);
    
    const thspan = document.createElement("span");
    
    thspan.classList.add("sthspan");
    
    cspandiv2.appendChild(thspan);

    
    
    
    const fospan = document.createElement("span");
    
    fospan.classList.add("sfospan");
    
    cspandiv2.appendChild(fospan);

    const fispan = document.createElement("span");

    fispan.classList.add("sfispan");

    cspandiv2.appendChild(fispan);

    const sispan = document.createElement("span");

    sispan.classList.add("ssispan");

    cspandiv2.appendChild(sispan);



    const fimage = document.createElement("img");

    fimage.setAttribute("src", "https://cdn-icons-png.freepik.com/256/1159/1159633.png?semt=ais_hybrid");

    fimage.setAttribute("alt", "editicon");

    fimage.setAttribute("width", "30px");

    fimage.setAttribute("height", "30px");

    fimage.classList.add("sfimage");

    fispan.appendChild(fimage);

    const simage = document.createElement("img");

    simage.setAttribute("src", "https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png");

    simage.setAttribute("alt", "trashicon");

    simage.setAttribute("width", "30px");

    simage.setAttribute("height", "30px");

    simage.classList.add("ssimage");

    sispan.appendChild(simage);

    
   


   
  fspan.textContent += fvalue;

  tspan.textContent += svalue;

  fospan.textContent += `Due: ${tvalue}`; 

  thspan.textContent += fovalue;


    //priority color code

    if(thspan.textContent === "low") {
     
      thspan.style.backgroundColor = "green";
  
     }
  
     else if (thspan.textContent === "medium") {
       
      thspan.style.backgroundColor = "yellow";
  
     }
  
     else if (thspan.textContent === "high") {
       
      thspan.style.backgroundColor = "red";
  
     }
       
  
  
  
  
  
        // end of priority color code



  //Checked checkbox code

  cbox.addEventListener("click", () => {

    if (cbox.checked) {
  
  fspan.style.textDecoration = "line-through";
  
  tspan.style.textDecoration = "line-through";
  
  thspan.style.textDecoration = "line-through";
  
  fospan.style.textDecoration = "line-through";
  
  }
  
  else {
  
  fspan.style.textDecoration = "none";
  
  tspan.style.textDecoration = "none";
  
  thspan.style.textDecoration = "none";
  
  fospan.style.textDecoration = "none";
  

  }
  
  });


  // end of checked checkbox code


//icons code start

simage.addEventListener("click", () => {


  mspandiv.remove();

});

fimage.addEventListener("click", () => {

  sd.textContent = "";

  sd.showModal();


  const h1dt = document.createElement("h1");

  h1dt.textContent = "Edit Task";

  h1dt.classList.add("sh1dt");

  sd.appendChild(h1dt);


  const dform = document.createElement("form");

  dform.classList.add("sdform");

  sd.appendChild(dform);

  const dttext = document.createElement("label");

  dttext.textContent = "Task Title:";

  dttext.classList.add("sdttext");

  dttext.setAttribute("for", "title");

  dform.appendChild(dttext);


const ttinput = document.createElement("input");

ttinput.setAttribute("type", "text");

ttinput.setAttribute("id", "title");

ttinput.setAttribute("name", "title");

ttinput.setAttribute("maxlength", "24");





 ttinput.classList.add("sttinput");

 dform.appendChild(ttinput);

 const mc = document.createElement("p");

 mc.textContent = "Max Characters: 24";

 mc.classList.add("smc");

 dform.appendChild(mc);


 const dlabel = document.createElement("label");

 dlabel.textContent = "Description:";

 dlabel.setAttribute("for", "desc");

 dlabel.classList.add("sdlabel");

dform.appendChild(dlabel);

 const tarea = document.createElement("textarea");

 tarea.classList.add("starea");

 dform.appendChild(tarea);


const ddlabel = document.createElement("label");

ddlabel.textContent = "Due Date:";

ddlabel.classList.add("sddlabel");

ddlabel.setAttribute("for", "ddate");

dform.appendChild(ddlabel);

const dinput = document.createElement("input");

dinput.setAttribute("type", "date");

dinput.setAttribute("id", "ddate");

dinput.setAttribute("name", "ddate");

dinput.classList.add("sdinput");

dform.appendChild(dinput);


const plabel = document.createElement("label");

plabel.textContent = "Priority";

plabel.setAttribute("for", "prio");

plabel.classList.add("splabel");

dform.appendChild(plabel);

const list = document.createElement("select");

list.classList.add("slist");

list.setAttribute("name", "prios");

list.setAttribute("id", "prios");

dform.appendChild(list);

const opt1 = document.createElement("option");

opt1.textContent = "Low";

opt1.setAttribute("value", "low");



list.appendChild(opt1);



const opt2 = document.createElement("option");

opt2.textContent = "Medium";

opt2.setAttribute("value", "medium");

list.appendChild(opt2);

const opt3 = document.createElement("option");

opt3.textContent = "High";

opt3.setAttribute("value", "high");

list.appendChild(opt3);


const dsbutton = document.createElement("button");

dsbutton.classList.add("sdsbutton");

dsbutton.textContent = "Submit";

dform.appendChild(dsbutton);

const canbutton = document.createElement("button");

canbutton.classList.add("scanbutton");

canbutton.textContent = "Cancel";

dform.appendChild(canbutton);



canbutton.addEventListener("click", (event) => { 

  event.preventDefault()

  sd.close();

});
// edit button submit code

// do not confuse it with other submit code


dsbutton.addEventListener("click", (event) => { 

  event.preventDefault()


  const fvalue = ttinput.value;

  


  const svalue = tarea.value;



  const tvalue = dinput.value;



  const fovalue = list.value;





  sd.close();

    
  fspan.textContent = fvalue;

  tspan.textContent = svalue;

  fospan.textContent = `Due: ${tvalue}`; 

  thspan.textContent = fovalue;


    //priority color code

    if(thspan.textContent === "low") {
     
      thspan.style.backgroundColor = "green";
  
     }
  
     else if (thspan.textContent === "medium") {
       
      thspan.style.backgroundColor = "yellow";
  
     }
  
     else if (thspan.textContent === "high") {
       
      thspan.style.backgroundColor = "red";
  
     }
       
  
  
  
  
  
        // end of priority color code


sd.textContent = "";


});


});


//icons code end







  });




});




