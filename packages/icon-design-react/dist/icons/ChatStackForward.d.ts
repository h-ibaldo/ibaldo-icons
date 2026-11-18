import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForward: ForwardRefExoticComponent<ChatStackForwardProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForward;
export { ChatStackForward };
