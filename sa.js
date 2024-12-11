const readlineSync = require('readline-sync');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bovufdtlrhhcdrfsfmtb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvdnVmZHRscmhoY2RyZnNmbXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNDg1NjQsImV4cCI6MjA0NzcyNDU2NH0.rfo5aNmeekEcGb8g8Wtq7rTATzfwyvyYckeWbUJQ3f8';
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to add a user
async function addUser() {
  const USERNAME = readlineSync.question('Enter username: ');
  const PASSWORD = readlineSync.question('Enter password: ', { hideEchoBack: true });
  const device_id = readlineSync.question('Enter device ID (optional): ') || '';

  const { data, error } = await supabase
    .from('users')
    .insert([{ USERNAME, PASSWORD, device_id }]);

  if (error) {
    console.error('Error adding user:', error.message);
  } else {
    console.log('User added successfully:', data);
  }
}

// Function to remove a user
async function removeUser() {
  const id = readlineSync.question('Enter user ID to remove: ');

  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error removing user:', error.message);
  } else {
    console.log('User removed successfully:', data);
  }
}

// Function to add a banned user
async function addBannedUser() {
  const USERNAME = readlineSync.question('Enter username: ');
  const PASSWORD = readlineSync.question('Enter password: ', { hideEchoBack: true });
  const device_id = readlineSync.question('Enter device ID (optional): ') || '';

  const { data, error } = await supabase
    .from('banned_users')
    .insert([{ USERNAME, PASSWORD, device_id }]);

  if (error) {
    console.error('Error adding banned user:', error.message);
  } else {
    console.log('Banned user added successfully:', data);
  }
}

// Function to remove a banned user
async function removeBannedUser() {
  const id = readlineSync.question('Enter banned user ID to remove: ');

  const { data, error } = await supabase
    .from('banned_users')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error removing banned user:', error.message);
  } else {
    console.log('Banned user removed successfully:', data);
  }
}

async function mainMenu() {
  console.log('Welcome to the User Management Console');
  console.log('1. Add user');
  console.log('2. Remove user');
  console.log('3. Add banned user');
  console.log('4. Remove banned user');
  console.log('5. Exit');

  const choice = readlineSync.question('Enter your choice: ');

  switch (choice) {
    case '1':
      await addUser();
      break;
    case '2':
      await removeUser();
      break;
    case '3':
      await addBannedUser();
      break;
    case '4':
      await removeBannedUser();
      break;
    case '5':
      console.log('Exiting...');
      process.exit(0);
    default:
      console.log('Invalid choice. Please try again.');
  }

  mainMenu(); // Loop back to the main menu
}

// Start the main menu
mainMenu();
