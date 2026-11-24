import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverListUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverListUp: ForwardRefExoticComponent<PopoverListUpProps & RefAttributes<Svg>>;

export default PopoverListUp;
export { PopoverListUp };
