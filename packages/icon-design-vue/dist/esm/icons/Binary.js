import { defineComponent, h } from 'vue';

const Binary = defineComponent({
  name: 'Binary',
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
          h('path', {"d":"M4 3L7 3L7 10"}),
          h('path', {"d":"M14 14L17 14L17 21"}),
          h('path', {"d":"M4 10L10 10"}),
          h('path', {"d":"M14 21L20 21"}),
          h('path', {"d":"M15 3L19 3C19.551 3 20 3.449 20 4L20 9C20 9.551 19.551 10 19 10L15 10C14.449 10 14 9.551 14 9L14 4C14 3.449 14.449 3 15 3Z"}),
          h('path', {"d":"M9 14L5 14C4.449 14 4 14.449 4 15L4 20C4 20.551 4.449 21 5 21L9 21C9.551 21 10 20.551 10 20L10 15C10 14.449 9.551 14 9 14Z"})
        ]
      );
  }
});

export default Binary;
export { Binary };
