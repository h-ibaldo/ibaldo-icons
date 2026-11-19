import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackPaperclipTiltedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackPaperclipTilted: ForwardRefExoticComponent<SquareStackPaperclipTiltedProps & RefAttributes<Svg>>;

export default SquareStackPaperclipTilted;
export { SquareStackPaperclipTilted };
