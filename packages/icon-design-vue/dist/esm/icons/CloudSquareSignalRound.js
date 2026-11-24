import { defineComponent, h } from 'vue';

const CloudSquareSignalRound = defineComponent({
  name: 'CloudSquareSignalRound',
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
          h('path', {"d":"M22,10.999999973497324v6.000000000271029c0,2.761423749148889-2.238576250849292,5-5,5H7c-2.761423749159803,0-5-2.238576250851111-5-5V6.999999973768354c0-2.761423749159803,2.238576250840197-5,5-5h6"}),
          h('path', {"d":"M17,1.999999973768354c2.761423749150708,0,5,2.238576250840197,5,5"}),
          h('path', {"d":"M15.5,10.999999973497324h-.5c0-1.656860351558862-1.343139648439319-3-3-3s-3,1.343139648441138-3,3h-.5c-1.380737304689319,0-2.5,1.119262695301586-2.5,2.5,0,1.380737304691138,1.119262695310681,2.5,2.5,2.5h7c1.380737304689319,0,2.5-1.119262695308862,2.5-2.5,0-1.380737304698414-1.119262695310681-2.5-2.5-2.5Z"}),
          h('path', {"d":"M19,6.999999973497324c0-1.104569499599165-.895430500400835-2-2-2"})
        ]
      );
  }
});

export default CloudSquareSignalRound;
export { CloudSquareSignalRound };
