import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListPlusCircle: ForwardRefExoticComponent<ClipboardListPlusCircleProps & RefAttributes<Svg>>;

export default ClipboardListPlusCircle;
export { ClipboardListPlusCircle };
