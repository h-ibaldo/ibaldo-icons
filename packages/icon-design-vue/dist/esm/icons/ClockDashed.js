import { defineComponent, h } from 'vue';

const ClockDashed = defineComponent({
  name: 'ClockDashed',
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
          h('path', {"d":"M3.66 17.512C4.402 18.633 5.367 19.598 6.488 20.34"}),
          h('path', {"d":"M2.199 10C2.07 10.645 2 11.316 2 12C2 12.684 2.07 13.355 2.199 14"}),
          h('path', {"d":"M6.488 3.66C5.367 4.402 4.402 5.367 3.66 6.488"}),
          h('path', {"d":"M20.34 17.512C19.598 18.633 18.633 19.598 17.512 20.34"}),
          h('path', {"d":"M21.801 10C21.93 10.645 22 11.316 22 12C22 12.684 21.93 13.355 21.801 14"}),
          h('path', {"d":"M14 2.199C13.355 2.07 12.684 2 12 2C11.316 2 10.645 2.07 10 2.199"}),
          h('path', {"d":"M14 21.797C13.355 21.93 12.684 22 12 22C11.316 22 10.645 21.93 10 21.797"}),
          h('path', {"d":"M17.512 3.66C18.633 4.402 19.598 5.367 20.34 6.488"}),
          h('path', {"d":"M12 7L12 12L17 14"})
        ]
      );
  }
});

export default ClockDashed;
export { ClockDashed };
