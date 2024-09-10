const fs = require('fs');
const path = require('path');

export class TestDataUtil {
    static generateRandomName() {
        const names = ["John", "Jane", "Michael", "Emily", "Sophia", "Liam", "Franco", "Mateus", "Sonia"];
        return names[Math.floor(Math.random() * names.length)];
    }

    static generateRandomLastName() {
        const lastNames = ["Doe", "Smith", "Johnson", "Williams", "Brown", "Mendes", "Gagary", "Marvel"];
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    }

    static generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 11);
        return `${randomString}@test.com`;
    }

    static generateRandomPhone() {
        const ddds = [
            '11', '19', '21', '31', '41', '51', '61', '71', '81', '91',
            '27', '28', '32', '33', '34', '35', '37', '38',
            '45', '46', '47', '48', '49',
            '53', '54', '55'
        ];

        const randomDdd = ddds[Math.floor(Math.random() * ddds.length)];
        const phone = Math.floor(Math.random() * 1000000000);
        const formattedPhone = phone.toString().padStart(9, '0');
        return `+55${randomDdd}${formattedPhone}`;
    }

    static generateRandomPassword() {
        return `Pass@${Math.floor(Math.random() * 1000)}`;
    }

    // Função que busca o próximo ID sequencial
    static getNextId(users) {
        if (users.length === 0) {
            return 1;  // Se não houver usuários, o próximo ID será 1
        }
        const maxId = Math.max(...users.map(user => user.id));
        return maxId + 1;  // Retorna o maior ID + 1
    }

    static generateUserData(users) {
        const id = this.getNextId(users);  // Gera o próximo ID baseado nos usuários existentes
        return {
            id: id,
            firstName: this.generateRandomName(),
            lastName: this.generateRandomLastName(),
            email: this.generateRandomEmail(),
            password: this.generateRandomPassword(),
            phone: this.generateRandomPhone(),
        };
    }

    // Salva os dados no arquivo e cria se não existir
    static saveUserDataToFile(userData, fileName) {
        const dirPath = path.join(__dirname, '../../', 'fixtures');  // Diretório 'cypress/fixtures'
        const filePath = path.join(dirPath, fileName);  // Caminho completo do arquivo

        // Verificar se o diretório existe, se não, criar
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Carregar dados existentes do arquivo (se existir)
        let existingData = { users: [] };
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            existingData = JSON.parse(fileData);
        }

        // Adicionar o novo usuário à lista existente
        existingData.users.push(userData);

        // Escrever os dados no arquivo
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');
    }

    static loadUserDataFromFile(fileName) {
        const filePath = path.join(__dirname, '../../', 'fixtures', fileName);  // Caminho para 'cypress/fixtures'
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }
        return { users: [] };  // Retorna uma lista vazia se o arquivo não existir
    }
}

// Carregar usuários existentes ou iniciar com uma lista vazia
const existingUsers = TestDataUtil.loadUserDataFromFile('userData.json');

// Gerar novo usuário com ID sequencial
const newUserData = TestDataUtil.generateUserData(existingUsers.users);

// Salvar os dados do novo usuário
TestDataUtil.saveUserDataToFile(newUserData, 'userData.json');

console.log('Novo usuário gerado e adicionado com sucesso:', newUserData);
