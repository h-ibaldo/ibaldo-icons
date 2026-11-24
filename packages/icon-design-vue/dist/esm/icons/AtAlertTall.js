import { defineComponent, h } from 'vue';

const AtAlertTall = defineComponent({
  name: 'AtAlertTall',
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
          h('rect', {"x":"9.974727809318836","y":"7.000000000250623","width":"5.999999910374413","height":"9.999999999999659","rx":"2.999996949654355","ry":"2.999996949654355"}),
          h('line', {"x1":"17.974731450040053","y1":"22.000000000478394","x2":"12.974731450040053","y2":"22.000000000479304"}),
          h('path', {"d":"M15.974731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1"}),
          h('line', {"x1":"2.974731450040053","y1":"2.00000000046839","x2":"2.974731450040053","y2":"6.00000000046839"}),
          h('path', {"d":"M20.974731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8"}),
          h('path', {"d":"M4.974731450040053,14.00000000046839c0,4.41827392578125,3.581726074219659,8,8,8"}),
          h('line', {"x1":"2.974731450040053","y1":"10.000000000470209","x2":"2.974731450040053","y2":"10.010000000468608"}),
          h('path', {"d":"M12.974731450040053,2.00000000046839c-2.392639160159888,0-4.533996582030341,1.055908203125-6,2.720703125"})
        ]
      );
  }
});

export default AtAlertTall;
export { AtAlertTall };
