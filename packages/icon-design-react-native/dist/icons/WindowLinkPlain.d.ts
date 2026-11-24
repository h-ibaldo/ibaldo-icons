import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLinkPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLinkPlain: ForwardRefExoticComponent<WindowLinkPlainProps & RefAttributes<Svg>>;

export default WindowLinkPlain;
export { WindowLinkPlain };
