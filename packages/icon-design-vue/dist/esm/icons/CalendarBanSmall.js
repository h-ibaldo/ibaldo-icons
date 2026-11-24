import { defineComponent, h } from 'vue';

const CalendarBanSmall = defineComponent({
  name: 'CalendarBanSmall',
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
          h('path', {"d":"M22 16.664C22 19.699 19.539 22.164 16.5 22.164C13.461 22.164 11 19.699 11 16.664C11 13.625 13.461 11.164 16.5 11.164C19.539 11.164 22 13.625 22 16.664Z"}),
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M13 20.164L20 13.164"}),
          h('path', {"d":"M21 13.508L21 6C21 4.895 20.105 4 19 4L5 4C3.895 4 3 4.895 3 6L3 19.16C3 20.266 3.895 21.16 5 21.16L13.344 21.16"})
        ]
      );
  }
});

export default CalendarBanSmall;
export { CalendarBanSmall };
