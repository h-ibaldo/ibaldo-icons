import { defineComponent, h } from 'vue';

const EraserBare = defineComponent({
  name: 'EraserBare',
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
          h('path', {"d":"M8 21L21 21"}),
          h('path', {"d":"M8 21L3.414 16.414C2.633 15.633 2.633 14.367 3.414 13.586L12.586 4.414C13.367 3.633 14.633 3.633 15.414 4.414L19.586 8.586C20.367 9.367 20.367 10.633 19.586 11.414L10 21"})
        ]
      );
  }
});

export default EraserBare;
export { EraserBare };
