import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNumber, Min } from 'class-validator';

export class queryParams {
  @IsIn(
    [
      'Argentina',
      'Brazil',
      'Chile',
      'Colombia',
      'Paraguay',
      'Peru',
      'Suriname',
      'Uruguay',
    ],
    {
      message:
        'Países permitidos: Argentina, Brazil, Chile, Colombia, Paraguay, Peru, Suriname, Uruguay.',
    },
  )
  country: string;

  @Type(() => Number)
  @IsNumber()
  @IsInt({ message: 'Página inválida' })
  @Min(1, { message: 'A página dever ser maior que 0' })
  page: number;
}
