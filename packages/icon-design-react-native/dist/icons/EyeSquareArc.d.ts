import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeSquareArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeSquareArc: ForwardRefExoticComponent<EyeSquareArcProps & RefAttributes<Svg>>;

export default EyeSquareArc;
export { EyeSquareArc };
