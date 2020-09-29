import fileinput

new_file_content = ""
filepath = 'Data/map.svg'
id = 0
with open(filepath) as fp:
    line = fp.readline()
    cnt = 1
    while line:
        text = format(line.strip())
        if(text.startswith('<path style="fill-rule:evenodd;fill:rgb(85.098039%,81.568627%,78.823529%')):
            text = text[:6] + 'id="' + str(id) + '" ' + text[6:] + "\n"
            id += 1
            print(text)
            line = text
        #print("Line {}: {}".format(cnt, line.strip()))
        new_file_content += line
        line = fp.readline()
        cnt += 1

fp.close()

writing_file = open(filepath, "w")
writing_file.write(new_file_content)
writing_file.close()