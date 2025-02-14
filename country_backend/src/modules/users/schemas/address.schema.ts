import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
