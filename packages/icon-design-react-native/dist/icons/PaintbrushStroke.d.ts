import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaintbrushStrokeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaintbrushStroke: ForwardRefExoticComponent<PaintbrushStrokeProps & RefAttributes<Svg>>;

export default PaintbrushStroke;
export { PaintbrushStroke };
