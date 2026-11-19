import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PopoverListProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PopoverList: ForwardRefExoticComponent<PopoverListProps & RefAttributes<Svg>>;

export default PopoverList;
export { PopoverList };
