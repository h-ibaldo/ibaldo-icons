import { defineComponent, h } from 'vue';

const BoxTapeLabel = defineComponent({
  name: 'BoxTapeLabel',
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
          h('rect', {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"1","ry":"1"}),
          h('polyline', {"points":"15 1.999999999998181 15 7.999999999998181 14 6.999999999998181 13 7.999999999998181 12 6.999999999998181 11 7.999999999998181 10 6.999999999998181 9 7.999999999998181 9 1.999999999998181"}),
          h('rect', {"x":"11","y":"13.999999999998181","width":"7","height":"3.999999999688953"})
        ]
      );
  }
});

export default BoxTapeLabel;
export { BoxTapeLabel };
