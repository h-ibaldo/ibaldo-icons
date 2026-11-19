import { defineComponent, h } from 'vue';

const ArrowLeftFromPointCircle = defineComponent({
  name: 'ArrowLeftFromPointCircle',
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
          h('path', {"d":"M12 9L9 12L12 15"}),
          h('path', {"d":"M18 12L9 12"}),
          h('path', {"d":"M22 12L22 12"}),
          h('path', {"d":"M19.117 5C17.305 3.152 14.793 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C14.793 22 17.305 20.848 19.117 19"})
        ]
      );
  }
});

export default ArrowLeftFromPointCircle;
export { ArrowLeftFromPointCircle };
