import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardXCircle: ForwardRefExoticComponent<ClipboardXCircleProps & RefAttributes<Svg>>;

export default ClipboardXCircle;
export { ClipboardXCircle };
