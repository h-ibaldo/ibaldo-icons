import { defineComponent, h } from 'vue';

const PaperclipMinusCurl = defineComponent({
  name: 'PaperclipMinusCurl',
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
          h('path', {"d":"M3 4L8 4"}),
          h('path', {"d":"M11.242 19.758L10.242 20.758C8.586 22.414 5.898 22.414 4.242 20.758C2.586 19.102 2.586 16.414 4.242 14.758L13.758 5.242C15.414 3.586 18.102 3.586 19.758 5.242C21.414 6.898 21.414 9.586 19.758 11.242L15.5 15.5C14.672 16.328 13.328 16.328 12.5 15.5C11.672 14.672 11.672 13.328 12.5 12.5L16 9"})
        ]
      );
  }
});

export default PaperclipMinusCurl;
export { PaperclipMinusCurl };
