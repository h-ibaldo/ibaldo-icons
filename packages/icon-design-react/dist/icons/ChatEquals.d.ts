import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEqualsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEquals: ForwardRefExoticComponent<ChatEqualsProps & RefAttributes<SVGSVGElement>>;

export default ChatEquals;
export { ChatEquals };
