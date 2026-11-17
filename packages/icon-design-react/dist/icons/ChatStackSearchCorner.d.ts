import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSearchCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSearchCorner: ForwardRefExoticComponent<ChatStackSearchCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSearchCorner;
export { ChatStackSearchCorner };
