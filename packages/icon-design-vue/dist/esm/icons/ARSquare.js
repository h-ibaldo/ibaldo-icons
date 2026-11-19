import { defineComponent, h } from 'vue';

const ARSquare = defineComponent({
  name: 'ARSquare',
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
          h('polyline', {"points":"9.999999977098923 16.999996563434252 9.999999977098923 6.999996563434252 5.999999977098923 6.999996563434252 5.999999977098923 16.999996563434252"}),
          h('line', {"x1":"5.999999977098923","y1":"12.999996563434252","x2":"9.999999977098923","y2":"12.999996563434252"}),
          h('polyline', {"points":"13.999999977098923 11.999996563434252 17.999999977098923 14.999996563434252 17.999999977098923 16.999996563434252"}),
          h('polyline', {"points":"13.999999977098923 16.999996563434252 13.999999977098923 6.999996563434252 17.999999977098923 6.999996563434252 17.999999977098923 11.999996563434252 13.999999977098923 11.999996563434252"}),
          h('rect', {"x":"1.999999977098923","y":"2.999996563434252","width":"20","height":"18","rx":"2","ry":"2"})
        ]
      );
  }
});

export default ARSquare;
export { ARSquare };
