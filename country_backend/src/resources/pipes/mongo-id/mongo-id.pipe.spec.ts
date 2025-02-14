import { ParseMongoIdPipe } from './mongo-id.pipe';

describe('MongoIdPipe', () => {
  it('should be defined', () => {
    expect(new ParseMongoIdPipe()).toBeDefined();
  });
});
