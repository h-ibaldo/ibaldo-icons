import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOffSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOffSlant: ForwardRefExoticComponent<ChatStackOffSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOffSlant;
export { ChatStackOffSlant };
