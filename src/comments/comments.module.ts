import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { User } from 'src/users/entities/user.entity';
import { VideoGame } from 'src/video_games/entities/video_game.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Comment,User,VideoGame])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
