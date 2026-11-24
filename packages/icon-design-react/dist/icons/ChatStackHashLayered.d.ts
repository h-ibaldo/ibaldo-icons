import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHashLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHashLayered: ForwardRefExoticComponent<ChatStackHashLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHashLayered;
export { ChatStackHashLayered };
