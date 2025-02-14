import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.schema';
import mongoose from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Address.name,
    required: false,
  })
  address?: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('findOneAndDelete', async function (next) {
  const user = await this.model.findOne(this.getFilter());
  if (user) {
    const AddressModel = this.model.db.model<Address>('Address');
    await AddressModel.findByIdAndDelete(user.address);
  }
  next();
});
