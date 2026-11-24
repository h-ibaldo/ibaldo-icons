import { defineComponent, h } from 'vue';

const CloudLightbulbRound = defineComponent({
  name: 'CloudLightbulbRound',
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
          h('circle', {"cx":"12","cy":"14.899230930528574","r":"4"}),
          h('line', {"x1":"11","y1":"21.899230930528574","x2":"13","y2":"21.899230930528574"}),
          h('path', {"d":"M19,17.569335910997324c1.762451171880457-.772888183590112,3-2.521545410159888,3-4.5693359375,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386709655-2.882202148441138-2.919616699209655-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.093139648441138-2.318725585939319.434509277340112-4.075744628909888,2.462036132808862-4.075744628909888,4.906860351558862,0,2.047790527340112,1.237548828130457,3.796447753909888,3,4.5693359375"})
        ]
      );
  }
});

export default CloudLightbulbRound;
export { CloudLightbulbRound };
