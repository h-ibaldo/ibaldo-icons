import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseBolt: ForwardRefExoticComponent<DatabaseBoltProps & RefAttributes<Svg>>;

export default DatabaseBolt;
export { DatabaseBolt };
