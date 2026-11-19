import { defineComponent, h } from 'vue';

const MusicNoteCurlSmall = defineComponent({
  name: 'MusicNoteCurlSmall',
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
          h('ellipse', {"cx":"9","cy":"18.499999499998012","rx":"4","ry":"3.500000500000169"}),
          h('path', {"d":"M20,8.999996998138158c0-1.656853143769695-1.343144854368802-2.999997997789251-2.999997998140316-2.99999799733996h-.000007000000551c-2.209136238749124.000000000580258-3.999995001859133-1.790858763140932-3.999995001859133-3.999995000800482v-.000003999999535,16.5"})
        ]
      );
  }
});

export default MusicNoteCurlSmall;
export { MusicNoteCurlSmall };
