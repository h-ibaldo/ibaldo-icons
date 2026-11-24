import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardSlant: ForwardRefExoticComponent<ChatStackForwardSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardSlant;
export { ChatStackForwardSlant };
