import { defineComponent, h } from 'vue';

const FileStackBrackets = defineComponent({
  name: 'FileStackBrackets',
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
          h('path', {"d":"M16 22L17 22C17.555 22 18 21.551 18 21L18 10.414C18 10.148 17.895 9.895 17.707 9.707L14.293 6.293C14.105 6.105 13.852 6 13.586 6L6 6C5.449 6 5 6.449 5 7L5 12"}),
          h('path', {"d":"M13 6L13 10C13 10.551 13.445 11 14 11L18 11"}),
          h('path', {"d":"M10 2L16.586 2C16.852 2 17.105 2.105 17.293 2.293L21.707 6.707C21.895 6.895 22 7.148 22 7.414L22 18"}),
          h('path', {"d":"M5 16L2 19L5 22"}),
          h('path', {"d":"M10 16L13 19L10 22"})
        ]
      );
  }
});

export default FileStackBrackets;
export { FileStackBrackets };
