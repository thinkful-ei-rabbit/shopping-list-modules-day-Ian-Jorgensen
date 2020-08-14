import item from './item.js';

let items = [];
let hideCheckedItems = false;

const findById = function(id){
  console.log(id);
  return this.items.find(item => item.id === id);
};

const addItem = function(name){
  try{
    item.validateName(name);
    this.items.push(item.create(name));
  }catch(error){
    throw `Cannot add item: ${error.message}`;
  }
};

const findAndToggleChecked = function(id){
  const foundItem = this.findById(id);
  foundItem.checked =!foundItem.checked;
};

const findAndUpdateName = function(id,newName){
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  }catch(error){
    throw `Cannot add item: ${error.message}`;
  }
};

const findAndDelete = function(id){
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
};


const toggleCheckedFilter = function(){
  this.hideCheckedItems !== hideCheckedItems;
};



export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
};


