import { defineComponent, h } from 'vue';

const DiagramChain = defineComponent({
  name: 'DiagramChain',
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
          h('rect', {"x":"2.016630450971206","y":"3.000000000480213","width":"4","height":"4"}),
          h('rect', {"x":"18.016630450973025","y":"10.000000000480213","width":"4","height":"4"}),
          h('rect', {"x":"10.016630450973025","y":"3.000000000480213","width":"4","height":"4"}),
          h('rect', {"x":"2.016630450971206","y":"17.000000000480213","width":"4","height":"4"}),
          h('rect', {"x":"10.016630450973025","y":"17.000000000480213","width":"4","height":"4"}),
          h('line', {"x1":"6.016630450973025","y1":"5.000000000480213","x2":"10.016630450973025","y2":"5.000000000480213"}),
          h('line', {"x1":"6.016630450973025","y1":"19.000000000480213","x2":"10.016630450973025","y2":"19.000000000480213"}),
          h('path', {"d":"M14.016630450973025,5.000000000480213h5c.552284749829596,0,1,.447715250167676,1,1v4"}),
          h('path', {"d":"M14.016630450973025,19.000000000480213h5c.552284749829596,0,1-.447715250171314,1-1v-4"})
        ]
      );
  }
});

export default DiagramChain;
export { DiagramChain };
