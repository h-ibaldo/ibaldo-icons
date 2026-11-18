import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSearchCornerLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSearchCornerLayered: ForwardRefExoticComponent<ChatStackSearchCornerLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSearchCornerLayered;
export { ChatStackSearchCornerLayered };
