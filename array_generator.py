# This will read a text file and write each line as a new array element
# in a new JavaScript array. This is useful for compiling lists to be
# used in the main program.
#
# Needs one argument of text file location; outputs Output.txt with the
# generated array.

import sys

array_string = "var my_array = ["
filename = sys.argv[1]

file = tuple(open(filename, "r"))

for line in file:
		array_string = array_string + '"' + line.strip("\n") + '", '
		
array_string = array_string[:-2] + "];"

text_file = open("Output.txt", "w")
text_file.write(array_string)
text_file.close()
