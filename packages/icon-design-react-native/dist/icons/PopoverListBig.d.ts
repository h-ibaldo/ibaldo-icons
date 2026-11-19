import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverListBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverListBig: ForwardRefExoticComponent<PopoverListBigProps & RefAttributes<Svg>>;

export default PopoverListBig;
export { PopoverListBig };
