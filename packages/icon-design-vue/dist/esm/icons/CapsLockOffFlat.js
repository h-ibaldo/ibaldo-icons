import { defineComponent, h } from 'vue';

const CapsLockOffFlat = defineComponent({
  name: 'CapsLockOffFlat',
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
          h('line', {"x1":"6.999999977100742","y1":"21.999996563434252","x2":"16.999999977100742","y2":"21.999996563434252"}),
          h('line', {"x1":"20.999999977100742","y1":"2.999996563434252","x2":"2.999999977100742","y2":"20.999996563434252"}),
          h('g', {}, [
            h('polyline', {"points":"16.761901832569492 7.238094707965502 11.999999977100742 1.999996563434252 1.999999977100742 12.999996563434252 6.999999977100742 12.999996563434252 6.999999977100742 16.999996563434252"}),
            h('polyline', {"points":"10.999999977100742 17.999996563434252 16.999999977100742 17.999996563434252 16.999999977100742 12.999996563434252 21.999999977100742 12.999996563434252 19.142883277880173 9.857113262653002"})
          ])
        ]
      );
  }
});

export default CapsLockOffFlat;
export { CapsLockOffFlat };
