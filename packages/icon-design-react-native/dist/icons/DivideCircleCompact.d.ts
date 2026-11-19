import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DivideCircleCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DivideCircleCompact: ForwardRefExoticComponent<DivideCircleCompactProps & RefAttributes<Svg>>;

export default DivideCircleCompact;
export { DivideCircleCompact };
