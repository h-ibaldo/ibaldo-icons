import { defineComponent, h } from 'vue';

const CalendarHeartCorner = defineComponent({
  name: 'CalendarHeartCorner',
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
          h('path', {"d":"M22 10L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L10 22"}),
          h('path', {"d":"M14.758 21.414L11.172 17.828C10.066 16.723 10.066 14.934 11.172 13.828C12.277 12.723 14.066 12.723 15.172 13.828L16.172 14.828L17.172 13.828C18.277 12.723 20.066 12.723 21.172 13.828C22.277 14.934 22.277 16.723 21.172 17.828L17.586 21.414C16.805 22.195 15.539 22.195 14.758 21.414Z"})
        ]
      );
  }
});

export default CalendarHeartCorner;
export { CalendarHeartCorner };
