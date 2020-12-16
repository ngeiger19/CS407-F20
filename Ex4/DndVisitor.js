// Generated from Dnd.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DndParser.

function DndVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DndVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DndVisitor.prototype.constructor = DndVisitor;

// Visit a parse tree produced by DndParser#file.
DndVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#hdr.
DndVisitor.prototype.visitHdr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#row.
DndVisitor.prototype.visitRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#name.
DndVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#race.
DndVisitor.prototype.visitRace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#background.
DndVisitor.prototype.visitBackground = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#date.
DndVisitor.prototype.visitDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#fclass.
DndVisitor.prototype.visitFclass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#justClass.
DndVisitor.prototype.visitJustClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#subclass.
DndVisitor.prototype.visitSubclass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#level.
DndVisitor.prototype.visitLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#feats.
DndVisitor.prototype.visitFeats = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#hP.
DndVisitor.prototype.visitHP = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#aC.
DndVisitor.prototype.visitAC = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#str.
DndVisitor.prototype.visitStr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#dex.
DndVisitor.prototype.visitDex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#con.
DndVisitor.prototype.visitCon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#fint.
DndVisitor.prototype.visitFint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#wis.
DndVisitor.prototype.visitWis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#cha.
DndVisitor.prototype.visitCha = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#alignment.
DndVisitor.prototype.visitAlignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#skills.
DndVisitor.prototype.visitSkills = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#weapons.
DndVisitor.prototype.visitWeapons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#spells.
DndVisitor.prototype.visitSpells = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#day.
DndVisitor.prototype.visitDay = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#processedAlignment.
DndVisitor.prototype.visitProcessedAlignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#good.
DndVisitor.prototype.visitGood = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#lawful.
DndVisitor.prototype.visitLawful = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#processedRace.
DndVisitor.prototype.visitProcessedRace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#processedSpells.
DndVisitor.prototype.visitProcessedSpells = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#processedWeapons.
DndVisitor.prototype.visitProcessedWeapons = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DndParser#levelGroup.
DndVisitor.prototype.visitLevelGroup = function(ctx) {
  return this.visitChildren(ctx);
};



exports.DndVisitor = DndVisitor;