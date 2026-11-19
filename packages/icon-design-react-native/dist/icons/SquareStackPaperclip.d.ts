import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackPaperclipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackPaperclip: ForwardRefExoticComponent<SquareStackPaperclipProps & RefAttributes<Svg>>;

export default SquareStackPaperclip;
export { SquareStackPaperclip };
