import { defineComponent, h } from 'vue';

const PresentationFile = defineComponent({
  name: 'PresentationFile',
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
          h('path', {"d":"M19.999999998490239,5.9987828147041v14c0,1.104569499661011-.895430500339899,2-2,2H5.999999998490239c-1.104569499660101,0-2-.895430500338989-2-2V3.9987828147041c0-1.104569499661011.895430500339899-2,2-2h10l4,4h-4V1.9987828147041"}),
          h('rect', {"x":"7.999999998490239","y":"9.9987828147041","width":"8","height":"6","rx":"1","ry":"1"})
        ]
      );
  }
});

export default PresentationFile;
export { PresentationFile };
