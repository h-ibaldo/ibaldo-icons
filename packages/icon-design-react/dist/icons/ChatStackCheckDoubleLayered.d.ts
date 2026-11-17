import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckDoubleLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckDoubleLayered: ForwardRefExoticComponent<ChatStackCheckDoubleLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckDoubleLayered;
export { ChatStackCheckDoubleLayered };
