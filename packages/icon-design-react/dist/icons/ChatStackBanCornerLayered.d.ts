import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackBanCornerLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackBanCornerLayered: ForwardRefExoticComponent<ChatStackBanCornerLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackBanCornerLayered;
export { ChatStackBanCornerLayered };
