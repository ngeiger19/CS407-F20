const DndVisitor = require('./DndVisitor').DndVisitor;

class OurVisitor extends DndVisitor {
    constructor() {
        super();
    }

    visitFile(ctx) {
        let rArray = ctx.row();
        let out = [];
        for (let i = 0; i < rArray.length; i++) {
            out.push(this.visitRow(rArray[i]));
        }

        return '[\r\n' + out.join(',\n') + '\r\n]';
    }

    // Don't think I need this
    visitHdr(ctx) {
        
    }

    visitRow(ctx) {
        const name = this.visitName(ctx.name());
        const race = this.visitRace(ctx.race());
        const background = this.visitBackground(ctx.background());
        const date = this.visitDate(ctx.date());
        const fclass = this.visitFclass(ctx.fclass());
        const justClass = this.visitJustClass(ctx.justClass());
        const subclass = this.visitSubclass(ctx.subclass());
        const level = this.visitLevel(ctx.level());
        const feats = this.visitFeats(ctx.feats());
        const hP = this.visitHP(ctx.hP());
        const aC = this.visitAC(ctx.aC());
        const str = this.visitStr(ctx.str());
        const dex = this.visitDex(ctx.dex());
        const con = this.visitCon(ctx.con());
        const fint = this.visitFint(ctx.fint());
        const wis = this.visitWis(ctx.wis());
        const cha = this.visitCha(ctx.cha());
        const alignment = this.visitAlignment(ctx.alignment());
        const skills = this.visitSkills(ctx.skills());
        const weapons = this.visitWeapons(ctx.weapons());
        const spells = this.visitSpells(ctx.spells());
        const day = this.visitDay(ctx.day());
        const processedAlignment = this.visitProcessedAlignment(ctx.processedAlignment());
        const good = this.visitGood(ctx.good());
        const lawful = this.visitLawful(ctx.lawful());
        const processedRace = this.visitProcessedRace(ctx.processedRace());
        const processedSpells = this.visitProcessedSpells(ctx.processedSpells());
        const processedWeapons = this.visitProcessedWeapons(ctx.processedWeapons());
        const levelGroup = this.visitLevelGroup(ctx.levelGroup());

        return '\t{\r\n' + name + race + background + date + fclass +
                justClass + subclass + level + feats + hP + aC + str + 
                dex + con + fint + wis + cha + alignment + skills +
                weapons + spells + day + processedAlignment + good + 
                lawful + processedRace + processedSpells + processedWeapons +
                levelGroup + '\t}';
    }

    visitName(ctx) {
        return `\t\t"name": "${ctx.getText()}",\r\n`;
    }

    visitRace(ctx) {
        return `\t\t"race": "${ctx.getText()}",\r\n`;
    }

    visitBackground(ctx) {
        return `\t\t"background": "${ctx.getText()}",\r\n`;
    }

    visitDate(ctx) {
        return `\t\t"date": "${ctx.getText()}",\r\n`;
    }

    visitFclass(ctx) {
        return `\t\t"fclass": "${ctx.getText()}",\r\n`;
    }

    visitJustClass(ctx) {
        return `\t\t"justClass": "${ctx.getText()}",\r\n`;
    }
    
    visitSubclass(ctx) {
        return `\t\t"subClass": "${ctx.getText()}",\r\n`;
    }

    visitLevel(ctx) {
        return `\t\t"level": "${ctx.getText()}",\r\n`;
    }

    visitFeats(ctx) {
        return `\t\t"feats": "${ctx.getText()}",\r\n`;
    }

    visitHP(ctx) {
        return `\t\t"hP": "${ctx.getText()}",\r\n`;
    }

    visitAC(ctx) {
        return `\t\t"aC": "${ctx.getText()}",\r\n`;
    }

    visitStr(ctx) {
        return `\t\t"str": "${ctx.getText()}",\r\n`;
    }

    visitDex(ctx) {
        return `\t\t"dex": "${ctx.getText()}",\r\n`;
    }

    visitCon(ctx) {
        return `\t\t"con": "${ctx.getText()}",\r\n`;
    }

    visitFint(ctx) {
        return `\t\t"fint": "${ctx.getText()}",\r\n`;
    }

    visitWis(ctx) {
        return `\t\t"wis": "${ctx.getText()}",\r\n`;
    }

    visitCha(ctx) {
        return `\t\t"cha": "${ctx.getText()}",\r\n`;
    }

    visitAlignment(ctx) {
        return `\t\t"alignment": "${ctx.getText()}",\r\n`;
    }

    visitSkills(ctx) {
        return `\t\t"skills": "${ctx.getText()}",\r\n`;
    }

    visitWeapons(ctx) {
        return `\t\t"weapons": "${ctx.getText()}",\r\n`;
    }

    visitSpells(ctx) {
        return `\t\t"spells": "${ctx.getText()}",\r\n`;
    }

    visitDay(ctx) {
        return `\t\t"day": "${ctx.getText()}",\r\n`;
    }

    visitProcessedAlignment(ctx) {
        return `\t\t"processedAlignment": "${ctx.getText()}",\r\n`;
    }

    visitGood(ctx) {
        return `\t\t"good": "${ctx.getText()}",\r\n`;
    }

    visitLawful(ctx) {
        return `\t\t"lawful": "${ctx.getText()}",\r\n`;
    }

    visitProcessedRace(ctx) {
        return `\t\t"processedRace": "${ctx.getText()}",\r\n`;
    }

    visitProcessedSpells(ctx) {
        return `\t\t"processedSpells": "${ctx.getText()}",\r\n`;
    }

    visitProcessedWeapons(ctx) {
        return `\t\t"processedWeapons": "${ctx.getText()}",\r\n`;
    }

    visitLevelGroup(ctx) {
        return `\t\t"levelGroup": "${ctx.getText()}"\r\n`;
    }
}

exports.OurVisitor = OurVisitor;