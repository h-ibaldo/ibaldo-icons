import { defineComponent, h } from 'vue';

const Rosette = defineComponent({
  name: 'Rosette',
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
          h('path', {"d":"M17 11L19 9L17 7L17 4L14 4L12 2L10 4L7 4L7 7L5 9L7 11L7 14L10 14L12 16L14 14L17 14Z"}),
          h('path', {"d":"M8 14.465L8 22L12 20L16 22L16 14.465"})
        ]
      );
  }
});

export default Rosette;
export { Rosette };
