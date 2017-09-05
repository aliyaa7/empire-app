import { Component, OnInit, TemplateRef, Input, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { HttpClient } from '@angular/common/http';
import { ImageUploadModule } from 'angular2-image-upload';
import { ColorOutput } from 'ng-color';

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
  img = new ImageUploadModule;
  url: any;


  constructor(private modalService: BsModalService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  open(widget: any) {
    this.widget = widget;
    this.modalRef = this.modalService.show(this.modalTemplate)
  }

  colorChange(event: any) {
  }

  imageFinishedUploading(file: any) {
    this.file = file;
    console.log(JSON.stringify(file.serverResponse));

    if (this.widget.type = 'image') {
      console.log('testImage');
    }

   this.widget.content = file.src;
   this.img = file;
   console.dir(this.file);
   console.dir(this.widget
    .content);
   console.log(file.src);
  }

  updateType(type: string) {
    this.widget.type = type;
  }


}



