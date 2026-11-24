import { defineComponent, h } from 'vue';

const DraftingCompassArc = defineComponent({
  name: 'DraftingCompassArc',
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
          h('path', {"d":"M9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5Z"}),
          h('path', {"d":"M20 13.945C17.875 15.844 15.074 17 12 17C8.926 17 6.125 15.844 4 13.945"}),
          h('path', {"d":"M13.402 7.652L17.617 15.609"}),
          h('path', {"d":"M19.02 18.258L21 22"}),
          h('path', {"d":"M3 22L10.598 7.652"})
        ]
      );
  }
});

export default DraftingCompassArc;
export { DraftingCompassArc };
