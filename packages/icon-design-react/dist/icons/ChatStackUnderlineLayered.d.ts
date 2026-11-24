import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineLayered: ForwardRefExoticComponent<ChatStackUnderlineLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineLayered;
export { ChatStackUnderlineLayered };
