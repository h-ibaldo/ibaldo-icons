import { defineComponent, h } from 'vue';

const PlusSquare = defineComponent({
  name: 'PlusSquare',
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
          h('rect', {"x":"1.974731445219732","y":"2.0000000004502","width":"20","height":"20","rx":"3","ry":"3"}),
          h('line', {"x1":"11.974731445219732","y1":"7.0000000004502","x2":"11.974731445219732","y2":"17.0000000004502"}),
          h('line', {"x1":"16.974731445219732","y1":"12.0000000004502","x2":"6.974731445219732","y2":"12.0000000004502"})
        ]
      );
  }
});

export default PlusSquare;
export { PlusSquare };
