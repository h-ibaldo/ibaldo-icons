import { defineComponent, h } from 'vue';

const CalendarStar = defineComponent({
  name: 'CalendarStar',
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
          h('path', {"d":"M22 19L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 19C2 20.105 2.895 21 4 21L20 21C21.105 21 22 20.105 22 19Z"}),
          h('path', {"d":"M12.32 8.203L13.512 10.621L16.18 11.008C16.723 11.086 16.941 11.754 16.547 12.141L14.617 14.02L15.074 16.676C15.164 17.219 14.598 17.629 14.109 17.375L11.727 16.121L9.34 17.375C8.852 17.629 8.285 17.219 8.379 16.676L8.832 14.02L6.902 12.141C6.512 11.754 6.727 11.086 7.273 11.008L9.938 10.621L11.129 8.203C11.375 7.711 12.078 7.711 12.32 8.203Z"})
        ]
      );
  }
});

export default CalendarStar;
export { CalendarStar };
