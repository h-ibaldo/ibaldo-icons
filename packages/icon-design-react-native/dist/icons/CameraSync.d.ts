import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraSync: ForwardRefExoticComponent<CameraSyncProps & RefAttributes<Svg>>;

export default CameraSync;
export { CameraSync };
