import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardPlus: ForwardRefExoticComponent<ClipboardPlusProps & RefAttributes<Svg>>;

export default ClipboardPlus;
export { ClipboardPlus };
