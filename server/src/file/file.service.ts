import { Injectable} from "@nestjs/common"


export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image'
}

@Injectable()
export class FileService{

    createFile(type: FileType, file) {}

    removeFile(fileName: string) {}

}