import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckCornerStaggeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckCornerStaggered: ForwardRefExoticComponent<ChatStackCheckCornerStaggeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckCornerStaggered;
export { ChatStackCheckCornerStaggered };
