import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLinkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLink: ForwardRefExoticComponent<WindowLinkProps & RefAttributes<Svg>>;

export default WindowLink;
export { WindowLink };
