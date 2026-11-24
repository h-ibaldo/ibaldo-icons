import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverWindowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverWindow: ForwardRefExoticComponent<PopoverWindowProps & RefAttributes<Svg>>;

export default PopoverWindow;
export { PopoverWindow };
