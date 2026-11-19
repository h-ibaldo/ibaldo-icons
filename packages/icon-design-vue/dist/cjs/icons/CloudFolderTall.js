'use strict';

const { defineComponent, h } = require('vue');

const CloudFolderTall = defineComponent({
  name: 'CloudFolderTall',
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
          h('path', {"d":"M5.000000023392204,15.999999992678568h-1c-1.104569499661011,0-2-.895430500329894-2-2V3.999999973497324c0-1.104569499659192.895430500338989-2,2-2h3.464813982358464c.334352967751329,0,.646584119949694.167100916751224.83204994964035.445299286740919l1.406269511058781,2.109401426529075c.18546582970157.278198369971506.497696981899935.445299286730005.832049949651264.445299286730005h6.464816533571138c1.104569492166775,0,1.99999998939893.895430488651073,2,1.999999980809662l.000000086318323,3.000000019190338"}),
          h('path', {"d":"M20.000000000010914,17.061035129747324v-.56103515625c0-1.380737304680224-1.119262695308862-2.5-2.5-2.5h-.692932128898974c-.413635253909888-1.160949707038526-1.504150390632276-2-2.807067871101026-2-1.656860351558862,0-3,1.343139648441138-3,3v1c-1.656860351558862,0-3,1.343139648441138-3,3,0,1.656860351569776,1.343139648441138,3,3,3h8.5c1.380737304691138,0,2.5-1.119262695308862,2.5-2.5,0-1.208251953128638-.860534667961474-2.206176757808862-2-2.43896484375Z"})
        ]
      );
  }
});

module.exports = CloudFolderTall;
module.exports.CloudFolderTall = CloudFolderTall;
module.exports.default = CloudFolderTall;
