for (let a=2;a<=100;a++){
    let mod=1;
    for (let b=2;b<a;b++){
                      if(a%b==0)
                      {
     mod=0;
                      }
    }
                      if(mod==1)
                      {
                      console.log(a + " ");
                      }
             }
      