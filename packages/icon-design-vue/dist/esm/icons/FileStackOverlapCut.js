import { defineComponent, h } from 'vue';

const FileStackOverlapCut = defineComponent({
  name: 'FileStackOverlapCut',
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
          h('path', {"d":"M18 17L20 17C21.105 17 22 16.105 22 15L22 7.243C22 6.447 21.684 5.684 21.121 5.121L18.879 2.879C18.316 2.316 17.553 2 16.757 2L11 2C9.895 2 9 2.895 9 4"}),
          h('path', {"d":"M4 22L13 22C14.105 22 15 21.105 15 20L15 12.243C15 11.447 14.684 10.684 14.121 10.121L11.879 7.879C11.316 7.316 10.553 7 9.757 7L4 7C2.895 7 2 7.895 2 9L2 20C2 21.105 2.895 22 4 22Z"})
        ]
      );
  }
});

export default FileStackOverlapCut;
export { FileStackOverlapCut };
