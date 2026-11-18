import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusLayered: ForwardRefExoticComponent<ChatStackPlusLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusLayered;
export { ChatStackPlusLayered };
