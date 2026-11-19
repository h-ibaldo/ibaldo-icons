import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeMinus: ForwardRefExoticComponent<CodeMinusProps & RefAttributes<Svg>>;

export default CodeMinus;
export { CodeMinus };
