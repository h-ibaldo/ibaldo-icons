import { defineComponent, h } from 'vue';

const CalendarArrowRightIn = defineComponent({
  name: 'CalendarArrowRightIn',
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
          h('path', {"d":"M3 22L20 22C21.105 22 22 21.105 22 20L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 10"}),
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M2 10L22 10"}),
          h('path', {"d":"M9 14L11 16L9 18"}),
          h('path', {"d":"M11 16L2 16"})
        ]
      );
  }
});

export default CalendarArrowRightIn;
export { CalendarArrowRightIn };
