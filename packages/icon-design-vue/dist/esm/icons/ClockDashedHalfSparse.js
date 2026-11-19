import { defineComponent, h } from 'vue';

const ClockDashedHalfSparse = defineComponent({
  name: 'ClockDashedHalfSparse',
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
          h('path', {"d":"M4.492 18.695C4.934 19.199 5.426 19.656 5.957 20.059"}),
          h('path', {"d":"M2.027 11.605C2.016 11.773 2 11.934 2 12.105C2 12.617 2.051 13.113 2.125 13.605"}),
          h('path', {"d":"M5.406 4.598C4.906 5.039 4.449 5.531 4.043 6.063"}),
          h('path', {"d":"M11 22.055C11.328 22.086 11.664 22.105 12 22.105C12.336 22.105 12.672 22.086 13 22.055C18.055 21.551 22 17.289 22 12.105C22 6.918 18.055 2.656 13 2.156C12.672 2.121 12.336 2.105 12 2.105C11.664 2.105 11.328 2.121 11 2.156"}),
          h('path', {"d":"M12 7L12 12L17 14"})
        ]
      );
  }
});

export default ClockDashedHalfSparse;
export { ClockDashedHalfSparse };
