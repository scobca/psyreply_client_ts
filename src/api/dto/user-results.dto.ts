import {UserResultMetricsDto} from "@/api/dto/user-result-metrics.dto";

export type UserResultsDto = {
    metrics: UserResultMetricsDto,
    part: boolean
}
