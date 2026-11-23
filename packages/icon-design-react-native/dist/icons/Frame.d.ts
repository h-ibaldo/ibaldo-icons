import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FrameProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Frame: ForwardRefExoticComponent<FrameProps & RefAttributes<Svg>>;

export default Frame;
export { Frame };
