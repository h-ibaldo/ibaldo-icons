import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusCornerStaggeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusCornerStaggered: ForwardRefExoticComponent<ChatStackPlusCornerStaggeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusCornerStaggered;
export { ChatStackPlusCornerStaggered };
