import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowProgressBarPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowProgressBarPlain: ForwardRefExoticComponent<WindowProgressBarPlainProps & RefAttributes<Svg>>;

export default WindowProgressBarPlain;
export { WindowProgressBarPlain };
