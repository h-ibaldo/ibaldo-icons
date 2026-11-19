import { defineComponent, h } from 'vue';

const Play = defineComponent({
  name: 'Play',
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
          h('path', {"d":"M5 4.918L5 19.082C5 20.32 6.371 21.063 7.41 20.391L18.293 13.309C19.234 12.691 19.234 11.309 18.293 10.691L7.41 3.609C6.371 2.938 5 3.68 5 4.918Z"})
        ]
      );
  }
});

export default Play;
export { Play };
