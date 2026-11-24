import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowKeyholeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowKeyhole: ForwardRefExoticComponent<WindowKeyholeProps & RefAttributes<Svg>>;

export default WindowKeyhole;
export { WindowKeyhole };
