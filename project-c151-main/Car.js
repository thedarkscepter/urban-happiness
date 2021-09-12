AFRAME.registerComponent('car-rotate',{
    schema:{
        movey:{
            type:'number',
            default:1
        }
    },
    tick:function(){
        this.data.movey=this.data.movey+(-0.3)
        var rotate=this.el.getAttribute('rotation');
        rotate.y=this.data.movey;
        this.el.setAttribute('rotation',{x:rotate.x,y:rotate.y,z:rotate.z})
    }
})