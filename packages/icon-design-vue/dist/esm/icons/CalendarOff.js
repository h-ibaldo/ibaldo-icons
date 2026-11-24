import { defineComponent, h } from 'vue';

const CalendarOff = defineComponent({
  name: 'CalendarOff',
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
          h('path', {"d":"M2 18L2 6C2 4.895 2.895 4 4 4L16 4"}),
          h('path', {"d":"M22 7L22 20C22 21.105 21.105 22 20 22L6 22"}),
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 4"}),
          h('path', {"d":"M18.031 10L22 10"}),
          h('path', {"d":"M2 10L10 10"}),
          h('path', {"d":"M2 22L22 2"})
        ]
      );
  }
});

export default CalendarOff;
export { CalendarOff };
