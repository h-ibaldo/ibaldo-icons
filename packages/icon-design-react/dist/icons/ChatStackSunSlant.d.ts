import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSunSlant: ForwardRefExoticComponent<ChatStackSunSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSunSlant;
export { ChatStackSunSlant };
