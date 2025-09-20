import RepositoryInterface from "../../../../share/interfaces/Repository.interface";
import ScheduleTransaction from "../entity/ScheduleTransaction";

export interface TransactionRepository extends RepositoryInterface<ScheduleTransaction> {
    
}