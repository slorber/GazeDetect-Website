import csv

errorList = []

def readData(filename):
    with open(filename, newline='') as csvfile:
        data = csv.reader(csvfile, delimiter=',')
        previousVarTime = 0
        previousVel = 0
        for row in data:
            deltaTime = (float(row[0]) - float(previousVarTime))
            previousVarTime = row[0]
            displacement = ((float(row[3]) - float(previousVel))*deltaTime)
            previousVel = row[3]
            errorList.append(abs(displacement))

def writeData():
    fileObj = open('/Users/aditya/Programming/GazeDetect-Website/python/output/errorAutism.csv', 'a')
    for x in errorList:
        line = str(x) + ",\n"
        print(line)
        fileObj.write(line)

if __name__ == '__main__':
    readData('/Users/aditya/Programming/GazeDetect-Website/python/output/accel.csv')
    writeData()