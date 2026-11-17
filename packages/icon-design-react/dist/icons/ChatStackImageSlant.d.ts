import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackImageSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackImageSlant: ForwardRefExoticComponent<ChatStackImageSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackImageSlant;
export { ChatStackImageSlant };
