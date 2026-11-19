import { defineComponent, h } from 'vue';

const Triangle = defineComponent({
  name: 'Triangle',
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
          h('path', {"d":"M5.144270485039669,21.000000000479304h13.660921930029872c2.303468005589821,0,3.747569597209804-2.488446516097611,2.604729426369886-4.488416815068376l-6.830460965029488-11.953306688777957c-1.151682426600019-2.01544424657277-4.057776426130658-2.01544424657277-5.209458852739772,0l-6.830460965020393,11.953306688777957c-1.142840170839918,1.999970298970766.30126142077097,4.488416815068376,2.604729426389895,4.488416815068376Z"})
        ]
      );
  }
});

export default Triangle;
export { Triangle };
