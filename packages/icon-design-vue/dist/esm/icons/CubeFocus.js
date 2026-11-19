import { defineComponent, h } from 'vue';

const CubeFocus = defineComponent({
  name: 'CubeFocus',
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
          h('polygon', {"points":"11.999999977619154 11.999996562448359 18.999999977490006 7.999996562222805 11.999999977349944 3.999996562448359 4.999999977490006 7.999996562670276 11.999999977619154 11.999996562448359"}),
          h('polyline', {"points":"4.999999977490006 7.999996562670276 4.999999977761036 15.999996562670276 11.999999977890184 19.999996562448359 18.999999977761036 15.999996562222805 18.999999977490006 7.999996562222805"}),
          h('line', {"x1":"11.999999977619154","y1":"11.999996562448359","x2":"11.999999977890184","y2":"19.999996562448359"}),
          h('polyline', {"points":"21.999999977098923 4.999996563434252 21.999999977098923 1.999996563434252 18.999999977098923 1.999996563434252"}),
          h('polyline', {"points":"4.999999977209882 1.999996563547029 1.999999977209882 1.999996563321474 1.999999976989784 4.999996563321474"}),
          h('polyline', {"points":"1.999999976989784 18.999996563434252 1.999999976989784 21.999996563434252 4.999999976989784 21.999996563434252"}),
          h('polyline', {"points":"18.999999976880645 21.999996563325112 21.999999976880645 21.999996563547029 21.999999977098923 18.999996563547029"})
        ]
      );
  }
});

export default CubeFocus;
export { CubeFocus };
