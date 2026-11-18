import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheck: ForwardRefExoticComponent<ChatStackCheckProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheck;
export { ChatStackCheck };
