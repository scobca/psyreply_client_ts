import {BlockTestsDto} from "@/api/dto/block-tests.dto";

export type PassedBlockDto = {
    time_on_pass: number,
    tests: BlockTestsDto[] | null
}
