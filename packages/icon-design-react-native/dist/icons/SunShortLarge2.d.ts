import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunShortLarge2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunShortLarge2: ForwardRefExoticComponent<SunShortLarge2Props & RefAttributes<Svg>>;

export default SunShortLarge2;
export { SunShortLarge2 };
