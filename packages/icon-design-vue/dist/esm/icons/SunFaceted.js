import { defineComponent, h } from 'vue';

const SunFaceted = defineComponent({
  name: 'SunFaceted',
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
          h('path', {"d":"M19.716796875,15.196411132808862l2.283203125-3.196411132810681-2.283203125-3.196350097659888-.645751953130457-3.874755859369543-3.874755859369543-.645751953130457-3.1962890625-2.283142089840112-3.196411132810681,2.283142089840112-3.874633789069776.645751953130457-.645751953119543,3.87469482421875-2.283203125,3.196411132810681,2.283203125,3.196472167970569.645751953119543,3.874572753898974,3.87451171875.645751953130457,3.196533203130457,2.283203125,3.196411132810681-2.283142089840112,3.874633789058862-.645812988290345.645751953130457-3.874633789058862Z"}),
          h('circle', {"cx":"12","cy":"11.999999999998181","r":"5"})
        ]
      );
  }
});

export default SunFaceted;
export { SunFaceted };
