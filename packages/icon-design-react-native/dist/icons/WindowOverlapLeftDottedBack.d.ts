import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowOverlapLeftDottedBackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowOverlapLeftDottedBack: ForwardRefExoticComponent<WindowOverlapLeftDottedBackProps & RefAttributes<Svg>>;

export default WindowOverlapLeftDottedBack;
export { WindowOverlapLeftDottedBack };
