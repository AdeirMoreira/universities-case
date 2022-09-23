import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUniversityDto {
  @IsArray({ message: 'domains deve ser um array de strings' })
  @IsString({ each: true, message: 'domains deve ser um array de strings' })
  domains: string[];

  @IsArray({ message: 'web_pages deve ser um array de strings' })
  @IsString({ each: true, message: 'web_pages deve ser um array de strings' })
  web_pages: string[];

  @IsNotEmpty({ message: 'alpha_two_code é requerido' })
  @IsString({ message: 'alpha_two_code deve ser uma string' })
  alpha_two_code: string;

  @IsNotEmpty({ message: 'name é requerido' })
  @IsString({ message: 'name deve ser uma string' })
  name: string;

  @IsNotEmpty({ message: 'country é requerido' })
  @IsString({ message: 'country deve ser uma string' })
  country: string;

  @IsOptional()
  @IsString({ message: 'state-province deve ser uma string' })
  'state-province'?: string;
}
