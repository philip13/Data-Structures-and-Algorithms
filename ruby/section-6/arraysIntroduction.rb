strings = [ 'a', 'b', 'c', 'd' ]
puts "new array of strings #{strings.inspect}"

# Big O(1) Time complexity
strings.push('e') # == strings << 'e'
#  << accepts a single argument, and pushes it onto the end of the array.
# .push, on the other hand, accepts one or more arguments, pushing them all onto the end.
# The fact that << only accepts a single object is why you're seeing the error.
puts "strings.push('e') #{strings.inspect}"

strings.pop() # Big O(1) Time complexity
puts "strings.pop() #{strings}"
# => ["a", "b", "c", "d"]

# unshift will add a new item to the beginning of an array.
strings.unshift('x') # Big O(n) Time Complexity
puts "after string unshift('x') #{strings.inspect}"


# //splice
# strings.splice(2, 0, 'alien');
# console.log(strings)
start = 2
len = 0 
ret = strings[start, len]
strings[start, len] = 'alien'
puts "splice with ruby = #{strings.inspect}"
# [ 'a', 'b', 'alien', 'c', 'd' ]

=begin
class Array
  def splice(start, len, *replace)
    ret = self[start, len]
    self[start, len] = replace
    ret
  end
end
=end