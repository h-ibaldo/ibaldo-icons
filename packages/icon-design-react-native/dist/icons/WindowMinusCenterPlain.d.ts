import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMinusCenterPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMinusCenterPlain: ForwardRefExoticComponent<WindowMinusCenterPlainProps & RefAttributes<Svg>>;

export default WindowMinusCenterPlain;
export { WindowMinusCenterPlain };
