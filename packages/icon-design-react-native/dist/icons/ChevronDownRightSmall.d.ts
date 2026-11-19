import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownRightSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownRightSmall: ForwardRefExoticComponent<ChevronDownRightSmallProps & RefAttributes<Svg>>;

export default ChevronDownRightSmall;
export { ChevronDownRightSmall };
