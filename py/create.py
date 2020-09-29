import fileinput

new_file_content = ""
x = range(610)
filepath = '../json/house_data2.json'
for n in x:
    new_file_content += '                    { "id": "' + str(n) + '", "address": " ", "dialect": " ", "info": " ", "yoc": " " },\n'

writing_file = open(filepath, "w")
writing_file.write(new_file_content)
writing_file.close()