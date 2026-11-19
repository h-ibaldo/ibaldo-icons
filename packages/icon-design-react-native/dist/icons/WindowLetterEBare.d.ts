import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLetterEBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLetterEBare: ForwardRefExoticComponent<WindowLetterEBareProps & RefAttributes<Svg>>;

export default WindowLetterEBare;
export { WindowLetterEBare };
