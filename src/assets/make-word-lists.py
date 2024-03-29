import re

files = ["four", "five", "six", "seven"]

letterLists = open('word-lists.txt','w')

for file in files:
    letterFile = open(file + "-letter-words.txt")
    letterList = re.sub('\d', ' ', letterFile.read()).split()
    letterFile.close()

    letterLists.write(file + 'Letters: ' + str(letterList).lower()+'\n\n')
    
letterLists.close()