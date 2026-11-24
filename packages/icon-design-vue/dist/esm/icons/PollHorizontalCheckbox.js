import { defineComponent, h } from 'vue';

const PollHorizontalCheckbox = defineComponent({
  name: 'PollHorizontalCheckbox',
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
          h('rect', {"x":"9.999999999810825","y":"1.99999999981992","width":"6","height":"4"}),
          h('rect', {"x":"9.999999999810825","y":"9.99999999981992","width":"12","height":"4"}),
          h('rect', {"x":"9.999999999810825","y":"17.99999999981992","width":"9","height":"4"}),
          h('rect', {"x":"1.999999999810825","y":"1.99999999981992","width":"4","height":"4"}),
          h('rect', {"x":"1.999999999810825","y":"9.99999999981992","width":"4","height":"4"}),
          h('rect', {"x":"1.999999999810825","y":"17.99999999981992","width":"4","height":"4"})
        ]
      );
  }
});

export default PollHorizontalCheckbox;
export { PollHorizontalCheckbox };
