import { defineComponent, h } from 'vue';

const WindowModalBare = defineComponent({
  name: 'WindowModalBare',
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
          h('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"6.010000000000218","y1":"6","x2":"6","y2":"6"}),
          h('line', {"x1":"9.010000000000218","y1":"6","x2":"9","y2":"6"}),
          h('line', {"x1":"12.010000000000218","y1":"6","x2":"12","y2":"6"}),
          h('rect', {"x":"7","y":"11","width":"12","height":"8","rx":"1","ry":"1"})
        ]
      );
  }
});

export default WindowModalBare;
export { WindowModalBare };
