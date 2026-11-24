import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotEqualProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotEqual: ForwardRefExoticComponent<NotEqualProps & RefAttributes<Svg>>;

export default NotEqual;
export { NotEqual };
