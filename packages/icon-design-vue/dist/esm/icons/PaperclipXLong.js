import { defineComponent, h } from 'vue';

const PaperclipXLong = defineComponent({
  name: 'PaperclipXLong',
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
          h('path', {"d":"M15 8L6.828 17.172C5.723 18.277 5.723 20.066 6.828 21.172C7.934 22.277 9.723 22.277 10.828 21.172L20.551 10.449C22.484 8.516 22.484 5.383 20.551 3.449C18.617 1.516 15.484 1.516 13.551 3.449L5 13"}),
          h('path', {"d":"M6 6L2 2"}),
          h('path', {"d":"M6 2L2 6"})
        ]
      );
  }
});

export default PaperclipXLong;
export { PaperclipXLong };
