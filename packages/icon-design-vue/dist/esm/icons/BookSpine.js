import { defineComponent, h } from 'vue';

const BookSpine = defineComponent({
  name: 'BookSpine',
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
          h('path', {"d":"M20 17L20 22"}),
          h('path', {"d":"M3 19.5L3 4.5C3 3.117 4.117 2 5.5 2L20 2C20.551 2 21 2.449 21 3L21 16C21 16.551 20.551 17 20 17L5.5 17C4.117 17 3 18.117 3 19.5C3 20.883 4.117 22 5.5 22L21 22"}),
          h('path', {"d":"M8 2L8 17"})
        ]
      );
  }
});

export default BookSpine;
export { BookSpine };
