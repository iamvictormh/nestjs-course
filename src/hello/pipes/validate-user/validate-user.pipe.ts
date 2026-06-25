import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

interface UserPayload {
  name: string;
  age: number | string;
}

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: UserPayload) {
    const ageNumber = parseInt(value.age?.toString(), 10);

    if (isNaN(ageNumber)) {
      throw new HttpException("Age must be a number", HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: ageNumber };
  }
}
