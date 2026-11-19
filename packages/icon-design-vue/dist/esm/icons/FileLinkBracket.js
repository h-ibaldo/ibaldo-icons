import { defineComponent, h } from 'vue';

const FileLinkBracket = defineComponent({
  name: 'FileLinkBracket',
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
          h('path', {"d":"M6 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L12.758 2C13.555 2 14.316 2.316 14.879 2.879L18.121 6.121C18.684 6.684 19 7.445 19 8.242L19 12"}),
          h('path', {"d":"M13 2L13 6C13 7.105 13.895 8 15 8L19 8"}),
          h('path', {"d":"M13 19L17 19"}),
          h('path', {"d":"M13 22L12 22C10.344 22 9 20.656 9 19C9 17.344 10.344 16 12 16L13 16"}),
          h('path', {"d":"M17 16L18 16C19.656 16 21 17.344 21 19C21 20.656 19.656 22 18 22L17 22"})
        ]
      );
  }
});

export default FileLinkBracket;
export { FileLinkBracket };
