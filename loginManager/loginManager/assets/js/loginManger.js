const users = [
    {
        "id": "1",
        "userName": "johndoe",
        "email": "john@example.com",
        "password": "5454545454",
        "isActive": true,
        "personalInfo": {
                "documentId": "123456789",
                "firstName": "John",
                "lastName": "Doe",
                "age": 30,
                "address": "123 Main St, Anytown, USA"
        }
    },
    {
        "id": "2",
        "userName": "janedoe",
        "email": "jane@example.com",
        "password": "5454545454",
        "isActive": true,
        "personalInfo": {
                "documentId": "987654321",
                "firstName": "Jane",
                "lastName": "Doe",
                "age": 28,
                "address": "456 Oak Ave, Somewhere, USA"
        }
    }
]
 function asignarEventos() {

        document.getElementById('registerBtn').addEventListener('click', handleRegister);
        document.getElementById('saveBtn').addEventListener('click', handleSave);
        document.getElementById('updateBtn').addEventListener('click', handleUpdate);
        document.getElementById('searchDocBtn').addEventListener('click', handleSearchByDocumentId);
    }
// crea metodo para agregar un nuevo usuario al array de usuarios
function addUser(id, userName, email, password, isActive, firstName, lastName, age, address, documentId) {
    const user = {
        "id": id,
        "userName": userName,
        "email": email,
        "password": password,
        "isActive": isActive === true || isActive === 'true',
        "personalInfo": {
            "documentId": documentId,
            "firstName": firstName,
            "lastName": lastName,
            "age": age,
            "address": address
        }
    };
    users.push(user);
}

function updateUser(id, userName, email, password, isActive, firstName, lastName, age, address, documentId) {
    const user = users.find(u => u.id === id);
    if (!user) {
        return false;
    }
    user.userName = userName;
    user.email = email;
    user.password = password;
    user.isActive = isActive === true || isActive === 'true';
    user.personalInfo.documentId = documentId;
    user.personalInfo.firstName = firstName;
    user.personalInfo.lastName = lastName;
    user.personalInfo.age = age;
    user.personalInfo.address = address;
    return true;
}

function saveUser(id, userName, email, password, isActive, firstName, lastName, age, address, documentId) {
    const exists = users.some(u => u.id === id);
    if (exists) {
        return updateUser(id, userName, email, password, isActive, firstName, lastName, age, address, documentId);
    }
    addUser(id, userName, email, password, isActive, firstName, lastName, age, address, documentId);
    return true;
}
// metodo para buscar por email y password
function findUserByEmailAndPassword(email, password) {
    return users.find(user => user.email === email && user.password === password);
}

function findUserByDocumentId(documentId) {
    return users.find(user => user.personalInfo && user.personalInfo.documentId === documentId);
}
// metodo para obtener lista de usuarios por email,sin el password
function getUsersByEmail(email) {
    return users.filter(user => user.email === email).map(user => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
}
