import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseArrowDown: ForwardRefExoticComponent<DatabaseArrowDownProps & RefAttributes<Svg>>;

export default DatabaseArrowDown;
export { DatabaseArrowDown };
