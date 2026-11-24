import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseSearch: ForwardRefExoticComponent<DatabaseSearchProps & RefAttributes<Svg>>;

export default DatabaseSearch;
export { DatabaseSearch };
