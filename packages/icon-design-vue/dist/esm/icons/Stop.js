import { defineComponent, h } from 'vue';

const Stop = defineComponent({
  name: 'Stop',
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
          h('path', {"d":"M5 4L19 4C19.555 4 20 4.449 20 5L20 19C20 19.555 19.555 20 19 20L5 20C4.445 20 4 19.555 4 19L4 5C4 4.449 4.445 4 5 4Z"})
        ]
      );
  }
});

export default Stop;
export { Stop };
