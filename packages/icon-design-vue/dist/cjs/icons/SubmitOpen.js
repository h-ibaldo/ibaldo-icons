'use strict';

const { defineComponent, h } = require('vue');

const SubmitOpen = defineComponent({
  name: 'SubmitOpen',
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
          h('path', {"d":"M10.974731440099276,17.000000003885361h3v2.684900338826992c0,.45975855089273.568257703540439.675809744698199.873704659350551.332181919413415l7.126295340649449-8.017082258236769L14.848436099449827,3.982917745644954c-.305446955810112-.343627825281146-.873704659350551-.127576631475677-.873704659350551.332181919417053v2.684900338823354H2.974731440099276c-.552284749819592,0-1,.447715250171314-1,1v2"}),
          h('polyline', {"points":"1.974731440099276 15.000000003885361 3.974731440099276 17.000000003885361 7.974731440099276 13.000000003885361"})
        ]
      );
  }
});

module.exports = SubmitOpen;
module.exports.SubmitOpen = SubmitOpen;
module.exports.default = SubmitOpen;
