import { defineComponent, h } from 'vue';

const Presentation = defineComponent({
  name: 'Presentation',
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
          h('rect', {"x":"1.999999998490239","y":"1.998782814707738","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"1.999999998490239","y1":"6.9987828147041","x2":"21.999999998490239","y2":"6.9987828147041"}),
          h('line', {"x1":"1.999999998490239","y1":"16.9987828147041","x2":"21.999999998490239","y2":"16.9987828147041"})
        ]
      );
  }
});

export default Presentation;
export { Presentation };
