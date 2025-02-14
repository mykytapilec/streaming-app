import { Module } from "@nestjs/common"
import { TrackModule } from "./track/track.module"
import { MongooseModule } from "@nestjs/mongoose"
import { FileModule } from "./file/file.module"


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ag9ei.mongodb.net/streaming-app?retryWrites=true&w=majority&appName=Cluster0'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}