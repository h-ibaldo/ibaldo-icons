import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowMinusCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowMinusCirclePlain: ForwardRefExoticComponent<WindowMinusCirclePlainProps & RefAttributes<Svg>>;

export default WindowMinusCirclePlain;
export { WindowMinusCirclePlain };
