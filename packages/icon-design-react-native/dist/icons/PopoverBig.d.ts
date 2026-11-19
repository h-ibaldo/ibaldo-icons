import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverBig: ForwardRefExoticComponent<PopoverBigProps & RefAttributes<Svg>>;

export default PopoverBig;
export { PopoverBig };
