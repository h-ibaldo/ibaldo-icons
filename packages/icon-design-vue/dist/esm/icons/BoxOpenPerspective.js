import { defineComponent, h } from 'vue';

const BoxOpenPerspective = defineComponent({
  name: 'BoxOpenPerspective',
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
          h('line', {"x1":"12","y1":"8.999999999998181","x2":"20","y2":"5.999999999998181"}),
          h('polyline', {"points":"12 8.999999999998181 14 12.999999999998181 22 9.999999999998181 20 5.999999999998181"}),
          h('polyline', {"points":"4 5.999999999998181 2 9.999999999998181 4 10.749999999998181"}),
          h('line', {"x1":"12","y1":"8.999999999998181","x2":"12","y2":"20.999999999998181"}),
          h('line', {"x1":"4","y1":"5.999999999998181","x2":"12","y2":"8.999999999998181"}),
          h('polyline', {"points":"20 5.999999999998181 12 2.999999999998181 4 5.999999999998181 4 17.999999999998181 12 20.999999999998181 20 17.999999999998181 20 10.749999999998181"})
        ]
      );
  }
});

export default BoxOpenPerspective;
export { BoxOpenPerspective };
