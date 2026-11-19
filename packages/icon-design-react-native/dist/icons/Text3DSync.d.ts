import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text3DSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text3DSync: ForwardRefExoticComponent<Text3DSyncProps & RefAttributes<Svg>>;

export default Text3DSync;
export { Text3DSync };
