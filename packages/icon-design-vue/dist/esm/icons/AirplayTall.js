import { defineComponent, h } from 'vue';

const AirplayTall = defineComponent({
  name: 'AirplayTall',
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
          h('path', {"d":"M17.999999971900252,15.999996564601133h2c1.104553222659888,0,2-1.044687906902254,2-2.333333333332121V4.333329897933254c0-1.288645426429866-.895446777340112-2.333333333332121-2-2.333333333332121H3.999999971900252c-1.104553222659888,0-2,1.044687906902254-2,2.333333333332121v9.333333333335759c0,1.288645426429866.895446777340112,2.333333333332121,2,2.333333333332121h2"}),
          h('polygon', {"points":"11.999999971900252 14.999996564601133 6.999999971889338 21.999996564601133 16.999999971889338 21.999996564601133 11.999999971900252 14.999996564601133"})
        ]
      );
  }
});

export default AirplayTall;
export { AirplayTall };
