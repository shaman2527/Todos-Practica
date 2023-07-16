from random import randint


class Tragamonedas:
    def __init__(self, id, premio):
        self.id = id
        self.premio = premio
        self.monedas = 0
        self.jackpots = 0

    def __str__(self):
        return f"ID {self.id} Premio: {self.premio}"

    def __eq__(self, otro):
        return self.monedas == otro.monedas

    def jugar(self):
        self.monedas += 1
        numeros = [randint(0, 9) for _ in range(3)]
        mensaje = ""
        if all(num == numeros[0] for num in numeros):
            self.jackpots += 1
            mensaje = f"FELICIDADES !!! GANASTE {self.premio:.2f}"
        else:
            mensaje = "Mejor suerte para la proxima"
        return numeros, mensaje


tragamonedas = Tragamonedas(1, 1000)
tragamonedas2 = Tragamonedas(2, 500)

for i in range(100):
    print(tragamonedas)
    print(tragamonedas2)

print(
    f"El Usuario con la ID {tragamonedas.id}La Cantidad de jackpots es: {tragamonedas.jackpots}")
print(
    f"El usuario con la ID {tragamonedas2.id}La Cantidad de jackpots es: {tragamonedas2.jackpots}")


print(tragamonedas.__eq__(tragamonedas2))


