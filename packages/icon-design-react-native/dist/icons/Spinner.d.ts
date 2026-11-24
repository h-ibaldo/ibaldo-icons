import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Spinner: ForwardRefExoticComponent<SpinnerProps & RefAttributes<Svg>>;

export default Spinner;
export { Spinner };
