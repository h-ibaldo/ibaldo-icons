import { defineComponent, h } from 'vue';

const ArrowOrbitSync = defineComponent({
  name: 'ArrowOrbitSync',
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
          h('path', {"d":"M4.93 4.93C8.832 1.023 15.164 1.023 19.07 4.93"}),
          h('path', {"d":"M19.07 19.07C15.168 22.977 8.836 22.977 4.93 19.07"}),
          h('path', {"d":"M14 6L12 8L14 10"}),
          h('path', {"d":"M22 12C22 9.789 17.523 8 12 8"}),
          h('path', {"d":"M8 8.336C4.469 8.953 2 10.359 2 12"}),
          h('path', {"d":"M10 18L12 16L10 14"}),
          h('path', {"d":"M2 12C2 14.211 6.477 16 12 16"}),
          h('path', {"d":"M16 15.664C19.531 15.047 22 13.641 22 12"})
        ]
      );
  }
});

export default ArrowOrbitSync;
export { ArrowOrbitSync };
