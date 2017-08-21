import { Component, OnInit, TemplateRef, Input, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ImageUploadModule } from 'angular2-image-upload';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.css']
})
export class ModalOptionsComponent implements OnInit {
  @ViewChild('modal') modalTemplate;
  public modalRef: BsModalRef;
  widget: any;
  file: FileList;
  img = new Image;
  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  open(widget: any) {
    this.widget = widget;
    this.modalRef = this.modalService.show(this.modalTemplate)
  }

  imageFinishedUploading(file: any) {
    this.file = file;
    console.log(JSON.stringify(file.serverResponse));

    if (this.widget.type = 'image') {
      console.log('testImage');
    }
    this.widget.content = 'https://httpbin.org/status/200';
    console.dir(this.img);

    this.widget.content = this.img;
    return this.img;
  }
}

