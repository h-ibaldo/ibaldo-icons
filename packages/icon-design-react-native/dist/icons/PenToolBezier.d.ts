import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PenToolBezierProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PenToolBezier: ForwardRefExoticComponent<PenToolBezierProps & RefAttributes<Svg>>;

export default PenToolBezier;
export { PenToolBezier };
