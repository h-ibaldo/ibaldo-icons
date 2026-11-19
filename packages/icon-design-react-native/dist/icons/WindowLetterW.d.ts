import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLetterWProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLetterW: ForwardRefExoticComponent<WindowLetterWProps & RefAttributes<Svg>>;

export default WindowLetterW;
export { WindowLetterW };
