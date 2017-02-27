import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

  fileName = "";

  constructor() { }

  setFileName(fileName) {

    this.fileName = fileName;

  }

}
