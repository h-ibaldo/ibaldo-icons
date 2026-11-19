import { defineComponent, h } from 'vue';

const DownloadTraySquare = defineComponent({
  name: 'DownloadTraySquare',
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
          h('path', {"d":"M14.974731450030959,17.000000000459295h0c0,.552284749832324-.447715250180408,1-1,1h-4c-.552284749841419,0-1-.447715250167676-1-1h0c0-.552284749828686-.447715250180408-1-1-1H1.974731450030959v4c0,1.104569499661011.895430500328075,2,2,2h16c1.104569499648278,0,2-.895430500338989,2-2v-4h-6c-.552284749841419,0-1,.447715250171314-1,1Z"}),
          h('path', {"d":"M1.974731450030959,16.000000000459295V4.000000000459295c0-1.104569499661011.895430500328075-2,2-2h16c1.104569499648278,0,2,.895430500338989,2,2v12"}),
          h('polyline', {"points":"8.974731440010146 9.000000008233656 11.974731440010146 12.000000008233656 14.974731440010146 9.000000008233656"}),
          h('line', {"x1":"11.974731440010146","y1":"6.000000008233656","x2":"11.974731440010146","y2":"12.000000008233656"})
        ]
      );
  }
});

export default DownloadTraySquare;
export { DownloadTraySquare };
