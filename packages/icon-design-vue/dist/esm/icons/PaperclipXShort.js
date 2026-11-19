import { defineComponent, h } from 'vue';

const PaperclipXShort = defineComponent({
  name: 'PaperclipXShort',
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
          h('path', {"d":"M12.105 14L18.277 7.828C19.383 6.723 19.383 4.934 18.277 3.828C17.172 2.723 15.383 2.723 14.277 3.828L5.555 12.551C3.621 14.484 3.621 17.617 5.555 19.551C7.488 21.484 10.621 21.484 12.555 19.551L21 11.105"}),
          h('path', {"d":"M6 6L2 2"}),
          h('path', {"d":"M6 2L2 6"})
        ]
      );
  }
});

export default PaperclipXShort;
export { PaperclipXShort };
