import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCornersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCorners: ForwardRefExoticComponent<AtCornersProps & RefAttributes<Svg>>;

export default AtCorners;
export { AtCorners };
