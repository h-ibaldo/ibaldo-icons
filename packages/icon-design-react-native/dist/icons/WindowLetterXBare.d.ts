import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLetterXBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLetterXBare: ForwardRefExoticComponent<WindowLetterXBareProps & RefAttributes<Svg>>;

export default WindowLetterXBare;
export { WindowLetterXBare };
