import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowModalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowModal: ForwardRefExoticComponent<WindowModalProps & RefAttributes<Svg>>;

export default WindowModal;
export { WindowModal };
