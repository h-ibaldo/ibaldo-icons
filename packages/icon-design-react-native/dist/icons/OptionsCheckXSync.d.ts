import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckXSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckXSync: ForwardRefExoticComponent<OptionsCheckXSyncProps & RefAttributes<Svg>>;

export default OptionsCheckXSync;
export { OptionsCheckXSync };
