import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerSync: ForwardRefExoticComponent<PointerSyncProps & RefAttributes<Svg>>;

export default PointerSync;
export { PointerSync };
