import { defineComponent, h } from 'vue';

const PresentationChart = defineComponent({
  name: 'PresentationChart',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('rect', {"x":"2.025268558149946","y":"3.998782736171052","width":"20","height":"16.000000000003638","rx":"2","ry":"2"}),
          h('path', {"d":"M9.525268558149946,8.498782736171052c-1.93300374349019,0-3.5,1.566996256511629-3.5,3.5,0,1.933003743492009,1.56699625650981,3.5,3.5,3.5s3.5-1.566996256507991,3.5-3.5h-3.5v-3.5Z"}),
          h('line', {"x1":"16.025268558149946","y1":"8.998782736171052","x2":"18.025268558149946","y2":"8.998782736171052"}),
          h('line', {"x1":"16.025268558149946","y1":"11.998782736171052","x2":"18.025268558149946","y2":"11.998782736171052"}),
          h('line', {"x1":"16.025268558149946","y1":"14.998782736171052","x2":"18.025268558149946","y2":"14.998782736171052"})
        ]
      );
  }
});

export default PresentationChart;
export { PresentationChart };
