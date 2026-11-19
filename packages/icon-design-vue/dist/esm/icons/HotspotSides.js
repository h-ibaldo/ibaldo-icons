import { defineComponent, h } from 'vue';

const HotspotSides = defineComponent({
  name: 'HotspotSides',
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
          h('path', {"d":"M16.217372136529775,7.757359313263805c2.343145750430267,2.343145750326585,2.343145750510303,6.142135623807917.000000000190084,8.485281374238184"}),
          h('path', {"d":"M7.732090762479856,16.242640687691164c-2.343145750430267-2.343145750324766-2.343145750519398-6.142135623806098-.000000000190084-8.485281374236365"}),
          h('path', {"d":"M19.04579926121005,4.928932188454382c3.905242917389842,3.905242917211581,3.905242917529904,10.236892706344406.000000000320142,14.142135623728791"}),
          h('path', {"d":"M4.903663637800491,19.071067812503316c-3.905242917390751-3.905242917211581-3.905242917530813-10.236892706347135-.000000000320142-14.142135623731519"}),
          h('circle', {"cx":"11.974731449499814","cy":"12.000000000636646","r":"2"})
        ]
      );
  }
});

export default HotspotSides;
export { HotspotSides };
