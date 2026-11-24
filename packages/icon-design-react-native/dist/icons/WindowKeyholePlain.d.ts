import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowKeyholePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowKeyholePlain: ForwardRefExoticComponent<WindowKeyholePlainProps & RefAttributes<Svg>>;

export default WindowKeyholePlain;
export { WindowKeyholePlain };
