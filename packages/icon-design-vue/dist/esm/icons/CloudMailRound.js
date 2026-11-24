import { defineComponent, h } from 'vue';

const CloudMailRound = defineComponent({
  name: 'CloudMailRound',
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
          h('rect', {"x":"10","y":"13.301707105227251","width":"12","height":"8.698292868270073","rx":"1","ry":"1"}),
          h('path', {"d":"M10.325256347650793,13.572764234128044l4.9835728771086,4.766210860860156c.38660683541093.369744707911195.995734715061189.369744707911195,1.382341550470301,0l4.983572877110419-4.766210860860156"}),
          h('path', {"d":"M21.559753417970569,9.999999973497324c-.653015136720569-1.486328125-1.995178222659888-2.599487304698414-3.635498046880457-2.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.418884277340112,1.717834472650793,4.43585205078125,4,4.89923095703125"})
        ]
      );
  }
});

export default CloudMailRound;
export { CloudMailRound };
