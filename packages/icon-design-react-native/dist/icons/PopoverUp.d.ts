import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverUp: ForwardRefExoticComponent<PopoverUpProps & RefAttributes<Svg>>;

export default PopoverUp;
export { PopoverUp };
