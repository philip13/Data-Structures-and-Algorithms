# Collection numbers find the mach in pair that sum 
# [1, 2, 3, 9 ] sum = 8 ; return false
# [1, ,2, 4, 4 ] sum = 8: return true
# assum tat they are ordered
# all integers and can be negatives

# Given one array, find two numbers that adding betwing are the result 

# 2 inputs 
# array of integers, integer num
# output: boolean

# Naive
# IF the array is sorted
def has_pair_with_sum_sorted( arr, sum)
  left = 0
  rigth = (arr.length-1)

  while(left < rigth)
    left_num = arr[left]
    rigth_num = arr[rigth]
    my_sum = left_num + rigth_num
    puts "#{left_num} + #{rigth_num} = #{my_sum}"

    if my_sum == sum
      return true
      # break
    elsif my_sum < sum # 1+4 = 5
      left += 1
    elsif my_sum > sum
      rigth -= 1
    end
  end
  return false
end

# has_pair_with_sum_sorted([1,2,3,4,6,7], 9)
# has_pair_with_sum_sorted([1, 2, 4, 4 ], 8)
# puts has_pair_with_sum_sorted([1, 2, 3, 9 ], 8 )

# Naive
# IF is not sorted What can I do?
def has_pair_with_sum( arr, sum)
  for left in 0..(arr.length-1)
    for rigth in (left+1)..(arr.length-1)
      if ((arr[left]+arr[rigth]) == sum)
        return true
      end
    end
  end
  return false
end

# Big O(n^2) Time Complexity
# Big O(1) Space Complexity

# my_arr = [6,4,3,2,1,7] # 9
# puts "has_pair_with_sum #{ has_pair_with_sum(my_arr, 9) }"
# my_arr = [1, 2, 4, 4 ]
# puts "should true #{has_pair_with_sum(my_arr, 8)}"
# my_arr = [1, 2, 3, 9 ] 
# puts "should false #{has_pair_with_sum(my_arr, 8)}"

#loop from the array and find in the hash if have rest num
# create a hash to store rest_nums = num - sum 

# you can use set or hash if you whant 
require 'set'
def has_pair_with_sum2(arr, sum)
  rest_nums = Set.new()
  # your current number is on the rest_nums?
  for index in 0..(arr.length-1)
    if rest_nums.include?( arr[index] )
      return true
    end
    rest = sum - arr[index]
    rest_nums << rest
  end
  return false
  # if not rest_num[sum-curren_num] = current
  # rest_num[9-6] = 6
end

my_arr = [6,4,3,2,1,7] # 9
puts "has_pair_with_sum #{ has_pair_with_sum2(my_arr, 9) }"