import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunScallopedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunScalloped: ForwardRefExoticComponent<SunScallopedProps & RefAttributes<Svg>>;

export default SunScalloped;
export { SunScalloped };
