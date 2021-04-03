import csv
with open('python-practice/life-expectancy.csv') as csv_file:
    reader=csv.reader(csv_file, delimiter=',')
    for row in reader:
        print(', '.join(row))