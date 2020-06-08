import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import echarts from 'echarts';
import 'echarts-gl';

// require('echarts');
// require('echarts-gl');
// declare var echarts: any;
// tslint:disable 
@Component({
  selector: 'app-echartsa',
  templateUrl: './echartsa.component.html',
  styleUrls: ['./echartsa.component.css']
})
export class EchartsaComponent implements OnInit {
  @ViewChild('echartsContainer') echartsContainer: ElementRef;
  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    console.log('object :>> ', this.echartsContainer);

    const mycharts = echarts.init(this.echartsContainer.nativeElement);
    // 指定图表的配置项和数据
    let option = {
      title: {
        text: 'ECharts 入门示例'
      },
      //   visualMap: {
      //     // 不显示 visualMap 组件，只用于明暗度的映射
      //     show: true,
      //     // 映射的最小值为 0
      //     min: 10,
      //     // 映射的最大值为 600
      //     max: 100,
      //     inRange: {
      //         // 明暗度的范围是 0 到 1
      //         colorLightness: [0, 1]
      //     }
      // },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    // var data = [];
    // // Parametric curve
    // for (var t = 0; t < 25; t += 0.001) {
    //   var x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
    //   var y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
    //   var z = t + 2.0 * Math.sin(75 * t);
    //   data.push([x, y, z]);
    // }
    // console.log(data.length);

    // let option = {
    //   tooltip: {},
    //   backgroundColor: '#fff',
    //   visualMap: {
    //     show: false,
    //     dimension: 2,
    //     min: 0,
    //     max: 30,
    //     inRange: {
    //       color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    //     }
    //   },
    //   xAxis3D: {
    //     type: 'value'
    //   },
    //   yAxis3D: {
    //     type: 'value'
    //   },
    //   zAxis3D: {
    //     type: 'value'
    //   },
    //   grid3D: {
    //     viewControl: {
    //       projection: 'orthographic'
    //     }
    //   },
    //   series: [{
    //     type: 'line3D',
    //     data: data,
    //     lineStyle: {
    //       width: 4
    //     }
    //   }]
    // };


    // 使用刚指定的配置项和数据显示图表。
    mycharts.setOption(option);
  }
  ngOnInit(): void {



  }


}
