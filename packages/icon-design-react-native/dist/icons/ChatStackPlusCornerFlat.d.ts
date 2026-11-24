import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackPlusCornerFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackPlusCornerFlat: ForwardRefExoticComponent<ChatStackPlusCornerFlatProps & RefAttributes<Svg>>;

export default ChatStackPlusCornerFlat;
export { ChatStackPlusCornerFlat };
