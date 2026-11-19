import { defineComponent, h } from 'vue';

const ClockSend = defineComponent({
  name: 'ClockSend',
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
          h('polyline', {"points":"8.99999999973079 6.00000000001819 8.999999999869033 9.00000000001819 12 9.000000000158252"}),
          h('line', {"x1":"15.00000000026921","y1":"17.999999999758074","x2":"16.000000000220098","y2":"16.999999999708962"}),
          h('polygon', {"points":"18.000000000451109 21.999999999607098 21.999999999949068 10.999999999437932 11.000000000130967 14.99999999992724 15.00000000026921 17.999999999748979 18.000000000451109 21.999999999607098"}),
          h('path', {"d":"M8.000000000170985,15.920410156319122c-3.39105224611194-.486328124850843-6.000000000150976-3.394897460671928-6.000000000301952-6.92041015598079-.000000000178261-3.865966796880457,3.133972167650427-7.000000000140062,6.999999999679858-7.000000000320142,3.865966796871362-.000000000170985,7.000000000141881,3.13403320281941,7.000000000320142,6.999999999690772.000000000010914.340454101558862-.032531738259422.672607421878638-.079528808550094,1"})
        ]
      );
  }
});

export default ClockSend;
export { ClockSend };
