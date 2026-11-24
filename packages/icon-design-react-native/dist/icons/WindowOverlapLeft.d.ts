import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowOverlapLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowOverlapLeft: ForwardRefExoticComponent<WindowOverlapLeftProps & RefAttributes<Svg>>;

export default WindowOverlapLeft;
export { WindowOverlapLeft };
