import { defineComponent, h } from 'vue';

const Plus = defineComponent({
  name: 'Plus',
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
          h('line', {"x1":"11.974731445219732","y1":"3.000000000448381","x2":"11.974731445219732","y2":"21.0000000004502"}),
          h('line', {"x1":"20.974731445219732","y1":"12.0000000004502","x2":"2.974731445219732","y2":"12.0000000004502"})
        ]
      );
  }
});

export default Plus;
export { Plus };
