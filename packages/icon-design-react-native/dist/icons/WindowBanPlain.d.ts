import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowBanPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowBanPlain: ForwardRefExoticComponent<WindowBanPlainProps & RefAttributes<Svg>>;

export default WindowBanPlain;
export { WindowBanPlain };
