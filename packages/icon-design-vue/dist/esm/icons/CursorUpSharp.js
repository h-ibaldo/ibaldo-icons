import { defineComponent, h } from 'vue';

const CursorUpSharp = defineComponent({
  name: 'CursorUpSharp',
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
          h('path', {"d":"M9,21.970769791338171l.000008920840628-6.000087301210442-5.000008920840628.00000465435005L12.029418957250527,1.970687144486874l7.970581042749473,14.000082646851297-5-.000082646860392-.000008920840628,6.000087301210442-5.999991079159372-.00000465435005Z"})
        ]
      );
  }
});

export default CursorUpSharp;
export { CursorUpSharp };
