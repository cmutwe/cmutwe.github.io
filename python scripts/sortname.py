# format: "[Fall/Spring] 20XX" (Ex. "Fall 2020")
year = "Spring 2020"
# participants: list of andrew IDs separated by enters
participants = '''joansong
amulgrew
aarongar
rmotz
achishol
spenfiel
yuqizhou
maweidne
yifeili3
christopher.y.shan@gmail.com 
celee
kscarbor
shelleyk
yifeili3
abalamur'''

# instruments: list of instruments the people play separated by enters
instruments = '''Clarinet
Bass clarinet 
Tuba
French Horn
French Horn
Clarinet 
French Horn
tenor sax
clarinet
Percussion 
Alto Sax
French Horn
Clarinet
Clarinet
Clarinet'''

# fullRoster: list of the full roster of  attendees
# separate each row per person
# each row consists of: andrewID[tab]First[tab]Last
fullRoster = '''joansong	Joan	Song
amulgrew	Ann	Mulgrew
aarongar	Aaron	Garrison
rmotz	Rachel	Motz
achishol	Amanda	Chisholm
spenfiel	Sarah	Penfield
yuqizhou	Yuqi	Zhou
maweidne	Matthew	Weidner
yifeili3	Yifei	Li
christopher.y.shan@gmail.com 	Christopher 	Shan
celee	Charlotte	Lee
kscarbor	Kendall	Scarborough
shelleyk	Shelley	Kim
yifeili3	Yifei	Li
abalamur	Anjali	Balamurugan'''

instrumentList = [
    'Conductor',
    'Flute',
    'Flute/piccolo',
    'Piccolo',
    'Oboe',
    'Bassoon',
    'Clarinet',
    'Bass clarinet',
    'Alto sax',
    'Tenor sax',
    'Bari sax',
    'Cornet',
    'Trumpet',
    'Euphonium',
    'French Horn',
    'Trombone',
    'French horn',
    'Tuba',
    'Percussion',]
    
if len(participants.splitlines()) != len(instruments.splitlines()):
    raise ValueError("Lengths of instruments and participants are mismatched.")

roster = dict()
# Turn the roster into a dictionary with andrewID as the key and the value
# being [[First, Last], Instrument]
# interate through the roster and the instruments
for i in range(len(fullRoster.splitlines())):
    row = fullRoster.splitlines()[i]
    name = row.split("\t")
    # make them all capitalized and stripped
    for i in range(len(name)):
        name[i] = name[i].lower().capitalize().strip()
    andrewID = name.pop(0).lower().strip()
    roster[andrewID] = name

newParticipants = []

# convert participants into list
for i in range(len(participants.splitlines())):
    andrewID = participants.splitlines()[i]
    instr = instruments.splitlines()[i].lower().capitalize().strip()
    
    #catch a few misspellings
    if instr == "Horn": instr = "French horn"
    elif instr == "Bb clarinet": instr = "Clarinet"
    elif instr == "Alto": instr = "Alto sax"
    andrewID = andrewID.lower().strip()
    # catch emails
    if "@" in andrewID: andrewID = andrewID.split("@")[0]

    # catch exceptions
    if andrewID not in roster.keys(): continue

    name = roster[andrewID]
    newParticipants.append([name,instr,0])

newParticipants.sort(key = lambda entry: (instrumentList.index(entry[1]), entry[0][1]) )
    
print(f"Participants List: {newParticipants}")

finalText = ""
varList = []
yearShort = year[0] + year[-2:]
yearMedium = year.split(" ")[0] + year[-2:]
# get names as text
for listEntry in newParticipants:
    # get the variable name
    varName = listEntry[0][0] + listEntry[0][1][0] + yearShort
    varList.append(varName)
    finalText += f"const {varName} = new Member('{' '.join(listEntry[0])}', '{listEntry[1]}', 0);\n"
# new Member('Dallas Long', 'Conductor', 1);

print(f"\n\n Final Code for {year}:\n{finalText}")
print(f"const {yearMedium} = new Roster('{year}', [{', '.join(varList)}], '{yearShort.lower()}');\n\ncreateSeating({yearMedium})")
