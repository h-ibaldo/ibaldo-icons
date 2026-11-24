import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaintbrushVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaintbrushVertical: ForwardRefExoticComponent<PaintbrushVerticalProps & RefAttributes<Svg>>;

export default PaintbrushVertical;
export { PaintbrushVertical };
