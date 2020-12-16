const antlr4 = require('antlr4/index');
const DndLexer = require('./DndLexer').DndLexer;
const DndParser = require('./DndParser').DndParser;
const OurVisitor = require('./OurVisitor').OurVisitor;

let fs = require('fs');

// Run like this:
//    node main.js uniqueTable.tsv out.json

let chars = antlr4.CharStreams.fromPathSync(process.argv[2],{ encoding: 'utf8' });
let lexer = new DndLexer(chars);
let tokens  = new antlr4.CommonTokenStream(lexer);
let parser = new DndParser(tokens);
parser.buildParseTrees = true;
let tree = parser.file();

let visitor = new OurVisitor();
let output = visitor.visitFile(tree);

let outputFile = process.argv[3];
fs.writeFile(outputFile,output, (err) => {
    if(err) throw err;
    console.log('Output written to file.');
});