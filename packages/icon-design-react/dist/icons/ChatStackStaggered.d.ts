import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackStaggeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackStaggered: ForwardRefExoticComponent<ChatStackStaggeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackStaggered;
export { ChatStackStaggered };
