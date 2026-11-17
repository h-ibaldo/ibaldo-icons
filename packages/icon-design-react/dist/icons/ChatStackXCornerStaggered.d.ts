import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXCornerStaggeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXCornerStaggered: ForwardRefExoticComponent<ChatStackXCornerStaggeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXCornerStaggered;
export { ChatStackXCornerStaggered };
