import { defineComponent, h } from 'vue';

const PaperclipRound = defineComponent({
  name: 'PaperclipRound',
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
          h('path', {"d":"M13 7L7.828 12.172C6.723 13.277 6.723 15.066 7.828 16.172C8.934 17.277 10.723 17.277 11.828 16.172L17.551 10.449C19.484 8.516 19.484 5.383 17.551 3.449C15.617 1.516 12.484 1.516 10.551 3.449L4.07 9.93C1.309 12.691 1.309 17.168 4.07 19.93C6.832 22.691 11.309 22.691 14.07 19.93L20 14"})
        ]
      );
  }
});

export default PaperclipRound;
export { PaperclipRound };
