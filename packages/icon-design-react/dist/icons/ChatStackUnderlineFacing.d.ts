import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineFacingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineFacing: ForwardRefExoticComponent<ChatStackUnderlineFacingProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineFacing;
export { ChatStackUnderlineFacing };
