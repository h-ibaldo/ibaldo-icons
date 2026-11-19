import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerDotsFadeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpinnerDotsFade: ForwardRefExoticComponent<SpinnerDotsFadeProps & RefAttributes<Svg>>;

export default SpinnerDotsFade;
export { SpinnerDotsFade };
