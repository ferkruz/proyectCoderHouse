export interface Alumnos{
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface AlumnosForm{
    id: number;
    name: string;
    email: string;
    telefono: number;
    curso: string;
    modalidad: string;
    horario: string;
    mensaje: string;
  }

  /*
  {
  "id": "$random.numeric",
  "avatar": $"internet.avatar"
  "firstName": "$name.firstName",
  "lastName": "$name.lastName",
  "age": "$random.numeric",
  "email": "$internet.email",
  "address": "$address.streetAddress",
  "country": "$address.country",
  "city": "$address.city",
  "postalCode": "$address.zipCode"
}
  */