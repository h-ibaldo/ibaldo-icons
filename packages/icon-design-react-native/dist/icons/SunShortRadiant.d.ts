import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunShortRadiantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunShortRadiant: ForwardRefExoticComponent<SunShortRadiantProps & RefAttributes<Svg>>;

export default SunShortRadiant;
export { SunShortRadiant };
