import { defineComponent, h } from 'vue';

const StopwatchOffTick = defineComponent({
  name: 'StopwatchOffTick',
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
          h('path', {"d":"M12 2L12 5"}),
          h('path', {"d":"M10 2L14 2"}),
          h('path', {"d":"M20 6L19 7"}),
          h('path', {"d":"M4 5L21 21"}),
          h('path', {"d":"M19.75 14.953C19.906 14.328 20 13.676 20 13C20 8.582 16.418 5 12 5C11.145 5 10.32 5.137 9.547 5.387"}),
          h('path', {"d":"M6.391 7.301C4.914 8.754 4 10.77 4 13C4 17.418 7.582 21 12 21C14.418 21 16.578 19.922 18.043 18.23"})
        ]
      );
  }
});

export default StopwatchOffTick;
export { StopwatchOffTick };
