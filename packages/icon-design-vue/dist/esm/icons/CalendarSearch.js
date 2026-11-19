import { defineComponent, h } from 'vue';

const CalendarSearch = defineComponent({
  name: 'CalendarSearch',
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
          h('path', {"d":"M8 2L8 6"}),
          h('path', {"d":"M16 2L16 6"}),
          h('path', {"d":"M20 16C20 18.211 18.211 20 16 20C13.789 20 12 18.211 12 16C12 13.789 13.789 12 16 12C18.211 12 20 13.789 20 16Z"}),
          h('path', {"d":"M22 22L19 19"}),
          h('path', {"d":"M11 22L4 22C2.895 22 2 21.105 2 20L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 11"})
        ]
      );
  }
});

export default CalendarSearch;
export { CalendarSearch };
