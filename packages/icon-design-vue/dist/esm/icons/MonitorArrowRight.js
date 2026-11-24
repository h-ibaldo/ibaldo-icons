import { defineComponent, h } from 'vue';

const MonitorArrowRight = defineComponent({
  name: 'MonitorArrowRight',
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
          h('line', {"x1":"7.000000003159585","y1":"21.998782736171052","x2":"17.000000003159585","y2":"21.998782736171052"}),
          h('line', {"x1":"16.000000003159585","y1":"7.998782736171052","x2":"8.000000003159585","y2":"7.998782736171052"}),
          h('line', {"x1":"22.000000003159585","y1":"13.998782736171052","x2":"2.000000003159585","y2":"13.998782736171052"}),
          h('polyline', {"points":"14.000000003159585 5.998782736171052 16.000000003159585 7.998782736171052 14.000000003159585 9.998782736171052"}),
          h('rect', {"x":"2.000000003159585","y":"1.998782736172871","width":"20","height":"14.999999999998181","rx":"2","ry":"2"}),
          h('path', {"d":"M8.000000003159585,21.998782736171052c1.380711874500776,0,2.5-1.119288125497405,2.5-2.5"}),
          h('path', {"d":"M16.000000003159585,21.998782736116482c-1.380711874499866.000000000061846-2.500000000049113-1.119288125388266-2.500000000109139-2.499999999890861"})
        ]
      );
  }
});

export default MonitorArrowRight;
export { MonitorArrowRight };
