import { defineComponent, h } from 'vue';

const FileKey = defineComponent({
  name: 'FileKey',
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
          h('path', {"d":"M19 7.984C19 7.355 18.75 6.75 18.305 6.305L14.695 2.695C14.25 2.25 13.645 2 13.016 2L5 2C3.895 2 3 2.895 3 4L3 20C3 21.105 3.895 22 5 22L6 22"}),
          h('path', {"d":"M13 2L13 7C13 7.551 13.449 8 14 8L19 8"}),
          h('path', {"d":"M17.5 11C15.566 11 14 12.566 14 14.5C14 14.656 14.027 14.805 14.047 14.953L10 19L10 22L13 22L13 20L15 20L15 18L17.5 18C19.434 18 21 16.434 21 14.5C21 12.566 19.434 11 17.5 11Z"})
        ]
      );
  }
});

export default FileKey;
export { FileKey };
