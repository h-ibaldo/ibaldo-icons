import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabasePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabasePlus: ForwardRefExoticComponent<DatabasePlusProps & RefAttributes<Svg>>;

export default DatabasePlus;
export { DatabasePlus };
