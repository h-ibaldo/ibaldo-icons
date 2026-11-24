import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeSlashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeSlash: ForwardRefExoticComponent<CodeSlashProps & RefAttributes<Svg>>;

export default CodeSlash;
export { CodeSlash };
