'use strict';

const { defineComponent, h } = require('vue');

const Submit = defineComponent({
  name: 'Submit',
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
          h('path', {"d":"M21.363210718289338,11.327327209892246L13.192689491479541,2.339753860400378c-.430391198489815-.473430318332248-1.217958051380265-.168951558694971-1.217958051380265.470870955796272v3.189375187688711H2.974731440099276c-.552284749819592,0-1,.447715250171314-1,1v10c0,.552284749832324.447715250180408,1,1,1h9v3.189375187688711c0,.639822514491243.78756685289045.944301274132158,1.217958051380265.470870955796272l8.170521226809797-8.98757334948823c.346746568811795-.38142122568388.346746568811795-.963924362305988,0-1.345345587989868Z"}),
          h('polyline', {"points":"6.974731440099276 12.000000003885361 8.974731440099276 14.000000003885361 12.974731440099276 10.000000003885361"})
        ]
      );
  }
});

module.exports = Submit;
module.exports.Submit = Submit;
module.exports.default = Submit;
