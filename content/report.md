Report page
=========================

Kmom01
=========================

**Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.**

Express är själva backend webbservern som hanterar allting så som routes och servera Pug filerna. Pug är typ en template bara för att hantera och generera HTML med hjälp av javascript också i bakgrunden. Har inte hittat någon nackdel än med någon av teknikerna. Tycker att det blir lite jobbigt med att Pug baserar sig på att använda indentations för att lägga saker inom vissa taggar, men är inte värre än python.

**Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?**

Jag har routes i egna mappar och pug filerna i separata mappar för att få en bra struktur. Annars så ligger alla filerna i views mappen. Försökte fixa i ”res.render” att man pekar om till en sub-mapp i ”views” men det gillade den inte. Så fick lägga till den mappen i ”views” lådan. Nu letar den efter Pug filer i de två mapparna för att rendera.

**Använde du någon form av scaffolding som Express erbjuder?**

Använde ”express-generator” paketet för att få fram en hyffsad struktur. Tyckte den var enklare att hantera än det vi gjorde i övningsuppgiften. Kopierade först från mos exempel kod på github, men läste senare att man kunde använda paketet.

**Jobbar du med Markdown för innehållet, eller annat liknande?**

Jag använder markdown för all text jag har på sidan. Tycker markdown är smidigt för att hantera stora mängder med text. Sen är det smidigt att använda markdown för att man har lärt sig det i flera kurser.


Kmom02
=========================

**Har du jobbat med Docker eller andra virtualiseringstekniker innan?**

Jag har inte jobbat med Docker innan, eller ja förutom att testa en image lite snabbt. Annars har jag inte gjort en egen compose eller dylikt.
Har använt kvm på jobbet förut, det är bra att kunna utnyttja en dator på flera sätt än att bara ha ett operativsystem med en funktion som att hosta en webbsida. VirtualBox är också ett sätt på att virtualisera hemma, dock mycket enklare.


**Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?**

Att man kan få en ren kopia på sitt repo utan en massa skräpfiler som kanske tolkas annorlunda utav testerna. Helt enkelt att det blir som första gången man ska installera eller konfigurera om varje gång. Om man har en server ståendes så kan den köra tester hela tiden.

**Gick allt smidigt eller stötte du på problem?**

Det gick smidigt, fick läsa på lite extra utöver texten och hänvisa mig till Dockers Node sida. Annars är det enkelt att dra ner andras images och köra det man vill. Då kanske man inte lär sig lika mycket.

**Skapade du din egen image, berätta om den?**

Nej jag gjorde ingen egen image, men det verkar vara rätt så lätt. Man kan köra egna kommandon som man definierar i en Dockerfile. Man kanske kan dra ner kod direkt från Github? Det hade varit kul att leverera redovisningen via en Docker image. Då kan man säkerställa att det verkligen fungerar ”överallt”.



Kmom03
=========================

Kmom04
=========================

Kmom05
=========================

Kmom06
=========================

Kmom10
=========================
