import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SelfieCameraProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SelfieCamera: ForwardRefExoticComponent<SelfieCameraProps & RefAttributes<Svg>>;

export default SelfieCamera;
export { SelfieCamera };
