import { defineComponent, h } from 'vue';

const PaperclipFlipped = defineComponent({
  name: 'PaperclipFlipped',
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
          h('path', {"d":"M12 4L3.449 12.551C1.516 14.484 1.516 17.617 3.449 19.551C5.383 21.484 8.516 21.484 10.449 19.551L20.965 9.035C22.344 7.656 22.344 5.414 20.965 4.035C19.586 2.656 17.344 2.656 15.965 4.035L7.621 12.379C6.793 13.207 6.793 14.551 7.621 15.379C8.449 16.207 9.793 16.207 10.621 15.379L17 9"})
        ]
      );
  }
});

export default PaperclipFlipped;
export { PaperclipFlipped };
