import { defineComponent, h } from 'vue';

const LockRound = defineComponent({
  name: 'LockRound',
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
          h('path', {"d":"M6.974731450040053,10.000000003885361v-3c0-2.761420987731981,2.238574012269964-5,4.99999500001104-5l.000009999999747.000004999998055c2.761420987719248,0,4.999994999989212,2.238574012269964,4.999994999989212,4.999995000001945v3"}),
          h('circle', {"cx":"11.974731450040053","cy":"15.000000003885361","r":"7.000000000000001"})
        ]
      );
  }
});

export default LockRound;
export { LockRound };
