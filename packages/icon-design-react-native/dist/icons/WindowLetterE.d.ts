import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLetterEProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLetterE: ForwardRefExoticComponent<WindowLetterEProps & RefAttributes<Svg>>;

export default WindowLetterE;
export { WindowLetterE };
