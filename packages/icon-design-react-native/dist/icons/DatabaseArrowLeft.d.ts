import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseArrowLeft: ForwardRefExoticComponent<DatabaseArrowLeftProps & RefAttributes<Svg>>;

export default DatabaseArrowLeft;
export { DatabaseArrowLeft };
