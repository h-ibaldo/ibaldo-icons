import { defineComponent, h } from 'vue';

const ArrowSyncHexagon = defineComponent({
  name: 'ArrowSyncHexagon',
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
          h('polyline', {"points":"1.999999999869942 13 4.999999999869942 11 7.999999999869942 13"}),
          h('polyline', {"points":"22 11 18.99999999972988 13.000000000258296 16 10.999999999457941"}),
          h('path', {"d":"M18.999999999869942,13.00000000026921v-3.970764209690969c0-.645902206539176-.311931367979923-1.252043910568318-.83752361256029-1.627466942409228l-5.120015004169545-3.657153574409676c-.635388136970505-.453848669270883-1.476803298590312-.496419893579514-2.154754264150142-.10901934182948l-5.887707119120023,3.364404068070144"}),
          h('path', {"d":"M4.999999999869942,11v3.970764209409026c0,.645902206540995.311931367969919,1.252043910570137.83752361256029,1.627466942420142l5.120015004169545,3.657153574398762c.635388136970505.453848669270883,1.476803298580307.496419893581333,2.154754264150142.109019341831299l5.887707119120023-3.36440406805923"})
        ]
      );
  }
});

export default ArrowSyncHexagon;
export { ArrowSyncHexagon };
