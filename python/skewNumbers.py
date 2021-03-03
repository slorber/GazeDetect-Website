import csv
import random

xList = []

def skewNumbers():    
    with open('/Users/aditya/Desktop/file.csv', newline='') as csvfile:
        data = csv.reader(csvfile, delimiter=',')
        for row in data:
           xList.append(randomNumberGen(row[0]))

def randomNumberGen(x):
    sign = random.random()
    if (sign > 0.8):
        return (float(x) + (random.random()*2.5))
    if (sign < 0.8):
        return (float(x) - (random.random()*2.5))

skewNumbers()

fileObj = open('/Users/aditya/Desktop/file1.csv', 'a')
for x in xList:
    thing = str(x) + "\n"
    fileObj.write(thing)
fileObj.close()