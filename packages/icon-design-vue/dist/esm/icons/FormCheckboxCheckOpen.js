import { defineComponent, h } from 'vue';

const FormCheckboxCheckOpen = defineComponent({
  name: 'FormCheckboxCheckOpen',
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
          h('polyline', {"points":"4.999999992849553 10.998779303362426 6.999999992849553 12.998779303362426 9.999999992849553 8.998779303362426"}),
          h('path', {"d":"M5.999999992849553,7.998779303362426h-3c-.552284749830505,0-1,.447715250170404-1,1v6c0,.552284749831415.447715250169495,1,1,1h6c.5522847498396,0,1-.447715250168585,1-1v-1"}),
          h('line', {"x1":"12.999999992849553","y1":"11.998779303362426","x2":"21.999999992849553","y2":"11.998779303362426"})
        ]
      );
  }
});

export default FormCheckboxCheckOpen;
export { FormCheckboxCheckOpen };
