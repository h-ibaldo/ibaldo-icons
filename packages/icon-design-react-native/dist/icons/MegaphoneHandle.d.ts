import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MegaphoneHandleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MegaphoneHandle: ForwardRefExoticComponent<MegaphoneHandleProps & RefAttributes<Svg>>;

export default MegaphoneHandle;
export { MegaphoneHandle };
