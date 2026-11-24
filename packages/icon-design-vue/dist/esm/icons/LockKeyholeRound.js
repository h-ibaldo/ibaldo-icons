import { defineComponent, h } from 'vue';

const LockKeyholeRound = defineComponent({
  name: 'LockKeyholeRound',
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
          h('path', {"d":"M6.949462885139837,10.000000000480213v-3c0-2.761420987731981,2.238574012269964-5,4.999995000000126-5l.000009999999747.000004999998055c2.761420987730162,0,4.999995000000126,2.238574012269964,4.999995000000126,4.999995000001945v3"}),
          h('circle', {"cx":"11.949462885139837","cy":"15.000000000480213","r":"7.000000000000001"}),
          h('line', {"x1":"11.949462885139837","y1":"18.000000000480213","x2":"11.949462885139837","y2":"14.000000000480213"}),
          h('circle', {"cx":"11.949462885139837","cy":"13.000000000480213","r":"1"})
        ]
      );
  }
});

export default LockKeyholeRound;
export { LockKeyholeRound };
