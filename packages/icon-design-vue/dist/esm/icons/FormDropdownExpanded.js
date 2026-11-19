import { defineComponent, h } from 'vue';

const FormDropdownExpanded = defineComponent({
  name: 'FormDropdownExpanded',
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
          h('rect', {"x":"1.974731444101053","y":"2.99999999557258","width":"20","height":"6","rx":"1","ry":"1"}),
          h('line', {"x1":"15.974731444101053","y1":"2.999999995576218","x2":"15.974731444101053","y2":"8.99999999557258"}),
          h('path', {"d":"M1.974731444101053,8.99999999557258v11c0,.552284749828686.447715250169495,1,1,1h12c.552284749828686,0,1-.447715250171314,1-1v-11"})
        ]
      );
  }
});

export default FormDropdownExpanded;
export { FormDropdownExpanded };
