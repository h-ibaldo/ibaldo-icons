import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HashCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HashCircle: ForwardRefExoticComponent<HashCircleProps & RefAttributes<Svg>>;

export default HashCircle;
export { HashCircle };
