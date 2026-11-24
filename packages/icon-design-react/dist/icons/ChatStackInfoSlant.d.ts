import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfoSlant: ForwardRefExoticComponent<ChatStackInfoSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfoSlant;
export { ChatStackInfoSlant };
