// Fall 2017
const EvanN = new Member('Evan Neely', 'Conductor', 1);
const KarinaC = new Member('Karina Chu', 'Flute', 2);
const DannyZ = new Member('Danny Zhu', 'Flute', 2);
const IsabelB = new Member('Isabel Basow', 'Oboe', 2);
const IanH = new Member('Ian Holst', 'Oboe', 2);
const DavidN = new Member('David Neiman', 'Oboe', 2);
const SarahB = new Member('Sarah Bender', 'Clarinet', 3);
const AmandaM = new Member('Amanda Monteavaro', 'Clarinet', 3);
const SarahP = new Member('Sarah Penfield', 'Clarinet', 3);
const TeddyW = new Member('Teddy Warner', 'Clarinet', 3);
const DerekY = new Member('Derek Yan', 'Bassoon', 3);
const SimoneS = new Member('Simone Stein', 'Tenor Saxaphone', 3);
const CaseyR = new Member('Casey Rodriguez', 'Tuba', 4);
const GabeW = new Member('Gabe Whitney', 'Tuba', 4);
const MichaelS = new Member('Michael Spoerl', 'Trombone', 4);
const DylanH = new Member('Dylan Hyun', 'Trombone', 4);
const DylanR = new Member('Dylan Roof', 'Trombone', 4);
const BrandynA = new Member('Brandyn Amado', 'Trombone', 4);
const ChrisC = new Member('Chris Cortez', 'Trombone', 4);
const BeckyJ = new Member('Becky Jesurum', 'Baritone', 4);
const KadeS = new Member('Kade Stewart', 'Baritone', 4);
const JeffKFrench = new Member('Jeff Kang', 'French Horn', 4);
const JordanS = new Member('Jordan Stapinski', 'Trumpet', 4);
const MaxK = new Member('Max Kornyev', 'Trumpet', 4);
const MadisonS = new Member('Madison Stiefield', 'Trumpet', 4);
const JonathanC = new Member('Jonathan Calvello', 'Trumpet', 4);
const BrandonJ = new Member('Brandon Jin', 'Percussion', 5);
const JacquelineL = new Member('Jacqueline Lewis', 'Percussion', 5);
const ElyceM = new Member('Elyce Milligan', 'Percussion', 5);
const JamesS = new Member('James Stumpf', 'Percussion', 5);
const JettV = new Member('Jett Vaultz', 'Percussion', 5);

const Fall17 = new Roster('Fall 2017', [EvanN,
DavidN,IanH,IsabelB,DannyZ,KarinaC,
SarahB,AmandaM,SarahP,TeddyW,DerekY,SimoneS,
JonathanC,MadisonS,MaxK,JordanS,JeffKFrench,KadeS,BeckyJ,ChrisC,BrandynA,DylanR,DylanH,MichaelS,GabeW,CaseyR,
BrandonJ,JacquelineL,ElyceM,JamesS,JettV], 'f17');

createSeating(Fall17);

// Spring 2018
const DallasL = new Member('Dallas Long', 'Conductor', 1);
const AnjaliB = new Member('Anjali Balamurgan', 'Clarinet', 2);
const RuiQ = new Member('Rui Qui Chen', 'Clarinet', 2);
const ZachK = new Member('Zach Kowalewski', 'Alto Saxaphone', 3);
const NicholasS = new Member('Nicholas Scherl', 'Alto Saxaphone', 3);
const RachelM = new Member('Rachel Motz', 'French Horn', 3);
const ScottA = new Member('Scott Alexander', 'Trombone', 4);
const EvanK = new Member('Evan Kareet', 'Baritone', 4);
const EvanS = new Member('Evan Schindewolf', 'Baritone', 4);
const JeffKTru = new Member('Jeff Kang', 'Trumpet', 4);
const YurongD = new Member('Yurong Diao', 'Percussion', 5);

const Spring18 = new Roster('Spring 2018', [DallasL,
AnjaliB,RuiQ,SarahB,DavidN,IsabelB,KarinaC,
AmandaM,SarahP,ZachK,NicholasS,RachelM,
MichaelS,DylanR,ScottA,DylanH,ChrisC,BeckyJ,EvanS,EvanK,CaseyR,JeffKTru,MaxK,MadisonS,JonathanC,
YurongD,BrandonJ,JacquelineL,JamesS,JettV], 's18');

createSeating(Spring18);

// Fall 2018
const DallasLF18 = new Member('Dallas Long', 'Conductor', 1);
const AdejuwonFF18 = new Member('Adejuwon Fasanya', 'Flute', 2);
const AmyHF18 = new Member('Amy Howard', 'Flute', 2);
const KateKF18 = new Member('Kate Krakopolsky', 'Flute/piccolo', 2);
const DavidNF18 = new Member('David Neiman', 'Oboe', 2);
const AnjaliBF18 = new Member('Anjali Balamurugan', 'Clarinet', 3);
const RichieCF18 = new Member('Richie Chen', 'Clarinet', 3);
const AmandaMF18 = new Member('Amanda Monteavaro', 'Clarinet', 3);
const SarahPF18 = new Member('Sarah Penfield', 'Clarinet', 3);
const NancyZF18 = new Member('Nancy Zhang', 'Clarinet', 3);
const SollySF18 = new Member('Solly Solomon', 'Bass clarinet', 3);
const ZacharyGF18 = new Member('Zachary Goldstein', 'Alto sax', 3);
const ZachKF18 = new Member('Zach Kowalewski', 'Alto sax', 3);
const ShawnLF18 = new Member('Shawn Liu', 'Alto sax', 3);
const TeddyWF18 = new Member('Teddy Warner', 'Bari sax', 3);
const MaxKF18 = new Member('Max Kornyev', 'Trumpet', 4);
const KateSF18 = new Member('Kate Shih', 'Trumpet', 4);
const MadisonSF18 = new Member('Madison Stiefbold', 'Trumpet', 4);
const BeckyJF18 = new Member('Becky Jesurum', 'Euphonium', 4);
const ScottAF18 = new Member('Scott Alexander', 'Trombone', 4);
const ChrisCF18 = new Member('Chris Cortez', 'Trombone', 4);
const DylanHF18 = new Member('Dylan Hyun', 'Trombone', 4);
const DylanRF18 = new Member('Dylan Roof', 'Trombone', 4);
const RachelMF18 = new Member('Rachel Motz', 'French horn', 4);
const YuqiZF18 = new Member('Yuqi Zhou', 'French horn', 4);
const NoahLF18 = new Member('Noah Lauziere', 'Tuba', 4);
const JacquelineLF18 = new Member('Jacqueline Lewis', 'Percussion', 5);
const JamesSF18 = new Member('James Stumpf', 'Percussion', 5);
const JettVF18 = new Member('Jett Vaultz', 'Percussion', 5);

const Fall18 = new Roster('Fall 2018', [DallasLF18, AdejuwonFF18, AmyHF18, KateKF18, DavidNF18, AnjaliBF18, RichieCF18, AmandaMF18, SarahPF18, NancyZF18, SollySF18, ZacharyGF18, ZachKF18, ShawnLF18, TeddyWF18, MaxKF18, KateSF18, MadisonSF18, BeckyJF18, ScottAF18, ChrisCF18, DylanHF18, DylanRF18, RachelMF18, YuqiZF18, NoahLF18, JacquelineLF18, JamesSF18, JettVF18], 'f18');

createSeating(Fall18);

// Spring 2019
const KarinaCS19 = new Member('Karina Chiu', 'Conductor', 1);
const AdejuwonFS19 = new Member('Adejuwon Fasanya', 'Flute', 2);
const KateKS19 = new Member('Kate Krakopolsky', 'Flute/piccolo', 2);
const IsabelBS19 = new Member('Isabel Basow', 'Oboe', 2);
const DavidNS19 = new Member('David Neiman', 'Oboe', 2);
const AnjaliBS19 = new Member('Anjali Balamurugan', 'Clarinet', 3);
const AmandaMS19 = new Member('Amanda Monteavaro', 'Clarinet', 3);
const TeddyWS19 = new Member('Teddy Warner', 'Clarinet', 3);
const NancyZS19 = new Member('Nancy Zhang', 'Clarinet', 3);
const SollySS19 = new Member('Solly Solomon', 'Bass clarinet', 3);
const TommyBS19 = new Member('Tommy Britt', 'Alto sax', 3);
const ZachKS19 = new Member('Zach Kowalewski', 'Alto sax', 3);
const ShawnLS19 = new Member('Shawn Liu', 'Alto sax', 3);
const KateSS19 = new Member('Kate Shih', 'Trumpet', 4);
const MadisonSS19 = new Member('Madison Stiefbold', 'Trumpet', 4);
const BeckyJS19 = new Member('Becky Jesurum', 'Euphonium', 4);
const ScottAS19 = new Member('Scott Alexander', 'Trombone', 4);
const ChrisCS19 = new Member('Chris Cortez', 'Trombone', 4);
const DylanHS19 = new Member('Dylan Hyun', 'Trombone', 4);
const DylanRS19 = new Member('Dylan Roof', 'Trombone', 4);
const RachelMS19 = new Member('Rachel Motz', 'French horn', 4);
const JosephPS19 = new Member('Joseph Paetz', 'French horn', 4);
const YuqiZS19 = new Member('Yuqi Zhou', 'French horn', 4);
const JulianneIS19 = new Member('Julianne Igbokwe', 'Percussion', 5);
const JacquelineLS19 = new Member('Jacqueline Lewis', 'Percussion', 5);
const JamesSS19 = new Member('James Stumpf', 'Percussion', 5);

const Spring19 = new Roster('Spring 2019', [KarinaCS19, AdejuwonFS19, KateKS19, IsabelBS19, DavidNS19, AnjaliBS19, AmandaMS19, TeddyWS19, NancyZS19, SollySS19, TommyBS19, ZachKS19, ShawnLS19, KateSS19, MadisonSS19, BeckyJS19, ScottAS19, ChrisCS19, DylanHS19, DylanRS19, RachelMS19, JosephPS19, YuqiZS19, JulianneIS19, JacquelineLS19, JamesSS19], 's19');

createSeating(Spring19);

// Fall 2019
const CjC = new Member('CJ Corbett', 'Conductor', 1)
const KarinaCF19 = new Member('Karina Chiu', 'Flute', 2);
const KaitlynnCF19 = new Member('Kaitlynn Cooper', 'Flute', 2);
const KateKF19 = new Member('Kate Krakopolsky', 'Flute/piccolo', 2);
const IsabelBF19 = new Member('Isabel Basow', 'Oboe', 2);
const TeddyWF19 = new Member('Teddy Warner', 'Bassoon', 2);
const AnjaliBF19 = new Member('Anjali Balamurugan', 'Clarinet', 3);
const YifeiLF19 = new Member('Yifei Li', 'Clarinet', 3);
const JoanSF19 = new Member('Joan Song', 'Clarinet', 3);
const JessicaWF19 = new Member('Jessica Wang', 'Clarinet', 3);
const AnnMF19 = new Member('Ann Mulgrew', 'Bass clarinet', 3);
const ZachKF19 = new Member('Zach Kowalewski', 'Alto sax', 3);
const CharlotteLF19 = new Member('Charlotte Lee', 'Alto sax', 3);
const ShawnLF19 = new Member('Shawn Liu', 'Alto sax', 3);
const MatthewWF19 = new Member('Matthew Weidner', 'Tenor sax', 3);
const MikaAF19 = new Member('Mika Ansley', 'Trumpet', 4);
const KateSF19 = new Member('Kate Shih', 'Trumpet', 4);
const NazaninAF19 = new Member('Nazanin Azimi', 'French horn', 4);
const AmandaCF19 = new Member('Amanda Chisholm', 'French horn', 4);
const RachelMF19 = new Member('Rachel Motz', 'French horn', 4);
const YuqiZF19 = new Member('Yuqi Zhou', 'French horn', 4);
const AaronGF19 = new Member('Aaron Garrison', 'Tuba', 4);
const KristinDF19 = new Member('Kristin Daniel', 'Percussion', 5);
const DivyaRF19 = new Member('Divya Rao', 'Percussion', 5);
const AnnabelSF19 = new Member('Annabel Su', 'Percussion', 5);

const Fall19 = new Roster('Fall 2019', [CjC, KarinaCF19, KaitlynnCF19, KateKF19, IsabelBF19, TeddyWF19, AnjaliBF19, YifeiLF19, JoanSF19, JessicaWF19, AnnMF19, ZachKF19, CharlotteLF19, ShawnLF19, MatthewWF19, MikaAF19, KateSF19, NazaninAF19, AmandaCF19, RachelMF19, YuqiZF19, AaronGF19, KristinDF19, DivyaRF19, AnnabelSF19], 'f19');

createSeating(Fall19);

// Spring 2020
const AnjaliBS20 = new Member('Anjali Balamurugan', 'Clarinet', 2);
const ShelleyKS20 = new Member('Shelley Kim', 'Clarinet', 2);
const YifeiLS20 = new Member('Yifei Li', 'Clarinet', 2);
const SarahPS20 = new Member('Sarah Penfield', 'Clarinet', 3);
const JoanSS20 = new Member('Joan Song', 'Clarinet', 3);
const AnnMS20 = new Member('Ann Mulgrew', 'Bass clarinet', 3);
const CharlotteLS20 = new Member('Charlotte Lee', 'Alto sax', 3);
const MatthewWS20 = new Member('Matthew Weidner', 'Tenor sax', 4);
const AmandaCS20 = new Member('Amanda Chisholm', 'French horn', 4);
const RachelMS20 = new Member('Rachel Motz', 'French horn', 4);
const KendallSS20 = new Member('Kendall Scarborough', 'French horn', 4);
const YuqiZS20 = new Member('Yuqi Zhou', 'French horn', 4);
const AaronGS20 = new Member('Aaron Garrison', 'Tuba', 4);

const Spring20 = new Roster('Spring 2020', [CjC, AnjaliBS20, ShelleyKS20, YifeiLS20, SarahPS20, JoanSS20, AnnMS20, CharlotteLS20, MatthewWS20, AmandaCS20, RachelMS20, KendallSS20, YuqiZS20, AaronGS20], 's20');

createSeating(Spring20);

// Fall 2020
const StacyC = new Member('Stacy Cho', 'Flute', 2);
const JordanL = new Member('Jordan Li', 'Alto Sax', 2);
const TeddyW2 = new Member('Teddy Warner', 'Clarinet', 2);
const AaronG = new Member('Aaron Garrison', 'Trumpet', 3);
const TeresaM = new Member('Teresa Myrthil', 'Trumpet', 3);
const AmandaC = new Member('Amanda Chisholm', 'French horn', 3);
const KendallS = new Member('Kendall Scarborough', 'French Horn', 3);
const YuqiZ = new Member('Yuqi Zhou', 'French Horn', 3);
const PaulN = new Member('Paul Nadan', 'Trombone', 4);
const KristinD = new Member('Kristin Daniel', 'Percussion', 4);
const StephenT = new Member('Stephen Tao', 'Percussion', 4);


//Class allows for rows to be empty
const Fall20 = new Roster('Fall 2020', [
StacyC,AnjaliB,JordanL,DavidN,TeddyW2,
AaronG,RachelM,TeresaM,AmandaC,PaulN,KendallS,YuqiZ,
KristinD,StephenT], 'f20');

createSeating(Fall20);

const CharlotteL = new Member('Charlotte Lee', 'Alto sax', 2);
const AmandaL = new Member('Amanda Li', 'Percussion', 4);


//Class allows for rows to be empty
const Spring21 = new Roster('Spring 2021', [
    StacyC,CharlotteL,DavidN,TeddyW2,
    AaronG,RachelM,TeresaM,AmandaC,PaulN,KendallS,YuqiZ,
    AmandaL,StephenT,], 's21');
    
createSeating(Spring21);