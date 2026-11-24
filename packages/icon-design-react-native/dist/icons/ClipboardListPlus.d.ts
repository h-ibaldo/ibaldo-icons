import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClipboardListPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClipboardListPlus: ForwardRefExoticComponent<ClipboardListPlusProps & RefAttributes<Svg>>;

export default ClipboardListPlus;
export { ClipboardListPlus };
