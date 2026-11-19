import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeCheck: ForwardRefExoticComponent<CodeCheckProps & RefAttributes<Svg>>;

export default CodeCheck;
export { CodeCheck };
