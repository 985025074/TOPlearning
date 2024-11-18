export class ToDoItem{
    constructor(title,description,starttime,endtime){
        this.title = title;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
        this.finished = false;
    }
    finish(){
       this.finished = true; 

    }
    getDOM(){
        let item = document.createElement("div");
        item.classList.add("card");
    
        // 添加单选按钮
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "finished";
        item.appendChild(radio);
    
        // 添加标题
        let title = document.createElement("h3");
        title.innerText = this.title; // 使用 this.title 确保显示标题
        item.appendChild(title);
    
        // 添加描述信息
        let description = document.createElement("p");
        description.innerText = this.description; // 使用 this.description 显示描述
        item.appendChild(description);
        return item;
    }
};
