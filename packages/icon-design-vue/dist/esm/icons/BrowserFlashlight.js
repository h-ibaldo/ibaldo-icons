import { defineComponent, h } from 'vue';

const BrowserFlashlight = defineComponent({
  name: 'BrowserFlashlight',
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
          h('path', {"d":"M6,22h-2c-1.104569499660101,0-2-.895430500338989-2-2V4c0-1.104569499664649.895430500339899-2,2-2h16c1.104569499660101,0,2,.895430500335351,2,2v16c0,1.104569499661011-.895430500339899,2-2,2h-2"}),
          h('line', {"x1":"2","y1":"8","x2":"22","y2":"8"}),
          h('path', {"d":"M8,12h8v2l-2,2v5c0,.552284749828686-.447715250169495,1-1,1h-2c-.552284749830505,0-1-.447715250171314-1-1v-5l-2-2v-2Z"}),
          h('line', {"x1":"14","y1":"16","x2":"10","y2":"16"}),
          h('line', {"x1":"4.98473144503987","y1":"4.923217770028714","x2":"4.974731445039652","y2":"4.923217770028714"}),
          h('line', {"x1":"7.98473144503987","y1":"4.923217770028714","x2":"7.974731445039652","y2":"4.923217770028714"}),
          h('line', {"x1":"18.974731445039652","y1":"4.923217770028714","x2":"10.974731445039652","y2":"4.923217770028714"})
        ]
      );
  }
});

export default BrowserFlashlight;
export { BrowserFlashlight };
