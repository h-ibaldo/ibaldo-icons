import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronRightCircle: ForwardRefExoticComponent<ChevronRightCircleProps & RefAttributes<Svg>>;

export default ChevronRightCircle;
export { ChevronRightCircle };
