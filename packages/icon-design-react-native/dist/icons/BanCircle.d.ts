import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BanCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BanCircle: ForwardRefExoticComponent<BanCircleProps & RefAttributes<Svg>>;

export default BanCircle;
export { BanCircle };
