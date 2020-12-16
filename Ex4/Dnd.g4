grammar Dnd ;

/* PARSER */
file        : hdr row+;
hdr         : 'name' SEP 'race' SEP 'background' SEP 'date' SEP 'class' SEP 'justClass' SEP 
            'subclass' SEP 'level' SEP 'feats' SEP 'HP' SEP 'AC' SEP 'Str' SEP 'Dex' SEP 
            'Con' SEP 'Int' SEP 'Wis'  SEP 'Cha' SEP 'alignment' SEP 'skills' SEP 'weapons' SEP 
            'spells' SEP 'day' SEP 'processedAlignment' SEP 'good' SEP 'lawful' SEP 'processedRace' SEP 
            'processedSpells' SEP 'processedWeapons' SEP 'levelGroup' NEWLINE ;

row         : name SEP race SEP background SEP date SEP fclass SEP justClass SEP subclass SEP level SEP 
            feats SEP hP SEP aC SEP str SEP dex SEP con SEP fint SEP wis SEP cha SEP alignment SEP skills SEP 
            weapons SEP spells SEP day SEP processedAlignment SEP good SEP lawful SEP processedRace SEP 
            processedSpells SEP processedWeapons SEP levelGroup NEWLINE ;

/* I wanted to make a lot of these (like date, spells) more specific, but it messed up the parsing every
 time I tried it. Date was originally INT '-' INT '-' INT 'T' INT ':' INT ':' INT 'Z'. but I just couldn't
 get it to parse correctly. For the other fields, I think it was just that the user input
 was in many different formats and contained some weird characters */
name                : TEXT ;
race                : TEXT ;
background          : TEXT ;
date                : TEXT ;
fclass              : (TEXT '|'?)+ ;
justClass           : (TEXT '|'?)+ ;
subclass            : (TEXT '|'?)* ; 
level               : INT ;
feats               : (TEXT '|'?)* ;
hP                  : INT ;
aC                  : INT ;
str                 : INT ;
dex                 : INT ;
con                 : INT ;
fint                : INT ;
wis                 : INT ;
cha                 : INT ;
alignment           : TEXT* ;
skills              : (TEXT '|'?)+ ;
weapons             : (TEXT '|'?)* ;
spells              : (TEXT '|'?)* ;
day                 : TEXT ;
processedAlignment  : TEXT* ;
good                : 'NA' | ('G' | 'N' | 'E') ;
lawful              : 'NA' | ('L' | 'N' | 'C') ;
processedRace       : TEXT* ;
processedSpells     : (TEXT '|'?)* ;
processedWeapons    : (TEXT '|'?)* ;
levelGroup          : TEXT ;


/* LEXER */
fragment DIGIT      : [0-9] ;
fragment ALPHA      : [a-zA-Z] | 'ã' | 'ç' ;    // Added all these weird chars used in the tsv to avoid token recognition errors
fragment CHAR       : '/' | '(' | ')' | '+' | '.' | '\'' | '-' | ',' | ':' | '*' | '’' | '[' | ']' | '?' | '©' | '=' | '!' | '《' | 'â' | '€' | '™' | '®';

SEP                 : '\t' ;
NEWLINE             : '\r'? '\n' ;
INT                 : DIGIT+ ;
SP                  : ' ' ;
TEXT                : ((ALPHA | INT | CHAR) SP?)+ ;