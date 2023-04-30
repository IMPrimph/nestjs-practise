import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        
        return messages[id];
    }
    
    async findAll() {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        
        return messages;
    }
    
    async create(inputMessage: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        const randomID = Math.floor(Math.random() * 999);
        messages[randomID] = {
            id: randomID,
            content: inputMessage
        }

        await writeFile('messages.json', JSON.stringify(messages));
    }
}