let draggbles = [...document.querySelectorAll('.draggble')];
let containers = document.querySelectorAll('.container');

draggbles.forEach((draggable)=>{
    draggable.addEventListener('dragstart',(e)=>{
        console.log('drag start');
        e.target.classList.add('dragging');
    })
  
    draggable.addEventListener('dragend',(e)=>{
        console.log('drag end');
        e.target.classList.remove('dragging');
    })
})
containers.forEach((container)=>{
    container.addEventListener('dragover',(e)=>{
        e.preventDefault();
        let draggingone = document.querySelector('.dragging');
        let after;
        //注意e 可能是子类里面，所以这里要用div 而不是e 否则放到里面去了
        // div.appendChild(draggingone);
        let draggables = [...container.querySelectorAll('.draggble')];
        draggables.reduce((prev,cur)=>{
            if(cur.classList.contains('dragging')){
                return prev;
            }
            let rect = cur.getBoundingClientRect();
            let offset = e.clientY - rect.top -rect.height/2; //相对中心线便宜
            // 记住，这里找的是 最终后面的一个元素，我们是要插入到前面
            // 所以offet 是负的 正数的不要 同时要负的绝对值里最小的
            if(offset>0 || -offset > -prev){
                return prev;
            }
            else{
               after = cur;
              return offset;
            }
        },-9999)
        console.log(after);
        if(after){
            
            container.insertBefore(draggingone,after);
        }
        else{
            container.appendChild(draggingone);
        }
    });
})