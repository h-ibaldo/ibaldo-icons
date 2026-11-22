import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxFrontCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxFrontCheck: ForwardRefExoticComponent<BoxFrontCheckProps & RefAttributes<Svg>>;

export default BoxFrontCheck;
export { BoxFrontCheck };
