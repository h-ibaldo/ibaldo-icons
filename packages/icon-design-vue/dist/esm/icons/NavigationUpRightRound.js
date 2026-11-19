import { defineComponent, h } from 'vue';

const NavigationUpRightRound = defineComponent({
  name: 'NavigationUpRightRound',
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
          h('path', {"d":"M18.383 3.082L4.488 7.051C2.578 7.598 2.48 10.27 4.352 10.949L9.547 12.84C10.297 13.113 10.887 13.703 11.16 14.457L13.051 19.648C13.727 21.52 16.402 21.426 16.949 19.512L20.918 5.617C21.359 4.07 19.93 2.641 18.383 3.082Z"})
        ]
      );
  }
});

export default NavigationUpRightRound;
export { NavigationUpRightRound };
