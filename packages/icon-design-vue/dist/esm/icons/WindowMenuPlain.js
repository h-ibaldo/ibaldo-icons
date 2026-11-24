import { defineComponent, h } from 'vue';

const WindowMenuPlain = defineComponent({
  name: 'WindowMenuPlain',
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
          h('rect', {"x":"2.000000004900357","y":"1.999999995256076","width":"20","height":"20","rx":"3","ry":"3"}),
          h('line', {"x1":"2.000000004900357","y1":"5.999999995256076","x2":"22.000000004900357","y2":"5.999999995256076"}),
          h('line', {"x1":"6.000000004900357","y1":"9.999999995256076","x2":"9.000000004900357","y2":"9.999999995256076"}),
          h('line', {"x1":"6.000000004900357","y1":"13.999999995256076","x2":"9.000000004900357","y2":"13.999999995256076"}),
          h('line', {"x1":"6.000000004900357","y1":"17.999999995256076","x2":"9.000000004900357","y2":"17.999999995256076"})
        ]
      );
  }
});

export default WindowMenuPlain;
export { WindowMenuPlain };
