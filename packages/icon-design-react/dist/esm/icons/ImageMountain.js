import { createElement, forwardRef } from 'react';

const ImageMountain = forwardRef(function ImageMountain(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('rect', {"x":"1.999999994179234","y":"1.998779300327442","width":"20","height":"19.999999999192369","rx":"1.000000000004843","ry":"1.000000000004843","transform":"translate(23.99999998782009 23.997558600385684) rotate(-180)","key":"0"}),
    createElement('circle', {"cx":"7.999999994000063","cy":"7.998779300148271","r":"1.99999999981992","key":"1"}),
    createElement('path', {"d":"M21.667358392260212,21.732666018240707l-7.538776403320298-7.590656359290733c-1.173214568780168-1.181288335246791-3.083949421459693-1.181288335246791-4.25716399023986,0l-7.538776403320298,7.590656359290733","key":"2"})
  );
});

ImageMountain.displayName = 'ImageMountain';

export default ImageMountain;
export { ImageMountain };
