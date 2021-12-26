import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/service/components.service';

@Component({
  selector: 'app-papularity-trends',
  templateUrl: './papularity-trends.component.html',
  styleUrls: ['./papularity-trends.component.scss'],
})
export class PapularityTrendsComponent implements OnInit {
  popularityTrends: any;
  constructor(private service: ComponentsService) {}

  ngOnInit(): void {
    this.getPopularityTrends();
  }
  getPopularityTrends() {
    this.service.getPopularityTrends().subscribe((res) => {
      const data = res.map((e) => {
        return {
          ...(e.payload.doc.data() as any),
        } as any;
      });
      this.popularityTrends = data;
    });
  }
}
