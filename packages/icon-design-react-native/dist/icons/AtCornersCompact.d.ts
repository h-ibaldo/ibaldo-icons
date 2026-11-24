import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCornersCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCornersCompact: ForwardRefExoticComponent<AtCornersCompactProps & RefAttributes<Svg>>;

export default AtCornersCompact;
export { AtCornersCompact };
