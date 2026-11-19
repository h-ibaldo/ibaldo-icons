import { defineComponent, h } from 'vue';

const WindowTwoDotsRight = defineComponent({
  name: 'WindowTwoDotsRight',
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
          h('rect', {"x":"2.00000000018008","y":"2.000000000448836","width":"20","height":"20","rx":"1.999999999999432","ry":"1.999999999999432"}),
          h('line', {"x1":"22.00000000036016","y1":"8.000000000897671","x2":"2.00000000036016","y2":"8"}),
          h('line', {"x1":"19.010000000489526","y1":"5.000000000763976","x2":"19.000000000490218","y2":"5.000000000763976"}),
          h('line', {"x1":"16.010000000489526","y1":"5.000000000627551","x2":"16.000000000490218","y2":"5.000000000627551"})
        ]
      );
  }
});

export default WindowTwoDotsRight;
export { WindowTwoDotsRight };
