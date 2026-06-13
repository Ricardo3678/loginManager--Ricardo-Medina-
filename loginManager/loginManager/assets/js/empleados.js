const vehiculos = [
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2020,
        color: 'Rojo',
        propietario:[
            {
                nombre: 'Juan Pérez',
                edad: 30,
                licencia: 'B1234567'
            },
            {
                nombre: 'María Gómez',
                edad: 28,
                licencia: 'B7654321'
            },
            {
                nombre: 'Carlos López',
                edad: 35,
                licencia: 'B9876543'
            }
        ] 
    },
    {
        marca: 'Honda',
        modelo: 'Civic',    
        año: 2019,
        color: 'Azul',
        propietario:[
            {
                nombre: 'Ana Martínez',
                edad: 32,
                licencia: 'B4567890'
            }
        ]
    }
];

/* const datafetch = async () => {
    const response = await fetch('../assets/data/employee.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    });
    return response.json();
};
datafetch()
    .then(data => {
        // Process the fetched data
        console.log(data);
    }); */