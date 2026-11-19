import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeSquare: ForwardRefExoticComponent<CodeSquareProps & RefAttributes<Svg>>;

export default CodeSquare;
export { CodeSquare };
