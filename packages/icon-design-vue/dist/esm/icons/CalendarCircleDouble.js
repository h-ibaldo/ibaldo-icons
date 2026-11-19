import { defineComponent, h } from 'vue';

const CalendarCircleDouble = defineComponent({
  name: 'CalendarCircleDouble',
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
          h('path', {"d":"M22 12L22 6C22 4.895 21.105 4 20 4L4 4C2.895 4 2 4.895 2 6L2 20C2 21.105 2.895 22 4 22L12 22"}),
          h('path', {"d":"M22 18.5C22 20.434 20.434 22 18.5 22C16.566 22 15 20.434 15 18.5C15 16.566 16.566 15 18.5 15C20.434 15 22 16.566 22 18.5Z"}),
          h('path', {"d":"M17.945 15.055C17.973 14.875 18 14.691 18 14.5C18 12.566 16.434 11 14.5 11C12.566 11 11 12.566 11 14.5C11 16.434 12.566 18 14.5 18C14.691 18 14.875 17.973 15.055 17.945"})
        ]
      );
  }
});

export default CalendarCircleDouble;
export { CalendarCircleDouble };
