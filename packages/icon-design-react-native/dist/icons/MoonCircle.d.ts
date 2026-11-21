import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoonCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoonCircle: ForwardRefExoticComponent<MoonCircleProps & RefAttributes<Svg>>;

export default MoonCircle;
export { MoonCircle };
