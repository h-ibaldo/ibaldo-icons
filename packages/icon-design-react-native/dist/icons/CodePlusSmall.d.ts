import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodePlusSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodePlusSmall: ForwardRefExoticComponent<CodePlusSmallProps & RefAttributes<Svg>>;

export default CodePlusSmall;
export { CodePlusSmall };
