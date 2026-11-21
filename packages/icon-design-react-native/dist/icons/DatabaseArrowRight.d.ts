import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseArrowRight: ForwardRefExoticComponent<DatabaseArrowRightProps & RefAttributes<Svg>>;

export default DatabaseArrowRight;
export { DatabaseArrowRight };
