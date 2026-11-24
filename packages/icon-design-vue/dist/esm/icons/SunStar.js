import { defineComponent, h } from 'vue';

const SunStar = defineComponent({
  name: 'SunStar',
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
          h('polygon', {"points":"19 14.899536132808862 21.899536132808862 11.999999999998181 19 9.1004638671875 19 4.999999999998181 14.899536132808862 4.999999999998181 12 2.1004638671875 9.100463867191138 4.999999999998181 5 4.999999999998181 5 9.100524902338293 2.1005859375 11.999999999998181 5 14.899475097658069 5 18.999999999998181 9.1005859375 18.999999999998181 12 21.899475097658069 14.8994140625 18.999999999998181 19 18.999999999998181 19 14.899536132808862"}),
          h('circle', {"cx":"12","cy":"11.999999999998181","r":"4"})
        ]
      );
  }
});

export default SunStar;
export { SunStar };
