import {BlockAnswersDto} from "@/api/dto/block-answers.dto";
import {BlockQuestionsDto} from "@/api/dto/block-questions.dto";

export type BlockTestsDto = {
    questions: BlockQuestionsDto[],
    answers: BlockAnswersDto[],
}
