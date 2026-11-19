import { defineComponent, h } from 'vue';

const AlarmPlusStraight = defineComponent({
  name: 'AlarmPlusStraight',
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
          h('path', {"d":"M18 19L20 21"}),
          h('path', {"d":"M6 19L4 21"}),
          h('path', {"d":"M20 13C20 17.418 16.418 21 12 21C7.582 21 4 17.418 4 13C4 8.582 7.582 5 12 5C16.418 5 20 8.582 20 13Z"}),
          h('path', {"d":"M17 2L21 5"}),
          h('path', {"d":"M7 2L3 5"}),
          h('path', {"d":"M9 13L15 13"}),
          h('path', {"d":"M12 10L12 16"})
        ]
      );
  }
});

export default AlarmPlusStraight;
export { AlarmPlusStraight };
