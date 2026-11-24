import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeXSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeXSmall: ForwardRefExoticComponent<CodeXSmallProps & RefAttributes<Svg>>;

export default CodeXSmall;
export { CodeXSmall };
