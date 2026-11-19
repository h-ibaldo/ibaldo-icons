import { defineComponent, h } from 'vue';

const PaperclipArrowUpFlipped = defineComponent({
  name: 'PaperclipArrowUpFlipped',
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
          h('path', {"d":"M12 5L3.449 13.551C1.516 15.484 1.516 18.617 3.449 20.551C5.383 22.484 8.516 22.484 10.449 20.551L20.965 10.035C22.344 8.656 22.344 6.414 20.965 5.035C19.586 3.656 17.344 3.656 15.965 5.035L7.621 13.379C6.793 14.207 6.793 15.551 7.621 16.379C8.449 17.207 9.793 17.207 10.621 16.379L17 10"}),
          h('path', {"d":"M6 4L4 2L2 4"}),
          h('path', {"d":"M4 8L4 2"})
        ]
      );
  }
});

export default PaperclipArrowUpFlipped;
export { PaperclipArrowUpFlipped };
