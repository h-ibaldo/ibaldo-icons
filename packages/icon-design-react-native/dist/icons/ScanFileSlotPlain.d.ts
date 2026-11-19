import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanFileSlotPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanFileSlotPlain: ForwardRefExoticComponent<ScanFileSlotPlainProps & RefAttributes<Svg>>;

export default ScanFileSlotPlain;
export { ScanFileSlotPlain };
