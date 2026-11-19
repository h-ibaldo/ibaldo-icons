import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronRightSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronRightSmall: ForwardRefExoticComponent<ChevronRightSmallProps & RefAttributes<Svg>>;

export default ChevronRightSmall;
export { ChevronRightSmall };
