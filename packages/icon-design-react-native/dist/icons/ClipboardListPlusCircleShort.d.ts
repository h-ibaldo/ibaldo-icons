import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListPlusCircleShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListPlusCircleShort: ForwardRefExoticComponent<ClipboardListPlusCircleShortProps & RefAttributes<Svg>>;

export default ClipboardListPlusCircleShort;
export { ClipboardListPlusCircleShort };
