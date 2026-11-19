import { defineComponent, h } from 'vue';

const FileUserDoubleCut = defineComponent({
  name: 'FileUserDoubleCut',
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
          h('path', {"d":"M10 15C10 16.657 8.657 18 7 18C5.343 18 4 16.657 4 15C4 13.343 5.343 12 7 12C8.657 12 10 13.343 10 15Z"}),
          h('path', {"d":"M12 22L12 22C12 19.791 10.209 18 8 18L6 18C3.791 18 2 19.791 2 22L2 22"}),
          h('path', {"d":"M18 22C18 19.791 16.209 18 14 18"}),
          h('path', {"d":"M14 17.816C15.163 17.403 16 16.304 16 15C16 13.343 14.657 12 13 12"}),
          h('path', {"d":"M22 22L22 7.828C22 7.298 21.789 6.789 21.414 6.414L17.586 2.586C17.211 2.211 16.702 2 16.172 2L8 2C6.895 2 6 2.895 6 4L6 8"})
        ]
      );
  }
});

export default FileUserDoubleCut;
export { FileUserDoubleCut };
