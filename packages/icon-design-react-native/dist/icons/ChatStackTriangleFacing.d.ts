import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackTriangleFacingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackTriangleFacing: ForwardRefExoticComponent<ChatStackTriangleFacingProps & RefAttributes<Svg>>;

export default ChatStackTriangleFacing;
export { ChatStackTriangleFacing };
