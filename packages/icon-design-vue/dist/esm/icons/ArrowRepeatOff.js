import { defineComponent, h } from 'vue';

const ArrowRepeatOff = defineComponent({
  name: 'ArrowRepeatOff',
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
          h('polyline', {"points":"16.999999999548891 1.99999999973079 19.999999999690772 4.999999999599822 16.99999999981992 7.99999999973079"}),
          h('line', {"x1":"2","y1":"2","x2":"22","y2":"22"}),
          h('g', {}, [
            h('path', {"d":"M20,5h-11c-1.15972900390625,0-2.2509765625.28662109375-3.21417236328125.785888671872272"}),
            h('path', {"d":"M3.1541748046875,8.154174804680224c-.72784423828125,1.104125976569776-1.1541748046875,2.424560546878638-1.1541748046875,3.845825195319776v1"})
          ]),
          h('polyline', {"points":"6.999999999461579 22 3.999999999591637 18.999999999859938 6.99999999973079 16"}),
          h('g', {}, [
            h('path', {"d":"M3.999999999281499,18.99999999945976l11,.000000000980435c1.15972900390625.000000000109139,2.250976562525466-.286621093538997,3.214172363352191-.785888671580324"}),
            h('path', {"d":"M20.845825194875943,15.845825196280202c.727844238381294-1.104125976500654,1.15417480490396-2.424560546769499,1.154174805033108-3.845825195210637l.000000000090949-1"})
          ])
        ]
      );
  }
});

export default ArrowRepeatOff;
export { ArrowRepeatOff };
