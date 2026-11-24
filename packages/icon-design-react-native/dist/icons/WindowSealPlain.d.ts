import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSealPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSealPlain: ForwardRefExoticComponent<WindowSealPlainProps & RefAttributes<Svg>>;

export default WindowSealPlain;
export { WindowSealPlain };
