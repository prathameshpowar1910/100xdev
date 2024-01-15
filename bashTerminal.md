### Bash Basics

#### Bash Commands
- `ls` - list directory contents
- `cd` - change directory
- `pwd` - print working directory
- `mkdir` - make directory
- `touch` - create file
- `rm` - remove file
- `cp` - copy file
- `mv` - move file
- `cat` - print file contents
- `echo` - print to terminal
- `clear` - clear terminal
- `exit` - exit terminal

#### Bash Shortcuts
- `ctrl + a` - move to beginning of line
- `ctrl + e` - move to end of line
- `ctrl + u` - delete from cursor to beginning of line
- `ctrl + k` - delete from cursor to end of line
- `ctrl + w` - delete from cursor to beginning of word
- `ctrl + l` - clear terminal
- `ctrl + c` - kill current process
- `ctrl + d` - exit terminal
- `ctrl + r` - reverse search history
- `ctrl + g` - escape from reverse search history
- `ctrl + p` - previous command in history
- `ctrl + n` - next command in history
- `ctrl + s` - freeze terminal
- `ctrl + q` - unfreeze terminal
- `ctrl + t` - swap last two characters
- `ctrl + y` - paste last deleted command
- `ctrl + z` - suspend current process

#### Bash Wildcards
- `*` - matches any number of characters
- `?` - matches any single character
- `[]` - matches any character inside the brackets
- `[^]` - matches any character not inside the brackets
- `[-]` - matches any character in the range of characters
- `[!]` - matches any character not in the range of characters

#### Bash Redirection
- `>` - redirect output to file
- `>>` - append output to file
- `<` - redirect input to command
- `<<` - append input to command
- `|` - redirect output to command
- `&>` - redirect output and errors to file
- `&>>` - append output and errors to file
- `&<` - redirect input to command
- `&<<` - append input to command
- `|&` - redirect output and errors to command

#### Bash Operators
- `;` - run commands in sequence
- `&&` - run commands in sequence if previous command was successful
- `||` - run commands in sequence if previous command was unsuccessful
- `&` - run command in background
- `()` - run commands in subshell
- `` ` `` - run commands in subshell
- `$( )` - run commands in subshell
- `|` - pipe output of command to another command

#### Bash Variables
- `var=value` - set variable
- `var=value command` - set variable for command
- `var=value; export var` - set variable for subshells
- `var=value; env` - set variable for subshells
- `var=value; bash` - set variable for subshells
- `var=value; sh` - set variable for subshells
- `var=value; zsh` - set variable for subshells

#### Bash Conditionals
- `if` - if statement
- `elif` - else if statement
- `else` - else statement
- `then` - then statement
- `fi` - end if statement
- `case` - case statement
- `esac` - end case statement
- `while` - while statement
- `until` - until statement
- `for` - for statement
- `do` - do statement
- `done` - end for statement
- `select` - select statement
- `continue` - continue statement
- `break` - break statement
- `return` - return statement
- `exit` - exit statement

#### Bash Comparison Operators
- `=` - equal to
- `==` - equal to
- `!=` - not equal to
- `-eq` - equal to
- `-ne` - not equal to
- `-gt` - greater than
- `-ge` - greater than or equal to
- `-lt` - less than
- `-le` - less than or equal to
- `-z` - zero length
- `-n` - non-zero length
- `-e` - file exists
- `-f` - file exists and is regular file
- `-d` - file exists and is directory
- `-b` - file exists and is block special file
- `-c` - file exists and is character special file
- `-S` - file exists and is socket
- `-p` - file exists and is named pipe
- `-L` - file exists and is symbolic link
- `-h` - file exists and is symbolic link
- `-s` - file exists and has size greater than zero
- `-r` - file exists and is readable
- `-w` - file exists and is writable
- `-x` - file exists and is executable
- `-u` - file exists and set-user-id bit is set
- `-g` - file exists and set-group-id bit is set
- `-k` - file exists and sticky bit is set
- `-t` - file descriptor is open and refers to a terminal
- `-o` - file exists and is owned by effective user id
- `-O` - file exists and is owned by real user id
- `-G` - file exists and is owned by effective group id
- `-N` - file exists and has been modified since it was last read
- `-nt` - file exists and is newer than other file
- `-ot` - file exists and is older than other file
- `-ef` - file exists and has same device and inode numbers as other file

#### Vim Commands
- `:w` - save file
- `:wq` - save file and quit
- `:q` - quit file
- `:q!` - quit file without saving
- `:x` - save file and quit
- `:wqa` - save all files and quit
- `:qa` - quit all files
- `:qa!` - quit all files without saving
- `:e` - edit file
- `:e!` - edit file without saving
- `:e#` - edit alternate file without saving
- `:e!#` - edit alternate file without saving


