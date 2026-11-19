import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeMinusSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeMinusSmall: ForwardRefExoticComponent<CodeMinusSmallProps & RefAttributes<Svg>>;

export default CodeMinusSmall;
export { CodeMinusSmall };
