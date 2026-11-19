import { defineComponent, h } from 'vue';

const LockCheckNarrow = defineComponent({
  name: 'LockCheckNarrow',
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
          h('rect', {"x":"4.974731450040053","y":"10.000000003885361","width":"14","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M16.974731450040053,10.000000003885361v-3.000004999998055c0-2.761420987731981-2.238574012269964-4.999995000001945-4.999994999989212-4.999995000001945h-.000009999999747c-2.761420987741076,0-4.99999500001104,2.238574012269964-4.99999500001104,4.999995000001945v3.000004999998055"}),
          h('polyline', {"points":"8.974731450040053 16.000000010033546 10.974731450040053 18.000000003703462 14.974731450040053 14.000000003885361"})
        ]
      );
  }
});

export default LockCheckNarrow;
export { LockCheckNarrow };
