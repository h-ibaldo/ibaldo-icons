import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowRocketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowRocket: ForwardRefExoticComponent<WindowRocketProps & RefAttributes<Svg>>;

export default WindowRocket;
export { WindowRocket };
