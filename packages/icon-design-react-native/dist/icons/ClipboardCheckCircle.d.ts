import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardCheckCircle: ForwardRefExoticComponent<ClipboardCheckCircleProps & RefAttributes<Svg>>;

export default ClipboardCheckCircle;
export { ClipboardCheckCircle };
