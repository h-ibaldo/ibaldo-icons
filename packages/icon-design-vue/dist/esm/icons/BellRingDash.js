import { defineComponent, h } from 'vue';

const BellRingDash = defineComponent({
  name: 'BellRingDash',
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
          h('line', {"x1":"9.974731449503452","y1":"21.000000000480213","x2":"13.974731449503452","y2":"21.000000000480213"}),
          h('line', {"x1":"18.974731449503452","y1":"17.000000000480213","x2":"4.974731449503452","y2":"17.000000000480213"}),
          h('path', {"d":"M16.974731449503452,17.000000000480213v-7.000005000012607c0-2.761420987728343-2.238574012262688-4.999994999987393-4.999994999985574-4.999994999987393h-.000010000002476c-2.761420987718338,0-4.999994999981027,2.238574012259051-4.999994999988303,4.999994999969203l-.000000000023647,7.000005000030797"}),
          h('line', {"x1":"17.974731449503452","y1":"3.000000000480213","x2":"20.974731449503452","y2":"7.000000000480213"}),
          h('line', {"x1":"5.974731449503452","y1":"3.000000000549335","x2":"2.974731449323372","y2":"7.000000000411092"})
        ]
      );
  }
});

export default BellRingDash;
export { BellRingDash };
