import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowOverlapRightDottedBackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowOverlapRightDottedBack: ForwardRefExoticComponent<WindowOverlapRightDottedBackProps & RefAttributes<Svg>>;

export default WindowOverlapRightDottedBack;
export { WindowOverlapRightDottedBack };
