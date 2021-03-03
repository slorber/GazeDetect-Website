import csv

timeList = []
timeOriginal = []
accelListOriginal = []
accelListYours = []
accelListAutism = []

def readData(filename):
    with open(filename, newline='') as csvfile:
        data = csv.reader(csvfile, delimiter=',')
        previousVarOG = 0
        previousVarYours = 0
        previousVarAutism = 0
        previousVarTime = 0
        for row in data:
            deltaTime = (float(row[1]) - float(previousVarTime))
            timeList.append(deltaTime)
            previousVarTime  = row[1]
            timeOriginal.append(row[1])
            accelListOriginal.append((float(row[0]) - float(previousVarOG))/deltaTime)
            previousVarOG = row[0]
            accelListYours.append((float(row[2]) - float(previousVarYours))/deltaTime)
            previousVarYours = row[2]
            accelListAutism.append((float(row[3]) - float(previousVarAutism))/deltaTime)
            previousVarAutism = row[3]

def writeData():
    fileObj = open('/Users/aditya/Programming/GazeDetect-Website/python/output/accel.csv', 'a')
    for x in range(len(timeOriginal)):
        line = str(timeOriginal[x]) + "," + str(accelListOriginal[x]) + "," + str(accelListYours[x]) + "," + str(accelListAutism[x]) + "\n"
        fileObj.write(line)

        

if __name__ == '__main__':
    readData('/Users/aditya/Programming/GazeDetect-Website/python/data/velData.csv')
    writeData()