import { defineComponent, h } from 'vue';

const DownloadDotted = defineComponent({
  name: 'DownloadDotted',
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
          h('polyline', {"points":"16.974731450032778 12.00000000113414 11.974731449356113 17.000000000462023 6.974731450032778 11.999999999786269"}),
          h('line', {"x1":"11.974731451105981","y1":"10.000000000462023","x2":"11.974731449356113","y2":"17.000000000462023"}),
          h('line', {"x1":"11.974731451105981","y1":"6.010000000462242","x2":"11.974731451105981","y2":"6.000000000462023"}),
          h('line', {"x1":"11.974731451105981","y1":"2.010000000462242","x2":"11.974731451105981","y2":"2.000000000462023"}),
          h('path', {"d":"M1.974731450032778,19.000000000462023v1.000000000000909c0,1.104569499659192.895430500331713,2,2,2h16c1.104569499661011,0,2-.895430500340808,2-2v-1.000000000000909"})
        ]
      );
  }
});

export default DownloadDotted;
export { DownloadDotted };
