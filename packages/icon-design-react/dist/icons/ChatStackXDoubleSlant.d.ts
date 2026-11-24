import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXDoubleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXDoubleSlant: ForwardRefExoticComponent<ChatStackXDoubleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXDoubleSlant;
export { ChatStackXDoubleSlant };
