import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchDialOnHandleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchDialOnHandle: ForwardRefExoticComponent<SwitchDialOnHandleProps & RefAttributes<Svg>>;

export default SwitchDialOnHandle;
export { SwitchDialOnHandle };
