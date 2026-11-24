import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackXFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackXFacing: ForwardRefExoticComponent<ChatStackXFacingProps & RefAttributes<Svg>>;

export default ChatStackXFacing;
export { ChatStackXFacing };
