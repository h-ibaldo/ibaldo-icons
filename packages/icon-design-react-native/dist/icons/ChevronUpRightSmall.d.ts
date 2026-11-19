import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpRightSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpRightSmall: ForwardRefExoticComponent<ChevronUpRightSmallProps & RefAttributes<Svg>>;

export default ChevronUpRightSmall;
export { ChevronUpRightSmall };
