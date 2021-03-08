/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

// ArgsType allows passing each field as argument, instead of one big
// dto via InputType
@ArgsType()
export class createRestaurantDto {
  @Field((type) => String)
  @IsString()
  @Length(5, 20)
  name: string;

  @Field((type) => Boolean)
  @IsBoolean()
  isVegan: boolean;

  @Field((type) => String)
  @IsString()
  adress: string;

  @Field((type) => String)
  @IsString()
  ownersName: string;
}
