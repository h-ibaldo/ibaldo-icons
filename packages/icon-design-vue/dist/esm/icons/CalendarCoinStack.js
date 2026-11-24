import { defineComponent, h } from 'vue';

const CalendarCoinStack = defineComponent({
  name: 'CalendarCoinStack',
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
          h('path', {"d":"M22 11C22 12.656 19.539 14 16.5 14C13.461 14 11 12.656 11 11C11 9.344 13.461 8 16.5 8C19.539 8 22 9.344 22 11Z"}),
          h('path', {"d":"M22 11L22 15C22 16.656 19.539 18 16.5 18C13.461 18 11 16.656 11 15L11 11"}),
          h('path', {"d":"M22 15L22 19C22 20.656 19.539 22 16.5 22C13.461 22 11 20.656 11 19L11 15"}),
          h('path', {"d":"M7 2L7 4"}),
          h('path', {"d":"M15 2L15 4"}),
          h('path', {"d":"M20 8.688L20 5C20 3.895 19.105 3 18 3L4 3C2.895 3 2 3.895 2 5L2 17C2 18.105 2.895 19 4 19L11 19"})
        ]
      );
  }
});

export default CalendarCoinStack;
export { CalendarCoinStack };
