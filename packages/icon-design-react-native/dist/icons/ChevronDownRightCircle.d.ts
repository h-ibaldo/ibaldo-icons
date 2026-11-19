import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownRightCircle: ForwardRefExoticComponent<ChevronDownRightCircleProps & RefAttributes<Svg>>;

export default ChevronDownRightCircle;
export { ChevronDownRightCircle };
