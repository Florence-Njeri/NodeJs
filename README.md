# NodeJs
<h1>My notes </h1>
emitter.on(eventName, listener) -- ones the event occurs do something .This is waht prompts the event code to be executed

To prompt the user for input user the readline module ```const readline=require('readline');
const rl=readline.createInterface({input:process.stdin,output:process.stdout});```
then from that pass a question to the user and based on whether their input is correct log a message to them
and close the input ``` rl.close();``` if wrong 
```   rl.setPrompt('Incorrect response, please try again \n');
    rl.prompt();
    rl.on('line',(userInput)=>{
if(userInput.trim()==answer){
rl.close();
}
else{
    rl.setPrompt(`Your answer of ${userInput} is incorrect ,\n try again`);
    rl.prompt();```
