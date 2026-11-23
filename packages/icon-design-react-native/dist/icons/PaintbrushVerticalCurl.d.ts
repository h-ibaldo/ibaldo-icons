import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaintbrushVerticalCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaintbrushVerticalCurl: ForwardRefExoticComponent<PaintbrushVerticalCurlProps & RefAttributes<Svg>>;

export default PaintbrushVerticalCurl;
export { PaintbrushVerticalCurl };
