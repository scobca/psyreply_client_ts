import ApiResolver from "@/api/ApiResolver";

export class Greetings extends ApiResolver {
    constructor() {
        super('distribution/greetings');
    }

    async sendGreeting(chatId: any, botId: any) {
        return await this.request(`send/${chatId}/${botId}`, 'GET', '')
    }
}
