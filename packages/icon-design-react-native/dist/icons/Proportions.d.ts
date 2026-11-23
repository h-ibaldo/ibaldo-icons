import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProportionsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Proportions: ForwardRefExoticComponent<ProportionsProps & RefAttributes<Svg>>;

export default Proportions;
export { Proportions };
