import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLetterWBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLetterWBare: ForwardRefExoticComponent<WindowLetterWBareProps & RefAttributes<Svg>>;

export default WindowLetterWBare;
export { WindowLetterWBare };
