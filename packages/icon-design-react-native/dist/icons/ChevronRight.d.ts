import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronRight: ForwardRefExoticComponent<ChevronRightProps & RefAttributes<Svg>>;

export default ChevronRight;
export { ChevronRight };
