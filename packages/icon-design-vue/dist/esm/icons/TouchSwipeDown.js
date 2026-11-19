import { defineComponent, h } from 'vue';

const TouchSwipeDown = defineComponent({
  name: 'TouchSwipeDown',
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
          h('polyline', {"points":"9.025268549155953 16.998782739599847 12.025268549155953 19.998782739599847 15.025268549155953 16.998782739599847"}),
          h('line', {"x1":"12.025268549155953","y1":"11.998782739599847","x2":"12.025268549155953","y2":"19.998782739599847"}),
          h('circle', {"cx":"12.025268549155953","cy":"7.998782739599847","r":"4"})
        ]
      );
  }
});

export default TouchSwipeDown;
export { TouchSwipeDown };
