import { defineComponent, h } from 'vue';

const KeySkeletonRight = defineComponent({
  name: 'KeySkeletonRight',
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
          h('circle', {"cx":"6.000019575949409","cy":"12.000015258789062","r":"4"}),
          h('line', {"x1":"22.000019575949409","y1":"12.000015258789062","x2":"10.000019575949409","y2":"12.000015258789062"}),
          h('line', {"x1":"20.000019575949409","y1":"16.000015258789062","x2":"20.000019575949409","y2":"12.000015258789062"}),
          h('line', {"x1":"16.000019575949409","y1":"16.000015258789062","x2":"16.000019575949409","y2":"12.000015258789062"})
        ]
      );
  }
});

export default KeySkeletonRight;
export { KeySkeletonRight };
