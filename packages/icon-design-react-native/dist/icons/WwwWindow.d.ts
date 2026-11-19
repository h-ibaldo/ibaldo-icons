import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WwwWindowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WwwWindow: ForwardRefExoticComponent<WwwWindowProps & RefAttributes<Svg>>;

export default WwwWindow;
export { WwwWindow };
