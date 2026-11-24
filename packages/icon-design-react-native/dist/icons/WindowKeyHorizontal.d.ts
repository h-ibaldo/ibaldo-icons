import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowKeyHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowKeyHorizontal: ForwardRefExoticComponent<WindowKeyHorizontalProps & RefAttributes<Svg>>;

export default WindowKeyHorizontal;
export { WindowKeyHorizontal };
