import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverWindowPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverWindowPlain: ForwardRefExoticComponent<PopoverWindowPlainProps & RefAttributes<Svg>>;

export default PopoverWindowPlain;
export { PopoverWindowPlain };
