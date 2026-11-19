import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodePlus: ForwardRefExoticComponent<CodePlusProps & RefAttributes<Svg>>;

export default CodePlus;
export { CodePlus };
