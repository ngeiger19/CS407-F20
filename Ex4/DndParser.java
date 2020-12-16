// Generated from Dnd.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class DndParser extends Parser {
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
	public static final int
		RULE_file = 0, RULE_hdr = 1, RULE_row = 2, RULE_name = 3, RULE_race = 4, 
		RULE_background = 5, RULE_date = 6, RULE_fclass = 7, RULE_justClass = 8, 
		RULE_subclass = 9, RULE_level = 10, RULE_feats = 11, RULE_hP = 12, RULE_aC = 13, 
		RULE_str = 14, RULE_dex = 15, RULE_con = 16, RULE_fint = 17, RULE_wis = 18, 
		RULE_cha = 19, RULE_alignment = 20, RULE_skills = 21, RULE_weapons = 22, 
		RULE_spells = 23, RULE_day = 24, RULE_processedAlignment = 25, RULE_good = 26, 
		RULE_lawful = 27, RULE_processedRace = 28, RULE_processedSpells = 29, 
		RULE_processedWeapons = 30, RULE_levelGroup = 31;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "hdr", "row", "name", "race", "background", "date", "fclass", 
			"justClass", "subclass", "level", "feats", "hP", "aC", "str", "dex", 
			"con", "fint", "wis", "cha", "alignment", "skills", "weapons", "spells", 
			"day", "processedAlignment", "good", "lawful", "processedRace", "processedSpells", 
			"processedWeapons", "levelGroup"
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

	@Override
	public String getGrammarFileName() { return "Dnd.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DndParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class FileContext extends ParserRuleContext {
		public HdrContext hdr() {
			return getRuleContext(HdrContext.class,0);
		}
		public List<RowContext> row() {
			return getRuleContexts(RowContext.class);
		}
		public RowContext row(int i) {
			return getRuleContext(RowContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterFile(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitFile(this);
		}
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			hdr();
			setState(66); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(65);
				row();
				}
				}
				setState(68); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==TEXT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HdrContext extends ParserRuleContext {
		public List<TerminalNode> SEP() { return getTokens(DndParser.SEP); }
		public TerminalNode SEP(int i) {
			return getToken(DndParser.SEP, i);
		}
		public TerminalNode NEWLINE() { return getToken(DndParser.NEWLINE, 0); }
		public HdrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hdr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterHdr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitHdr(this);
		}
	}

	public final HdrContext hdr() throws RecognitionException {
		HdrContext _localctx = new HdrContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_hdr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			match(T__0);
			setState(71);
			match(SEP);
			setState(72);
			match(T__1);
			setState(73);
			match(SEP);
			setState(74);
			match(T__2);
			setState(75);
			match(SEP);
			setState(76);
			match(T__3);
			setState(77);
			match(SEP);
			setState(78);
			match(T__4);
			setState(79);
			match(SEP);
			setState(80);
			match(T__5);
			setState(81);
			match(SEP);
			setState(82);
			match(T__6);
			setState(83);
			match(SEP);
			setState(84);
			match(T__7);
			setState(85);
			match(SEP);
			setState(86);
			match(T__8);
			setState(87);
			match(SEP);
			setState(88);
			match(T__9);
			setState(89);
			match(SEP);
			setState(90);
			match(T__10);
			setState(91);
			match(SEP);
			setState(92);
			match(T__11);
			setState(93);
			match(SEP);
			setState(94);
			match(T__12);
			setState(95);
			match(SEP);
			setState(96);
			match(T__13);
			setState(97);
			match(SEP);
			setState(98);
			match(T__14);
			setState(99);
			match(SEP);
			setState(100);
			match(T__15);
			setState(101);
			match(SEP);
			setState(102);
			match(T__16);
			setState(103);
			match(SEP);
			setState(104);
			match(T__17);
			setState(105);
			match(SEP);
			setState(106);
			match(T__18);
			setState(107);
			match(SEP);
			setState(108);
			match(T__19);
			setState(109);
			match(SEP);
			setState(110);
			match(T__20);
			setState(111);
			match(SEP);
			setState(112);
			match(T__21);
			setState(113);
			match(SEP);
			setState(114);
			match(T__22);
			setState(115);
			match(SEP);
			setState(116);
			match(T__23);
			setState(117);
			match(SEP);
			setState(118);
			match(T__24);
			setState(119);
			match(SEP);
			setState(120);
			match(T__25);
			setState(121);
			match(SEP);
			setState(122);
			match(T__26);
			setState(123);
			match(SEP);
			setState(124);
			match(T__27);
			setState(125);
			match(SEP);
			setState(126);
			match(T__28);
			setState(127);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RowContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public List<TerminalNode> SEP() { return getTokens(DndParser.SEP); }
		public TerminalNode SEP(int i) {
			return getToken(DndParser.SEP, i);
		}
		public RaceContext race() {
			return getRuleContext(RaceContext.class,0);
		}
		public BackgroundContext background() {
			return getRuleContext(BackgroundContext.class,0);
		}
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public FclassContext fclass() {
			return getRuleContext(FclassContext.class,0);
		}
		public JustClassContext justClass() {
			return getRuleContext(JustClassContext.class,0);
		}
		public SubclassContext subclass() {
			return getRuleContext(SubclassContext.class,0);
		}
		public LevelContext level() {
			return getRuleContext(LevelContext.class,0);
		}
		public FeatsContext feats() {
			return getRuleContext(FeatsContext.class,0);
		}
		public HPContext hP() {
			return getRuleContext(HPContext.class,0);
		}
		public ACContext aC() {
			return getRuleContext(ACContext.class,0);
		}
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public DexContext dex() {
			return getRuleContext(DexContext.class,0);
		}
		public ConContext con() {
			return getRuleContext(ConContext.class,0);
		}
		public FintContext fint() {
			return getRuleContext(FintContext.class,0);
		}
		public WisContext wis() {
			return getRuleContext(WisContext.class,0);
		}
		public ChaContext cha() {
			return getRuleContext(ChaContext.class,0);
		}
		public AlignmentContext alignment() {
			return getRuleContext(AlignmentContext.class,0);
		}
		public SkillsContext skills() {
			return getRuleContext(SkillsContext.class,0);
		}
		public WeaponsContext weapons() {
			return getRuleContext(WeaponsContext.class,0);
		}
		public SpellsContext spells() {
			return getRuleContext(SpellsContext.class,0);
		}
		public DayContext day() {
			return getRuleContext(DayContext.class,0);
		}
		public ProcessedAlignmentContext processedAlignment() {
			return getRuleContext(ProcessedAlignmentContext.class,0);
		}
		public GoodContext good() {
			return getRuleContext(GoodContext.class,0);
		}
		public LawfulContext lawful() {
			return getRuleContext(LawfulContext.class,0);
		}
		public ProcessedRaceContext processedRace() {
			return getRuleContext(ProcessedRaceContext.class,0);
		}
		public ProcessedSpellsContext processedSpells() {
			return getRuleContext(ProcessedSpellsContext.class,0);
		}
		public ProcessedWeaponsContext processedWeapons() {
			return getRuleContext(ProcessedWeaponsContext.class,0);
		}
		public LevelGroupContext levelGroup() {
			return getRuleContext(LevelGroupContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(DndParser.NEWLINE, 0); }
		public RowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_row; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterRow(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitRow(this);
		}
	}

	public final RowContext row() throws RecognitionException {
		RowContext _localctx = new RowContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_row);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			name();
			setState(130);
			match(SEP);
			setState(131);
			race();
			setState(132);
			match(SEP);
			setState(133);
			background();
			setState(134);
			match(SEP);
			setState(135);
			date();
			setState(136);
			match(SEP);
			setState(137);
			fclass();
			setState(138);
			match(SEP);
			setState(139);
			justClass();
			setState(140);
			match(SEP);
			setState(141);
			subclass();
			setState(142);
			match(SEP);
			setState(143);
			level();
			setState(144);
			match(SEP);
			setState(145);
			feats();
			setState(146);
			match(SEP);
			setState(147);
			hP();
			setState(148);
			match(SEP);
			setState(149);
			aC();
			setState(150);
			match(SEP);
			setState(151);
			str();
			setState(152);
			match(SEP);
			setState(153);
			dex();
			setState(154);
			match(SEP);
			setState(155);
			con();
			setState(156);
			match(SEP);
			setState(157);
			fint();
			setState(158);
			match(SEP);
			setState(159);
			wis();
			setState(160);
			match(SEP);
			setState(161);
			cha();
			setState(162);
			match(SEP);
			setState(163);
			alignment();
			setState(164);
			match(SEP);
			setState(165);
			skills();
			setState(166);
			match(SEP);
			setState(167);
			weapons();
			setState(168);
			match(SEP);
			setState(169);
			spells();
			setState(170);
			match(SEP);
			setState(171);
			day();
			setState(172);
			match(SEP);
			setState(173);
			processedAlignment();
			setState(174);
			match(SEP);
			setState(175);
			good();
			setState(176);
			match(SEP);
			setState(177);
			lawful();
			setState(178);
			match(SEP);
			setState(179);
			processedRace();
			setState(180);
			match(SEP);
			setState(181);
			processedSpells();
			setState(182);
			match(SEP);
			setState(183);
			processedWeapons();
			setState(184);
			match(SEP);
			setState(185);
			levelGroup();
			setState(186);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(DndParser.TEXT, 0); }
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitName(this);
		}
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RaceContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(DndParser.TEXT, 0); }
		public RaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_race; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterRace(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitRace(this);
		}
	}

	public final RaceContext race() throws RecognitionException {
		RaceContext _localctx = new RaceContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_race);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BackgroundContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(DndParser.TEXT, 0); }
		public BackgroundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_background; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterBackground(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitBackground(this);
		}
	}

	public final BackgroundContext background() throws RecognitionException {
		BackgroundContext _localctx = new BackgroundContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_background);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DateContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(DndParser.TEXT, 0); }
		public DateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_date; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterDate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitDate(this);
		}
	}

	public final DateContext date() throws RecognitionException {
		DateContext _localctx = new DateContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_date);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FclassContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public FclassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fclass; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterFclass(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitFclass(this);
		}
	}

	public final FclassContext fclass() throws RecognitionException {
		FclassContext _localctx = new FclassContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_fclass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(196);
				match(TEXT);
				setState(198);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(197);
					match(T__29);
					}
				}

				}
				}
				setState(202); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==TEXT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class JustClassContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public JustClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_justClass; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterJustClass(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitJustClass(this);
		}
	}

	public final JustClassContext justClass() throws RecognitionException {
		JustClassContext _localctx = new JustClassContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_justClass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(204);
				match(TEXT);
				setState(206);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(205);
					match(T__29);
					}
				}

				}
				}
				setState(210); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==TEXT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubclassContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public SubclassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subclass; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterSubclass(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitSubclass(this);
		}
	}

	public final SubclassContext subclass() throws RecognitionException {
		SubclassContext _localctx = new SubclassContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_subclass);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(212);
				match(TEXT);
				setState(214);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(213);
					match(T__29);
					}
				}

				}
				}
				setState(220);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LevelContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public LevelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterLevel(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitLevel(this);
		}
	}

	public final LevelContext level() throws RecognitionException {
		LevelContext _localctx = new LevelContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_level);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FeatsContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public FeatsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_feats; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterFeats(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitFeats(this);
		}
	}

	public final FeatsContext feats() throws RecognitionException {
		FeatsContext _localctx = new FeatsContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_feats);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(223);
				match(TEXT);
				setState(225);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(224);
					match(T__29);
					}
				}

				}
				}
				setState(231);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HPContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public HPContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hP; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterHP(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitHP(this);
		}
	}

	public final HPContext hP() throws RecognitionException {
		HPContext _localctx = new HPContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_hP);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ACContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public ACContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aC; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterAC(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitAC(this);
		}
	}

	public final ACContext aC() throws RecognitionException {
		ACContext _localctx = new ACContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_aC);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StrContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public StrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterStr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitStr(this);
		}
	}

	public final StrContext str() throws RecognitionException {
		StrContext _localctx = new StrContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_str);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(236);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DexContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public DexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dex; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterDex(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitDex(this);
		}
	}

	public final DexContext dex() throws RecognitionException {
		DexContext _localctx = new DexContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_dex);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public ConContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_con; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterCon(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitCon(this);
		}
	}

	public final ConContext con() throws RecognitionException {
		ConContext _localctx = new ConContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_con);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FintContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public FintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fint; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterFint(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitFint(this);
		}
	}

	public final FintContext fint() throws RecognitionException {
		FintContext _localctx = new FintContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_fint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WisContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public WisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wis; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterWis(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitWis(this);
		}
	}

	public final WisContext wis() throws RecognitionException {
		WisContext _localctx = new WisContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_wis);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ChaContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(DndParser.INT, 0); }
		public ChaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cha; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterCha(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitCha(this);
		}
	}

	public final ChaContext cha() throws RecognitionException {
		ChaContext _localctx = new ChaContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_cha);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(INT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlignmentContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public AlignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alignment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterAlignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitAlignment(this);
		}
	}

	public final AlignmentContext alignment() throws RecognitionException {
		AlignmentContext _localctx = new AlignmentContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_alignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(248);
				match(TEXT);
				}
				}
				setState(253);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SkillsContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public SkillsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skills; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterSkills(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitSkills(this);
		}
	}

	public final SkillsContext skills() throws RecognitionException {
		SkillsContext _localctx = new SkillsContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_skills);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(254);
				match(TEXT);
				setState(256);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(255);
					match(T__29);
					}
				}

				}
				}
				setState(260); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==TEXT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WeaponsContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public WeaponsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_weapons; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterWeapons(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitWeapons(this);
		}
	}

	public final WeaponsContext weapons() throws RecognitionException {
		WeaponsContext _localctx = new WeaponsContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_weapons);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(262);
				match(TEXT);
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(263);
					match(T__29);
					}
				}

				}
				}
				setState(270);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SpellsContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public SpellsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_spells; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterSpells(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitSpells(this);
		}
	}

	public final SpellsContext spells() throws RecognitionException {
		SpellsContext _localctx = new SpellsContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_spells);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(271);
				match(TEXT);
				setState(273);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(272);
					match(T__29);
					}
				}

				}
				}
				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DayContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(DndParser.TEXT, 0); }
		public DayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_day; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterDay(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitDay(this);
		}
	}

	public final DayContext day() throws RecognitionException {
		DayContext _localctx = new DayContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_day);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcessedAlignmentContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public ProcessedAlignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_processedAlignment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterProcessedAlignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitProcessedAlignment(this);
		}
	}

	public final ProcessedAlignmentContext processedAlignment() throws RecognitionException {
		ProcessedAlignmentContext _localctx = new ProcessedAlignmentContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_processedAlignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(285);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(282);
				match(TEXT);
				}
				}
				setState(287);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GoodContext extends ParserRuleContext {
		public GoodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_good; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterGood(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitGood(this);
		}
	}

	public final GoodContext good() throws RecognitionException {
		GoodContext _localctx = new GoodContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_good);
		int _la;
		try {
			setState(290);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__30:
				enterOuterAlt(_localctx, 1);
				{
				setState(288);
				match(T__30);
				}
				break;
			case T__31:
			case T__32:
			case T__33:
				enterOuterAlt(_localctx, 2);
				{
				setState(289);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__31) | (1L << T__32) | (1L << T__33))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LawfulContext extends ParserRuleContext {
		public LawfulContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lawful; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterLawful(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitLawful(this);
		}
	}

	public final LawfulContext lawful() throws RecognitionException {
		LawfulContext _localctx = new LawfulContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_lawful);
		int _la;
		try {
			setState(294);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__30:
				enterOuterAlt(_localctx, 1);
				{
				setState(292);
				match(T__30);
				}
				break;
			case T__32:
			case T__34:
			case T__35:
				enterOuterAlt(_localctx, 2);
				{
				setState(293);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__32) | (1L << T__34) | (1L << T__35))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcessedRaceContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public ProcessedRaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_processedRace; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterProcessedRace(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitProcessedRace(this);
		}
	}

	public final ProcessedRaceContext processedRace() throws RecognitionException {
		ProcessedRaceContext _localctx = new ProcessedRaceContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_processedRace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(296);
				match(TEXT);
				}
				}
				setState(301);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcessedSpellsContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public ProcessedSpellsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_processedSpells; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterProcessedSpells(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitProcessedSpells(this);
		}
	}

	public final ProcessedSpellsContext processedSpells() throws RecognitionException {
		ProcessedSpellsContext _localctx = new ProcessedSpellsContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_processedSpells);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(302);
				match(TEXT);
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(303);
					match(T__29);
					}
				}

				}
				}
				setState(310);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProcessedWeaponsContext extends ParserRuleContext {
		public List<TerminalNode> TEXT() { return getTokens(DndParser.TEXT); }
		public TerminalNode TEXT(int i) {
			return getToken(DndParser.TEXT, i);
		}
		public ProcessedWeaponsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_processedWeapons; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterProcessedWeapons(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitProcessedWeapons(this);
		}
	}

	public final ProcessedWeaponsContext processedWeapons() throws RecognitionException {
		ProcessedWeaponsContext _localctx = new ProcessedWeaponsContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_processedWeapons);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==TEXT) {
				{
				{
				setState(311);
				match(TEXT);
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__29) {
					{
					setState(312);
					match(T__29);
					}
				}

				}
				}
				setState(319);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LevelGroupContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(DndParser.TEXT, 0); }
		public LevelGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_levelGroup; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).enterLevelGroup(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DndListener ) ((DndListener)listener).exitLevelGroup(this);
		}
	}

	public final LevelGroupContext levelGroup() throws RecognitionException {
		LevelGroupContext _localctx = new LevelGroupContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_levelGroup);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3+\u0145\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\3\2\3\2\6\2E\n\2\r\2\16\2F\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\5\t\u00c9\n\t\6\t"+
		"\u00cb\n\t\r\t\16\t\u00cc\3\n\3\n\5\n\u00d1\n\n\6\n\u00d3\n\n\r\n\16\n"+
		"\u00d4\3\13\3\13\5\13\u00d9\n\13\7\13\u00db\n\13\f\13\16\13\u00de\13\13"+
		"\3\f\3\f\3\r\3\r\5\r\u00e4\n\r\7\r\u00e6\n\r\f\r\16\r\u00e9\13\r\3\16"+
		"\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25"+
		"\3\25\3\26\7\26\u00fc\n\26\f\26\16\26\u00ff\13\26\3\27\3\27\5\27\u0103"+
		"\n\27\6\27\u0105\n\27\r\27\16\27\u0106\3\30\3\30\5\30\u010b\n\30\7\30"+
		"\u010d\n\30\f\30\16\30\u0110\13\30\3\31\3\31\5\31\u0114\n\31\7\31\u0116"+
		"\n\31\f\31\16\31\u0119\13\31\3\32\3\32\3\33\7\33\u011e\n\33\f\33\16\33"+
		"\u0121\13\33\3\34\3\34\5\34\u0125\n\34\3\35\3\35\5\35\u0129\n\35\3\36"+
		"\7\36\u012c\n\36\f\36\16\36\u012f\13\36\3\37\3\37\5\37\u0133\n\37\7\37"+
		"\u0135\n\37\f\37\16\37\u0138\13\37\3 \3 \5 \u013c\n \7 \u013e\n \f \16"+
		" \u0141\13 \3!\3!\3!\2\2\"\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$"+
		"&(*,.\60\62\64\668:<>@\2\4\3\2\"$\4\2##%&\2\u013c\2B\3\2\2\2\4H\3\2\2"+
		"\2\6\u0083\3\2\2\2\b\u00be\3\2\2\2\n\u00c0\3\2\2\2\f\u00c2\3\2\2\2\16"+
		"\u00c4\3\2\2\2\20\u00ca\3\2\2\2\22\u00d2\3\2\2\2\24\u00dc\3\2\2\2\26\u00df"+
		"\3\2\2\2\30\u00e7\3\2\2\2\32\u00ea\3\2\2\2\34\u00ec\3\2\2\2\36\u00ee\3"+
		"\2\2\2 \u00f0\3\2\2\2\"\u00f2\3\2\2\2$\u00f4\3\2\2\2&\u00f6\3\2\2\2(\u00f8"+
		"\3\2\2\2*\u00fd\3\2\2\2,\u0104\3\2\2\2.\u010e\3\2\2\2\60\u0117\3\2\2\2"+
		"\62\u011a\3\2\2\2\64\u011f\3\2\2\2\66\u0124\3\2\2\28\u0128\3\2\2\2:\u012d"+
		"\3\2\2\2<\u0136\3\2\2\2>\u013f\3\2\2\2@\u0142\3\2\2\2BD\5\4\3\2CE\5\6"+
		"\4\2DC\3\2\2\2EF\3\2\2\2FD\3\2\2\2FG\3\2\2\2G\3\3\2\2\2HI\7\3\2\2IJ\7"+
		"\'\2\2JK\7\4\2\2KL\7\'\2\2LM\7\5\2\2MN\7\'\2\2NO\7\6\2\2OP\7\'\2\2PQ\7"+
		"\7\2\2QR\7\'\2\2RS\7\b\2\2ST\7\'\2\2TU\7\t\2\2UV\7\'\2\2VW\7\n\2\2WX\7"+
		"\'\2\2XY\7\13\2\2YZ\7\'\2\2Z[\7\f\2\2[\\\7\'\2\2\\]\7\r\2\2]^\7\'\2\2"+
		"^_\7\16\2\2_`\7\'\2\2`a\7\17\2\2ab\7\'\2\2bc\7\20\2\2cd\7\'\2\2de\7\21"+
		"\2\2ef\7\'\2\2fg\7\22\2\2gh\7\'\2\2hi\7\23\2\2ij\7\'\2\2jk\7\24\2\2kl"+
		"\7\'\2\2lm\7\25\2\2mn\7\'\2\2no\7\26\2\2op\7\'\2\2pq\7\27\2\2qr\7\'\2"+
		"\2rs\7\30\2\2st\7\'\2\2tu\7\31\2\2uv\7\'\2\2vw\7\32\2\2wx\7\'\2\2xy\7"+
		"\33\2\2yz\7\'\2\2z{\7\34\2\2{|\7\'\2\2|}\7\35\2\2}~\7\'\2\2~\177\7\36"+
		"\2\2\177\u0080\7\'\2\2\u0080\u0081\7\37\2\2\u0081\u0082\7(\2\2\u0082\5"+
		"\3\2\2\2\u0083\u0084\5\b\5\2\u0084\u0085\7\'\2\2\u0085\u0086\5\n\6\2\u0086"+
		"\u0087\7\'\2\2\u0087\u0088\5\f\7\2\u0088\u0089\7\'\2\2\u0089\u008a\5\16"+
		"\b\2\u008a\u008b\7\'\2\2\u008b\u008c\5\20\t\2\u008c\u008d\7\'\2\2\u008d"+
		"\u008e\5\22\n\2\u008e\u008f\7\'\2\2\u008f\u0090\5\24\13\2\u0090\u0091"+
		"\7\'\2\2\u0091\u0092\5\26\f\2\u0092\u0093\7\'\2\2\u0093\u0094\5\30\r\2"+
		"\u0094\u0095\7\'\2\2\u0095\u0096\5\32\16\2\u0096\u0097\7\'\2\2\u0097\u0098"+
		"\5\34\17\2\u0098\u0099\7\'\2\2\u0099\u009a\5\36\20\2\u009a\u009b\7\'\2"+
		"\2\u009b\u009c\5 \21\2\u009c\u009d\7\'\2\2\u009d\u009e\5\"\22\2\u009e"+
		"\u009f\7\'\2\2\u009f\u00a0\5$\23\2\u00a0\u00a1\7\'\2\2\u00a1\u00a2\5&"+
		"\24\2\u00a2\u00a3\7\'\2\2\u00a3\u00a4\5(\25\2\u00a4\u00a5\7\'\2\2\u00a5"+
		"\u00a6\5*\26\2\u00a6\u00a7\7\'\2\2\u00a7\u00a8\5,\27\2\u00a8\u00a9\7\'"+
		"\2\2\u00a9\u00aa\5.\30\2\u00aa\u00ab\7\'\2\2\u00ab\u00ac\5\60\31\2\u00ac"+
		"\u00ad\7\'\2\2\u00ad\u00ae\5\62\32\2\u00ae\u00af\7\'\2\2\u00af\u00b0\5"+
		"\64\33\2\u00b0\u00b1\7\'\2\2\u00b1\u00b2\5\66\34\2\u00b2\u00b3\7\'\2\2"+
		"\u00b3\u00b4\58\35\2\u00b4\u00b5\7\'\2\2\u00b5\u00b6\5:\36\2\u00b6\u00b7"+
		"\7\'\2\2\u00b7\u00b8\5<\37\2\u00b8\u00b9\7\'\2\2\u00b9\u00ba\5> \2\u00ba"+
		"\u00bb\7\'\2\2\u00bb\u00bc\5@!\2\u00bc\u00bd\7(\2\2\u00bd\7\3\2\2\2\u00be"+
		"\u00bf\7+\2\2\u00bf\t\3\2\2\2\u00c0\u00c1\7+\2\2\u00c1\13\3\2\2\2\u00c2"+
		"\u00c3\7+\2\2\u00c3\r\3\2\2\2\u00c4\u00c5\7+\2\2\u00c5\17\3\2\2\2\u00c6"+
		"\u00c8\7+\2\2\u00c7\u00c9\7 \2\2\u00c8\u00c7\3\2\2\2\u00c8\u00c9\3\2\2"+
		"\2\u00c9\u00cb\3\2\2\2\u00ca\u00c6\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00ca"+
		"\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\21\3\2\2\2\u00ce\u00d0\7+\2\2\u00cf"+
		"\u00d1\7 \2\2\u00d0\u00cf\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d3\3\2"+
		"\2\2\u00d2\u00ce\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4"+
		"\u00d5\3\2\2\2\u00d5\23\3\2\2\2\u00d6\u00d8\7+\2\2\u00d7\u00d9\7 \2\2"+
		"\u00d8\u00d7\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00db\3\2\2\2\u00da\u00d6"+
		"\3\2\2\2\u00db\u00de\3\2\2\2\u00dc\u00da\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd"+
		"\25\3\2\2\2\u00de\u00dc\3\2\2\2\u00df\u00e0\7)\2\2\u00e0\27\3\2\2\2\u00e1"+
		"\u00e3\7+\2\2\u00e2\u00e4\7 \2\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3\2\2"+
		"\2\u00e4\u00e6\3\2\2\2\u00e5\u00e1\3\2\2\2\u00e6\u00e9\3\2\2\2\u00e7\u00e5"+
		"\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\31\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea"+
		"\u00eb\7)\2\2\u00eb\33\3\2\2\2\u00ec\u00ed\7)\2\2\u00ed\35\3\2\2\2\u00ee"+
		"\u00ef\7)\2\2\u00ef\37\3\2\2\2\u00f0\u00f1\7)\2\2\u00f1!\3\2\2\2\u00f2"+
		"\u00f3\7)\2\2\u00f3#\3\2\2\2\u00f4\u00f5\7)\2\2\u00f5%\3\2\2\2\u00f6\u00f7"+
		"\7)\2\2\u00f7\'\3\2\2\2\u00f8\u00f9\7)\2\2\u00f9)\3\2\2\2\u00fa\u00fc"+
		"\7+\2\2\u00fb\u00fa\3\2\2\2\u00fc\u00ff\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd"+
		"\u00fe\3\2\2\2\u00fe+\3\2\2\2\u00ff\u00fd\3\2\2\2\u0100\u0102\7+\2\2\u0101"+
		"\u0103\7 \2\2\u0102\u0101\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0105\3\2"+
		"\2\2\u0104\u0100\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0104\3\2\2\2\u0106"+
		"\u0107\3\2\2\2\u0107-\3\2\2\2\u0108\u010a\7+\2\2\u0109\u010b\7 \2\2\u010a"+
		"\u0109\3\2\2\2\u010a\u010b\3\2\2\2\u010b\u010d\3\2\2\2\u010c\u0108\3\2"+
		"\2\2\u010d\u0110\3\2\2\2\u010e\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f"+
		"/\3\2\2\2\u0110\u010e\3\2\2\2\u0111\u0113\7+\2\2\u0112\u0114\7 \2\2\u0113"+
		"\u0112\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0116\3\2\2\2\u0115\u0111\3\2"+
		"\2\2\u0116\u0119\3\2\2\2\u0117\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118"+
		"\61\3\2\2\2\u0119\u0117\3\2\2\2\u011a\u011b\7+\2\2\u011b\63\3\2\2\2\u011c"+
		"\u011e\7+\2\2\u011d\u011c\3\2\2\2\u011e\u0121\3\2\2\2\u011f\u011d\3\2"+
		"\2\2\u011f\u0120\3\2\2\2\u0120\65\3\2\2\2\u0121\u011f\3\2\2\2\u0122\u0125"+
		"\7!\2\2\u0123\u0125\t\2\2\2\u0124\u0122\3\2\2\2\u0124\u0123\3\2\2\2\u0125"+
		"\67\3\2\2\2\u0126\u0129\7!\2\2\u0127\u0129\t\3\2\2\u0128\u0126\3\2\2\2"+
		"\u0128\u0127\3\2\2\2\u01299\3\2\2\2\u012a\u012c\7+\2\2\u012b\u012a\3\2"+
		"\2\2\u012c\u012f\3\2\2\2\u012d\u012b\3\2\2\2\u012d\u012e\3\2\2\2\u012e"+
		";\3\2\2\2\u012f\u012d\3\2\2\2\u0130\u0132\7+\2\2\u0131\u0133\7 \2\2\u0132"+
		"\u0131\3\2\2\2\u0132\u0133\3\2\2\2\u0133\u0135\3\2\2\2\u0134\u0130\3\2"+
		"\2\2\u0135\u0138\3\2\2\2\u0136\u0134\3\2\2\2\u0136\u0137\3\2\2\2\u0137"+
		"=\3\2\2\2\u0138\u0136\3\2\2\2\u0139\u013b\7+\2\2\u013a\u013c\7 \2\2\u013b"+
		"\u013a\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013e\3\2\2\2\u013d\u0139\3\2"+
		"\2\2\u013e\u0141\3\2\2\2\u013f\u013d\3\2\2\2\u013f\u0140\3\2\2\2\u0140"+
		"?\3\2\2\2\u0141\u013f\3\2\2\2\u0142\u0143\7+\2\2\u0143A\3\2\2\2\32F\u00c8"+
		"\u00cc\u00d0\u00d4\u00d8\u00dc\u00e3\u00e7\u00fd\u0102\u0106\u010a\u010e"+
		"\u0113\u0117\u011f\u0124\u0128\u012d\u0132\u0136\u013b\u013f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}