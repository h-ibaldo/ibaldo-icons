import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusSlant: ForwardRefExoticComponent<ChatStackMinusSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusSlant;
export { ChatStackMinusSlant };
