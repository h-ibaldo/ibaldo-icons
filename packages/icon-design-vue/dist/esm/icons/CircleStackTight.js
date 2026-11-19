import { defineComponent, h } from 'vue';

const CircleStackTight = defineComponent({
  name: 'CircleStackTight',
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
          h('circle', {"cx":"8.999999976489562","cy":"14.998779299956368","r":"7.000000000000001"}),
          h('path', {"d":"M18.214172339779907,15.212951663237618c2.247497558590112-1.1649169921875,3.785827636709655-3.5079345703125,3.785827636709655-6.21417236328125,0-3.865966796875-3.134033203119543-7-7-7-2.706237792959655,0-5.049255371090112,1.538330078125-6.214172363279431,3.78582763671875"}),
          h('path', {"d":"M15.214172339779907,18.212951663237618c2.247497558590112-1.1649169921875,3.785827636709655-3.5079345703125,3.785827636709655-6.21417236328125,0-3.865966796875-3.134033203119543-7-7-7-2.706237792959655,0-5.049255371090112,1.538330078125-6.214172363279431,3.78582763671875"})
        ]
      );
  }
});

export default CircleStackTight;
export { CircleStackTight };
