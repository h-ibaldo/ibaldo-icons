import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Database: ForwardRefExoticComponent<DatabaseProps & RefAttributes<Svg>>;

export default Database;
export { Database };
