import {PassedBlockDto} from "@/api/dto/passed-block.dto";

interface Module1State {
    blockPassed: PassedBlockDto | null
}

export const Module1 = {
    state: (): Module1State => ({
        blockPassed: null
    })
}
