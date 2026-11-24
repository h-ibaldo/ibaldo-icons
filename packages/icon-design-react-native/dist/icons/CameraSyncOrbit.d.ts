import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraSyncOrbitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraSyncOrbit: ForwardRefExoticComponent<CameraSyncOrbitProps & RefAttributes<Svg>>;

export default CameraSyncOrbit;
export { CameraSyncOrbit };
