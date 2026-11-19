import { defineComponent, h } from 'vue';

const ListSearchRing = defineComponent({
  name: 'ListSearchRing',
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
          h('circle', {"cx":"17.999999976489562","cy":"15.998779299956368","r":"4"}),
          h('line', {"x1":"15.171569800710131","y1":"18.827209475737618","x2":"11.999999976489562","y2":"21.998779299956368"}),
          h('circle', {"cx":"2.999999976485014","cy":"2.998779299956368","r":"1.000000000002274"}),
          h('circle', {"cx":"2.999999976485014","cy":"7.998779299956368","r":"1.000000000002274"}),
          h('circle', {"cx":"2.999999976485014","cy":"12.998779299956368","r":"1.000000000002274"}),
          h('line', {"x1":"7.999999976489562","y1":"2.998779299956368","x2":"18.999999976489562","y2":"2.998779299956368"}),
          h('line', {"x1":"7.999999976489562","y1":"7.998779299956368","x2":"18.999999976489562","y2":"7.998779299956368"}),
          h('line', {"x1":"7.999999976489562","y1":"12.998779299956368","x2":"10.999999976489562","y2":"12.998779299956368"})
        ]
      );
  }
});

export default ListSearchRing;
export { ListSearchRing };
