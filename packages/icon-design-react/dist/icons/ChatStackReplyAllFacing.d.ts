import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyAllFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyAllFacing: ForwardRefExoticComponent<ChatStackReplyAllFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyAllFacing;
export { ChatStackReplyAllFacing };
