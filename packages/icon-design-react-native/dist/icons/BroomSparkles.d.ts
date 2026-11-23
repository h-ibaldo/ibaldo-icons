import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BroomSparklesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BroomSparkles: ForwardRefExoticComponent<BroomSparklesProps & RefAttributes<Svg>>;

export default BroomSparkles;
export { BroomSparkles };
