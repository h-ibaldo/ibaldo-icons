import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckSlant: ForwardRefExoticComponent<ChatStackCheckSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckSlant;
export { ChatStackCheckSlant };
