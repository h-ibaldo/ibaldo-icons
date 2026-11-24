import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrosshairCornersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrosshairCorners: ForwardRefExoticComponent<CrosshairCornersProps & RefAttributes<Svg>>;

export default CrosshairCorners;
export { CrosshairCorners };
