import math
from random import seed
from random import randint
TEST = 1
p = 0
f = 0
for i in range(TEST):
    FEISTEL_ROUND = 22

    x = [0,1,0,1]
    x1 = [i for i in x]
    y = [0b0,0b0,0b0,0b0]
    for ROUND in range(FEISTEL_ROUND) :
        t = abs(x[0] - 1)
        tt = abs(x[2] - 1)
        y[0] = t ^ x[1]
        y[1] = x[2]  
        y[2] = tt ^ x[3]
        y[3] = x[0]

        x[0] = y[0]
        x[1] = y[1]
        x[2] = y[2]
        x[3] = y[3]
    print(x)
    # a = 0
    # for j in range(4):
    #     if x[j] != x1[j] :
    #         a += 1
    # if a >=2 :
    #     p +=1
    # else :
    #     f += 1
