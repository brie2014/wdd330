def celsisusToF(C):
    f_temp=(C*9/5)+32
    return(f_temp)

def windchill_F(F, windspeed):
    wind_temp = 35.74 + 0.6215*F -  35.75*(windspeed**0.16) + 0.4275*F*(windspeed**0.16)
    wind_temp_rounded = round(wind_temp, 2)
    return(wind_temp_rounded)

temperature = int(input("What is the temperature?"))
degrees=input("Fahrenheit or Celsius (F/C)?")
i=5
for i in range (5, 65, 5):
    if degrees == "C":
        CtoF = celsisusToF(temperature)
        results_F = windchill_F(CtoF, i)
        print(f'At temperature {CtoF}F, and wind speed {i} mph, the windchill is: {results_F}F')
    elif degrees == "F":
        results_F = windchill_F(temperature, i)
        print(f'At temperature {temperature}F, and wind speed {i} mph, the windchill is: {results_F}F')
    else:
        print("Please reenter information in the correct format")