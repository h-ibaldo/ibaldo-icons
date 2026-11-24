import { defineComponent, h } from 'vue';

const JustifyTop = defineComponent({
  name: 'JustifyTop',
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
          h('path', {"d":"M22 2L2 2"}),
          h('path', {"d":"M8 11L8 7C8 6.449 8.449 6 9 6L15 6C15.551 6 16 6.449 16 7L16 11C16 11.551 15.551 12 15 12L9 12C8.449 12 8 11.551 8 11Z"}),
          h('path', {"d":"M6 21L6 17C6 16.449 6.449 16 7 16L17 16C17.551 16 18 16.449 18 17L18 21C18 21.551 17.551 22 17 22L7 22C6.449 22 6 21.551 6 21Z"})
        ]
      );
  }
});

export default JustifyTop;
export { JustifyTop };
