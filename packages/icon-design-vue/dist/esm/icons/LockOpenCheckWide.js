import { defineComponent, h } from 'vue';

const LockOpenCheckWide = defineComponent({
  name: 'LockOpenCheckWide',
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
          h('path', {"d":"M14.949462885141656,7.000000000480213c0-2.76141357421875-2.238525390625-5-5-5s-5,2.23858642578125-5,5v6"}),
          h('path', {"d":"M10.949462885144385,22.000000000480213H2.949462885141656c-.552284749830505,0-1-.447715250171314-1-1v-7c0-.552284749832324.447715250169495-1,1-1h14.000000000002728c.552284749830505,0,1,.447715250167676,1,1v1"}),
          h('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213"})
        ]
      );
  }
});

export default LockOpenCheckWide;
export { LockOpenCheckWide };
