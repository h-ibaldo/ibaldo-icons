import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpRightCircle: ForwardRefExoticComponent<ChevronUpRightCircleProps & RefAttributes<Svg>>;

export default ChevronUpRightCircle;
export { ChevronUpRightCircle };
