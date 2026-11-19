import { defineComponent, h } from 'vue';

const CompassPlus = defineComponent({
  name: 'CompassPlus',
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
          h('path', {"d":"M16 8L10 10L8 16L14 14Z"}),
          h('path', {"d":"M2 5L8 5"}),
          h('path', {"d":"M5 2L5 8"}),
          h('path', {"d":"M2.055 11C2.02 11.328 2 11.66 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C11.66 2 11.328 2.02 11 2.055"})
        ]
      );
  }
});

export default CompassPlus;
export { CompassPlus };
