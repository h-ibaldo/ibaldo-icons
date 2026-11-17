import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyFacing: ForwardRefExoticComponent<ChatStackReplyFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyFacing;
export { ChatStackReplyFacing };
