import { defineComponent, h } from 'vue';

const Newspaper = defineComponent({
  name: 'Newspaper',
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
          h('path', {"d":"M19.99998794023486,21.936828613277612H3.99998794023486c-1.104569499659192,0-2-.895430500338989-2-2V1.936828613277612h16v18"}),
          h('path', {"d":"M21.9999879403058,6.93682861338857l.000000077439836,13.000001923539457c.000000006581104,1.104568435341207-.895429629099453,1.999998076380507-1.999998064438842,1.99999807641143h-.000004000001354c-1.104568433829627.000000000029104-1.999998068929926-.895429638600035-1.9999980645498-1.999998072431481"}),
          h('rect', {"x":"5.99998794023486","y":"5.936828613277612","width":"8","height":"4"}),
          h('line', {"x1":"5.99998794023486","y1":"13.936828613277612","x2":"7.99998794023486","y2":"13.936828613277612"}),
          h('line', {"x1":"11.99998794023486","y1":"13.936828613277612","x2":"13.99998794023486","y2":"13.936828613277612"}),
          h('line', {"x1":"5.99998794023486","y1":"17.936828613277612","x2":"7.99998794023486","y2":"17.936828613277612"}),
          h('line', {"x1":"11.99998794023486","y1":"17.936828613277612","x2":"13.99998794023486","y2":"17.936828613277612"})
        ]
      );
  }
});

export default Newspaper;
export { Newspaper };
