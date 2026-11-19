import { defineComponent, h } from 'vue';

const ClockFast = defineComponent({
  name: 'ClockFast',
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
          h('path', {"d":"M2 14L8 14"}),
          h('path', {"d":"M6 22L8 22"}),
          h('path', {"d":"M4 18L8 18"}),
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C7.16 2 3.129 5.438 2.199 10"}),
          h('path', {"d":"M12 7L12 12L17 12"})
        ]
      );
  }
});

export default ClockFast;
export { ClockFast };
