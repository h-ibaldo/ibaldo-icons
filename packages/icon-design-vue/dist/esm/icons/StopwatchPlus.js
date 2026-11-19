import { defineComponent, h } from 'vue';

const StopwatchPlus = defineComponent({
  name: 'StopwatchPlus',
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
          h('path', {"d":"M20 14C20 18.418 16.418 22 12 22C7.582 22 4 18.418 4 14C4 9.582 7.582 6 12 6C16.418 6 20 9.582 20 14Z"}),
          h('path', {"d":"M5 5L3 7"}),
          h('path', {"d":"M19 5L21 7"}),
          h('path', {"d":"M10 3L14 3"}),
          h('path', {"d":"M12 3L12 6"}),
          h('path', {"d":"M9 14L15 14"}),
          h('path', {"d":"M12 11L12 17"})
        ]
      );
  }
});

export default StopwatchPlus;
export { StopwatchPlus };
