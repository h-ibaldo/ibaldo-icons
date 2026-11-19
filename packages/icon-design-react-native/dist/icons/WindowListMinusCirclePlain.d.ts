import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowListMinusCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowListMinusCirclePlain: ForwardRefExoticComponent<WindowListMinusCirclePlainProps & RefAttributes<Svg>>;

export default WindowListMinusCirclePlain;
export { WindowListMinusCirclePlain };
