import { defineComponent, h } from 'vue';

const BrowserGlobeMap = defineComponent({
  name: 'BrowserGlobeMap',
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
          h('path', {"d":"M9.499999993649908,21.998779299956368H3.999999993649908c-1.104569499660101,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500338989,2,2v5.5"}),
          h('line', {"x1":"1.999999993649908","y1":"7.998779299956368","x2":"21.999999993649908","y2":"7.998779299956368"}),
          h('circle', {"cx":"16.499999993659912","cy":"16.498779299955459","r":"5.499999999999545"}),
          h('polyline', {"points":"16.01232909520968 21.974182131987618 18.999999993649908 15.998779299956368 14.999999993649908 14.998779299956368 17.35607909520968 11.072021487456368"}),
          h('polyline', {"points":"12.14709472020968 13.145874026518868 14.999999993649908 15.998779299956368 14.999999993649908 21.786376956206368"}),
          h('line', {"x1":"4.98473144503987","y1":"4.923217770028714","x2":"4.974731445039652","y2":"4.923217770028714"}),
          h('line', {"x1":"7.98473144503987","y1":"4.923217770028714","x2":"7.974731445039652","y2":"4.923217770028714"}),
          h('line', {"x1":"18.974731445039652","y1":"4.923217770028714","x2":"10.974731445039652","y2":"4.923217770028714"})
        ]
      );
  }
});

export default BrowserGlobeMap;
export { BrowserGlobeMap };
