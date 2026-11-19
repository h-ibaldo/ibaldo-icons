import { defineComponent, h } from 'vue';

const LockOpenKeyholeRound = defineComponent({
  name: 'LockOpenKeyholeRound',
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
          h('circle', {"cx":"11.949462885139837","cy":"15.000000000480213","r":"7.000000000000001"}),
          h('line', {"x1":"11.949462885139837","y1":"18.000000000480213","x2":"11.949462885139837","y2":"14.000000000480213"}),
          h('circle', {"cx":"11.949462885139837","cy":"13.000000000480213","r":"1"}),
          h('path', {"d":"M16.527343744110112,5.000000000480213c-.772216796870453-1.764404296875-2.528686523430224-3-4.577880859370453-3-2.761413574219659,0-5,2.23858642578125-5,5v3"})
        ]
      );
  }
});

export default LockOpenKeyholeRound;
export { LockOpenKeyholeRound };
