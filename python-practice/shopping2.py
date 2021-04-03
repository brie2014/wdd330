def shop():
    menu=[]
    price=[]
    print("Welcome to the shopping chart Program!")
    print()
    total= 0
    shopping_chart= None
    while shopping_chart!="5":
        print()
        shopping_chart=input('Please select one of the following:\n''1. Add item\n2. View cart\n3. Remove item\n4. Compute total\n5. Quit\nPlease enter an action')
        if shopping_chart=="1":
            items=input('What item would you like to add?')
            menu.append(items)
            what_price=float(input(f'What is the price of the {items}?'))
            price.append(what_price)
            print(f'{items} has been added to the cart')
        elif shopping_chart =="2":
            print(f"The contents of the shopping cart are:")
            print()
            for i in range(len(menu)):
                item = menu[i]
                number = price[i]
                print(f"{i+1}. {item} - ${number:.2f}")
        elif shopping_chart=="3":
            print()
            for i in range(len(menu)):
                item = menu[i]
                number = price[i]
                print(f"{i+1}. {item} - ${number:.2f}")
            print()
            remove_item=int(input("What item number would you like to remove?"))
            if remove_item > len(menu):
                print('Please input a valid number')
                remove_item=int(input("What item number would you like to remove?"))
            
            menu.pop(remove_item-1)
            print('Your list is now:')
            print()
            for i in range(len(menu)):
                item = menu[i]
                number = price[i]
                print(f"{i+1}. {item} - ${number:.2f}")
                print()
            
        elif shopping_chart== "4":
            for total_price in price:
                total += total_price
            print(f"Your total price is ${total:.2f}")
        elif shopping_chart=="5":
            print('Thank you, goodbye.')
            exit()
        else:
            print('You did not select a correct option, please try again.')
shop()

       