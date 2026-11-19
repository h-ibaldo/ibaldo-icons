import { defineComponent, h } from 'vue';

const FileStackOverlap = defineComponent({
  name: 'FileStackOverlap',
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
          h('path', {"d":"M15 20L15 12.828C15 12.298 14.789 11.789 14.414 11.414L10.586 7.586C10.211 7.211 9.702 7 9.172 7L4 7C2.895 7 2 7.895 2 9L2 20C2 21.105 2.895 22 4 22L13 22C14.105 22 15 21.105 15 20Z"}),
          h('path', {"d":"M9 7L9 12C9 12.552 9.448 13 10 13L15 13"}),
          h('path', {"d":"M18 17L20 17C21.105 17 22 16.105 22 15L22 7.828C22 7.298 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.702 2 16.172 2L11 2C9.895 2 9 2.895 9 4"}),
          h('path', {"d":"M16 2L16 7C16 7.552 16.448 8 17 8L22 8"})
        ]
      );
  }
});

export default FileStackOverlap;
export { FileStackOverlap };
