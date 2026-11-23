import { defineComponent, h } from 'vue';

const Spline = defineComponent({
  name: 'Spline',
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
          h('path', {"d":"M5 16C5 9.926 9.926 5 16 5"}),
          h('path', {"d":"M16 5C16 3.344 17.344 2 19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5Z"}),
          h('path', {"d":"M2 19C2 17.344 3.344 16 5 16C6.656 16 8 17.344 8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19Z"}),
          h('path', {"d":"M16 5C16 3.344 17.344 2 19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8C17.344 8 16 6.656 16 5Z"}),
          h('path', {"d":"M2 19C2 17.344 3.344 16 5 16C6.656 16 8 17.344 8 19C8 20.656 6.656 22 5 22C3.344 22 2 20.656 2 19Z"})
        ]
      );
  }
});

export default Spline;
export { Spline };
