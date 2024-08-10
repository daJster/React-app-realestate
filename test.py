def function_number_one(take_x, take_y) :
    return take_x * take_y


if __name__ == "__main__" :
    print(f"number : {function_number_one(function_number_one(1, 2), function_number_one(3, 4))}")