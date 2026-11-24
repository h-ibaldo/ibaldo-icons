import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckDoubleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckDoubleSlant: ForwardRefExoticComponent<ChatStackCheckDoubleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckDoubleSlant;
export { ChatStackCheckDoubleSlant };
