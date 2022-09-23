import { IsMongoId } from 'class-validator';

export class idParam {
  @IsMongoId({ message: 'Id inválido!' })
  id: string;
}
