import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusCornerStaggeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusCornerStaggered: ForwardRefExoticComponent<ChatStackMinusCornerStaggeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusCornerStaggered;
export { ChatStackMinusCornerStaggered };
