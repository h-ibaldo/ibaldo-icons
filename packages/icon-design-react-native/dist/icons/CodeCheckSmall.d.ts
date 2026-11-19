import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeCheckSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeCheckSmall: ForwardRefExoticComponent<CodeCheckSmallProps & RefAttributes<Svg>>;

export default CodeCheckSmall;
export { CodeCheckSmall };
