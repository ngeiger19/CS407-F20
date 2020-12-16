// Generated from Dnd.g4 by ANTLR 4.7.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DndParser}.
 */
public interface DndListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DndParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(DndParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(DndParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#hdr}.
	 * @param ctx the parse tree
	 */
	void enterHdr(DndParser.HdrContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#hdr}.
	 * @param ctx the parse tree
	 */
	void exitHdr(DndParser.HdrContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#row}.
	 * @param ctx the parse tree
	 */
	void enterRow(DndParser.RowContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#row}.
	 * @param ctx the parse tree
	 */
	void exitRow(DndParser.RowContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#name}.
	 * @param ctx the parse tree
	 */
	void enterName(DndParser.NameContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#name}.
	 * @param ctx the parse tree
	 */
	void exitName(DndParser.NameContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#race}.
	 * @param ctx the parse tree
	 */
	void enterRace(DndParser.RaceContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#race}.
	 * @param ctx the parse tree
	 */
	void exitRace(DndParser.RaceContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#background}.
	 * @param ctx the parse tree
	 */
	void enterBackground(DndParser.BackgroundContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#background}.
	 * @param ctx the parse tree
	 */
	void exitBackground(DndParser.BackgroundContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#date}.
	 * @param ctx the parse tree
	 */
	void enterDate(DndParser.DateContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#date}.
	 * @param ctx the parse tree
	 */
	void exitDate(DndParser.DateContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#fclass}.
	 * @param ctx the parse tree
	 */
	void enterFclass(DndParser.FclassContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#fclass}.
	 * @param ctx the parse tree
	 */
	void exitFclass(DndParser.FclassContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#justClass}.
	 * @param ctx the parse tree
	 */
	void enterJustClass(DndParser.JustClassContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#justClass}.
	 * @param ctx the parse tree
	 */
	void exitJustClass(DndParser.JustClassContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#subclass}.
	 * @param ctx the parse tree
	 */
	void enterSubclass(DndParser.SubclassContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#subclass}.
	 * @param ctx the parse tree
	 */
	void exitSubclass(DndParser.SubclassContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#level}.
	 * @param ctx the parse tree
	 */
	void enterLevel(DndParser.LevelContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#level}.
	 * @param ctx the parse tree
	 */
	void exitLevel(DndParser.LevelContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#feats}.
	 * @param ctx the parse tree
	 */
	void enterFeats(DndParser.FeatsContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#feats}.
	 * @param ctx the parse tree
	 */
	void exitFeats(DndParser.FeatsContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#hP}.
	 * @param ctx the parse tree
	 */
	void enterHP(DndParser.HPContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#hP}.
	 * @param ctx the parse tree
	 */
	void exitHP(DndParser.HPContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#aC}.
	 * @param ctx the parse tree
	 */
	void enterAC(DndParser.ACContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#aC}.
	 * @param ctx the parse tree
	 */
	void exitAC(DndParser.ACContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#str}.
	 * @param ctx the parse tree
	 */
	void enterStr(DndParser.StrContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#str}.
	 * @param ctx the parse tree
	 */
	void exitStr(DndParser.StrContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#dex}.
	 * @param ctx the parse tree
	 */
	void enterDex(DndParser.DexContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#dex}.
	 * @param ctx the parse tree
	 */
	void exitDex(DndParser.DexContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#con}.
	 * @param ctx the parse tree
	 */
	void enterCon(DndParser.ConContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#con}.
	 * @param ctx the parse tree
	 */
	void exitCon(DndParser.ConContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#fint}.
	 * @param ctx the parse tree
	 */
	void enterFint(DndParser.FintContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#fint}.
	 * @param ctx the parse tree
	 */
	void exitFint(DndParser.FintContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#wis}.
	 * @param ctx the parse tree
	 */
	void enterWis(DndParser.WisContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#wis}.
	 * @param ctx the parse tree
	 */
	void exitWis(DndParser.WisContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#cha}.
	 * @param ctx the parse tree
	 */
	void enterCha(DndParser.ChaContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#cha}.
	 * @param ctx the parse tree
	 */
	void exitCha(DndParser.ChaContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#alignment}.
	 * @param ctx the parse tree
	 */
	void enterAlignment(DndParser.AlignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#alignment}.
	 * @param ctx the parse tree
	 */
	void exitAlignment(DndParser.AlignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#skills}.
	 * @param ctx the parse tree
	 */
	void enterSkills(DndParser.SkillsContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#skills}.
	 * @param ctx the parse tree
	 */
	void exitSkills(DndParser.SkillsContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#weapons}.
	 * @param ctx the parse tree
	 */
	void enterWeapons(DndParser.WeaponsContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#weapons}.
	 * @param ctx the parse tree
	 */
	void exitWeapons(DndParser.WeaponsContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#spells}.
	 * @param ctx the parse tree
	 */
	void enterSpells(DndParser.SpellsContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#spells}.
	 * @param ctx the parse tree
	 */
	void exitSpells(DndParser.SpellsContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#day}.
	 * @param ctx the parse tree
	 */
	void enterDay(DndParser.DayContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#day}.
	 * @param ctx the parse tree
	 */
	void exitDay(DndParser.DayContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#processedAlignment}.
	 * @param ctx the parse tree
	 */
	void enterProcessedAlignment(DndParser.ProcessedAlignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#processedAlignment}.
	 * @param ctx the parse tree
	 */
	void exitProcessedAlignment(DndParser.ProcessedAlignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#good}.
	 * @param ctx the parse tree
	 */
	void enterGood(DndParser.GoodContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#good}.
	 * @param ctx the parse tree
	 */
	void exitGood(DndParser.GoodContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#lawful}.
	 * @param ctx the parse tree
	 */
	void enterLawful(DndParser.LawfulContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#lawful}.
	 * @param ctx the parse tree
	 */
	void exitLawful(DndParser.LawfulContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#processedRace}.
	 * @param ctx the parse tree
	 */
	void enterProcessedRace(DndParser.ProcessedRaceContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#processedRace}.
	 * @param ctx the parse tree
	 */
	void exitProcessedRace(DndParser.ProcessedRaceContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#processedSpells}.
	 * @param ctx the parse tree
	 */
	void enterProcessedSpells(DndParser.ProcessedSpellsContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#processedSpells}.
	 * @param ctx the parse tree
	 */
	void exitProcessedSpells(DndParser.ProcessedSpellsContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#processedWeapons}.
	 * @param ctx the parse tree
	 */
	void enterProcessedWeapons(DndParser.ProcessedWeaponsContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#processedWeapons}.
	 * @param ctx the parse tree
	 */
	void exitProcessedWeapons(DndParser.ProcessedWeaponsContext ctx);
	/**
	 * Enter a parse tree produced by {@link DndParser#levelGroup}.
	 * @param ctx the parse tree
	 */
	void enterLevelGroup(DndParser.LevelGroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link DndParser#levelGroup}.
	 * @param ctx the parse tree
	 */
	void exitLevelGroup(DndParser.LevelGroupContext ctx);
}