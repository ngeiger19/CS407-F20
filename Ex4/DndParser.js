// Generated from Dnd.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DndListener = require('./DndListener').DndListener;
var DndVisitor = require('./DndVisitor').DndVisitor;

var grammarFileName = "Dnd.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003+\u0145\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0003\u0002\u0006\u0002",
    "E\n\u0002\r\u0002\u000e\u0002F\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0005\t\u00c9\n\t\u0006\t\u00cb",
    "\n\t\r\t\u000e\t\u00cc\u0003\n\u0003\n\u0005\n\u00d1\n\n\u0006\n\u00d3",
    "\n\n\r\n\u000e\n\u00d4\u0003\u000b\u0003\u000b\u0005\u000b\u00d9\n\u000b",
    "\u0007\u000b\u00db\n\u000b\f\u000b\u000e\u000b\u00de\u000b\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0005\r\u00e4\n\r\u0007\r\u00e6\n\r\f\r\u000e",
    "\r\u00e9\u000b\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0007\u0016\u00fc\n\u0016\f\u0016\u000e\u0016\u00ff\u000b\u0016",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u0103\n\u0017\u0006\u0017\u0105",
    "\n\u0017\r\u0017\u000e\u0017\u0106\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u010b\n\u0018\u0007\u0018\u010d\n\u0018\f\u0018\u000e\u0018\u0110\u000b",
    "\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u0114\n\u0019\u0007\u0019",
    "\u0116\n\u0019\f\u0019\u000e\u0019\u0119\u000b\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0007\u001b\u011e\n\u001b\f\u001b\u000e\u001b\u0121",
    "\u000b\u001b\u0003\u001c\u0003\u001c\u0005\u001c\u0125\n\u001c\u0003",
    "\u001d\u0003\u001d\u0005\u001d\u0129\n\u001d\u0003\u001e\u0007\u001e",
    "\u012c\n\u001e\f\u001e\u000e\u001e\u012f\u000b\u001e\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0133\n\u001f\u0007\u001f\u0135\n\u001f\f\u001f\u000e",
    "\u001f\u0138\u000b\u001f\u0003 \u0003 \u0005 \u013c\n \u0007 \u013e",
    "\n \f \u000e \u0141\u000b \u0003!\u0003!\u0003!\u0002\u0002\"\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.02468:<>@\u0002\u0004\u0003\u0002\"$\u0004\u0002##%&\u0002",
    "\u013c\u0002B\u0003\u0002\u0002\u0002\u0004H\u0003\u0002\u0002\u0002",
    "\u0006\u0083\u0003\u0002\u0002\u0002\b\u00be\u0003\u0002\u0002\u0002",
    "\n\u00c0\u0003\u0002\u0002\u0002\f\u00c2\u0003\u0002\u0002\u0002\u000e",
    "\u00c4\u0003\u0002\u0002\u0002\u0010\u00ca\u0003\u0002\u0002\u0002\u0012",
    "\u00d2\u0003\u0002\u0002\u0002\u0014\u00dc\u0003\u0002\u0002\u0002\u0016",
    "\u00df\u0003\u0002\u0002\u0002\u0018\u00e7\u0003\u0002\u0002\u0002\u001a",
    "\u00ea\u0003\u0002\u0002\u0002\u001c\u00ec\u0003\u0002\u0002\u0002\u001e",
    "\u00ee\u0003\u0002\u0002\u0002 \u00f0\u0003\u0002\u0002\u0002\"\u00f2",
    "\u0003\u0002\u0002\u0002$\u00f4\u0003\u0002\u0002\u0002&\u00f6\u0003",
    "\u0002\u0002\u0002(\u00f8\u0003\u0002\u0002\u0002*\u00fd\u0003\u0002",
    "\u0002\u0002,\u0104\u0003\u0002\u0002\u0002.\u010e\u0003\u0002\u0002",
    "\u00020\u0117\u0003\u0002\u0002\u00022\u011a\u0003\u0002\u0002\u0002",
    "4\u011f\u0003\u0002\u0002\u00026\u0124\u0003\u0002\u0002\u00028\u0128",
    "\u0003\u0002\u0002\u0002:\u012d\u0003\u0002\u0002\u0002<\u0136\u0003",
    "\u0002\u0002\u0002>\u013f\u0003\u0002\u0002\u0002@\u0142\u0003\u0002",
    "\u0002\u0002BD\u0005\u0004\u0003\u0002CE\u0005\u0006\u0004\u0002DC\u0003",
    "\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002",
    "FG\u0003\u0002\u0002\u0002G\u0003\u0003\u0002\u0002\u0002HI\u0007\u0003",
    "\u0002\u0002IJ\u0007\'\u0002\u0002JK\u0007\u0004\u0002\u0002KL\u0007",
    "\'\u0002\u0002LM\u0007\u0005\u0002\u0002MN\u0007\'\u0002\u0002NO\u0007",
    "\u0006\u0002\u0002OP\u0007\'\u0002\u0002PQ\u0007\u0007\u0002\u0002Q",
    "R\u0007\'\u0002\u0002RS\u0007\b\u0002\u0002ST\u0007\'\u0002\u0002TU",
    "\u0007\t\u0002\u0002UV\u0007\'\u0002\u0002VW\u0007\n\u0002\u0002WX\u0007",
    "\'\u0002\u0002XY\u0007\u000b\u0002\u0002YZ\u0007\'\u0002\u0002Z[\u0007",
    "\f\u0002\u0002[\\\u0007\'\u0002\u0002\\]\u0007\r\u0002\u0002]^\u0007",
    "\'\u0002\u0002^_\u0007\u000e\u0002\u0002_`\u0007\'\u0002\u0002`a\u0007",
    "\u000f\u0002\u0002ab\u0007\'\u0002\u0002bc\u0007\u0010\u0002\u0002c",
    "d\u0007\'\u0002\u0002de\u0007\u0011\u0002\u0002ef\u0007\'\u0002\u0002",
    "fg\u0007\u0012\u0002\u0002gh\u0007\'\u0002\u0002hi\u0007\u0013\u0002",
    "\u0002ij\u0007\'\u0002\u0002jk\u0007\u0014\u0002\u0002kl\u0007\'\u0002",
    "\u0002lm\u0007\u0015\u0002\u0002mn\u0007\'\u0002\u0002no\u0007\u0016",
    "\u0002\u0002op\u0007\'\u0002\u0002pq\u0007\u0017\u0002\u0002qr\u0007",
    "\'\u0002\u0002rs\u0007\u0018\u0002\u0002st\u0007\'\u0002\u0002tu\u0007",
    "\u0019\u0002\u0002uv\u0007\'\u0002\u0002vw\u0007\u001a\u0002\u0002w",
    "x\u0007\'\u0002\u0002xy\u0007\u001b\u0002\u0002yz\u0007\'\u0002\u0002",
    "z{\u0007\u001c\u0002\u0002{|\u0007\'\u0002\u0002|}\u0007\u001d\u0002",
    "\u0002}~\u0007\'\u0002\u0002~\u007f\u0007\u001e\u0002\u0002\u007f\u0080",
    "\u0007\'\u0002\u0002\u0080\u0081\u0007\u001f\u0002\u0002\u0081\u0082",
    "\u0007(\u0002\u0002\u0082\u0005\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0005\b\u0005\u0002\u0084\u0085\u0007\'\u0002\u0002\u0085\u0086\u0005",
    "\n\u0006\u0002\u0086\u0087\u0007\'\u0002\u0002\u0087\u0088\u0005\f\u0007",
    "\u0002\u0088\u0089\u0007\'\u0002\u0002\u0089\u008a\u0005\u000e\b\u0002",
    "\u008a\u008b\u0007\'\u0002\u0002\u008b\u008c\u0005\u0010\t\u0002\u008c",
    "\u008d\u0007\'\u0002\u0002\u008d\u008e\u0005\u0012\n\u0002\u008e\u008f",
    "\u0007\'\u0002\u0002\u008f\u0090\u0005\u0014\u000b\u0002\u0090\u0091",
    "\u0007\'\u0002\u0002\u0091\u0092\u0005\u0016\f\u0002\u0092\u0093\u0007",
    "\'\u0002\u0002\u0093\u0094\u0005\u0018\r\u0002\u0094\u0095\u0007\'\u0002",
    "\u0002\u0095\u0096\u0005\u001a\u000e\u0002\u0096\u0097\u0007\'\u0002",
    "\u0002\u0097\u0098\u0005\u001c\u000f\u0002\u0098\u0099\u0007\'\u0002",
    "\u0002\u0099\u009a\u0005\u001e\u0010\u0002\u009a\u009b\u0007\'\u0002",
    "\u0002\u009b\u009c\u0005 \u0011\u0002\u009c\u009d\u0007\'\u0002\u0002",
    "\u009d\u009e\u0005\"\u0012\u0002\u009e\u009f\u0007\'\u0002\u0002\u009f",
    "\u00a0\u0005$\u0013\u0002\u00a0\u00a1\u0007\'\u0002\u0002\u00a1\u00a2",
    "\u0005&\u0014\u0002\u00a2\u00a3\u0007\'\u0002\u0002\u00a3\u00a4\u0005",
    "(\u0015\u0002\u00a4\u00a5\u0007\'\u0002\u0002\u00a5\u00a6\u0005*\u0016",
    "\u0002\u00a6\u00a7\u0007\'\u0002\u0002\u00a7\u00a8\u0005,\u0017\u0002",
    "\u00a8\u00a9\u0007\'\u0002\u0002\u00a9\u00aa\u0005.\u0018\u0002\u00aa",
    "\u00ab\u0007\'\u0002\u0002\u00ab\u00ac\u00050\u0019\u0002\u00ac\u00ad",
    "\u0007\'\u0002\u0002\u00ad\u00ae\u00052\u001a\u0002\u00ae\u00af\u0007",
    "\'\u0002\u0002\u00af\u00b0\u00054\u001b\u0002\u00b0\u00b1\u0007\'\u0002",
    "\u0002\u00b1\u00b2\u00056\u001c\u0002\u00b2\u00b3\u0007\'\u0002\u0002",
    "\u00b3\u00b4\u00058\u001d\u0002\u00b4\u00b5\u0007\'\u0002\u0002\u00b5",
    "\u00b6\u0005:\u001e\u0002\u00b6\u00b7\u0007\'\u0002\u0002\u00b7\u00b8",
    "\u0005<\u001f\u0002\u00b8\u00b9\u0007\'\u0002\u0002\u00b9\u00ba\u0005",
    "> \u0002\u00ba\u00bb\u0007\'\u0002\u0002\u00bb\u00bc\u0005@!\u0002\u00bc",
    "\u00bd\u0007(\u0002\u0002\u00bd\u0007\u0003\u0002\u0002\u0002\u00be",
    "\u00bf\u0007+\u0002\u0002\u00bf\t\u0003\u0002\u0002\u0002\u00c0\u00c1",
    "\u0007+\u0002\u0002\u00c1\u000b\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\u0007+\u0002\u0002\u00c3\r\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007",
    "+\u0002\u0002\u00c5\u000f\u0003\u0002\u0002\u0002\u00c6\u00c8\u0007",
    "+\u0002\u0002\u00c7\u00c9\u0007 \u0002\u0002\u00c8\u00c7\u0003\u0002",
    "\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00cb\u0003\u0002",
    "\u0002\u0002\u00ca\u00c6\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002",
    "\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002",
    "\u0002\u0002\u00cd\u0011\u0003\u0002\u0002\u0002\u00ce\u00d0\u0007+",
    "\u0002\u0002\u00cf\u00d1\u0007 \u0002\u0002\u00d0\u00cf\u0003\u0002",
    "\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002",
    "\u0002\u0002\u00d2\u00ce\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002",
    "\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002",
    "\u0002\u0002\u00d5\u0013\u0003\u0002\u0002\u0002\u00d6\u00d8\u0007+",
    "\u0002\u0002\u00d7\u00d9\u0007 \u0002\u0002\u00d8\u00d7\u0003\u0002",
    "\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00db\u0003\u0002",
    "\u0002\u0002\u00da\u00d6\u0003\u0002\u0002\u0002\u00db\u00de\u0003\u0002",
    "\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002",
    "\u0002\u0002\u00dd\u0015\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0007)\u0002\u0002\u00e0\u0017\u0003\u0002",
    "\u0002\u0002\u00e1\u00e3\u0007+\u0002\u0002\u00e2\u00e4\u0007 \u0002",
    "\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002",
    "\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5\u00e1\u0003\u0002\u0002",
    "\u0002\u00e6\u00e9\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u0019\u0003\u0002\u0002",
    "\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007)\u0002",
    "\u0002\u00eb\u001b\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007)\u0002",
    "\u0002\u00ed\u001d\u0003\u0002\u0002\u0002\u00ee\u00ef\u0007)\u0002",
    "\u0002\u00ef\u001f\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007)\u0002",
    "\u0002\u00f1!\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007)\u0002\u0002",
    "\u00f3#\u0003\u0002\u0002\u0002\u00f4\u00f5\u0007)\u0002\u0002\u00f5",
    "%\u0003\u0002\u0002\u0002\u00f6\u00f7\u0007)\u0002\u0002\u00f7\'\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0007)\u0002\u0002\u00f9)\u0003\u0002",
    "\u0002\u0002\u00fa\u00fc\u0007+\u0002\u0002\u00fb\u00fa\u0003\u0002",
    "\u0002\u0002\u00fc\u00ff\u0003\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002",
    "\u0002\u0002\u00fd\u00fe\u0003\u0002\u0002\u0002\u00fe+\u0003\u0002",
    "\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u0100\u0102\u0007+",
    "\u0002\u0002\u0101\u0103\u0007 \u0002\u0002\u0102\u0101\u0003\u0002",
    "\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u0105\u0003\u0002",
    "\u0002\u0002\u0104\u0100\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002",
    "\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002",
    "\u0002\u0002\u0107-\u0003\u0002\u0002\u0002\u0108\u010a\u0007+\u0002",
    "\u0002\u0109\u010b\u0007 \u0002\u0002\u010a\u0109\u0003\u0002\u0002",
    "\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b\u010d\u0003\u0002\u0002",
    "\u0002\u010c\u0108\u0003\u0002\u0002\u0002\u010d\u0110\u0003\u0002\u0002",
    "\u0002\u010e\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002",
    "\u0002\u010f/\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002",
    "\u0002\u0111\u0113\u0007+\u0002\u0002\u0112\u0114\u0007 \u0002\u0002",
    "\u0113\u0112\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002\u0002",
    "\u0114\u0116\u0003\u0002\u0002\u0002\u0115\u0111\u0003\u0002\u0002\u0002",
    "\u0116\u0119\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002",
    "\u0117\u0118\u0003\u0002\u0002\u0002\u01181\u0003\u0002\u0002\u0002",
    "\u0119\u0117\u0003\u0002\u0002\u0002\u011a\u011b\u0007+\u0002\u0002",
    "\u011b3\u0003\u0002\u0002\u0002\u011c\u011e\u0007+\u0002\u0002\u011d",
    "\u011c\u0003\u0002\u0002\u0002\u011e\u0121\u0003\u0002\u0002\u0002\u011f",
    "\u011d\u0003\u0002\u0002\u0002\u011f\u0120\u0003\u0002\u0002\u0002\u0120",
    "5\u0003\u0002\u0002\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0122",
    "\u0125\u0007!\u0002\u0002\u0123\u0125\t\u0002\u0002\u0002\u0124\u0122",
    "\u0003\u0002\u0002\u0002\u0124\u0123\u0003\u0002\u0002\u0002\u01257",
    "\u0003\u0002\u0002\u0002\u0126\u0129\u0007!\u0002\u0002\u0127\u0129",
    "\t\u0003\u0002\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0128\u0127",
    "\u0003\u0002\u0002\u0002\u01299\u0003\u0002\u0002\u0002\u012a\u012c",
    "\u0007+\u0002\u0002\u012b\u012a\u0003\u0002\u0002\u0002\u012c\u012f",
    "\u0003\u0002\u0002\u0002\u012d\u012b\u0003\u0002\u0002\u0002\u012d\u012e",
    "\u0003\u0002\u0002\u0002\u012e;\u0003\u0002\u0002\u0002\u012f\u012d",
    "\u0003\u0002\u0002\u0002\u0130\u0132\u0007+\u0002\u0002\u0131\u0133",
    "\u0007 \u0002\u0002\u0132\u0131\u0003\u0002\u0002\u0002\u0132\u0133",
    "\u0003\u0002\u0002\u0002\u0133\u0135\u0003\u0002\u0002\u0002\u0134\u0130",
    "\u0003\u0002\u0002\u0002\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134",
    "\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137=",
    "\u0003\u0002\u0002\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013b",
    "\u0007+\u0002\u0002\u013a\u013c\u0007 \u0002\u0002\u013b\u013a\u0003",
    "\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c\u013e\u0003",
    "\u0002\u0002\u0002\u013d\u0139\u0003\u0002\u0002\u0002\u013e\u0141\u0003",
    "\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002\u013f\u0140\u0003",
    "\u0002\u0002\u0002\u0140?\u0003\u0002\u0002\u0002\u0141\u013f\u0003",
    "\u0002\u0002\u0002\u0142\u0143\u0007+\u0002\u0002\u0143A\u0003\u0002",
    "\u0002\u0002\u001aF\u00c8\u00cc\u00d0\u00d4\u00d8\u00dc\u00e3\u00e7",
    "\u00fd\u0102\u0106\u010a\u010e\u0113\u0117\u011f\u0124\u0128\u012d\u0132",
    "\u0136\u013b\u013f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'name'", "'race'", "'background'", "'date'", 
                     "'class'", "'justClass'", "'subclass'", "'level'", 
                     "'feats'", "'HP'", "'AC'", "'Str'", "'Dex'", "'Con'", 
                     "'Int'", "'Wis'", "'Cha'", "'alignment'", "'skills'", 
                     "'weapons'", "'spells'", "'day'", "'processedAlignment'", 
                     "'good'", "'lawful'", "'processedRace'", "'processedSpells'", 
                     "'processedWeapons'", "'levelGroup'", "'|'", "'NA'", 
                     "'G'", "'N'", "'E'", "'L'", "'C'", "'\t'", null, null, 
                     "' '" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "SEP", "NEWLINE", "INT", "SP", "TEXT" ];

var ruleNames =  [ "file", "hdr", "row", "name", "race", "background", "date", 
                   "fclass", "justClass", "subclass", "level", "feats", 
                   "hP", "aC", "str", "dex", "con", "fint", "wis", "cha", 
                   "alignment", "skills", "weapons", "spells", "day", "processedAlignment", 
                   "good", "lawful", "processedRace", "processedSpells", 
                   "processedWeapons", "levelGroup" ];

function DndParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DndParser.prototype = Object.create(antlr4.Parser.prototype);
DndParser.prototype.constructor = DndParser;

Object.defineProperty(DndParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DndParser.EOF = antlr4.Token.EOF;
DndParser.T__0 = 1;
DndParser.T__1 = 2;
DndParser.T__2 = 3;
DndParser.T__3 = 4;
DndParser.T__4 = 5;
DndParser.T__5 = 6;
DndParser.T__6 = 7;
DndParser.T__7 = 8;
DndParser.T__8 = 9;
DndParser.T__9 = 10;
DndParser.T__10 = 11;
DndParser.T__11 = 12;
DndParser.T__12 = 13;
DndParser.T__13 = 14;
DndParser.T__14 = 15;
DndParser.T__15 = 16;
DndParser.T__16 = 17;
DndParser.T__17 = 18;
DndParser.T__18 = 19;
DndParser.T__19 = 20;
DndParser.T__20 = 21;
DndParser.T__21 = 22;
DndParser.T__22 = 23;
DndParser.T__23 = 24;
DndParser.T__24 = 25;
DndParser.T__25 = 26;
DndParser.T__26 = 27;
DndParser.T__27 = 28;
DndParser.T__28 = 29;
DndParser.T__29 = 30;
DndParser.T__30 = 31;
DndParser.T__31 = 32;
DndParser.T__32 = 33;
DndParser.T__33 = 34;
DndParser.T__34 = 35;
DndParser.T__35 = 36;
DndParser.SEP = 37;
DndParser.NEWLINE = 38;
DndParser.INT = 39;
DndParser.SP = 40;
DndParser.TEXT = 41;

DndParser.RULE_file = 0;
DndParser.RULE_hdr = 1;
DndParser.RULE_row = 2;
DndParser.RULE_name = 3;
DndParser.RULE_race = 4;
DndParser.RULE_background = 5;
DndParser.RULE_date = 6;
DndParser.RULE_fclass = 7;
DndParser.RULE_justClass = 8;
DndParser.RULE_subclass = 9;
DndParser.RULE_level = 10;
DndParser.RULE_feats = 11;
DndParser.RULE_hP = 12;
DndParser.RULE_aC = 13;
DndParser.RULE_str = 14;
DndParser.RULE_dex = 15;
DndParser.RULE_con = 16;
DndParser.RULE_fint = 17;
DndParser.RULE_wis = 18;
DndParser.RULE_cha = 19;
DndParser.RULE_alignment = 20;
DndParser.RULE_skills = 21;
DndParser.RULE_weapons = 22;
DndParser.RULE_spells = 23;
DndParser.RULE_day = 24;
DndParser.RULE_processedAlignment = 25;
DndParser.RULE_good = 26;
DndParser.RULE_lawful = 27;
DndParser.RULE_processedRace = 28;
DndParser.RULE_processedSpells = 29;
DndParser.RULE_processedWeapons = 30;
DndParser.RULE_levelGroup = 31;


function FileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_file;
    return this;
}

FileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FileContext.prototype.constructor = FileContext;

FileContext.prototype.hdr = function() {
    return this.getTypedRuleContext(HdrContext,0);
};

FileContext.prototype.row = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RowContext);
    } else {
        return this.getTypedRuleContext(RowContext,i);
    }
};

FileContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterFile(this);
	}
};

FileContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitFile(this);
	}
};

FileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitFile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.FileContext = FileContext;

DndParser.prototype.file = function() {

    var localctx = new FileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DndParser.RULE_file);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.hdr();
        this.state = 66; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 65;
            this.row();
            this.state = 68; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HdrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_hdr;
    return this;
}

HdrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HdrContext.prototype.constructor = HdrContext;

HdrContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.SEP);
    } else {
        return this.getToken(DndParser.SEP, i);
    }
};


HdrContext.prototype.NEWLINE = function() {
    return this.getToken(DndParser.NEWLINE, 0);
};

HdrContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterHdr(this);
	}
};

HdrContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitHdr(this);
	}
};

HdrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitHdr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.HdrContext = HdrContext;

DndParser.prototype.hdr = function() {

    var localctx = new HdrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DndParser.RULE_hdr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(DndParser.T__0);
        this.state = 71;
        this.match(DndParser.SEP);
        this.state = 72;
        this.match(DndParser.T__1);
        this.state = 73;
        this.match(DndParser.SEP);
        this.state = 74;
        this.match(DndParser.T__2);
        this.state = 75;
        this.match(DndParser.SEP);
        this.state = 76;
        this.match(DndParser.T__3);
        this.state = 77;
        this.match(DndParser.SEP);
        this.state = 78;
        this.match(DndParser.T__4);
        this.state = 79;
        this.match(DndParser.SEP);
        this.state = 80;
        this.match(DndParser.T__5);
        this.state = 81;
        this.match(DndParser.SEP);
        this.state = 82;
        this.match(DndParser.T__6);
        this.state = 83;
        this.match(DndParser.SEP);
        this.state = 84;
        this.match(DndParser.T__7);
        this.state = 85;
        this.match(DndParser.SEP);
        this.state = 86;
        this.match(DndParser.T__8);
        this.state = 87;
        this.match(DndParser.SEP);
        this.state = 88;
        this.match(DndParser.T__9);
        this.state = 89;
        this.match(DndParser.SEP);
        this.state = 90;
        this.match(DndParser.T__10);
        this.state = 91;
        this.match(DndParser.SEP);
        this.state = 92;
        this.match(DndParser.T__11);
        this.state = 93;
        this.match(DndParser.SEP);
        this.state = 94;
        this.match(DndParser.T__12);
        this.state = 95;
        this.match(DndParser.SEP);
        this.state = 96;
        this.match(DndParser.T__13);
        this.state = 97;
        this.match(DndParser.SEP);
        this.state = 98;
        this.match(DndParser.T__14);
        this.state = 99;
        this.match(DndParser.SEP);
        this.state = 100;
        this.match(DndParser.T__15);
        this.state = 101;
        this.match(DndParser.SEP);
        this.state = 102;
        this.match(DndParser.T__16);
        this.state = 103;
        this.match(DndParser.SEP);
        this.state = 104;
        this.match(DndParser.T__17);
        this.state = 105;
        this.match(DndParser.SEP);
        this.state = 106;
        this.match(DndParser.T__18);
        this.state = 107;
        this.match(DndParser.SEP);
        this.state = 108;
        this.match(DndParser.T__19);
        this.state = 109;
        this.match(DndParser.SEP);
        this.state = 110;
        this.match(DndParser.T__20);
        this.state = 111;
        this.match(DndParser.SEP);
        this.state = 112;
        this.match(DndParser.T__21);
        this.state = 113;
        this.match(DndParser.SEP);
        this.state = 114;
        this.match(DndParser.T__22);
        this.state = 115;
        this.match(DndParser.SEP);
        this.state = 116;
        this.match(DndParser.T__23);
        this.state = 117;
        this.match(DndParser.SEP);
        this.state = 118;
        this.match(DndParser.T__24);
        this.state = 119;
        this.match(DndParser.SEP);
        this.state = 120;
        this.match(DndParser.T__25);
        this.state = 121;
        this.match(DndParser.SEP);
        this.state = 122;
        this.match(DndParser.T__26);
        this.state = 123;
        this.match(DndParser.SEP);
        this.state = 124;
        this.match(DndParser.T__27);
        this.state = 125;
        this.match(DndParser.SEP);
        this.state = 126;
        this.match(DndParser.T__28);
        this.state = 127;
        this.match(DndParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RowContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_row;
    return this;
}

RowContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RowContext.prototype.constructor = RowContext;

RowContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

RowContext.prototype.SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.SEP);
    } else {
        return this.getToken(DndParser.SEP, i);
    }
};


RowContext.prototype.race = function() {
    return this.getTypedRuleContext(RaceContext,0);
};

RowContext.prototype.background = function() {
    return this.getTypedRuleContext(BackgroundContext,0);
};

RowContext.prototype.date = function() {
    return this.getTypedRuleContext(DateContext,0);
};

RowContext.prototype.fclass = function() {
    return this.getTypedRuleContext(FclassContext,0);
};

RowContext.prototype.justClass = function() {
    return this.getTypedRuleContext(JustClassContext,0);
};

RowContext.prototype.subclass = function() {
    return this.getTypedRuleContext(SubclassContext,0);
};

RowContext.prototype.level = function() {
    return this.getTypedRuleContext(LevelContext,0);
};

RowContext.prototype.feats = function() {
    return this.getTypedRuleContext(FeatsContext,0);
};

RowContext.prototype.hP = function() {
    return this.getTypedRuleContext(HPContext,0);
};

RowContext.prototype.aC = function() {
    return this.getTypedRuleContext(ACContext,0);
};

RowContext.prototype.str = function() {
    return this.getTypedRuleContext(StrContext,0);
};

RowContext.prototype.dex = function() {
    return this.getTypedRuleContext(DexContext,0);
};

RowContext.prototype.con = function() {
    return this.getTypedRuleContext(ConContext,0);
};

RowContext.prototype.fint = function() {
    return this.getTypedRuleContext(FintContext,0);
};

RowContext.prototype.wis = function() {
    return this.getTypedRuleContext(WisContext,0);
};

RowContext.prototype.cha = function() {
    return this.getTypedRuleContext(ChaContext,0);
};

RowContext.prototype.alignment = function() {
    return this.getTypedRuleContext(AlignmentContext,0);
};

RowContext.prototype.skills = function() {
    return this.getTypedRuleContext(SkillsContext,0);
};

RowContext.prototype.weapons = function() {
    return this.getTypedRuleContext(WeaponsContext,0);
};

RowContext.prototype.spells = function() {
    return this.getTypedRuleContext(SpellsContext,0);
};

RowContext.prototype.day = function() {
    return this.getTypedRuleContext(DayContext,0);
};

RowContext.prototype.processedAlignment = function() {
    return this.getTypedRuleContext(ProcessedAlignmentContext,0);
};

RowContext.prototype.good = function() {
    return this.getTypedRuleContext(GoodContext,0);
};

RowContext.prototype.lawful = function() {
    return this.getTypedRuleContext(LawfulContext,0);
};

RowContext.prototype.processedRace = function() {
    return this.getTypedRuleContext(ProcessedRaceContext,0);
};

RowContext.prototype.processedSpells = function() {
    return this.getTypedRuleContext(ProcessedSpellsContext,0);
};

RowContext.prototype.processedWeapons = function() {
    return this.getTypedRuleContext(ProcessedWeaponsContext,0);
};

RowContext.prototype.levelGroup = function() {
    return this.getTypedRuleContext(LevelGroupContext,0);
};

RowContext.prototype.NEWLINE = function() {
    return this.getToken(DndParser.NEWLINE, 0);
};

RowContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterRow(this);
	}
};

RowContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitRow(this);
	}
};

RowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitRow(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.RowContext = RowContext;

DndParser.prototype.row = function() {

    var localctx = new RowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DndParser.RULE_row);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.name();
        this.state = 130;
        this.match(DndParser.SEP);
        this.state = 131;
        this.race();
        this.state = 132;
        this.match(DndParser.SEP);
        this.state = 133;
        this.background();
        this.state = 134;
        this.match(DndParser.SEP);
        this.state = 135;
        this.date();
        this.state = 136;
        this.match(DndParser.SEP);
        this.state = 137;
        this.fclass();
        this.state = 138;
        this.match(DndParser.SEP);
        this.state = 139;
        this.justClass();
        this.state = 140;
        this.match(DndParser.SEP);
        this.state = 141;
        this.subclass();
        this.state = 142;
        this.match(DndParser.SEP);
        this.state = 143;
        this.level();
        this.state = 144;
        this.match(DndParser.SEP);
        this.state = 145;
        this.feats();
        this.state = 146;
        this.match(DndParser.SEP);
        this.state = 147;
        this.hP();
        this.state = 148;
        this.match(DndParser.SEP);
        this.state = 149;
        this.aC();
        this.state = 150;
        this.match(DndParser.SEP);
        this.state = 151;
        this.str();
        this.state = 152;
        this.match(DndParser.SEP);
        this.state = 153;
        this.dex();
        this.state = 154;
        this.match(DndParser.SEP);
        this.state = 155;
        this.con();
        this.state = 156;
        this.match(DndParser.SEP);
        this.state = 157;
        this.fint();
        this.state = 158;
        this.match(DndParser.SEP);
        this.state = 159;
        this.wis();
        this.state = 160;
        this.match(DndParser.SEP);
        this.state = 161;
        this.cha();
        this.state = 162;
        this.match(DndParser.SEP);
        this.state = 163;
        this.alignment();
        this.state = 164;
        this.match(DndParser.SEP);
        this.state = 165;
        this.skills();
        this.state = 166;
        this.match(DndParser.SEP);
        this.state = 167;
        this.weapons();
        this.state = 168;
        this.match(DndParser.SEP);
        this.state = 169;
        this.spells();
        this.state = 170;
        this.match(DndParser.SEP);
        this.state = 171;
        this.day();
        this.state = 172;
        this.match(DndParser.SEP);
        this.state = 173;
        this.processedAlignment();
        this.state = 174;
        this.match(DndParser.SEP);
        this.state = 175;
        this.good();
        this.state = 176;
        this.match(DndParser.SEP);
        this.state = 177;
        this.lawful();
        this.state = 178;
        this.match(DndParser.SEP);
        this.state = 179;
        this.processedRace();
        this.state = 180;
        this.match(DndParser.SEP);
        this.state = 181;
        this.processedSpells();
        this.state = 182;
        this.match(DndParser.SEP);
        this.state = 183;
        this.processedWeapons();
        this.state = 184;
        this.match(DndParser.SEP);
        this.state = 185;
        this.levelGroup();
        this.state = 186;
        this.match(DndParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.TEXT = function() {
    return this.getToken(DndParser.TEXT, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitName(this);
	}
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.NameContext = NameContext;

DndParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DndParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_race;
    return this;
}

RaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RaceContext.prototype.constructor = RaceContext;

RaceContext.prototype.TEXT = function() {
    return this.getToken(DndParser.TEXT, 0);
};

RaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterRace(this);
	}
};

RaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitRace(this);
	}
};

RaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitRace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.RaceContext = RaceContext;

DndParser.prototype.race = function() {

    var localctx = new RaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DndParser.RULE_race);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BackgroundContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_background;
    return this;
}

BackgroundContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BackgroundContext.prototype.constructor = BackgroundContext;

BackgroundContext.prototype.TEXT = function() {
    return this.getToken(DndParser.TEXT, 0);
};

BackgroundContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterBackground(this);
	}
};

BackgroundContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitBackground(this);
	}
};

BackgroundContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitBackground(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.BackgroundContext = BackgroundContext;

DndParser.prototype.background = function() {

    var localctx = new BackgroundContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DndParser.RULE_background);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this.match(DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_date;
    return this;
}

DateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateContext.prototype.constructor = DateContext;

DateContext.prototype.TEXT = function() {
    return this.getToken(DndParser.TEXT, 0);
};

DateContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterDate(this);
	}
};

DateContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitDate(this);
	}
};

DateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.DateContext = DateContext;

DndParser.prototype.date = function() {

    var localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, DndParser.RULE_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FclassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_fclass;
    return this;
}

FclassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FclassContext.prototype.constructor = FclassContext;

FclassContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


FclassContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterFclass(this);
	}
};

FclassContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitFclass(this);
	}
};

FclassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitFclass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.FclassContext = FclassContext;

DndParser.prototype.fclass = function() {

    var localctx = new FclassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, DndParser.RULE_fclass);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 196;
            this.match(DndParser.TEXT);
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 197;
                this.match(DndParser.T__29);
            }

            this.state = 202; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function JustClassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_justClass;
    return this;
}

JustClassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JustClassContext.prototype.constructor = JustClassContext;

JustClassContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


JustClassContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterJustClass(this);
	}
};

JustClassContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitJustClass(this);
	}
};

JustClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitJustClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.JustClassContext = JustClassContext;

DndParser.prototype.justClass = function() {

    var localctx = new JustClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, DndParser.RULE_justClass);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 204;
            this.match(DndParser.TEXT);
            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 205;
                this.match(DndParser.T__29);
            }

            this.state = 210; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubclassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_subclass;
    return this;
}

SubclassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubclassContext.prototype.constructor = SubclassContext;

SubclassContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


SubclassContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterSubclass(this);
	}
};

SubclassContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitSubclass(this);
	}
};

SubclassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitSubclass(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.SubclassContext = SubclassContext;

DndParser.prototype.subclass = function() {

    var localctx = new SubclassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, DndParser.RULE_subclass);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 212;
            this.match(DndParser.TEXT);
            this.state = 214;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 213;
                this.match(DndParser.T__29);
            }

            this.state = 220;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LevelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_level;
    return this;
}

LevelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LevelContext.prototype.constructor = LevelContext;

LevelContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

LevelContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterLevel(this);
	}
};

LevelContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitLevel(this);
	}
};

LevelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitLevel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.LevelContext = LevelContext;

DndParser.prototype.level = function() {

    var localctx = new LevelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, DndParser.RULE_level);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FeatsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_feats;
    return this;
}

FeatsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeatsContext.prototype.constructor = FeatsContext;

FeatsContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


FeatsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterFeats(this);
	}
};

FeatsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitFeats(this);
	}
};

FeatsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitFeats(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.FeatsContext = FeatsContext;

DndParser.prototype.feats = function() {

    var localctx = new FeatsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, DndParser.RULE_feats);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 223;
            this.match(DndParser.TEXT);
            this.state = 225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 224;
                this.match(DndParser.T__29);
            }

            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HPContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_hP;
    return this;
}

HPContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HPContext.prototype.constructor = HPContext;

HPContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

HPContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterHP(this);
	}
};

HPContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitHP(this);
	}
};

HPContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitHP(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.HPContext = HPContext;

DndParser.prototype.hP = function() {

    var localctx = new HPContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, DndParser.RULE_hP);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ACContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_aC;
    return this;
}

ACContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ACContext.prototype.constructor = ACContext;

ACContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

ACContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterAC(this);
	}
};

ACContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitAC(this);
	}
};

ACContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitAC(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.ACContext = ACContext;

DndParser.prototype.aC = function() {

    var localctx = new ACContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, DndParser.RULE_aC);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_str;
    return this;
}

StrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrContext.prototype.constructor = StrContext;

StrContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

StrContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterStr(this);
	}
};

StrContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitStr(this);
	}
};

StrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitStr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.StrContext = StrContext;

DndParser.prototype.str = function() {

    var localctx = new StrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, DndParser.RULE_str);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_dex;
    return this;
}

DexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DexContext.prototype.constructor = DexContext;

DexContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

DexContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterDex(this);
	}
};

DexContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitDex(this);
	}
};

DexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitDex(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.DexContext = DexContext;

DndParser.prototype.dex = function() {

    var localctx = new DexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, DndParser.RULE_dex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_con;
    return this;
}

ConContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConContext.prototype.constructor = ConContext;

ConContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

ConContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterCon(this);
	}
};

ConContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitCon(this);
	}
};

ConContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitCon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.ConContext = ConContext;

DndParser.prototype.con = function() {

    var localctx = new ConContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, DndParser.RULE_con);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_fint;
    return this;
}

FintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FintContext.prototype.constructor = FintContext;

FintContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

FintContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterFint(this);
	}
};

FintContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitFint(this);
	}
};

FintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitFint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.FintContext = FintContext;

DndParser.prototype.fint = function() {

    var localctx = new FintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, DndParser.RULE_fint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WisContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_wis;
    return this;
}

WisContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WisContext.prototype.constructor = WisContext;

WisContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

WisContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterWis(this);
	}
};

WisContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitWis(this);
	}
};

WisContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitWis(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.WisContext = WisContext;

DndParser.prototype.wis = function() {

    var localctx = new WisContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, DndParser.RULE_wis);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ChaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_cha;
    return this;
}

ChaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChaContext.prototype.constructor = ChaContext;

ChaContext.prototype.INT = function() {
    return this.getToken(DndParser.INT, 0);
};

ChaContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterCha(this);
	}
};

ChaContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitCha(this);
	}
};

ChaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitCha(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.ChaContext = ChaContext;

DndParser.prototype.cha = function() {

    var localctx = new ChaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, DndParser.RULE_cha);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(DndParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AlignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_alignment;
    return this;
}

AlignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlignmentContext.prototype.constructor = AlignmentContext;

AlignmentContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


AlignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterAlignment(this);
	}
};

AlignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitAlignment(this);
	}
};

AlignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitAlignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.AlignmentContext = AlignmentContext;

DndParser.prototype.alignment = function() {

    var localctx = new AlignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, DndParser.RULE_alignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 248;
            this.match(DndParser.TEXT);
            this.state = 253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SkillsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_skills;
    return this;
}

SkillsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SkillsContext.prototype.constructor = SkillsContext;

SkillsContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


SkillsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterSkills(this);
	}
};

SkillsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitSkills(this);
	}
};

SkillsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitSkills(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.SkillsContext = SkillsContext;

DndParser.prototype.skills = function() {

    var localctx = new SkillsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, DndParser.RULE_skills);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 254;
            this.match(DndParser.TEXT);
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 255;
                this.match(DndParser.T__29);
            }

            this.state = 260; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WeaponsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_weapons;
    return this;
}

WeaponsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WeaponsContext.prototype.constructor = WeaponsContext;

WeaponsContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


WeaponsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterWeapons(this);
	}
};

WeaponsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitWeapons(this);
	}
};

WeaponsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitWeapons(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.WeaponsContext = WeaponsContext;

DndParser.prototype.weapons = function() {

    var localctx = new WeaponsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, DndParser.RULE_weapons);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 262;
            this.match(DndParser.TEXT);
            this.state = 264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 263;
                this.match(DndParser.T__29);
            }

            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SpellsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_spells;
    return this;
}

SpellsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpellsContext.prototype.constructor = SpellsContext;

SpellsContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


SpellsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterSpells(this);
	}
};

SpellsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitSpells(this);
	}
};

SpellsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitSpells(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.SpellsContext = SpellsContext;

DndParser.prototype.spells = function() {

    var localctx = new SpellsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, DndParser.RULE_spells);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 271;
            this.match(DndParser.TEXT);
            this.state = 273;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 272;
                this.match(DndParser.T__29);
            }

            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_day;
    return this;
}

DayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DayContext.prototype.constructor = DayContext;

DayContext.prototype.TEXT = function() {
    return this.getToken(DndParser.TEXT, 0);
};

DayContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterDay(this);
	}
};

DayContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitDay(this);
	}
};

DayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitDay(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.DayContext = DayContext;

DndParser.prototype.day = function() {

    var localctx = new DayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, DndParser.RULE_day);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcessedAlignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_processedAlignment;
    return this;
}

ProcessedAlignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedAlignmentContext.prototype.constructor = ProcessedAlignmentContext;

ProcessedAlignmentContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


ProcessedAlignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterProcessedAlignment(this);
	}
};

ProcessedAlignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitProcessedAlignment(this);
	}
};

ProcessedAlignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitProcessedAlignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.ProcessedAlignmentContext = ProcessedAlignmentContext;

DndParser.prototype.processedAlignment = function() {

    var localctx = new ProcessedAlignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, DndParser.RULE_processedAlignment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 282;
            this.match(DndParser.TEXT);
            this.state = 287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function GoodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_good;
    return this;
}

GoodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GoodContext.prototype.constructor = GoodContext;


GoodContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterGood(this);
	}
};

GoodContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitGood(this);
	}
};

GoodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitGood(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.GoodContext = GoodContext;

DndParser.prototype.good = function() {

    var localctx = new GoodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, DndParser.RULE_good);
    var _la = 0; // Token type
    try {
        this.state = 290;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DndParser.T__30:
            this.enterOuterAlt(localctx, 1);
            this.state = 288;
            this.match(DndParser.T__30);
            break;
        case DndParser.T__31:
        case DndParser.T__32:
        case DndParser.T__33:
            this.enterOuterAlt(localctx, 2);
            this.state = 289;
            _la = this._input.LA(1);
            if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (DndParser.T__31 - 32)) | (1 << (DndParser.T__32 - 32)) | (1 << (DndParser.T__33 - 32)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LawfulContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_lawful;
    return this;
}

LawfulContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LawfulContext.prototype.constructor = LawfulContext;


LawfulContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterLawful(this);
	}
};

LawfulContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitLawful(this);
	}
};

LawfulContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitLawful(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.LawfulContext = LawfulContext;

DndParser.prototype.lawful = function() {

    var localctx = new LawfulContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, DndParser.RULE_lawful);
    var _la = 0; // Token type
    try {
        this.state = 294;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DndParser.T__30:
            this.enterOuterAlt(localctx, 1);
            this.state = 292;
            this.match(DndParser.T__30);
            break;
        case DndParser.T__32:
        case DndParser.T__34:
        case DndParser.T__35:
            this.enterOuterAlt(localctx, 2);
            this.state = 293;
            _la = this._input.LA(1);
            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (DndParser.T__32 - 33)) | (1 << (DndParser.T__34 - 33)) | (1 << (DndParser.T__35 - 33)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcessedRaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_processedRace;
    return this;
}

ProcessedRaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedRaceContext.prototype.constructor = ProcessedRaceContext;

ProcessedRaceContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


ProcessedRaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterProcessedRace(this);
	}
};

ProcessedRaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitProcessedRace(this);
	}
};

ProcessedRaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitProcessedRace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.ProcessedRaceContext = ProcessedRaceContext;

DndParser.prototype.processedRace = function() {

    var localctx = new ProcessedRaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, DndParser.RULE_processedRace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 296;
            this.match(DndParser.TEXT);
            this.state = 301;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcessedSpellsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_processedSpells;
    return this;
}

ProcessedSpellsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedSpellsContext.prototype.constructor = ProcessedSpellsContext;

ProcessedSpellsContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


ProcessedSpellsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterProcessedSpells(this);
	}
};

ProcessedSpellsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitProcessedSpells(this);
	}
};

ProcessedSpellsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitProcessedSpells(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.ProcessedSpellsContext = ProcessedSpellsContext;

DndParser.prototype.processedSpells = function() {

    var localctx = new ProcessedSpellsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, DndParser.RULE_processedSpells);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 302;
            this.match(DndParser.TEXT);
            this.state = 304;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 303;
                this.match(DndParser.T__29);
            }

            this.state = 310;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProcessedWeaponsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_processedWeapons;
    return this;
}

ProcessedWeaponsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProcessedWeaponsContext.prototype.constructor = ProcessedWeaponsContext;

ProcessedWeaponsContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DndParser.TEXT);
    } else {
        return this.getToken(DndParser.TEXT, i);
    }
};


ProcessedWeaponsContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterProcessedWeapons(this);
	}
};

ProcessedWeaponsContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitProcessedWeapons(this);
	}
};

ProcessedWeaponsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitProcessedWeapons(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.ProcessedWeaponsContext = ProcessedWeaponsContext;

DndParser.prototype.processedWeapons = function() {

    var localctx = new ProcessedWeaponsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, DndParser.RULE_processedWeapons);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===DndParser.TEXT) {
            this.state = 311;
            this.match(DndParser.TEXT);
            this.state = 313;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===DndParser.T__29) {
                this.state = 312;
                this.match(DndParser.T__29);
            }

            this.state = 319;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LevelGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DndParser.RULE_levelGroup;
    return this;
}

LevelGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LevelGroupContext.prototype.constructor = LevelGroupContext;

LevelGroupContext.prototype.TEXT = function() {
    return this.getToken(DndParser.TEXT, 0);
};

LevelGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.enterLevelGroup(this);
	}
};

LevelGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof DndListener ) {
        listener.exitLevelGroup(this);
	}
};

LevelGroupContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DndVisitor ) {
        return visitor.visitLevelGroup(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DndParser.LevelGroupContext = LevelGroupContext;

DndParser.prototype.levelGroup = function() {

    var localctx = new LevelGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, DndParser.RULE_levelGroup);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(DndParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.DndParser = DndParser;
