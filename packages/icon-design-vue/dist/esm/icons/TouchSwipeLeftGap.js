import { defineComponent, h } from 'vue';

const TouchSwipeLeftGap = defineComponent({
  name: 'TouchSwipeLeftGap',
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
          h('polyline', {"points":"5.025268549024986 14.99878273928698 2.025268549155953 11.998782739152375 5.02526854928692 8.99878273928698"}),
          h('line', {"x1":"10.025268549155953","y1":"11.998782739512535","x2":"2.025268549155953","y2":"11.998782739152375"}),
          h('circle', {"cx":"18.025268549153679","cy":"11.998782739871785","r":"3.999999999999318"})
        ]
      );
  }
});

export default TouchSwipeLeftGap;
export { TouchSwipeLeftGap };
