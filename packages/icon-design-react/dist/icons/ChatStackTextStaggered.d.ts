import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextStaggeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextStaggered: ForwardRefExoticComponent<ChatStackTextStaggeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextStaggered;
export { ChatStackTextStaggered };
