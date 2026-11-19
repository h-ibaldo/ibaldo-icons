import { defineComponent, h } from 'vue';

const FileImageCorner = defineComponent({
  name: 'FileImageCorner',
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
          h('path', {"d":"M16 2L16 7C16 7.552 16.448 8 17 8L22 8"}),
          h('path', {"d":"M14 11C14 12.105 13.105 13 12 13C10.895 13 10 12.105 10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11Z"}),
          h('path', {"d":"M21 21.723C21.595 21.376 22 20.738 22 20L22 7.984C22 7.354 21.75 6.75 21.304 6.304L17.696 2.696C17.25 2.25 16.646 2 16.016 2L8 2C6.895 2 6 2.895 6 4L6 10"}),
          h('path', {"d":"M2 22L12 22L7 14L2 22Z"}),
          h('path', {"d":"M12 22L17 22L13.5 17L11.057 20.491"})
        ]
      );
  }
});

export default FileImageCorner;
export { FileImageCorner };
