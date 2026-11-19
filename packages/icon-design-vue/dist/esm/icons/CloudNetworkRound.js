import { defineComponent, h } from 'vue';

const CloudNetworkRound = defineComponent({
  name: 'CloudNetworkRound',
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
          h('path', {"d":"M17.924255383690252,7.093139621938462c-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.761413574211474,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425788526,5-5,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862Z"}),
          h('line', {"x1":"5","y1":"21.999999973497324","x2":"19","y2":"21.999999973497324"}),
          h('line', {"x1":"12","y1":"16.999999973497324","x2":"12","y2":"21.999999973497324"})
        ]
      );
  }
});

export default CloudNetworkRound;
export { CloudNetworkRound };
