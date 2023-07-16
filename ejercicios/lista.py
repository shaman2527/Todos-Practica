
import random

# Crear una lista con 1000 elementos aleatorios
nombres = ["Juan", "Pedro", "María", "Ana", "Luisa", "Carlos", "Miguel", "Sofía", "Lucía", "Jorge"]
datos = ["edad", "altura", "peso", "color de ojos", "color de cabello"]
lista = []

for i in range(1):
    persona = {}
    persona["nombre"] = random.choice(nombres)
    persona["edad"] = random.randint(18, 80)
    persona["altura"] = round(random.uniform(1.5, 2.0), 2)
    persona["peso"] = round(random.uniform(50, 100), 2)
    persona["color de ojos"] = random.choice(["azul", "verde", "marrón"])
    persona["color de cabello"] = random.choice(["rubio", "castaño", "negro"])
    lista.append(persona)

# Ordenar la lista por edad de mayor a menor
lista.sort(key=lambda x: x["edad"], reverse=True)

# Cambiar los valores de la lista
for i in range(len(lista)):
    lista[i]["altura"] = round(lista[i]["altura"] * 2, 2)
    lista[i]["peso"] = round(lista[i]["peso"] * 2, 2)


for index, i in enumerate(lista):
    print(f"El indice {index} Su nombre es: {lista[0]['nombre']}")
    print(f"Indice {index} Su edad es : {lista[0]['edad']}")
    print(f"Indice {index} Su altura es : {lista[0]['altura']}")
    print(f"Indice {index} Su peso es : {lista[0]['peso']}")
    print(f"Indice {index} Su Color de ojos es : {lista[0]['color de ojos']}")
    print(f"Indice {index} Color de cabello : {lista[0]['color de cabello']}")
    break


