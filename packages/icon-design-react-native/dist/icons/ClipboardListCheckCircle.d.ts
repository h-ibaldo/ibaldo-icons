import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListCheckCircle: ForwardRefExoticComponent<ClipboardListCheckCircleProps & RefAttributes<Svg>>;

export default ClipboardListCheckCircle;
export { ClipboardListCheckCircle };
