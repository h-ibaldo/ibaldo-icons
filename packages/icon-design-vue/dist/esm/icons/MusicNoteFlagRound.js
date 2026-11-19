import { defineComponent, h } from 'vue';

const MusicNoteFlagRound = defineComponent({
  name: 'MusicNoteFlagRound',
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
          h('ellipse', {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5"}),
          h('path', {"d":"M12,6.999999999998181l8,2v-1.876894374379845c0-1.835470567519224-1.249189494539678-3.435402999260987-3.029857499859645-3.88057000057961l-4.970142500140355-1.242535625040546v16"})
        ]
      );
  }
});

export default MusicNoteFlagRound;
export { MusicNoteFlagRound };
