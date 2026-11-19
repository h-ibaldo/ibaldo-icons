import { defineComponent, h } from 'vue';

const FileTriangleCut = defineComponent({
  name: 'FileTriangleCut',
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
          h('path', {"d":"M19 11L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L8 22"}),
          h('path', {"d":"M12.796 22L19.498 22C20.664 22 21.384 20.728 20.784 19.728L17.433 14.144C16.851 13.173 15.443 13.173 14.861 14.144L11.51 19.728C10.91 20.728 11.63 22 12.796 22Z"})
        ]
      );
  }
});

export default FileTriangleCut;
export { FileTriangleCut };
