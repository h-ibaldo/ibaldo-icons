import { defineComponent, h } from 'vue';

const FileStackLinesCut = defineComponent({
  name: 'FileStackLinesCut',
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
          h('path', {"d":"M11 14L17 14"}),
          h('path', {"d":"M11 10L17 10"}),
          h('path', {"d":"M11 6L15 6"}),
          h('path', {"d":"M3 7L3 20C3 21.105 3.895 22 5 22L16 22"}),
          h('path', {"d":"M9 18L19 18C20.105 18 21 17.105 21 16L21 7.243C21 6.447 20.684 5.684 20.121 5.121L17.879 2.879C17.316 2.316 16.553 2 15.757 2L9 2C7.895 2 7 2.895 7 4L7 16C7 17.105 7.895 18 9 18Z"})
        ]
      );
  }
});

export default FileStackLinesCut;
export { FileStackLinesCut };
