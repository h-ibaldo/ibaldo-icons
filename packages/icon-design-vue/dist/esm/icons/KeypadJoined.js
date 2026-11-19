import { defineComponent, h } from 'vue';

const KeypadJoined = defineComponent({
  name: 'KeypadJoined',
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
          h('rect', {"x":"2.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181"}),
          h('rect', {"x":"8.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181"}),
          h('rect', {"x":"14.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181"}),
          h('rect', {"x":"2.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2"}),
          h('rect', {"x":"8.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2"}),
          h('rect', {"x":"14.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2"}),
          h('rect', {"x":"2.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2"}),
          h('rect', {"x":"8.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2"}),
          h('rect', {"x":"8.974731449503452","y":"17.000000000480213","width":"6","height":"5","rx":"2","ry":"2"}),
          h('rect', {"x":"14.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2"})
        ]
      );
  }
});

export default KeypadJoined;
export { KeypadJoined };
