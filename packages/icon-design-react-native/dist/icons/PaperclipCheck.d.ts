import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheck: ForwardRefExoticComponent<PaperclipCheckProps & RefAttributes<Svg>>;

export default PaperclipCheck;
export { PaperclipCheck };
