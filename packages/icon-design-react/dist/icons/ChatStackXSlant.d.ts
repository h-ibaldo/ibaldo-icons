import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXSlant: ForwardRefExoticComponent<ChatStackXSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXSlant;
export { ChatStackXSlant };
