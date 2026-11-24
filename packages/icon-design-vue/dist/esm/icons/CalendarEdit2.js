import { defineComponent, h } from 'vue';

const CalendarEdit2 = defineComponent({
  name: 'CalendarEdit2',
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
          h('path', {"d":"M2.172 10L10.172 10"}),
          h('path', {"d":"M16.172 9L20.172 13"}),
          h('path', {"d":"M7.172 2L7.172 6"}),
          h('path', {"d":"M15.172 2L15.172 4"}),
          h('path', {"d":"M18.172 4L4.172 4C3.066 4 2.172 4.895 2.172 6L2.172 20C2.172 21.105 3.066 22 4.172 22L18.172 22C19.277 22 20.172 21.105 20.172 20L20.172 18"}),
          h('path', {"d":"M11.172 14L11.172 18L15.172 18L21.172 12C22.277 10.895 22.277 9.105 21.172 8C20.066 6.895 18.277 6.895 17.172 8Z"})
        ]
      );
  }
});

export default CalendarEdit2;
export { CalendarEdit2 };
