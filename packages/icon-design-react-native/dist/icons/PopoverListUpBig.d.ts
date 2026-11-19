import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverListUpBigProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverListUpBig: ForwardRefExoticComponent<PopoverListUpBigProps & RefAttributes<Svg>>;

export default PopoverListUpBig;
export { PopoverListUpBig };
