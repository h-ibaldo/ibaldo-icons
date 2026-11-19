import { defineComponent, h } from 'vue';

const FileUserDouble = defineComponent({
  name: 'FileUserDouble',
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
          h('path', {"d":"M6 8L6 4C6 2.895 6.895 2 8 2L16.016 2C16.646 2 17.25 2.25 17.696 2.696L21.304 6.304C21.75 6.75 22 7.354 22 7.984L22 22"}),
          h('path', {"d":"M16 2L16 7C16 7.552 16.448 8 17 8L22 8"})
        ]
      );
  }
});

export default FileUserDouble;
export { FileUserDouble };
