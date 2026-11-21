import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoonStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoonStar: ForwardRefExoticComponent<MoonStarProps & RefAttributes<Svg>>;

export default MoonStar;
export { MoonStar };
