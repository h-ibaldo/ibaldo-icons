import { defineComponent, h } from 'vue';

const GaugeHalf = defineComponent({
  name: 'GaugeHalf',
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
          h('path', {"d":"M19 17L20.938 17C21.457 17 21.887 16.605 21.941 16.09C22.043 15.16 22.016 14.188 21.84 13.199C21.07 8.863 17.398 5.48 13.02 5.051C7.039 4.461 2 9.141 2 15C2 15.371 2.02 15.738 2.063 16.102C2.117 16.613 2.547 17 3.063 17L5 17"}),
          h('path', {"d":"M13.926 17.535C14.223 16.473 13.602 15.367 12.535 15.074C11.473 14.777 10.371 15.398 10.074 16.465C9.777 17.527 10.398 18.629 11.461 18.926C12.527 19.223 13.629 18.602 13.926 17.535Z"}),
          h('path', {"d":"M16.617 11.895L13.336 15.523"})
        ]
      );
  }
});

export default GaugeHalf;
export { GaugeHalf };
