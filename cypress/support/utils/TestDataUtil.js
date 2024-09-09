// cypress/support/utils/TestDataUtil.js

export class TestDataUtil {
    // Função para gerar um nome aleatório
    static generateRandomName() {
        const names = ["John", "Jane", "Michael", "Emily", "Sophia", "Liam", "Franco","Mateus", "Sonia"];
        return names[Math.floor(Math.random() * names.length)];
    }

    // Função para gerar um sobrenome aleatório
    static generateRandomLastName() {
        const lastNames = ["Doe", "Smith", "Johnson", "Williams", "Brown", "Mendes", "Gagary", "Marvel"];
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    }

    // Função para gerar um e-mail aleatório
    static generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 11);
        return `${randomString}@test.com`;
    }

    // Função para gerar um telefone aleatório
    static generateRandomPhone() {
        const phone = Math.floor(Math.random() * 1000000000);
        return `5519${phone}`;
    }

    // Função para gerar uma senha aleatória
    static generateRandomPassword() {
        return `Pass@${Math.floor(Math.random() * 1000)}`;
    }

    // Função para gerar todos os dados de uma vez
    static generateUserData() {
        return {
            firstName: this.generateRandomName(),
            lastName: this.generateRandomLastName(),
            email: this.generateRandomEmail(),
            password: this.generateRandomPassword(),
            phone: this.generateRandomPhone(),
        };
    }
}
