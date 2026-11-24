import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOneCircleLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOneCircleLayered: ForwardRefExoticComponent<ChatStackOneCircleLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOneCircleLayered;
export { ChatStackOneCircleLayered };
