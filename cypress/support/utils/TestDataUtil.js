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

    static getNextId(users) {
        if (users.length === 0) {
            return 1;
        }
        const maxId = Math.max(...users.map(user => user.id));
        return maxId + 1;
    }

    static generateUserData(users) {
        const id = this.getNextId(users);
        return {
            id: id,
            firstName: this.generateRandomName(),
            lastName: this.generateRandomLastName(),
            email: this.generateRandomEmail(),
            password: this.generateRandomPassword(),
            phone: this.generateRandomPhone(),
        };
    }

    // static saveUserDataToFile(userData, fileName) {
    //     cy.task('loadUserData', fileName).then((existingData) => {
    //         existingData.users.push(userData);
    //         cy.task('saveUserData', { fileName, data: existingData });
    //     });
    // }
    //
    // static loadUserDataFromFile(fileName) {
    //     return cy.task('loadUserData', fileName);
    // }
}




