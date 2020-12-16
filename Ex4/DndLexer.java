// Generated from Dnd.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class DndLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, SEP=37, NEWLINE=38, 
		INT=39, SP=40, TEXT=41;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
			"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
			"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
			"T__33", "T__34", "T__35", "DIGIT", "ALPHA", "CHAR", "SEP", "NEWLINE", 
			"INT", "SP", "TEXT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'name'", "'race'", "'background'", "'date'", "'class'", "'justClass'", 
			"'subclass'", "'level'", "'feats'", "'HP'", "'AC'", "'Str'", "'Dex'", 
			"'Con'", "'Int'", "'Wis'", "'Cha'", "'alignment'", "'skills'", "'weapons'", 
			"'spells'", "'day'", "'processedAlignment'", "'good'", "'lawful'", "'processedRace'", 
			"'processedSpells'", "'processedWeapons'", "'levelGroup'", "'|'", "'NA'", 
			"'G'", "'N'", "'E'", "'L'", "'C'", "'\t'", null, null, "' '"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "SEP", "NEWLINE", "INT", "SP", "TEXT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public DndLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Dnd.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2+\u017e\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3"+
		"\f\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\20\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\26"+
		"\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\31"+
		"\3\31\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\3\33\3\33"+
		"\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\3\34\3\34\3\34"+
		"\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\34\3\35\3\35\3\35\3\35"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\35\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\37\3\37\3 \3 \3 "+
		"\3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3\'\3\'\3\'\5\'\u014c\n"+
		"\'\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\3(\5(\u0163"+
		"\n(\3)\3)\3*\5*\u0168\n*\3*\3*\3+\6+\u016d\n+\r+\16+\u016e\3,\3,\3-\3"+
		"-\3-\5-\u0176\n-\3-\5-\u0179\n-\6-\u017b\n-\r-\16-\u017c\2\2.\3\3\5\4"+
		"\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22"+
		"#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C"+
		"#E$G%I&K\2M\2O\2Q\'S(U)W*Y+\3\2\7\3\2\62;\4\2C\\c|\4\2)\61<<\5\2AA]]_"+
		"_\4\2##??\2\u018b\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13"+
		"\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3"+
		"\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2"+
		"\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E"+
		"\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2"+
		"\2\2\2Y\3\2\2\2\3[\3\2\2\2\5`\3\2\2\2\7e\3\2\2\2\tp\3\2\2\2\13u\3\2\2"+
		"\2\r{\3\2\2\2\17\u0085\3\2\2\2\21\u008e\3\2\2\2\23\u0094\3\2\2\2\25\u009a"+
		"\3\2\2\2\27\u009d\3\2\2\2\31\u00a0\3\2\2\2\33\u00a4\3\2\2\2\35\u00a8\3"+
		"\2\2\2\37\u00ac\3\2\2\2!\u00b0\3\2\2\2#\u00b4\3\2\2\2%\u00b8\3\2\2\2\'"+
		"\u00c2\3\2\2\2)\u00c9\3\2\2\2+\u00d1\3\2\2\2-\u00d8\3\2\2\2/\u00dc\3\2"+
		"\2\2\61\u00ef\3\2\2\2\63\u00f4\3\2\2\2\65\u00fb\3\2\2\2\67\u0109\3\2\2"+
		"\29\u0119\3\2\2\2;\u012a\3\2\2\2=\u0135\3\2\2\2?\u0137\3\2\2\2A\u013a"+
		"\3\2\2\2C\u013c\3\2\2\2E\u013e\3\2\2\2G\u0140\3\2\2\2I\u0142\3\2\2\2K"+
		"\u0144\3\2\2\2M\u014b\3\2\2\2O\u0162\3\2\2\2Q\u0164\3\2\2\2S\u0167\3\2"+
		"\2\2U\u016c\3\2\2\2W\u0170\3\2\2\2Y\u017a\3\2\2\2[\\\7p\2\2\\]\7c\2\2"+
		"]^\7o\2\2^_\7g\2\2_\4\3\2\2\2`a\7t\2\2ab\7c\2\2bc\7e\2\2cd\7g\2\2d\6\3"+
		"\2\2\2ef\7d\2\2fg\7c\2\2gh\7e\2\2hi\7m\2\2ij\7i\2\2jk\7t\2\2kl\7q\2\2"+
		"lm\7w\2\2mn\7p\2\2no\7f\2\2o\b\3\2\2\2pq\7f\2\2qr\7c\2\2rs\7v\2\2st\7"+
		"g\2\2t\n\3\2\2\2uv\7e\2\2vw\7n\2\2wx\7c\2\2xy\7u\2\2yz\7u\2\2z\f\3\2\2"+
		"\2{|\7l\2\2|}\7w\2\2}~\7u\2\2~\177\7v\2\2\177\u0080\7E\2\2\u0080\u0081"+
		"\7n\2\2\u0081\u0082\7c\2\2\u0082\u0083\7u\2\2\u0083\u0084\7u\2\2\u0084"+
		"\16\3\2\2\2\u0085\u0086\7u\2\2\u0086\u0087\7w\2\2\u0087\u0088\7d\2\2\u0088"+
		"\u0089\7e\2\2\u0089\u008a\7n\2\2\u008a\u008b\7c\2\2\u008b\u008c\7u\2\2"+
		"\u008c\u008d\7u\2\2\u008d\20\3\2\2\2\u008e\u008f\7n\2\2\u008f\u0090\7"+
		"g\2\2\u0090\u0091\7x\2\2\u0091\u0092\7g\2\2\u0092\u0093\7n\2\2\u0093\22"+
		"\3\2\2\2\u0094\u0095\7h\2\2\u0095\u0096\7g\2\2\u0096\u0097\7c\2\2\u0097"+
		"\u0098\7v\2\2\u0098\u0099\7u\2\2\u0099\24\3\2\2\2\u009a\u009b\7J\2\2\u009b"+
		"\u009c\7R\2\2\u009c\26\3\2\2\2\u009d\u009e\7C\2\2\u009e\u009f\7E\2\2\u009f"+
		"\30\3\2\2\2\u00a0\u00a1\7U\2\2\u00a1\u00a2\7v\2\2\u00a2\u00a3\7t\2\2\u00a3"+
		"\32\3\2\2\2\u00a4\u00a5\7F\2\2\u00a5\u00a6\7g\2\2\u00a6\u00a7\7z\2\2\u00a7"+
		"\34\3\2\2\2\u00a8\u00a9\7E\2\2\u00a9\u00aa\7q\2\2\u00aa\u00ab\7p\2\2\u00ab"+
		"\36\3\2\2\2\u00ac\u00ad\7K\2\2\u00ad\u00ae\7p\2\2\u00ae\u00af\7v\2\2\u00af"+
		" \3\2\2\2\u00b0\u00b1\7Y\2\2\u00b1\u00b2\7k\2\2\u00b2\u00b3\7u\2\2\u00b3"+
		"\"\3\2\2\2\u00b4\u00b5\7E\2\2\u00b5\u00b6\7j\2\2\u00b6\u00b7\7c\2\2\u00b7"+
		"$\3\2\2\2\u00b8\u00b9\7c\2\2\u00b9\u00ba\7n\2\2\u00ba\u00bb\7k\2\2\u00bb"+
		"\u00bc\7i\2\2\u00bc\u00bd\7p\2\2\u00bd\u00be\7o\2\2\u00be\u00bf\7g\2\2"+
		"\u00bf\u00c0\7p\2\2\u00c0\u00c1\7v\2\2\u00c1&\3\2\2\2\u00c2\u00c3\7u\2"+
		"\2\u00c3\u00c4\7m\2\2\u00c4\u00c5\7k\2\2\u00c5\u00c6\7n\2\2\u00c6\u00c7"+
		"\7n\2\2\u00c7\u00c8\7u\2\2\u00c8(\3\2\2\2\u00c9\u00ca\7y\2\2\u00ca\u00cb"+
		"\7g\2\2\u00cb\u00cc\7c\2\2\u00cc\u00cd\7r\2\2\u00cd\u00ce\7q\2\2\u00ce"+
		"\u00cf\7p\2\2\u00cf\u00d0\7u\2\2\u00d0*\3\2\2\2\u00d1\u00d2\7u\2\2\u00d2"+
		"\u00d3\7r\2\2\u00d3\u00d4\7g\2\2\u00d4\u00d5\7n\2\2\u00d5\u00d6\7n\2\2"+
		"\u00d6\u00d7\7u\2\2\u00d7,\3\2\2\2\u00d8\u00d9\7f\2\2\u00d9\u00da\7c\2"+
		"\2\u00da\u00db\7{\2\2\u00db.\3\2\2\2\u00dc\u00dd\7r\2\2\u00dd\u00de\7"+
		"t\2\2\u00de\u00df\7q\2\2\u00df\u00e0\7e\2\2\u00e0\u00e1\7g\2\2\u00e1\u00e2"+
		"\7u\2\2\u00e2\u00e3\7u\2\2\u00e3\u00e4\7g\2\2\u00e4\u00e5\7f\2\2\u00e5"+
		"\u00e6\7C\2\2\u00e6\u00e7\7n\2\2\u00e7\u00e8\7k\2\2\u00e8\u00e9\7i\2\2"+
		"\u00e9\u00ea\7p\2\2\u00ea\u00eb\7o\2\2\u00eb\u00ec\7g\2\2\u00ec\u00ed"+
		"\7p\2\2\u00ed\u00ee\7v\2\2\u00ee\60\3\2\2\2\u00ef\u00f0\7i\2\2\u00f0\u00f1"+
		"\7q\2\2\u00f1\u00f2\7q\2\2\u00f2\u00f3\7f\2\2\u00f3\62\3\2\2\2\u00f4\u00f5"+
		"\7n\2\2\u00f5\u00f6\7c\2\2\u00f6\u00f7\7y\2\2\u00f7\u00f8\7h\2\2\u00f8"+
		"\u00f9\7w\2\2\u00f9\u00fa\7n\2\2\u00fa\64\3\2\2\2\u00fb\u00fc\7r\2\2\u00fc"+
		"\u00fd\7t\2\2\u00fd\u00fe\7q\2\2\u00fe\u00ff\7e\2\2\u00ff\u0100\7g\2\2"+
		"\u0100\u0101\7u\2\2\u0101\u0102\7u\2\2\u0102\u0103\7g\2\2\u0103\u0104"+
		"\7f\2\2\u0104\u0105\7T\2\2\u0105\u0106\7c\2\2\u0106\u0107\7e\2\2\u0107"+
		"\u0108\7g\2\2\u0108\66\3\2\2\2\u0109\u010a\7r\2\2\u010a\u010b\7t\2\2\u010b"+
		"\u010c\7q\2\2\u010c\u010d\7e\2\2\u010d\u010e\7g\2\2\u010e\u010f\7u\2\2"+
		"\u010f\u0110\7u\2\2\u0110\u0111\7g\2\2\u0111\u0112\7f\2\2\u0112\u0113"+
		"\7U\2\2\u0113\u0114\7r\2\2\u0114\u0115\7g\2\2\u0115\u0116\7n\2\2\u0116"+
		"\u0117\7n\2\2\u0117\u0118\7u\2\2\u01188\3\2\2\2\u0119\u011a\7r\2\2\u011a"+
		"\u011b\7t\2\2\u011b\u011c\7q\2\2\u011c\u011d\7e\2\2\u011d\u011e\7g\2\2"+
		"\u011e\u011f\7u\2\2\u011f\u0120\7u\2\2\u0120\u0121\7g\2\2\u0121\u0122"+
		"\7f\2\2\u0122\u0123\7Y\2\2\u0123\u0124\7g\2\2\u0124\u0125\7c\2\2\u0125"+
		"\u0126\7r\2\2\u0126\u0127\7q\2\2\u0127\u0128\7p\2\2\u0128\u0129\7u\2\2"+
		"\u0129:\3\2\2\2\u012a\u012b\7n\2\2\u012b\u012c\7g\2\2\u012c\u012d\7x\2"+
		"\2\u012d\u012e\7g\2\2\u012e\u012f\7n\2\2\u012f\u0130\7I\2\2\u0130\u0131"+
		"\7t\2\2\u0131\u0132\7q\2\2\u0132\u0133\7w\2\2\u0133\u0134\7r\2\2\u0134"+
		"<\3\2\2\2\u0135\u0136\7~\2\2\u0136>\3\2\2\2\u0137\u0138\7P\2\2\u0138\u0139"+
		"\7C\2\2\u0139@\3\2\2\2\u013a\u013b\7I\2\2\u013bB\3\2\2\2\u013c\u013d\7"+
		"P\2\2\u013dD\3\2\2\2\u013e\u013f\7G\2\2\u013fF\3\2\2\2\u0140\u0141\7N"+
		"\2\2\u0141H\3\2\2\2\u0142\u0143\7E\2\2\u0143J\3\2\2\2\u0144\u0145\t\2"+
		"\2\2\u0145L\3\2\2\2\u0146\u014c\t\3\2\2\u0147\u0148\7\u00c5\2\2\u0148"+
		"\u014c\7\u00a5\2\2\u0149\u014a\7\u00c5\2\2\u014a\u014c\7\u00a9\2\2\u014b"+
		"\u0146\3\2\2\2\u014b\u0147\3\2\2\2\u014b\u0149\3\2\2\2\u014cN\3\2\2\2"+
		"\u014d\u0163\t\4\2\2\u014e\u014f\7\u00e4\2\2\u014f\u0150\7\u20ae\2\2\u0150"+
		"\u0163\7\u2124\2\2\u0151\u0163\t\5\2\2\u0152\u0153\7\u00c4\2\2\u0153\u0163"+
		"\7\u00ab\2\2\u0154\u0163\t\6\2\2\u0155\u0156\7\u00e5\2\2\u0156\u0157\7"+
		"\u20ae\2\2\u0157\u0163\7\u0162\2\2\u0158\u0159\7\u00c5\2\2\u0159\u0163"+
		"\7\u00a4\2\2\u015a\u015b\7\u00e4\2\2\u015b\u015c\7\u201c\2\2\u015c\u0163"+
		"\7\u00ae\2\2\u015d\u015e\7\u00e4\2\2\u015e\u015f\7\u2020\2\2\u015f\u0163"+
		"\7\u00a4\2\2\u0160\u0161\7\u00c4\2\2\u0161\u0163\7\u00b0\2\2\u0162\u014d"+
		"\3\2\2\2\u0162\u014e\3\2\2\2\u0162\u0151\3\2\2\2\u0162\u0152\3\2\2\2\u0162"+
		"\u0154\3\2\2\2\u0162\u0155\3\2\2\2\u0162\u0158\3\2\2\2\u0162\u015a\3\2"+
		"\2\2\u0162\u015d\3\2\2\2\u0162\u0160\3\2\2\2\u0163P\3\2\2\2\u0164\u0165"+
		"\7\13\2\2\u0165R\3\2\2\2\u0166\u0168\7\17\2\2\u0167\u0166\3\2\2\2\u0167"+
		"\u0168\3\2\2\2\u0168\u0169\3\2\2\2\u0169\u016a\7\f\2\2\u016aT\3\2\2\2"+
		"\u016b\u016d\5K&\2\u016c\u016b\3\2\2\2\u016d\u016e\3\2\2\2\u016e\u016c"+
		"\3\2\2\2\u016e\u016f\3\2\2\2\u016fV\3\2\2\2\u0170\u0171\7\"\2\2\u0171"+
		"X\3\2\2\2\u0172\u0176\5M\'\2\u0173\u0176\5U+\2\u0174\u0176\5O(\2\u0175"+
		"\u0172\3\2\2\2\u0175\u0173\3\2\2\2\u0175\u0174\3\2\2\2\u0176\u0178\3\2"+
		"\2\2\u0177\u0179\5W,\2\u0178\u0177\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u017b"+
		"\3\2\2\2\u017a\u0175\3\2\2\2\u017b\u017c\3\2\2\2\u017c\u017a\3\2\2\2\u017c"+
		"\u017d\3\2\2\2\u017dZ\3\2\2\2\n\2\u014b\u0162\u0167\u016e\u0175\u0178"+
		"\u017c\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}