// const args = process.argv
// console.log(args);
// const myArgs = args.slice(2);
// console.log(myArgs);

import {program} from 'commander'

const greeting = (options) => {
    let result = '';
        const name = options.name ;

        const greeting = options.greeting ;

        let level = options.level;

        const language = options.language ;
// level logic
        if(level == 2){
           level = `(Date and Time ${(new Date).toLocaleString()})`
        }else{
            level = '';
        }
      
// result
        result = console.log(`${greeting} ${name}! ${level}`);
    return result;
}

program
    .version('1.0.0')
    .description('Greetings command-line tool')
    .option('-n , --name <value>','your name', 'guest')
    .option('-l , --level <value>', "the verbosity level",'')
    .option('-g , --greeting <value>', "greeting message", 'Hello')
    .option('--language <value>', " the language of the greeting" , 'english' )
    .action(greeting);

    
program.parse(process.argv);



