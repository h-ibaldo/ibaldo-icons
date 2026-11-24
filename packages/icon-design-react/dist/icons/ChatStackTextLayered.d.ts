import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTextLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTextLayered: ForwardRefExoticComponent<ChatStackTextLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTextLayered;
export { ChatStackTextLayered };
