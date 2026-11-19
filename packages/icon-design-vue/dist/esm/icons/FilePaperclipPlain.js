import { defineComponent, h } from 'vue';

const FilePaperclipPlain = defineComponent({
  name: 'FilePaperclipPlain',
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
          h('path', {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L8 22"}),
          h('path', {"d":"M16 13L11.828 17.172C10.724 18.276 10.724 20.067 11.828 21.172L11.828 21.172C12.933 22.276 14.724 22.276 15.828 21.172L21.586 15.414C22.138 14.862 22.138 13.966 21.586 13.414L21.586 13.414C21.034 12.862 20.138 12.862 19.586 13.414L15 18"})
        ]
      );
  }
});

export default FilePaperclipPlain;
export { FilePaperclipPlain };
