import { defineComponent, h } from 'vue';

const KeypadGrid = defineComponent({
  name: 'KeypadGrid',
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
          h('line', {"x1":"2.974731449503452","y1":"7.000000000480213","x2":"20.974731449503452","y2":"7.000000000480213"}),
          h('line', {"x1":"2.974731449503452","y1":"12.000000000480213","x2":"20.974731449503452","y2":"12.000000000480213"}),
          h('line', {"x1":"8.974731449503452","y1":"17.000000000480213","x2":"14.974731449503452","y2":"17.000000000480213"}),
          h('line', {"x1":"14.974731449503452","y1":"2.000000000479304","x2":"14.974731449503452","y2":"17.000000000480213"}),
          h('line', {"x1":"8.974731449503452","y1":"2.000000000479304","x2":"8.974731449503452","y2":"17.000000000480213"}),
          h('polygon', {"points":"20.974731449503452 2.000000000479304 2.974731449503452 2.000000000479304 2.974731449503452 17.000000000480213 8.974731449503452 17.000000000480213 8.974731449503452 22.000000000480213 14.974731449503452 22.000000000480213 14.974731449503452 17.000000000480213 20.974731449503452 17.000000000480213 20.974731449503452 2.000000000479304"})
        ]
      );
  }
});

export default KeypadGrid;
export { KeypadGrid };
