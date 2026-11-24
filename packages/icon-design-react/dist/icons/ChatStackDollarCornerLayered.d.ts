import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDollarCornerLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDollarCornerLayered: ForwardRefExoticComponent<ChatStackDollarCornerLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDollarCornerLayered;
export { ChatStackDollarCornerLayered };
