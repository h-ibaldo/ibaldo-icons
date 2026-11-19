import { defineComponent, h } from 'vue';

const PinSearch = defineComponent({
  name: 'PinSearch',
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
          h('circle', {"cx":"17.99999997652958","cy":"16.998779299956368","r":"4"}),
          h('line', {"x1":"15.171569800750149","y1":"19.827209475737618","x2":"12.999999976489562","y2":"21.998779299956368"}),
          h('path', {"d":"M7.999999976489562,1.998779299956368C4.686279273370019,1.998779299956368,1.999999976489562,4.685058596831368,1.999999976489562,7.998779299956368c0,1.9208984375.763061523441138,3.7630615234375,2.121337890630457,5.121337890625l3.878662109369543,3.878662109375,3.878662109380457-3.878662109375c1.358276367180224-1.3582763671875,2.121337890619543-3.200439453125,2.121337890619543-5.121337890625,0-3.313720703125-2.686279296869543-6-6-6Z"}),
          h('circle', {"cx":"7.999999976489562","cy":"7.998779299956368","r":"1"})
        ]
      );
  }
});

export default PinSearch;
export { PinSearch };
