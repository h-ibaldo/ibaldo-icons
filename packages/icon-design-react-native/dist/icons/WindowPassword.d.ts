import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPasswordProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPassword: ForwardRefExoticComponent<WindowPasswordProps & RefAttributes<Svg>>;

export default WindowPassword;
export { WindowPassword };
