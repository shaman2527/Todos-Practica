class Producto:

    def __init__(self, id, descripcion, costo):
        self.id = id
        self.descripcion = descripcion
        self.costo = costo

    def crear_etiqueta(self):
        return "%s \n %s \n %0.2f \n" % (self.id, self.descripcion, self.costo)


class Perecedero(Producto):
    def __init__(self, id, descripcion, costo, fecha_caducidad):
        super().__init__(id, descripcion, costo)
        self.fecha_caducidad = fecha_caducidad

    def crear_etiqueta(self):
        return super().crear_etiqueta() + self.fecha_caducidad


class Electronico(Producto):
    def __init__(self, id, descripcion, costo, marca):
        super().__init__(id, descripcion, costo)
        self.marca = marca

    def crear_etiqueta(self):
        return super().crear_etiqueta() + self.marca


pro = Producto("G", "Generico", 12.5)
per = Perecedero("p", "Tomate", 2.5, "20/05/2023")
ele = Electronico("e", "Laptop", 1200.0, "HP")
print(pro.crear_etiqueta())
print(per.crear_etiqueta())
print(ele.crear_etiqueta())


objetos = (pro, per, ele)

for objeto in objetos:
    print(objeto.crear_etiqueta(), type(objeto))

    print(isinstance(pro, Perecedero))
