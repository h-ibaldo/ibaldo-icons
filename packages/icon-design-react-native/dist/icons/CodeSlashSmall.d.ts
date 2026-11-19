import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeSlashSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeSlashSmall: ForwardRefExoticComponent<CodeSlashSmallProps & RefAttributes<Svg>>;

export default CodeSlashSmall;
export { CodeSlashSmall };
