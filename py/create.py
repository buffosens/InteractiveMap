import fileinput

new_file_content = ""
x = range(610)
filepath = '../json/house_data2.json'
for n in x:
    new_file_content += \
    '                    { "id": "' + str(n) + '",\n\
                           "id_gd": " ",\n\
                           "street": " ",\n\
                           "street_number": " ",\n\
                           "gb_house_name": " ",\n\
                           "origin_owner": " ",\n\
                           "current_owner": " ",\n\
                           "text": " ",\n\
                           "yoc": " " },\n'

writing_file = open(filepath, "w")
writing_file.write(new_file_content)
writing_file.close()