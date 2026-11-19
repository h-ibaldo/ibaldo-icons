import { defineComponent, h } from 'vue';

const ShapeUneven = defineComponent({
  name: 'ShapeUneven',
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
          h('rect', {"x":"1.974731445219732","y":"2.000000000448381","width":"6","height":"20"}),
          h('rect', {"x":"12.974731445219732","y":"6.000000000448381","width":"9","height":"12"})
        ]
      );
  }
});

export default ShapeUneven;
export { ShapeUneven };
