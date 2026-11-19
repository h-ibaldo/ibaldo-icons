import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXCornerFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXCornerFlat: ForwardRefExoticComponent<ChatStackXCornerFlatProps & RefAttributes<Svg>>;

export default ChatStackXCornerFlat;
export { ChatStackXCornerFlat };
