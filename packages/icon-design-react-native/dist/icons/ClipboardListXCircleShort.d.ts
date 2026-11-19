import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListXCircleShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListXCircleShort: ForwardRefExoticComponent<ClipboardListXCircleShortProps & RefAttributes<Svg>>;

export default ClipboardListXCircleShort;
export { ClipboardListXCircleShort };
