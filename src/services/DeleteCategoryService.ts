import { getRepository } from "typeorm";
import { Category } from "../entities/Category";



export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    //VERIFICANDO SE A CATEGORY EXISTE
    if (!await repo.findOne(id)) {
      return new Error("Category does not exists!");
    }

    //CASO EXISTA FAZ A EXCLUSAO
    await repo.delete(id);
  }
}