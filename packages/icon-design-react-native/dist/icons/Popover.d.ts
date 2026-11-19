import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Popover: ForwardRefExoticComponent<PopoverProps & RefAttributes<Svg>>;

export default Popover;
export { Popover };
