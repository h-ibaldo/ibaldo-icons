import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackImageCornerLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackImageCornerLayered: ForwardRefExoticComponent<ChatStackImageCornerLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackImageCornerLayered;
export { ChatStackImageCornerLayered };
