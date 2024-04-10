----CREATE DATABASE Hosteleria_Reservacion;

----USE Hosteleria_Reservacion;

CREATE TABLE Clientes(
ClienteID INT IDENTITY (1,1) PRIMARY KEY,
Nombre VARCHAR(MAX),
Apellido VARCHAR(MAX),
Email VARCHAR(MAX),
Telefono INT
);

CREATE TABLE Habitaciones(
HabitacionID INT IDENTITY (1,1) PRIMARY KEY,
TipoHabitacion VARCHAR(MAX),
PrecioPorNoche DECIMAL(10, 2),
Disponible BIT
);


CREATE TABLE Reservas(
    ReservaID INT IDENTITY (1,1) PRIMARY KEY,
    ClienteID INT FOREIGN KEY REFERENCES Clientes(ClienteID),
    HabitacionID INT FOREIGN KEY REFERENCES Habitaciones(HabitacionID),
    FechaEntrada DATE,
    FechaSalida DATE,
    NumeroPersonas INT,
    CostoTotal DECIMAL (10,2)
);



