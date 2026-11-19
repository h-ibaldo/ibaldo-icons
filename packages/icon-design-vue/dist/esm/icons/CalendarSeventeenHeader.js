import { defineComponent, h } from 'vue';

const CalendarSeventeenHeader = defineComponent({
  name: 'CalendarSeventeenHeader',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M2 9L22 9"}),
          h('path', {"d":"M14 18L16 13L13 13"}),
          h('path', {"d":"M9.203 18L9.203 13L8.203 13"})
        ]
      );
  }
});

export default CalendarSeventeenHeader;
export { CalendarSeventeenHeader };
