import { defineComponent, h } from 'vue';

const TranslateSync = defineComponent({
  name: 'TranslateSync',
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
          h('path', {"d":"M20.025268548975873,13.997565476121054c-2,1-5,3-5,5s3,3,6,2"}),
          h('path', {"d":"M18.025268548975873,11.997565476121054c-1.236875890319425-.590576526228688-2,.375003337849193-2,1,0,1,1,2,2,2"}),
          h('polyline', {"points":"2.025268548975873 10.997565476121054 6.025268548975873 1.997565476121054 10.025268548975873 10.997565476121054"}),
          h('line', {"x1":"3.025268548975873","y1":"8.997565476121054","x2":"9.025268548975873","y2":"8.997565476121054"}),
          h('g', {}, [
            h('path', {"d":"M19.025268548975873,7.997565476121054v-2c0-1.104569499661011-.895430500340808-2-2-2h-4"}),
            h('polyline', {"points":"15.025268548975873 1.997565476121054 13.025268548975873 3.997565476121054 15.025268548975873 5.997565476121054"})
          ]),
          h('g', {}, [
            h('path', {"d":"M5.025268549246903,15.997565475851843l-.000000000181899,2c-.000000000098225,1.104569499661011.895430500160728,2.000000000080036,1.999999999821739,2.000000000178261l4,.00000000036016"}),
            h('polyline', {"points":"9.025268548706663 21.997565476212003 11.025268548886743 19.997565476390264 9.025268549065004 17.997565476212003"})
          ])
        ]
      );
  }
});

export default TranslateSync;
export { TranslateSync };
