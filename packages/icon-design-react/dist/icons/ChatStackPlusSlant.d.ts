import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusSlant: ForwardRefExoticComponent<ChatStackPlusSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusSlant;
export { ChatStackPlusSlant };
