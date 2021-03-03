def repeatNumber(numberToFill, numOfEntries, input):
    fileObj = open(input, 'a')
    for x in range(numOfEntries):
        print(numberToFill)
        fileObj.write(str(numberToFill) + ',\n')

if __name__ == '__main__':
    repeatNumber(0, 1739, '/Users/aditya/Programming/GazeDetect-Website/python/output/baseline.csv')