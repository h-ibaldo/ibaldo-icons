import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardPlusCircle: ForwardRefExoticComponent<ClipboardPlusCircleProps & RefAttributes<Svg>>;

export default ClipboardPlusCircle;
export { ClipboardPlusCircle };
