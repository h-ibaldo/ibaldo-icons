import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseArrowUp: ForwardRefExoticComponent<DatabaseArrowUpProps & RefAttributes<Svg>>;

export default DatabaseArrowUp;
export { DatabaseArrowUp };
