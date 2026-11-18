import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDots: ForwardRefExoticComponent<ChatStackDotsProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDots;
export { ChatStackDots };
