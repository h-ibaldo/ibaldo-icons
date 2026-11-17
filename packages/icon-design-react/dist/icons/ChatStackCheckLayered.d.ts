import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckLayered: ForwardRefExoticComponent<ChatStackCheckLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckLayered;
export { ChatStackCheckLayered };
