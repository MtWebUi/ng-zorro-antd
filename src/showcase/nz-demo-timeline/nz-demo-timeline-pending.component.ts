import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'nz-demo-timeline-pending',
  template: `
    <nz-timeline>
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Technical testing 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Network problems being solved 2015-09-01</nz-timeline-item>
      <ng-template #pending>
        <a>See more</a>
      </ng-template>
    </nz-timeline>`,
  styles: []
})

export class NzDemoTimelinePendingComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
