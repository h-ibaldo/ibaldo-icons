'use strict';

const { defineComponent, h } = require('vue');

const SwitchRockerOnPerspective = defineComponent({
  name: 'SwitchRockerOnPerspective',
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
          h('line', {"x1":"19.999999977100742","y1":"21.999996563434252","x2":"19.999999977100742","y2":"1.999996563434252"}),
          h('polygon', {"points":"12.999999977100742 10.999996563434252 9.999999977100742 10.999996563434252 8.999999977100742 13.999996563434252 11.999999977100742 13.999996563434252 12.999999977100742 10.999996563434252"}),
          h('path', {"d":"M19.999999977089828,21.999996563434252h-11l-3.399158314909073-2.719326651927986c-.965297481840025-.772237985474931-1.358077547800349-2.057518587396771-.989354791439837-3.237431407738768L8.999999977089828,1.999996563434252h11"}),
          h('path', {"d":"M19.999999977089828,21.999996563434252l-3.399158314909073-2.719326651927986c-.965297481840025-.772237985474931-1.358077547800349-2.057518587396771-.989354791439837-3.237431407738768L19.999999977089828,1.999996563434252"}),
          h('line', {"x1":"4.999999977089828","y1":"17.999996563434252","x2":"14.999999977089828","y2":"17.999996563434252"}),
          h('line', {"x1":"13.599975563029147","y1":"4.999996563434252","x2":"12.400024391159604","y2":"7.999996563434252"})
        ]
      );
  }
});

module.exports = SwitchRockerOnPerspective;
module.exports.SwitchRockerOnPerspective = SwitchRockerOnPerspective;
module.exports.default = SwitchRockerOnPerspective;
