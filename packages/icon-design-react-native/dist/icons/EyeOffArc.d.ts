import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EyeOffArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EyeOffArc: ForwardRefExoticComponent<EyeOffArcProps & RefAttributes<Svg>>;

export default EyeOffArc;
export { EyeOffArc };
