import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaintbrushVerticalDippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaintbrushVerticalDipped: ForwardRefExoticComponent<PaintbrushVerticalDippedProps & RefAttributes<Svg>>;

export default PaintbrushVerticalDipped;
export { PaintbrushVerticalDipped };
