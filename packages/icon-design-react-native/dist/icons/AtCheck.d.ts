import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCheck: ForwardRefExoticComponent<AtCheckProps & RefAttributes<Svg>>;

export default AtCheck;
export { AtCheck };
