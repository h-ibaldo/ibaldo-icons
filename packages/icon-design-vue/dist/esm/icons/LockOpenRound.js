import { defineComponent, h } from 'vue';

const LockOpenRound = defineComponent({
  name: 'LockOpenRound',
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
          h('circle', {"cx":"11.974731450040053","cy":"15.000000003885361","r":"7.000000000000001"}),
          h('path', {"d":"M16.552612309009419,5.000000003885361c-.772216796869543-1.764404296875-2.528686523430224-3-4.577880859369543-3-2.761413574220569,0-5,2.23858642578125-5,5v3"})
        ]
      );
  }
});

export default LockOpenRound;
export { LockOpenRound };
