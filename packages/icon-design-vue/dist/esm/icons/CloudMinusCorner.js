import { defineComponent, h } from 'vue';

const CloudMinusCorner = defineComponent({
  name: 'CloudMinusCorner',
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
          h('line', {"x1":"16","y1":"3.999999999718057","x2":"22","y2":"3.999999999718057"}),
          h('path', {"d":"M17.5,13.999999999718057h-.5v-1c0-2.761413574229664-2.238586425780341-5-5-5-2.065612792969659,0-3.83740234375,1.253295898439319-4.599792480469659,3.040344238270336-.134338378910797-.01080322263897-.263122558600116-.040344238270336-.400207519530341-.040344238270336-2.761413574219659,0-5,2.238586425770336-5,5,0,2.761413574209655,2.238586425780341,5,5,5h10.5c1.932983398430224,0,3.5-1.567016601560681,3.5-3.5,0-1.932983398430224-1.567016601569776-3.5-3.5-3.5Z"})
        ]
      );
  }
});

export default CloudMinusCorner;
export { CloudMinusCorner };
