import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeCircle: ForwardRefExoticComponent<CodeCircleProps & RefAttributes<Svg>>;

export default CodeCircle;
export { CodeCircle };
