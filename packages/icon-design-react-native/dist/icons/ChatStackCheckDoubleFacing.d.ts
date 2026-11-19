import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackCheckDoubleFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackCheckDoubleFacing: ForwardRefExoticComponent<ChatStackCheckDoubleFacingProps & RefAttributes<Svg>>;

export default ChatStackCheckDoubleFacing;
export { ChatStackCheckDoubleFacing };
