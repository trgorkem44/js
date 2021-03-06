const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup',(event)=>{//Her keyup olayı gerçekleştiğinde consolda yazıyor.
    ui.clear();
    let text = event.target.value;
    if(text !==''){
        //console.log(text);
        profile.getProfile(text).then(res => {
            if(res.profile.length === 0){
                ui.showAlert(text);
            }
            else{
                //console.log(res.profile[0]);
                //console.log(res);
                ui.showProfile(res.profile[0]);
                ui.showTodo(res.todo);
            }
        })
        .catch(err=>{
            ui.showAlert(text);
        }) 
          //console.log(res.profile));}
    }
})