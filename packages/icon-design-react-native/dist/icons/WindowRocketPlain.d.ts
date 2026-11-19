import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowRocketPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowRocketPlain: ForwardRefExoticComponent<WindowRocketPlainProps & RefAttributes<Svg>>;

export default WindowRocketPlain;
export { WindowRocketPlain };
