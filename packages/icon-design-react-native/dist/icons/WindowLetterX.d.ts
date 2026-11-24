import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLetterXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLetterX: ForwardRefExoticComponent<WindowLetterXProps & RefAttributes<Svg>>;

export default WindowLetterX;
export { WindowLetterX };
