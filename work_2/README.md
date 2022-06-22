# Pasantia22.2 | Semana 1 | Día 2

## Logica general

1. Primer ejercicio

    1. ¿Qué haría usted para que cuando un cliente compre algún producto se utilicen la menor cantidad de botellas, y se desperdicie la menor cantidad de espacio en las mismas.?

    Comparar las diferentes capacidades de botellas con la cantidad que desea comprar el cliente.

    2. Plasme la descripción de su algoritmo.
        - Ordenar las capacidades de botellas de menor a mayor.
        - Saber cuanto quiere comprar el cliente
        - Comparar si la cantidad que se quiere comprar es menor a la botella de menor capacidad en base a esto tomar decisones
            - si la cantidad a comprar no es menor entonces se compara con la siguiente botella.
            - Si la cantidad a comprar no es menor a ninguna de las botellas se realiza lo siguiente.
                - Se utiliza una botella de mayor capacidad y se resta uno a la cantidad de botellas.
                - Se resta la cantidad a comprar con la capacidad de la botella y la diferencia se utiliza para iniciar de nuevo en el paso 3
            - si la cantidad a comprar es igual o menor a la botella se realiza lo siguiente:
                - Se utiliza una botella de esa capacidad y se resta uno a la cantidad de botellas.
                - se resta la cantidad a comprar con la capacidad de la botella
                    - Si la diferencia es menor o igual a 0 se finaliza la venta.
                    - Si la diferencia es mayor a 0 se inicia de nuevo en el tercer paso

    3. Ejemplifique cómo distribuiría el liquido en los contenedores de la tabla de arriba con las siguientes compras ficticias, siguiendo su propuesta.
        ### Paco 450ml 

        - Capacidades de botellas 100, 250, 350, 500
        - Cuanto quiere comprar el cliente: 450
        - 450 < 100 = false
        - 450 < 250 = false
        - 450 < 350 = false
        - 450 < 500 = true
            - 1 botella de 500, 3 botellas - 1 botella, quedan 2 botellas de 500
            - 450-500 = -50 se finaliza la venta
        ### Hugo 185ml
        - Capacidades de botellas 100, 250, 350, 500
        - Cuanto quiere comprar el cliente: 185
        - 185 < 100 = false
        - 185 < 250 = true
            - 1 botella de 250, 15 botellas - 1 botella, quedan 14 botellas de 250
            - 185-250 = -65 se finalia la venta
        ### Luis 940ml
        - Capacidades de botellas 100, 250, 350, 500
        - Cuanto quiere comprar el cliente: 940
        - 940 < 100 = false
        - 940 < 250 = false
        - 940 < 350 = false
        - 940 < 500 = false
            - 1 botella de 500, 2 botellas - 1 botella, quedan 1 botella de 500
            - 940-500 = 440
        - 440 < 100 = false
        - 440 < 250 = false
        - 440 < 350 = false
        - 440 < 500 = true
            - 1 botella de 500, 1 botella - 1 botella, quedan 0 botellas

2. Segundo Ejercicio

    - Se agrega el primer elemento al array.
    - al agregar el siguiente elemento se compara si es igual al primer elemento
        - si es igual se agrega al nombre(k+1)
        - Si no es igual se compara con el siguiente elemento
            - si es igual se agrega al nombre(k+1)
            - si no es igual se repite de nuevo la comparación
        - Si no es igual a ninguno de los elementos se agrega el elemnto con el nombre que trae

        files = ['photo', 'postcard', 'photo', 'photo', 'video']

        fixfiles(files)

            file[0] = 'photo'

                file[1] == 'photo' = false
            file[1] = 'postcard'
                file[2] == 'photo' = true
            file[2] = 'photo' + (1)
                file[3] == 'photo' = true
            file[3] = 'photo' + (2)
                file[4] == 'photo' = false
                file[4] == 'postcard' = false
                file[4] == 'photo(1)' = false
                file[4] == 'photo(2)' = false
            file[3] = 'video'

            