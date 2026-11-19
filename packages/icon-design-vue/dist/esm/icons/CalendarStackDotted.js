import { defineComponent, h } from 'vue';

const CalendarStackDotted = defineComponent({
  name: 'CalendarStackDotted',
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
          h('path', {"d":"M8 2L7.922 4"}),
          h('path', {"d":"M14.078 2L14 4"}),
          h('path', {"d":"M8.078 18L8.078 21C8.078 21.551 8.496 22 9.008 22L21.07 22C21.586 22 22 21.551 22 21L22 7C22 6.449 21.555 6 21 6L18 6"}),
          h('path', {"d":"M5 3L17 3C17.551 3 18 3.449 18 4L18 12.93C18 14.254 17.473 15.527 16.535 16.465L15.262 17.738C15.094 17.906 14.867 18 14.629 18L3.172 18C2.371 18 1.969 17.031 2.535 16.465C3.473 15.527 4 14.254 4 12.93L4 4C4 3.449 4.449 3 5 3Z"}),
          h('path', {"d":"M8 8L8 8"}),
          h('path', {"d":"M11 8L11 8"}),
          h('path', {"d":"M14 8L14 8"}),
          h('path', {"d":"M8 11L8 11"}),
          h('path', {"d":"M11 11L11 11"}),
          h('path', {"d":"M14 11L14 11"}),
          h('path', {"d":"M8 14L8 14"}),
          h('path', {"d":"M11 14L11 14"})
        ]
      );
  }
});

export default CalendarStackDotted;
export { CalendarStackDotted };
