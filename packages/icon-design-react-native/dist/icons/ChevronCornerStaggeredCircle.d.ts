import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronCornerStaggeredCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronCornerStaggeredCircle: ForwardRefExoticComponent<ChevronCornerStaggeredCircleProps & RefAttributes<Svg>>;

export default ChevronCornerStaggeredCircle;
export { ChevronCornerStaggeredCircle };
