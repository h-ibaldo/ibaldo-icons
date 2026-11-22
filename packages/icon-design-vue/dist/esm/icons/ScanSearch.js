import { defineComponent, h } from 'vue';

const ScanSearch = defineComponent({
  name: 'ScanSearch',
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
          h('path', {"d":"M15 11.5C15 13.434 13.434 15 11.5 15C9.566 15 8 13.434 8 11.5C8 9.566 9.566 8 11.5 8C13.434 8 15 9.566 15 11.5Z"}),
          h('path', {"d":"M13.973 13.973L16 16"}),
          h('path', {"d":"M22 17L22 20C22 21.105 21.105 22 20 22L17 22"}),
          h('path', {"d":"M2 7L2 4C2 2.895 2.895 2 4 2L7 2"}),
          h('path', {"d":"M17 2L20 2C21.105 2 22 2.895 22 4L22 7"}),
          h('path', {"d":"M7 22L4 22C2.895 22 2 21.105 2 20L2 17"})
        ]
      );
  }
});

export default ScanSearch;
export { ScanSearch };
