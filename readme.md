                                    CLI Greeting tool
Here i used commander (https://www.npmjs.com/package/commander)
At first ,you have to install npm packages
  -npm i
  or
  -npm install
after this, the tool will be ready to be used.
 
Greetings command-line tool

Options:
  -V, --version            output the version number
  -n , --name <value>      your name (default: "guest")
  -l , --level <value>     the verbosity level (default: "")
  -g , --greeting <value>  greeting message (default: "Hello")
  --language <value>        the language of the greeting (default: "english")
  -h, --help               display help for command

  Example of expected result
  
node index.js --name John --level 2
Output:
Hello, John! (Date and Time: 2024-01-01 12:34:56)

node index.js -n Bob --greeting "Hey, welcome to Node js school" -lvl 1
Output:
Hey, welcome to Node js school Bob.
