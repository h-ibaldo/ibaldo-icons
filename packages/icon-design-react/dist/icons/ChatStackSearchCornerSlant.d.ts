import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSearchCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSearchCornerSlant: ForwardRefExoticComponent<ChatStackSearchCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSearchCornerSlant;
export { ChatStackSearchCornerSlant };
