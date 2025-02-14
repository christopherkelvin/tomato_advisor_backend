import { Controller, Get, Param } from '@nestjs/common';
import { getDiseaseParamsDto } from './dtos/get-disease-params.dto';
import { DiseaseService } from './disease.service';
@Controller('disease')
export class DiseaseController {
  // constructor(private readonly userService: UserService) {}
  constructor(private readonly diseaseServie: DiseaseService) {}
  @Get('/:name')
  public getDisease(@Param() GetDiseaseParamsDto: getDiseaseParamsDto) {
    return this.diseaseServie.getDisease(GetDiseaseParamsDto.name);
  }
}
