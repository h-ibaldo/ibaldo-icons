import { defineComponent, h } from 'vue';

const ProgressBarDotted = defineComponent({
  name: 'ProgressBarDotted',
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
          h('line', {"x1":"2.984731449512765","y1":"11.000000000480213","x2":"2.974731449512547","y2":"11.000000000480213"}),
          h('line', {"x1":"5.984731449512765","y1":"11.000000000480213","x2":"5.974731449512547","y2":"11.000000000480213"}),
          h('line', {"x1":"8.984731449512765","y1":"11.000000000480213","x2":"8.974731449512547","y2":"11.000000000480213"}),
          h('line', {"x1":"11.984731449512765","y1":"11.000000000480213","x2":"11.974731449512547","y2":"11.000000000480213"}),
          h('line', {"x1":"13.974731449501633","y1":"15.000000000480213","x2":"13.974731449501633","y2":"9.000000000480213"}),
          h('line', {"x1":"4.984731449512765","y1":"13.000000000480213","x2":"4.974731449512547","y2":"13.000000000480213"}),
          h('line', {"x1":"7.984731449512765","y1":"13.000000000480213","x2":"7.974731449512547","y2":"13.000000000480213"}),
          h('line', {"x1":"10.984731449512765","y1":"13.000000000480213","x2":"10.974731449512547","y2":"13.000000000480213"}),
          h('rect', {"x":"1.974731447504112","y":"8.999999996321691","width":"19.999999999999972","height":"6.000000008731547","rx":"2.999997009577438","ry":"2.999997009577438"})
        ]
      );
  }
});

export default ProgressBarDotted;
export { ProgressBarDotted };
