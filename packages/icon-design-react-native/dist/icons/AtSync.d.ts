import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtSync: ForwardRefExoticComponent<AtSyncProps & RefAttributes<Svg>>;

export default AtSync;
export { AtSync };
