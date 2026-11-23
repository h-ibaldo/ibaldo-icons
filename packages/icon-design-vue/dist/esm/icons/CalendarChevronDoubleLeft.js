import { defineComponent, h } from 'vue';

const CalendarChevronDoubleLeft = defineComponent({
  name: 'CalendarChevronDoubleLeft',
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
          h('path', {"d":"M12 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 11"}),
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M2 9L22 9"}),
          h('path', {"d":"M22 22L18 18L22 14"}),
          h('path', {"d":"M17 22L13 18L17 14"})
        ]
      );
  }
});

export default CalendarChevronDoubleLeft;
export { CalendarChevronDoubleLeft };
