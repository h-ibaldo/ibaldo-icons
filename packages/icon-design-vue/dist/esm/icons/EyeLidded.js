import { defineComponent, h } from 'vue';

const EyeLidded = defineComponent({
  name: 'EyeLidded',
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
          h('path', {"d":"M12.025268548975873,5.997565475895499c-4.272705078119543,0-8.178466796869543,2.44097900390625-10,6,1.821533203130457,3.55902099609375,5.727294921880457,6,10,6,4.272705078130457,0,8.178466796880457-2.44097900390625,10-6-1.821533203119543-3.55902099609375-5.727294921869543-6-10-6Z"}),
          h('path', {"d":"M7.470581048975873,6.954901901676749c-.281005859369543.62493896484375-.4453125,1.3131103515625-.4453125,2.04266357421875,0,2.76141357421875,2.238525390630457,5,5,5,2.761474609380457,0,5-2.23858642578125,5-5,0-.72955322265625-.164306640619543-1.417724609375-.4453125-2.04266357421875"})
        ]
      );
  }
});

export default EyeLidded;
export { EyeLidded };
