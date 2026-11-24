import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlusCircle: ForwardRefExoticComponent<PlusCircleProps & RefAttributes<Svg>>;

export default PlusCircle;
export { PlusCircle };
