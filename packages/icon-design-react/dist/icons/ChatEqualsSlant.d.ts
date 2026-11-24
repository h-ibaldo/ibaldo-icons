import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEqualsSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEqualsSlant: ForwardRefExoticComponent<ChatEqualsSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatEqualsSlant;
export { ChatEqualsSlant };
