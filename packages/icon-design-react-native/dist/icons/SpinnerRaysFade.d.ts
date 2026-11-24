import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerRaysFadeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpinnerRaysFade: ForwardRefExoticComponent<SpinnerRaysFadeProps & RefAttributes<Svg>>;

export default SpinnerRaysFade;
export { SpinnerRaysFade };
