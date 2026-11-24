import { defineComponent, h } from 'vue';

const SunPointed = defineComponent({
  name: 'SunPointed',
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
          h('polygon', {"points":"17.797607421869543 14.401428222658069 22 11.999999999998181 17.797607421869543 9.598571777338293 19.071044921869543 4.92889404296875 14.4013671875 6.202453613277612 12 1.999999999998181 9.5986328125 6.202453613277612 4.928955078119543 4.92889404296875 6.202514648439319 9.598571777338293 2 11.999999999998181 6.202514648439319 14.401428222658069 4.928955078119543 19.071044921867724 9.5986328125 17.797485351558862 12 21.999999999998181 14.4013671875 17.797485351558862 19.071044921869543 19.071044921867724 17.797607421869543 14.401428222658069"}),
          h('circle', {"cx":"12","cy":"11.999999999998181","r":"3"})
        ]
      );
  }
});

export default SunPointed;
export { SunPointed };
