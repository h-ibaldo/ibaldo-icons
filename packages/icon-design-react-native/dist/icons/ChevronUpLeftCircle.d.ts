import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpLeftCircle: ForwardRefExoticComponent<ChevronUpLeftCircleProps & RefAttributes<Svg>>;

export default ChevronUpLeftCircle;
export { ChevronUpLeftCircle };
