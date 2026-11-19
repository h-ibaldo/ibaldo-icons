import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReplaceCirclesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReplaceCircles: ForwardRefExoticComponent<ReplaceCirclesProps & RefAttributes<Svg>>;

export default ReplaceCircles;
export { ReplaceCircles };
