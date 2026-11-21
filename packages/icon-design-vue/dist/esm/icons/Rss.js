import { defineComponent, h } from 'vue';

const Rss = defineComponent({
  name: 'Rss',
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
          h('path', {"d":"M4 18C4 16.895 4.895 16 6 16C7.105 16 8 16.895 8 18C8 19.105 7.105 20 6 20C4.895 20 4 19.105 4 18Z"}),
          h('path', {"d":"M5 10C9.969 10 14 14.031 14 19"}),
          h('path', {"d":"M5 4C13.285 4 20 10.715 20 19"})
        ]
      );
  }
});

export default Rss;
export { Rss };
