import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowOverlapRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowOverlapRight: ForwardRefExoticComponent<WindowOverlapRightProps & RefAttributes<Svg>>;

export default WindowOverlapRight;
export { WindowOverlapRight };
