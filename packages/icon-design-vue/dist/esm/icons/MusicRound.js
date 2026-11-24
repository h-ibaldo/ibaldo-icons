import { defineComponent, h } from 'vue';

const MusicRound = defineComponent({
  name: 'MusicRound',
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
          h('path', {"d":"M22,9.999999999998181v4l-3.000003000060133.000000000009095c-1.656852592599535,0-2.999996999939867,1.343144407332147-2.999996999939867,2.999996999940777v.000006000111171c0,1.656852592608629,1.343144407340333,2.999996999938958,2.999996999939867,2.999996999938958h.000006000120266c1.656852592599535,0,2.999996999939867-1.343144407341242,2.999996999939867-2.999996999938958V1.999999999998181l-14,3v14.000003000061042c0,1.656852592597716-1.343144407340333,2.999996999938958-2.999996999939867,2.999996999938958h-.000006000120266c-1.656852592599535,0-2.999996999939867-1.343144407341242-2.999996999939867-2.999996999938958v-.000006000002031c0-1.656852592648647,1.343144407410364-2.999997000009898,2.999997000059921-2.999996999938958l3.000002999940079.000000000120053v-4.000000000240107"})
        ]
      );
  }
});

export default MusicRound;
export { MusicRound };
