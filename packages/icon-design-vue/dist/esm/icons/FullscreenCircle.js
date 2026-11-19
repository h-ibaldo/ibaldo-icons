import { defineComponent, h } from 'vue';

const FullscreenCircle = defineComponent({
  name: 'FullscreenCircle',
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
          h('circle', {"cx":"12.000000002980414","cy":"11.998779299186936","r":"10"}),
          h('polyline', {"points":"8.000000002980414 11.998779299186936 8.000000002980414 7.998779299186936 12.000000002980414 7.998779299186936"}),
          h('polyline', {"points":"16.000000002980414 11.998779299186936 16.000000002980414 15.998779299186936 12.000000002980414 15.998779299186936"})
        ]
      );
  }
});

export default FullscreenCircle;
export { FullscreenCircle };
