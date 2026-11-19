import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlusCircleStackArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlusCircleStackArc: ForwardRefExoticComponent<PlusCircleStackArcProps & RefAttributes<Svg>>;

export default PlusCircleStackArc;
export { PlusCircleStackArc };
