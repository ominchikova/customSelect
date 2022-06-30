const options = [
   {value:'1', label:'Продукты питания'},
   {value:'2', label:'Пищевые добавки'},
   {value:'3', label:'Красота'},
   {value:'4', label:'Здоровье'},
   {value:'5', label:'Спортивное питание'},
   {value:'6', label:'Дом'}]
   class DropDown {
      constructor(selector,options){
         this.$select=document.querySelector(selector);
         this.options = options;
         this.defaultLabel = document.querySelector('.select__label').innerHTML
         this.$label = document.querySelector('.select__label')
         this.$dropDown = document.querySelector('select__dropdown')
         this.$select.addEventListener('click',(e)=>{
            if (e.target.classList.contains('select__label')) {
                if (this.$select.classList.contains('active')) {
                    this.close()
                } else {
                    this.open()
                }
            } else {
                    if (e.target.tagName.toLowerCase() === 'li'){
                        this.selectedItem(+e.target.dataset.id)
                    }
                }
   })
   this.itemsHTML = this.options.map(({value,label}) => {
      return `<li data-id =${value}>${label}</li>`}).join('')
   console.log(this.itemsHTML)
   this.$dropDown.insertAdjacentHTML('gitn', this.itemsHTML)
}
selectedItem(id) {
   this.$label.innerHTML = this.options.find(item => item.value ===id).label
   this.close()
}
open(){
   this.$select.classList.add('active')
}
close( ){
   this.$select.classList.remove('active')
      }
   }
const customSelect = new DropDown ('.select', options)
console.log(customSelect);
