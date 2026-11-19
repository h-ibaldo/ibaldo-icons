import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareStackPaperclipCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareStackPaperclipCurl: ForwardRefExoticComponent<SquareStackPaperclipCurlProps & RefAttributes<Svg>>;

export default SquareStackPaperclipCurl;
export { SquareStackPaperclipCurl };
