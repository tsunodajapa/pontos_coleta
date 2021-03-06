import ICreatePointDTO from '../dtos/ICreatePointDTO';
import ISavePointDTO from '../dtos/ISavePointDTO';
import Point from '../infra/typeorm/entities/Points';

export default interface IPointsRepository {
  create(data: ICreatePointDTO): Promise<Point>;
  save(data: ISavePointDTO): Promise<Point>;
  findAll(name: string): Promise<Point[] | undefined>;
  findByName(name: string): Promise<Point | undefined>;
  findById(id: string): Promise<Point | undefined>;
}
