import { defineComponent, h } from 'vue';

const SatelliteDishTall = defineComponent({
  name: 'SatelliteDishTall',
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
          h('path', {"d":"M6 6.961C6 5.156 6.477 3.465 7.309 2L21 15.688C19.535 16.523 17.844 17 16.035 17C10.492 17 6 12.508 6 6.961Z"}),
          h('path', {"d":"M11 5L20 3L18 12"}),
          h('path', {"d":"M15 8L20 3"}),
          h('path', {"d":"M19 3C19 2.449 19.449 2 20 2C20.551 2 21 2.449 21 3C21 3.551 20.551 4 20 4C19.449 4 19 3.551 19 3Z"}),
          h('path', {"d":"M16 22L3 22"}),
          h('path', {"d":"M8 22L8 13"}),
          h('path', {"d":"M11 22L11 16"})
        ]
      );
  }
});

export default SatelliteDishTall;
export { SatelliteDishTall };
