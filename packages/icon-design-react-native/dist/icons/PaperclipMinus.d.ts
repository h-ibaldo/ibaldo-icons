import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipMinus: ForwardRefExoticComponent<PaperclipMinusProps & RefAttributes<Svg>>;

export default PaperclipMinus;
export { PaperclipMinus };
