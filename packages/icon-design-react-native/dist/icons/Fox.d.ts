import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FoxProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Fox: ForwardRefExoticComponent<FoxProps & RefAttributes<Svg>>;

export default Fox;
export { Fox };
