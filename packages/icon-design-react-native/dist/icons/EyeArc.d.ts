import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeArc: ForwardRefExoticComponent<EyeArcProps & RefAttributes<Svg>>;

export default EyeArc;
export { EyeArc };
