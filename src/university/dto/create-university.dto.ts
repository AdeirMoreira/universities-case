import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUniversityDto {
  @ApiProperty({
    description: 'Lista dos dominios da universidade.',
    example: ['universidade.com'],
  })
  @IsArray({ message: 'domains deve ser um array de strings.' })
  @IsString({ each: true, message: 'domains deve ser um array de strings.' })
  domains: string[];

  @ApiProperty({
    description: 'Lista dos sites da universidade.',
    example: ['www.universidade.com'],
  })
  @IsArray({ message: 'web_pages deve ser um array de strings' })
  @IsString({ each: true, message: 'web_pages deve ser um array de strings.' })
  web_pages: string[];

  @ApiProperty({
    description: 'Código de 2 dígitos correspondente ao país da universidade.',
    example: 'BR',
  })
  @IsNotEmpty({ message: 'alpha_two_code é requerido.' })
  @IsString({ message: 'alpha_two_code deve ser uma string.' })
  alpha_two_code: string;

  @ApiProperty({
    description: 'Nome da universidade.',
    example: 'Universidade federal de Minas Gerais',
  })
  @IsNotEmpty({ message: 'name é requerido.' })
  @IsString({ message: 'name deve ser uma string.' })
  name: string;

  @ApiProperty({
    description: 'País da universidade.',
    example: 'Brazil',
  })
  @IsNotEmpty({ message: 'country é requerido.' })
  @IsString({ message: 'country deve ser uma string.' })
  country: string;

  @ApiProperty({
    description: 'Estado da universidade.',
    example: 'Minas Gerais',
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'state-province deve ser uma string.' })
  'state-province'?: string;
}
