import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsSlant: ForwardRefExoticComponent<ChatStackDotsSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsSlant;
export { ChatStackDotsSlant };
