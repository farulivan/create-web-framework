import { User } from './models/User';

const user = new User({ name: 'Ahmad', age: 17 });

user.set({ name: 'Ihsan', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));

// event listener
user.on('change', () => {
  console.log('Change #1');
});

user.on('change', () => {
  console.log('Change #2');
});

user.on('save', () => {
  console.log('Save was triggered');
});

//trigger event
user.trigger('change');
